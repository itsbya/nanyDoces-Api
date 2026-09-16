import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { Produto } from "../entities/produto.entity";
import { ProdutoService } from "../services/produto.service";
import { CreateProdutoDto } from "../dto/create-produto-dto";
import { UpdateProdutoDto } from "../dto/update-produto-dto";

@Controller("/produtos")
export class ProdutoController {
    constructor(private readonly produtoService: ProdutoService) {}
    
    // Bucar TODOS
    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Produto[]> {
        return this.produtoService.findAll();
    }
    
    // Bucar por ID
    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Produto> {
        return this.produtoService.findById(id);
    }


    // Bucar por NOME
    @Get('nome/:nome')
    @HttpCode(HttpStatus.OK)
    findByTitulo(@Param('nome') nome: string): Promise<Produto[]> {
        return this.produtoService.findByTitulo(nome);
    }


    // CADASTAR produto
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() produto: CreateProdutoDto): Promise<Produto> {
        return this.produtoService.create(produto);
    }


    // ATUALIAR produto
    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() produto: UpdateProdutoDto): Promise<Produto> {
        return this.produtoService.update(produto);
    }


    // DELETE produto
    @Delete("/:id")
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param("id", ParseIntPipe) id: number) {
        return this.produtoService.delete(id);
    }

}
    