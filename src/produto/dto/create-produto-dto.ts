import { Transform, TransformFnParams } from "class-transformer";
import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, IsUrl } from "class-validator";

export class CreateProdutoDto {
    @Transform(({value} : TransformFnParams) => value ?.trim())
    @IsNotEmpty()
    @IsString()
    nome: string;

    
    @Transform(({value} : TransformFnParams) => value ?.trim())
    @IsNotEmpty()
    @IsString()
    descricao: string;
    
    @IsNumber({maxDecimalPlaces: 2})
    @IsNotEmpty()
    @IsPositive()
    preco: number;

    @IsOptional()
    @IsString()
    @IsUrl()
    imagem: string;

    categoriaId: number;
}