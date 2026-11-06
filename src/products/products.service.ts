import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { Product } from '@prisma/client';

@Injectable()
export class ProductsService {
    constructor(private prisma: PrismaService) { }

    async create(data: { name: string; description?: string; price: number; }): Promise<Product> {
        return this.prisma.product.create({
            data,
        });
    }

    async findAll(): Promise<Product[]> {
        return this.prisma.product.findMany();
    }
}
