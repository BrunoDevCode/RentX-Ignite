import { Router } from 'express';

import { ensureAutheticated } from '../middlewares/ensureAuthenticated';
import { CreateSpecificationController } from '../modules/cars/useCases/createSpecification/CreateSpecificationController';

const specificationRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

specificationRoutes.use(ensureAutheticated);
specificationRoutes.post('/', createSpecificationController.handle);

export { specificationRoutes };
