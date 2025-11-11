import * as ls from 'local-storage';

interface IQuestion {
	id: string;
	title: string;
}

interface ITopicData {
	title: string;
	dir: string;
	data: IQuestion[];
}

const topics: ITopicData[] = require('@site/static/questions.json');
// topics.sort((a, b) => a.order - b.order);

function random<T>(arr: T[]): T {
	return arr[Math.floor(Math.random() * arr.length)];
}

export const TOPIC_SELECT = {
	ANY: 'any',
	FAVORITE: 'favorite',
} as const;

export class Store {
	public static KEY = 'questionStore';

	public static FAVORITES = 'favorites';

	public static getCache(): { [topicTitle: string]: string[] } {
		return ls.get(Store.KEY) ?? {};
	}

	public static getTopicQuestions(topicTitle: string) {
		const cache = Store.getCache();

		return cache[topicTitle] ?? [];
	}

	public static clearCache(topicTitle?: string) {
		if (topicTitle) {
			const cache = Store.getCache();

			return ls.set(Store.KEY, {
				...cache,
				[topicTitle]: [],
			});
		}

		return ls.remove(Store.KEY);
	}

	public static updateCache({ topicTitle, id, topicLen }: Question) {
		const cache = Store.getCache();
		const questionIds = Store.getTopicQuestions(topicTitle);
		const needRefreshCache = questionIds.length === topicLen;

		if (needRefreshCache) {
			Store.clearCache(topicTitle);
		} else {
			ls.set(Store.KEY, {
				...cache,
				[topicTitle]: questionIds.concat(id),
			});
		}
	}

	public static getFavorites(): string[] {
		const favorites = ls.get<string[]>(Store.FAVORITES);

		return favorites || [];
	}
}

export class Question {
	public readonly id: string;
	public readonly title: string;

	public readonly topicLen: number;
	public readonly topicTitle: string;

	public static topics() {
		return topics.map((it) => it.title);
	}

	public static fromRaw(question: IQuestion, topic: ITopicData): Question {
		return {
			id: question.id,
			title: question.title,
			topicTitle: topic.dir,
			topicLen: topic.data.length,
		};
	}

	public static random(topicTitle: string, withCache = false): Question {
		if (topicTitle === TOPIC_SELECT.FAVORITE) {
			const ids = Store.getFavorites();
			const questionsByIds: Question[] = [];
			// TODO: refactor
			topics.forEach((t) => {
				t.data.forEach((q) => {
					if (ids.includes(q.id)) {
						questionsByIds.push(Question.fromRaw(q, t));
					}
				});
			});

			// TODO: добавить очередь, а не рандом
			return random(questionsByIds);
		}

		let topic = topics.find((it) => it.title === topicTitle);
		if (!topic || topicTitle === TOPIC_SELECT.ANY) {
			topic = random(topics);
		}

		const { dir, data } = topic;
		const cachedQuestionIds = Store.getTopicQuestions(dir);
		const restQuestions = data.filter((it) => !cachedQuestionIds.includes(it.id));
		const qd = random(restQuestions.length === 0 ? data : restQuestions);
		const { id, title } = qd;
		const question: Question = {
			id,
			title,
			topicTitle: dir,
			topicLen: data.length,
		};

		if (withCache) {
			Store.updateCache(question);
		}

		return question;
	}

	public static getLink({ topicTitle, id }: Question): string {
		return `/${topicTitle}/${id}`;
	}

	public static extractTopicType(q: Question): string {
		const { topicTitle } = q;
		const [, topicType] = topicTitle.split('/');

		return topicType;
	}

	public static getTopicLink(q: Question): string {
		return `/${q.topicTitle}`;
	}

	/**
	 *
	 * @returns true if favorite was added and false for removed
	 */
	public static handleBookmark(q: Question): boolean {
		const favorites = Store.getFavorites();

		const isFavorite = favorites.find((f) => f === q.id);

		if (isFavorite) {
			const filtered = favorites.filter((f) => f !== q.id);

			ls.set(Store.FAVORITES, filtered);

			return false;
		}

		ls.set(Store.FAVORITES, [...favorites, q.id]);

		return true;
	}

	public static isFavorite(q?: Question): boolean {
		if (!q) {
			return false;
		}

		const favorites = Store.getFavorites();

		return favorites.find((f) => f === q.id) !== undefined;
	}
}
