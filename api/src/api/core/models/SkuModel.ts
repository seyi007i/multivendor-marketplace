/*
* Spurtcommerce
* https://www.spurtcommerce.com
* Copyright (c) 2023  Spurtcommerce E-solutions Private Limited
* Author Spurtcommerce E-solutions Private Limited <support@spurtcommerce.com>
* Licensed under the MIT license.
*/

import { BeforeInsert, BeforeUpdate, Column, Entity, OneToOne } from 'typeorm';
import { PrimaryGeneratedColumn } from 'typeorm/index';
import { BaseModel } from './BaseModel';
import moment = require('moment');
import { Product } from './ProductModel';
@Entity('sku')
export class Sku extends BaseModel {

    @PrimaryGeneratedColumn({ name: 'id' })
    public id: number;

    @Column({ name: 'sku_name' })
    public skuName: string;

    @Column({ name: 'price' })
    public price: string;

    @Column({ name: 'quantity' })
    public quantity: number;

    @Column({ name: 'is_active' })
    public isActive: number;

    @Column({ name: 'out_of_stock_threshold' })
    public outOfStockThreshold: number;

    @Column({ name: 'notify_min_quantity_below' })
    public notifyMinQuantity: number;

    @Column({ name: 'min_quantity_allowed_cart' })
    public minQuantityAllowedCart: number;

    @Column({ name: 'max_quantity_allowed_cart' })
    public maxQuantityAllowedCart: number;

    @Column({ name: 'enable_back_orders' })
    public enableBackOrders: number;

    @OneToOne(type => Product, product => product.skuDetail)
    public product: Product;

    @BeforeInsert()
    public async createDetails(): Promise<void> {
        this.createdDate = moment().format('YYYY-MM-DD HH:mm:ss');
    }

    @BeforeUpdate()
    public async updateDetails(): Promise<void> {
        this.modifiedDate = moment().format('YYYY-MM-DD HH:mm:ss');
    }
}
