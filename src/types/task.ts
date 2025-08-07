export type Priority = "low" | "medium" | "high";

export interface Task {
  id: string;
  priority: Priority;
  title: string;
  description?: string;
  completed: boolean;
  createdAt: number;
}
