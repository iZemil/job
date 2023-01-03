const fs = require('fs/promises');
const path = require('path');

const from = path.resolve('interview/questions');
const to = path.resolve('static/questions.json');

(async function () {
	const trimTitleSymbols = (str) => str.replace(/#+ /g, '');

	try {
		const files = await fs.readdir(from);
		const parsed = [];

		for (const file of files) {
			const fromPath = path.join(from, file);
			const stat = await fs.stat(fromPath);

			const needParse = stat.isFile() && path.extname(file) === '.md' && !file.startsWith('_');

			if (needParse) {
				const data = await fs.readFile(fromPath, 'utf8');

				const titles = data.match(/^#{1,4} .*/gim);
				const key = data
					.match(/^title: .*/gim)
					.find((it) => it.startsWith('title:'))
					.split(': ')[1];

				const topic = {
					file,
					path: file.replace('.md', ''),
					key,
					data: titles
						.filter((it) => !it.startsWith('# '))
						.map((it) => trimTitleSymbols(it))
						.map((question, index) => ({
							id: index,
							question,
						})),
				};
				console.log('topic:', topic);
				parsed.push(topic);
			}
		}

		await fs.writeFile(to, JSON.stringify(parsed));
	} catch (e) {
		console.error(e);
	}
})();
