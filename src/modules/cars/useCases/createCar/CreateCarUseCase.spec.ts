import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';
import { AppError } from '@shared/errors/AppError';

import { CreateCarUseCase } from './CreateCarUseCase';

let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe('Create Car', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });

  it('should be able to create a new car', async () => {
    const car = await createCarUseCase.execute({
      name: 'Name of Car',
      description: 'Description of Car',
      daily_rate: 100,
      license_plate: 'AVC1234',
      fine_amount: 60,
      brand: 'OldMan',
      category_id: 'category',
    });

    expect(car).toHaveProperty('id');
  });

  it('Should not be able to create a car with exists license plate', async () => {
    await createCarUseCase.execute({
      name: 'Name of Car',
      description: 'Description of Car',
      daily_rate: 100,
      license_plate: 'AVC1234',
      fine_amount: 60,
      brand: 'OldMan',
      category_id: 'category',
    });

    await expect(
      createCarUseCase.execute({
        name: 'Name of Car',
        description: 'Description of Car',
        daily_rate: 100,
        license_plate: 'AVC1234',
        fine_amount: 60,
        brand: 'OldMan',
        category_id: 'category',
      })
    ).rejects.toEqual(new AppError('> Car already Exists'));
  });

  it('Should be able to create a car with available true by default', async () => {
    const car = await createCarUseCase.execute({
      name: 'Name of Car',
      description: 'Description of Car',
      daily_rate: 100,
      license_plate: 'AVCD1234',
      fine_amount: 60,
      brand: 'OldMan',
      category_id: 'category',
    });

    expect(car.available).toBe(true);
  });
});
