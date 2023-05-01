import { ApiProperty } from '@nestjs/swagger';

export class CreateKanbanDto {
  @ApiProperty({ example: 'Meu Kanban' })
  name: string;
  @ApiProperty({ example: 'ec192f92-7836-44da-9bac-27f2764ef14b' })
  userId: string;
}
