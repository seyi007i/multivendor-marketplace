"use strict";
/*
 * spurtcommerce API
 * version 4.8.2
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteMultipleImage = void 0;
const tslib_1 = require("tslib");
require("reflect-metadata");
const class_validator_1 = require("class-validator");
class DeleteMultipleImage {
    constructor() {
        this.delete = [];
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", Object)
], DeleteMultipleImage.prototype, "delete", void 0);
exports.DeleteMultipleImage = DeleteMultipleImage;
//# sourceMappingURL=DeleteMultipleImage.js.map