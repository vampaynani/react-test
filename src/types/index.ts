export enum Priority {
  Low,
  Medium,
  High,
}

export enum Status {
  Active,
  Done,
  Deleted,
}

export interface IMessage {
  priority: number;
  text: string;
  status: Status;
}
