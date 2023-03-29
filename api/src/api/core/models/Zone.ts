/*
* Spurtcommerce
* https://www.spurtcommerce.com
* Copyright (c) 2023  Spurtcommerce E-solutions Private Limited
* Author Spurtcommerce E-solutions Private Limited <support@spurtcommerce.com>
* Licensed under the MIT license.
*/

import { Column, Entity, BeforeInsert, BeforeUpdate, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { BaseModel } from './BaseModel';
import { Exclude } from 'class-transformer';
import { Country } from './Country';
import moment = require('moment/moment');
import { IsNotEmpty } from 'class-validator';

@Entity('zone')
export class Zone extends BaseModel {
    @IsNotEmpty()
    @PrimaryGeneratedColumn({ name: 'zone_id' })
    public zoneId: number;

    @Exclude()
    @Column({ name: 'country_id' })
    public countryId: number;

    @Column({ name: 'code' })
    public code: string;
    @IsNotEmpty()
    @Column({ name: 'name' })
    public name: string;

    @Column({ name: 'is_active' })
    public isActive: number;

    @ManyToOne(type => Country, country => country.zone)
    @JoinColumn({ name: 'country_id' })
    public country: Country;

    @BeforeInsert()
    public async createDetails(): Promise<void> {
        this.createdDate = moment().format('YYYY-MM-DD HH:mm:ss');
    }

    @BeforeUpdate()
    public async updateDetails(): Promise<void> {
        this.modifiedDate = moment().format('YYYY-MM-DD HH:mm:ss');
    }
}
