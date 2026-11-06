import { IsString, IsNotEmpty, IsOptional, IsNumber, Min } from 'class-validator';

export class CreateProductDto {
    @IsString({ message: 'O nome precisa ser uma string.' })
    @IsNotEmpty({ message: 'O nome não pode estar vazio.' })
    name: string;

    @IsString({ message: 'A descrição precisa ser uma string.' })
    @IsOptional()
    description?: string;

    @IsNumber({}, { message: 'O preço precisa ser um número.' })
    @Min(0, { message: 'O preço não pode ser negativo.' })
    price: number;
}