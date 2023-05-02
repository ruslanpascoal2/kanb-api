import { Kanban } from "src/kanbans/entities/kanban.entity";

export class User {
    email: string;
    name?: string;
    id?: number;
    kanbans: Kanban[]
}
