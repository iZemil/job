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

export const ANY_TOPIC = 'any';

export class Store {
	public static KEY = 'questionStore';

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
}

export class Question {
	public readonly id: string;
	public readonly title: string;

	public readonly topicLen: number;
	public readonly topicTitle: string;

	public static topics() {
		return topics.map((it) => it.title);
	}

	public static random(topicTitle: string, withCache = false): Question {
		let topic = topics.find((it) => it.title === topicTitle);
		if (!topic || topicTitle === ANY_TOPIC) {
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
}
