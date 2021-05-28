import { Task } from "./task.model";

export interface Tasks{
  id: String;
  userID: String;
  createDate: Date;
  tasks: Task[];
}