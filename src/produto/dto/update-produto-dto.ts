import { Transform, TransformFnParams } from "class-transformer";
import { IsNotEmpty, IsString, IsPositive, IsOptional, IsUrl, IsNumber } from "class-validator";


export class UpdateProdutoDto {
    @IsNumber()
    @IsPositive()
    id: number;

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