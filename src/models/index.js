// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Cart, UserData } = initSchema(schema);

export {
  Cart,
  UserData
};