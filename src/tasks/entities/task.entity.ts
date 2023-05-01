import { Kanban } from "src/kanbans/entities/kanban.entity";
import { User } from "src/users/entities/user.entity";

export class Task {
  id: string;
  name: string;
  status: number;
  description: string;
  index: number;
  kanban: Kanban;
  kanbanColumnId: string;
  assignedTo: User;
  userId: string;
}
