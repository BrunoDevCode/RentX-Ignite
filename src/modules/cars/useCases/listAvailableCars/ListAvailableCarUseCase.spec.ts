import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';

import { ListAvailableCarsUseCase } from './ListAvailableCarsUseCase';

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe('List Cars', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory
    );
  });

  it('Shouble be able to list all cars available cars', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Fusion',
      description: 'Description of Car',
      daily_rate: 100,
      license_plate: 'MAL-138',
      fine_amount: 60,
      brand: 'Ford',
      category_id: '6e192255-0f7e-483c-a8ac-c198d09ecfe6',
    });

    const cars = await listAvailableCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it('Should be able to list all available cars by brand', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Skyline',
      description: 'Description of Car',
      daily_rate: 100,
      license_plate: 'MEN-854',
      fine_amount: 60,
      brand: 'Nissan',
      category_id: '6e192255-0f7e-483c-a8ac-c198d09ecfe6',
    });

    const cars = await listAvailableCarsUseCase.execute({
      brand: 'Nissan',
    });

    expect(cars).toEqual([car]);
  });

  it('Should be able to list all available cars by name', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'A3',
      description: 'Description of Car',
      daily_rate: 100,
      license_plate: 'LUC-012',
      fine_amount: 60,
      brand: 'Audi',
      category_id: '6e192255-0f7e-483c-a8ac-c198d09ecfe6',
    });

    const cars = await listAvailableCarsUseCase.execute({
      name: 'A3',
    });

    expect(cars).toEqual([car]);
  });

  it('Should be able to list all available cars by category', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Corolla',
      description: 'Description of Car',
      daily_rate: 100,
      license_plate: 'LUC-012',
      fine_amount: 60,
      brand: 'Toyota',
      category_id: '12345',
    });

    const cars = await listAvailableCarsUseCase.execute({
      name: '12345',
    });

    expect(cars).toEqual([car]);
  });
});
