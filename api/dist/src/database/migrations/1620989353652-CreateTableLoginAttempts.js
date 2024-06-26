"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableLoginAttempts1620989353652 = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
class CreateTableLoginAttempts1620989353652 {
    up(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const table = new typeorm_1.Table({
                name: 'login_attempts',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        length: '11',
                        isPrimary: true,
                        isNullable: false,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    }, {
                        name: 'customer_id',
                        type: 'int',
                        length: '11',
                        isPrimary: false,
                        isNullable: true,
                    }, {
                        name: 'ip_address',
                        type: 'varchar',
                        length: '255',
                        isPrimary: false,
                        isNullable: true,
                    },
                ],
            });
            const ifExsist = yield queryRunner.hasTable('login_attempts');
            if (!ifExsist) {
                yield queryRunner.createTable(table);
            }
        });
    }
    down(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropTable('login_attempts', true);
        });
    }
}
exports.CreateTableLoginAttempts1620989353652 = CreateTableLoginAttempts1620989353652;
//# sourceMappingURL=1620989353652-CreateTableLoginAttempts.js.map