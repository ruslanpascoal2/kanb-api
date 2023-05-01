import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({ example: 'johndoe@email.com' })
    email: string;
    @ApiProperty({ example: 'John Doe' })
    name?: string;
}
