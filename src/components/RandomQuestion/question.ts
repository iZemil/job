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

	public static getCache(): { [topicPath: string]: string[] } {
		return ls.get(Store.KEY) ?? {};
	}

	public static getTopicQuestions(topicPath: string) {
		const cache = Store.getCache();

		return cache[topicPath] ?? [];
	}

	public static clearCache(topicPath?: string) {
		if (topicPath) {
			const cache = Store.getCache();

			return ls.set(Store.KEY, {
				...cache,
				[topicPath]: [],
			});
		}

		return ls.remove(Store.KEY);
	}

	public static updateCache({ topicPath, id, topicLen }: Question) {
		const cache = Store.getCache();
		const questionIds = Store.getTopicQuestions(topicPath);
		const needRefreshCache = questionIds.length === topicLen;

		if (needRefreshCache) {
			Store.clearCache(topicPath);
		} else {
			ls.set(Store.KEY, {
				...cache,
				[topicPath]: questionIds.concat(id),
			});
		}
	}
}

export class Question {
	public readonly id: string;
	public readonly title: string;

	public readonly topicLen: number;
	public readonly topicPath: string;

	public static topics() {
		return topics.map((it) => it.title);
	}

	public static random(topicPath: string, withCache = false): Question {
		let topic = topics.find((it) => it.dir === topicPath);
		if (!topic || topicPath === ANY_TOPIC) {
			topic = random(topics);
		}

		const { dir, data } = topic;
		const cachedQuestionIds = Store.getTopicQuestions(dir);
		const restQuestions = data.filter((it) => !cachedQuestionIds.includes(it.id));
		const { id, title } = random(restQuestions.length > 0 ? restQuestions : data);

		const question: Question = {
			id,
			title,
			topicPath: dir,
			topicLen: data.length,
		};

		if (withCache) {
			Store.updateCache(question);
		}

		return question;
	}

	public static getLink({ topicPath, id }: Question): string {
		return `/${topicPath}/${id}`;
	}
}
