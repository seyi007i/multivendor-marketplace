/*
* Spurtcommerce
* https://www.spurtcommerce.com
* Copyright (c) 2023  Spurtcommerce E-solutions Private Limited
* Author Spurtcommerce E-solutions Private Limited <support@spurtcommerce.com>
* Licensed under the MIT license.
*/

import { Column, Entity, BeforeInsert, BeforeUpdate, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { BaseModel } from './BaseModel';
import { PageGroup } from './PageGroup';
import moment = require('moment/moment');
import { IsNotEmpty } from 'class-validator';

@Entity('page')
export class Page extends BaseModel {
    @IsNotEmpty()
    @PrimaryGeneratedColumn({ name: 'page_id' })
    public pageId: number;
    @IsNotEmpty()
    @Column({ name: 'title' })
    public title: string;

    @Column({ name: 'intro' })
    public intro: string;
    @IsNotEmpty()
    @Column({ name: 'full_text' })
    public content: string;

    @Column({ name: 'page_group_id' })
    public pageGroupId: number;

    @Column({ name: 'sort_order' })
    public sortOrder: number;

    @IsNotEmpty()
    @Column({ name: 'slug_name' })
    public slugName: string;

    @Column({ name: 'view_page_count' })
    public viewPageCount: number;

    @Column({ name: 'is_active' })
    public isActive: number;

    @ManyToOne(type => PageGroup, pageGroup => pageGroup.page)
    @JoinColumn({ name: 'page_group_id' })
    public pageGroup: PageGroup;

    @BeforeInsert()
    public async createDetails(): Promise<void> {
        this.createdDate = moment().format('YYYY-MM-DD HH:mm:ss');
    }

    @BeforeUpdate()
    public async updateDetails(): Promise<void> {
        this.modifiedDate = moment().format('YYYY-MM-DD HH:mm:ss');
    }
}
