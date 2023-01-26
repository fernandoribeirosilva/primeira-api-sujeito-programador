import { NextFunction, Request, Response, Router } from 'express';

const router = Router();

const cursos = ['NodeJs', 'React', 'React-Native'];

function checkCurso(req: Request, res: Response, next: NextFunction) {
  if (!req.body.name) {
    return res.status(400).json({ error: 'Nome do curso é obrigatório' });
  }

  return next();
}

function checkIndexCurso(req: Request, res: Response, next: NextFunction) {
  const { index } = req.params;
  const curso = cursos[Number(index)];

  if (!curso) {
    return res.status(400).json({ error: 'O curso não existe' });
  }

  return next();
}

router.get('/', (req: Request, res: Response) => {
  return res.status(200).json(cursos);
});

router.get('/:index', checkIndexCurso, (req: Request, res: Response) => {
  const { index } = req.params;

  return res.status(200).json(cursos[Number(index)]);
});

router.post('/', checkCurso, (req: Request, res: Response) => {
  const { name } = req.body;

  cursos.push(name);

  return res.status(201).end();
});

router.put('/:index', checkCurso, checkIndexCurso, (req: Request, res: Response) => {
  const { index } = req.params;
  const { name } = req.body;

  cursos[Number(index)] = name;

  return res.status(201).end();
});

router.delete('/:index', checkIndexCurso, (req: Request, res: Response) => {
  const { index } = req.params;

  cursos.splice(Number(index), 1);

  return res.status(201).end();
});

export { router as cursos };
