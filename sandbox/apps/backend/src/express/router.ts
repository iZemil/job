import { Router } from 'express';

const router = Router();

router.get('/about', (req, res) => {
	res.send('About birds');
});

export { router };
