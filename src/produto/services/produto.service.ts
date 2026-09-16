import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Produto } from "../entities/produto.entity";
import { CreateProdutoDto } from "../dto/create-produto-dto";
import { UpdateProdutoDto } from "../dto/update-produto-dto";

@Injectable()
export class ProdutoService {
    constructor(
        @InjectRepository(Produto)
        private produtoRepository: Repository<Produto>
    ){}


    // Bucar TODOS
    async findAll(): Promise<Produto[]> {
        return await this.produtoRepository.find();
    }


    // Bucar por ID
    async findById(id: number): Promise<Produto> {

        const produto = await this.produtoRepository.findOne({
            where:{
                id
            }
        });

        if(!produto)
            throw new HttpException('Produto não encontrado!', HttpStatus.NOT_FOUND);

        return produto;

    }

    // Bucar por NOME
    async findByTitulo(nome: string): Promise<Produto[]> {
        return this.produtoRepository.find({
            where: {
                nome: ILike(`%${nome}`)
            }
        })
    } 


    // CADASTRAR produto
    async create( produto: CreateProdutoDto): Promise<Produto> {
        const novoProduto = this.produtoRepository.create(produto);
        return await this.produtoRepository.save(novoProduto);
    }


    // ATUALIZAR produto
    async update(produto: UpdateProdutoDto): Promise<Produto> {
       await this.findById(produto.id)

       return await this.produtoRepository.save(produto);

    }


    // DELETAR produto
    async delete(id: number): Promise<DeleteResult> {
        await this.findById(id)

        return await this.produtoRepository.delete(id)
    }


    



}