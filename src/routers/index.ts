import { Router } from 'express';
import { cursos } from './cursos';
import { ping } from './ping';

const router = Router();

router.use('/ping', ping);

router.use('/cursos', cursos);

export { router };
