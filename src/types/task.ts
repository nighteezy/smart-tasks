export type Priority = "low" | "medium" | "high";

export interface Task {
  id: string;
  priority: Priority;
  title: string;
  descrption: string;
  completed: boolean;
  createdAt: Date;
}
