// Export dto types based on your **generated** schema.ts. Examples can be found here:
// https://github.com/bonprix/assortment-matrix/blob/develop/frontend/src/api/schemaMapped.ts
import { components } from './schema';

type schemas = components['schemas'];

export type ExampleDTO = schemas['ExampleDTO'];
export type ImageDTO = schemas['ImageDTO'];
export type UserDTO = schemas['UserDTO'];
