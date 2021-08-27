import { Category } from '../infra/typeorm/entities/Category';

interface ICreateCaregoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  findByName(name: string): Promise<Category>;
  list(): Promise<Category[]>;
  create({ name, description }: ICreateCaregoryDTO): Promise<void>;
}

export { ICategoriesRepository, ICreateCaregoryDTO };
