import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type CartMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserDataMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Cart {
  readonly id: string;
  readonly itemName?: string | null;
  readonly category?: string | null;
  readonly tax?: number | null;
  readonly price?: number | null;
  readonly qty?: number | null;
  readonly total_amt?: number | null;
  readonly discount?: number | null;
  readonly amt_due?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Cart, CartMetaData>);
  static copyOf(source: Cart, mutator: (draft: MutableModel<Cart, CartMetaData>) => MutableModel<Cart, CartMetaData> | void): Cart;
}

export declare class UserData {
  readonly id: string;
  readonly Name?: string | null;
  readonly Address?: string | null;
  readonly CardNo?: string | null;
  readonly AadhaarNo?: string | null;
  readonly Email?: string | null;
  readonly Mobile?: string | null;
  readonly Alternate_mob?: string | null;
  readonly State?: string | null;
  readonly Country?: string | null;
  readonly sub?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<UserData, UserDataMetaData>);
  static copyOf(source: UserData, mutator: (draft: MutableModel<UserData, UserDataMetaData>) => MutableModel<UserData, UserDataMetaData> | void): UserData;
}