const fs = require('fs/promises');
const path = require('path');

const questionsDir = path.resolve('interview/questions');
const to = path.resolve('static/questions.json');

const initTopic = (title, topicPath) => ({
	title,
	dir: path.relative('interview', topicPath),
	data: [],
});

const initQuestion = (id, title) => ({
	id,
	title,
});

(async function () {
	const trimTitleSymbols = (str) => str.replace(/#+ /g, '');

	try {
		const questionsDirItems = await fs.readdir(questionsDir);
		const parsed = [];

		// read questions dir
		for (const dirItem of questionsDirItems) {
			const fromPath = path.join(questionsDir, dirItem);
			const stat = await fs.stat(fromPath);
			const isTopicDir = stat.isDirectory();

			if (isTopicDir) {
				const topicPath = path.resolve(questionsDir, dirItem);
				const topicDir = await fs.readdir(topicPath);
				const topic = initTopic(dirItem, topicPath);

				// read topic files
				for (const item of topicDir) {
					const needParseItem = item.includes('index');

					if (needParseItem) {
						const data = await fs.readFile(path.resolve(topicPath, item), 'utf8');
						const questionData = data.match(/{ id: .* }/gim);
						const questionIds = questionData.join('').match(/'[\w\-]+'/gim);

						for (const questionId of questionIds) {
							const id = questionId.replace(/'/gi, '');
							const qPath = path.resolve(topicPath, `${id}.md`);
							const qData = await fs.readFile(qPath, 'utf8');

							topic.data.push(initQuestion(id, trimTitleSymbols(qData.match(/# .*/i)[0])));
						}
					}
				}

				parsed.push(topic);
			}
		}

		await fs.writeFile(to, JSON.stringify(parsed));
	} catch (e) {
		console.error(e);
	}
})();
