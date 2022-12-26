const fs = require('fs/promises');
const path = require('path');

const from = path.resolve('interview/questions');

(async function () {
	try {
		const files = await fs.readdir(from);

		for (const file of files) {
			const fromPath = path.join(from, file);
			const stat = await fs.stat(fromPath);

			const needParse = stat.isFile() && path.extname(file) === '.md' && !file.startsWith('_');

			if (needParse) {
				const data = await fs.readFile(fromPath, 'utf8');

				console.log('see:', file);
				console.log(data.match(/^#{3,4} .*/gim));
			}
		}
	} catch (e) {
		console.error(e);
	}
})();
