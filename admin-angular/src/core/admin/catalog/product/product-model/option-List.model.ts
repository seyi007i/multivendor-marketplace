/*
* spurtcommerce
* http://www.spurtcommerce.com
*
* Copyright (c) 2021 Piccosoft Software Labs Pvt Ltd
* Author Piccosoft Software Labs Pvt Ltd <support@spurtcommerce.com>
* Licensed under the MIT license.
*/
export class SearchOptionListModel {
  public keyword: string;

  constructor(searchOptionListForm: any) {
    this.keyword = searchOptionListForm.keyword || '';
  }
}
