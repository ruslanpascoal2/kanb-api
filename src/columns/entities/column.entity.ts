import { Kanban } from "src/kanbans/entities/kanban.entity";
import { Task } from "src/tasks/entities/task.entity";

export class Column {
    id: string;
    name: string;
    index: number;
    kanban: Kanban;
    kanbanId: string;
    tasks: Task[]
}
