import { Body, Controller, Post, Get } from '@nestjs/common';
import { ProductsService } from './products.service.js';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) { }

    @Post()
    create(@Body() body: { name: string; description?: string; price: number }) {
        return this.productsService.create(body);
    }

    @Get()
    findAll() {
        return this.productsService.findAll();
    }
}
