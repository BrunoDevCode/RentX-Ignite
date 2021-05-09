import { Category } from '../model/Category';

interface ICreateCaregoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  findByName(name: string): Category;
  list(): Category[];
  create({ name, description }: ICreateCaregoryDTO): void;
}

export { ICategoriesRepository, ICreateCaregoryDTO };
