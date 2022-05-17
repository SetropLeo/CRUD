import { Router } from 'express';
import { CreateCategoryController } from './controllers/CreateCategoryController';
import { CreateVideoController } from './controllers/CreateVideoController';
import { DeleteCategoryController } from './controllers/DeleteCategoryController';
import { GetAllCategoriesController } from './controllers/GetAllCategoriesController';
import { GetAllVideosController } from './controllers/GetAllVideosController';
import { UpdateCategoryController } from './controllers/UpdateCategoryController';

const routes = Router();

routes.post('/categories/post', new CreateCategoryController().handle);
routes.get('/categories/getAll', new GetAllCategoriesController().handle);
routes.delete('/categories/delete/:id', new DeleteCategoryController().handle);
routes.put('/categories/update/:id', new UpdateCategoryController().handle);

routes.post('/videos/post', new CreateVideoController().handle);
routes.get('/videos/get', new GetAllVideosController().handle);

export { routes };
