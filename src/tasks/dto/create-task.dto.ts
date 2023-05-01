import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty({ example: 'Fix the air conditioning' })
  name: string;
  @ApiProperty({ example: 'Call someone to do fix the air conditioning' })
  description: string;
  @ApiProperty({ example: 'ec192f92-7836-44da-9bac-27f2764ef14b' })
  kanbanColumnId: string;
  @ApiProperty({ example: 'ec192f92-7836-44da-9bac-27f2764ef14b' })
  userId: string;
}
