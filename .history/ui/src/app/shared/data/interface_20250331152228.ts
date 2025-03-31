export interface Menu {
  title: string;

  link?: string;
  icon?: string;
  show?: boolean;
  disabled?: boolean;
  children?: Menu[];
  groupsAccess?: number[];
}

export interface Client {
  id?: string;

  fullname: string;
  email: string;
  phone?: string;
}

export interface Service {
  id?: string;

  title: string;
  cost: number;
}