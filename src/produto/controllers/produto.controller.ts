import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { Produto } from "../entities/produto.entity";
import { ProdutoService } from "../services/produto.service";

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


    // Bucar por TITULO
    @Get('titulo/:titulo')
    @HttpCode(HttpStatus.OK)
    findByTitulo(@Param('titulo') titulo: string): Promise<Produto[]> {
        return this.produtoService.findByTitulo(titulo);
    }


    // CADASTAR produto
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() produto:Produto): Promise<Produto> {
        return this.produtoService.create(produto);
    }


    // ATUALIAR produto
    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() produto: Produto): Promise<Produto> {
        return this.produtoService.update(produto);
    }


    // DELETE produto
    @Delete("/:id")
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param("id", ParseIntPipe) id: number) {
        return this.produtoService.delete(id);
    }

}
    