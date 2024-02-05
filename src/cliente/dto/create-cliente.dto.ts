import { ApiProperty } from "@nestjs/swagger";

export class CreateClienteDto {
    @ApiProperty()
    Name: string;
    @ApiProperty()
    lastName: string;
    @ApiProperty()
    telefono: string;
    @ApiProperty()
    email: string;

}
