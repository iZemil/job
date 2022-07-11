import { Logger } from '@nestjs/common';
import * as express from 'express';
import { NextFunction, Request, Response } from 'express';

const logger = new Logger('ExpressServer');

const middleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	logger.debug(req.path);
	next();
};

export async function bootstrapExpress() {
	const PORT = 8080;
	const app = express();

	app.use(middleware);

	app.get('/FizzBuzz', async (req, res) => {
		const { x: xQuery } = req.query;
		const x = Number(xQuery);

		let result = '';

		if (x % 3 === 0) {
			result += 'Fizz';
		}

		if (x % 5 === 0) {
			result += 'Buzz';
		}

		res.send(`${result || xQuery}`);
	});

	app.listen(PORT, () => logger.log(`express is started on: http://localhost:${PORT}/`));
}
