/*
* spurtcommerce
* http://www.spurtcommerce.com
*
* Copyright (c) 2021 Piccosoft Software Labs Pvt Ltd
* Author Piccosoft Software Labs Pvt Ltd <support@spurtcommerce.com>
* Licensed under the MIT license.
*/
export class ProductDeleteModel {
  public productId: number;

  constructor(productdeleteForm: any) {
    this.productId = productdeleteForm.productId || '';
  }
}
