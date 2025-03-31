export interface Request {
  title?: string;
  message?: string;
  body?: any;
  status?: string;
}

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

export interface Schedule {
  id?: string;
  scheduleId?: string;
  userId?: string;
  text?: string;
  start_date: string;
  end_date: string;
  type?: string;
  status?: string;
}