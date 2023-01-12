import * as ls from 'local-storage';

interface IQuestion {
	id: number;
	question: string;
}

interface ITopicData {
	file: string;
	path: string;
	key: string;
	order: number;
	data: IQuestion[];
}

const topics: ITopicData[] = require('@site/static/questions.json');

topics.sort((a, b) => a.order - b.order);

function random<T>(arr: T[]): T {
	return arr[Math.floor(Math.random() * arr.length)];
}

export const ANY_TOPIC = 'any';

export class Store {
	public static KEY = 'questionStore';

	public static getCache(): { [topicKey: string]: number[] } {
		return ls.get(Store.KEY) ?? {};
	}

	public static getTopicQuestions(topicKey: string) {
		const cache = Store.getCache();

		return cache[topicKey] ?? [];
	}

	public static clearCache(topicKey?: string) {
		if (topicKey) {
			const cache = Store.getCache();

			return ls.set(Store.KEY, {
				...cache,
				[topicKey]: [],
			});
		}

		return ls.remove(Store.KEY);
	}

	public static updateCache({ topicKey, data, topicLen }: Question) {
		const cache = Store.getCache();
		const questionIds = Store.getTopicQuestions(topicKey);
		const needRefreshCache = questionIds.length === topicLen;

		if (needRefreshCache) {
			Store.clearCache(topicKey);
		} else {
			ls.set(Store.KEY, {
				...cache,
				[topicKey]: questionIds.concat(data.id),
			});
		}
	}
}

export class Question {
	public readonly topicKey: string;
	public readonly topicLen: number;
	public readonly topicPath: string;
	public readonly data: IQuestion;

	public static topics() {
		return topics.map((it) => it.key);
	}

	public static random(topicKey: string, withCache = false): Question {
		let topic = topics.find((it) => it.key === topicKey);
		if (!topic || topicKey === ANY_TOPIC) {
			topic = random(topics);
		}

		const { path, key, data } = topic;
		const cachedQuestionIds = Store.getTopicQuestions(key);
		const restQuestions = data.filter((it) => !cachedQuestionIds.includes(it.id));
		const randomQuestionData = random(restQuestions.length > 0 ? restQuestions : data);

		const question: Question = {
			topicPath: path,
			topicKey: key,
			topicLen: data.length,
			data: randomQuestionData,
		};

		if (withCache) {
			Store.updateCache(question);
		}

		return question;
	}

	public static getLink({ data, topicPath }: Question): string {
		const questionTo = `${data.question
			.split(' ')
			.join('-')
			.replace(/[?()\.\\\/\,\~\^\'\"\`\:]/gi, '')}`;

		return `/questions/${topicPath}#${questionTo}`.toLowerCase();
	}
}
