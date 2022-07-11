import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';

import { bootstrapExpress } from './express/server';
import { RootModule } from './modules/root.module';

const conf = {
	prefix: '/api',
	port: 8089,
};

async function bootstrap() {
	const { prefix, port } = conf;
	const app = await NestFactory.create(RootModule);

	app.setGlobalPrefix(prefix);
	app.use(cookieParser());

	app.enableCors({
		origin: true,
		credentials: true,
	});

	await app.listen(port);

	const divider = '\n------------------------------------------------------';
	Logger.log(`${divider}\n[backend] is running on: http://localhost:${port}/${prefix}${divider}`);
}

bootstrap().then(() => {
	bootstrapExpress();
});
