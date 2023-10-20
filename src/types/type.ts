export type UserInfoInputTypes = {
    name: string;
    email: string;
    phone: string;
};
export type UserInfoInputValidity = {
    name: boolean;
    email: boolean;
    phone: boolean;
};

export type AddonsStoreTypes = {
  id: number
  title: string
  desc: string
  mrate: number
  yrate: number
  selected: boolean 
}

export type NavigationStoreTypes = {
  step1: boolean
  step2: boolean
  step3: boolean
  step4: boolean
  finale: boolean
}

export type PlanSelectionStoreTypes = {
  type: string
  mrate: number
  yrate: number
  discount: number
  selected: boolean
}

export type SubscriptionStoreTypes = {
    type: string
}

export type UserInfoStoreTypes = {
  name: string
  email: string
  phone: string
}