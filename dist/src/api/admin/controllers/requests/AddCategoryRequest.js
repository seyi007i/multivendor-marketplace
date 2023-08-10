"use strict";
/*
 * spurtcommerce API
 * version 4.8.2
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddCategory = void 0;
const tslib_1 = require("tslib");
require("reflect-metadata");
const class_validator_1 = require("class-validator");
class AddCategory {
}
tslib_1.__decorate([
    (0, class_validator_1.MaxLength)(255, {
        message: 'Category name should be maximum 255 character',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], AddCategory.prototype, "name", void 0);
tslib_1.__decorate([
    (0, class_validator_1.Max)(9999, {
        message: 'Maximum length of sortOrder should be 4',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", Number)
], AddCategory.prototype, "sortOrder", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", Number)
], AddCategory.prototype, "status", void 0);
exports.AddCategory = AddCategory;
//# sourceMappingURL=AddCategoryRequest.js.map