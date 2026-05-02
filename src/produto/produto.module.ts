import { TypeOrmModule } from "@nestjs/typeorm";
import { Produto } from "./entities/produto.entity";
import { Module } from "@nestjs/common";
import { ProdutoController } from "./controllers/postagem.controller";
import { ProdutoService } from "./services/produto.service";


@Module({
    imports: [TypeOrmModule.forFeature([Produto])],
    providers: [ProdutoService],
    controllers: [ProdutoController],
    exports: [],
})
export class ProdutoModule {}