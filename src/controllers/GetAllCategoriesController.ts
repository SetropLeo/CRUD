import { Request, Response } from 'express';
import { GetAllCategoriesService } from '../services/GetAllCategoryService';

export class GetAllCategoriesController {
  async handle(request: Request, response: Response) {
    const service = new GetAllCategoriesService();

    const categories = await service.execute();

    return response.json(categories);
  }
}
