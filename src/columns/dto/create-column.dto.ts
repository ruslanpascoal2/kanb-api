import { ApiProperty } from "@nestjs/swagger";

export class CreateColumnDto {
    @ApiProperty({ example: 'In Progress' })
    name: string;
    @ApiProperty({ example: 'ec192f92-7836-44da-9bac-27f2764ef14b' })
    kanbanId: string;
    @ApiProperty({ example: ['ec192f92-7836-44da-9bac-27f2764ef14b'] })
    tasks: string[]
}
