import { Column } from "src/columns/entities/column.entity";
import { User } from "src/users/entities/user.entity";

export class Kanban {
  id: string;
  name: string;
  user: User;
  userId: string;
  columns: Column[];
}
