interface IQuestionData {
	file: string;
	path: string;
	topic: string;
	data: string[];
}

const questions: IQuestionData[] = require('@site/static/questions.json');

function random<T>(arr: T[]): T {
	return arr[Math.floor(Math.random() * arr.length)];
}

export const ANY_TOPIC = 'any';

export class Question {
	public static LS_KEY = 'ls_questions';

	public readonly file: string;
	public readonly path: string;
	public readonly topic: string;
	public readonly value: string;

	public static topics() {
		return questions.map((q) => q.topic);
	}

	public static random(topic: string, retryCount = 1): Question {
		let section = questions.find((it) => it.topic === topic);
		if (!section || topic === ANY_TOPIC) {
			section = random(questions);
		}

		const { data, ...rest } = section;

		if (data.length === retryCount) {
			Question.clearCache();
		}

		const question = {
			value: random(data),
			...rest,
		};

		if (Question.isInCache(question)) {
			return Question.random(topic, retryCount + 1);
		}

		return question;
	}

	public static getLink(question: Question): string {
		const questionTo = `${question.value.split(' ').join('-').replace(/[?()]/gi, '')}`;

		return `/job/interview/questions/${question.path}#${questionTo}`.toLowerCase();
	}

	public static getCache() {
		return JSON.parse(localStorage.getItem(Question.LS_KEY)) || {};
	}

	public static clearCache() {
		localStorage.setItem(Question.LS_KEY, null);
	}

	public static isInCache(question: Question): boolean {
		const cache = Question.getCache();
		const questionKey = Question.getLink(question);

		return Boolean(cache[questionKey]);
	}

	public static updateCache(question: Question) {
		const cache = Question.getCache();
		const questionKey = Question.getLink(question);
		const needRefreshCache = Object.keys(cache).length > 30;

		if (needRefreshCache) {
			Question.clearCache();
		} else {
			const newCache = JSON.stringify({ ...cache, [questionKey]: 1 });

			localStorage.setItem(Question.LS_KEY, newCache);
		}
	}
}
