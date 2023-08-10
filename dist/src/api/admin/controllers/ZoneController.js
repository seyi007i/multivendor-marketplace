"use strict";
/*
 * spurtcommerce API
 * version 4.8.2
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZoneController = void 0;
const tslib_1 = require("tslib");
require("reflect-metadata");
const routing_controllers_1 = require("routing-controllers");
const zoneService_1 = require("../../core/services/zoneService");
const CountryService_1 = require("../../core/services/CountryService");
const Zone_1 = require("../../core/models/Zone");
const CreateZoneRequest_1 = require("./requests/CreateZoneRequest");
const class_transformer_1 = require("class-transformer");
const typeorm_1 = require("typeorm");
let ZoneController = class ZoneController {
    constructor(zoneService, countryService) {
        this.zoneService = zoneService;
        this.countryService = countryService;
    }
    // create zone API
    /**
     * @api {post} /api/zone/add-zone Add Zone API
     * @apiGroup Zone
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {Number} countryId Zone countryId
     * @apiParam (Request body) {String{..30}} code Zone code
     * @apiParam (Request body) {String{..128}} name Zone name
     * @apiParam (Request body) {Number} status Zone status
     * @apiParamExample {json} Input
     * {
     *      "countryId" : "",
     *      "code" : "",
     *      "name" : "",
     *      "status" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully created new zone.",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/zone/add-zone
     * @apiErrorExample {json} Zone error
     * HTTP/1.1 500 Internal Server Error
     */
    addZone(zoneParam, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const country = yield this.countryService.findOne({
                where: {
                    countryId: zoneParam.countryId,
                },
            });
            if (!country) {
                const errorResponse = {
                    status: 0,
                    message: 'Invalid country Id.',
                };
                return response.status(400).send(errorResponse);
            }
            const existZone = yield this.zoneService.findOne({
                where: {
                    name: zoneParam.name,
                    code: zoneParam.code,
                },
            });
            if (existZone) {
                const errorResponse = {
                    status: 0,
                    message: 'You have already added this zone.',
                };
                return response.status(400).send(errorResponse);
            }
            const zoneCode = yield this.zoneService.findOne({
                where: {
                    code: zoneParam.code,
                },
            });
            if (zoneCode) {
                return response.status(400).send({
                    status: 0,
                    message: 'This Zone code already exists.',
                });
            }
            const zoneName = yield this.zoneService.find({ select: ['name'] });
            for (const zone of zoneName) {
                if (zoneParam.name.toLowerCase() === zone.name.toLowerCase()) {
                    const errorResponse = {
                        status: 0,
                        message: 'You have already added this zone. ',
                    };
                    return response.status(400).send(errorResponse);
                }
            }
            const newZone = new Zone_1.Zone();
            newZone.countryId = zoneParam.countryId;
            newZone.code = zoneParam.code;
            newZone.name = zoneParam.name;
            newZone.isActive = zoneParam.status;
            const zoneSave = yield this.zoneService.create(newZone);
            if (zoneSave !== undefined) {
                const successResponse = {
                    status: 1,
                    message: 'Successfully created a new zone.',
                    data: zoneSave,
                };
                return response.status(200).send(successResponse);
            }
            else {
                const errorResponse = {
                    status: 0,
                    message: 'Unable to create a zone',
                };
                return response.status(400).send(errorResponse);
            }
        });
    }
    // update Zone API
    /**
     * @api {put} /api/zone/update-zone/:id Update Zone API
     * @apiGroup Zone
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {Number} countryId Zone countryId
     * @apiParam (Request body) {string} code Zone code
     * @apiParam (Request body) {String} name Zone name
     * @apiParam (Request body) {Number} status Zone status
     * @apiParamExample {json} Input
     * {
     *      "zoneId" : "",
     *      "countryId" : "",
     *      "code" : "",
     *      "name" : "",
     *      "status" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully updated Zone.",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/zone/update-zone/:id
     * @apiErrorExample {json} Zone error
     * HTTP/1.1 500 Internal Server Error
     */
    updateZone(id, zoneParam, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const zone = yield this.zoneService.findOne({
                where: {
                    zoneId: id,
                },
            });
            if (zone) {
                const country = yield this.countryService.findOne({
                    where: {
                        countryId: zoneParam.countryId,
                    },
                });
                if (!country) {
                    const errorResponse = {
                        status: 0,
                        message: 'Invalid country Id.',
                    };
                    return response.status(400).send(errorResponse);
                }
            }
            else {
                const errorResponse = {
                    status: 0,
                    message: 'Invalid zone Id.',
                };
                return response.status(400).send(errorResponse);
            }
            const existZone = yield this.zoneService.findOne({
                where: {
                    name: zoneParam.name,
                    code: zoneParam.code,
                    zoneId: (0, typeorm_1.Not)(zone.zoneId),
                },
            });
            if (existZone) {
                const errorResponse = {
                    status: 0,
                    message: 'You have already added this zone.',
                };
                return response.status(400).send(errorResponse);
            }
            const zoneCode = yield this.zoneService.findOne({
                where: {
                    code: zoneParam.code,
                    zoneId: (0, typeorm_1.Not)(zone.zoneId),
                },
            });
            if (zoneCode) {
                return response.status(400).send({
                    status: 0,
                    message: 'This Zone code already exists.',
                });
            }
            zone.countryId = zoneParam.countryId;
            zone.code = zoneParam.code;
            zone.name = zoneParam.name;
            zone.isActive = zoneParam.status;
            const zoneSave = yield this.zoneService.create(zone);
            if (zoneSave !== undefined) {
                const successResponse = {
                    status: 1,
                    message: 'Successfully updated the zone.',
                    data: zoneSave,
                };
                return response.status(200).send(successResponse);
            }
            else {
                const errorResponse = {
                    status: 0,
                    message: 'Unable to update the zone.',
                };
                return response.status(400).send(errorResponse);
            }
        });
    }
    // Zone List API
    /**
     * @api {get} /api/zone/zone-list Zone List API
     * @apiGroup Zone
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {Number} limit limit
     * @apiParam (Request body) {Number} offset offset
     * @apiParam (Request body) {String} keyword keyword
     * @apiParam (Request body) {String} status status
     * @apiParam (Request body) {Number} count count should be number or boolean
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully get zone list",
     *      "data":{
     *      "countryId"
     *      "code"
     *      "name"
     *      }
     *      "status": "1"
     * }
     * @apiSampleRequest /api/zone/zone-list
     * @apiErrorExample {json} Zone error
     * HTTP/1.1 500 Internal Server Error
     */
    zonelist(limit, offset, status, keyword, count, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const select = ['zoneId', 'countryId', 'code', 'name', 'isActive'];
            const search = [
                {
                    name: 'name',
                    op: 'like',
                    value: keyword,
                },
                {
                    name: 'isActive',
                    op: 'like',
                    value: status,
                },
            ];
            const WhereConditions = [];
            const relation = ['country'];
            const zoneList = yield this.zoneService.list(limit, offset, select, search, WhereConditions, relation, count);
            if (zoneList) {
                const successResponse = {
                    status: 1,
                    message: 'Successfully get all zone List',
                    data: (0, class_transformer_1.instanceToPlain)(zoneList),
                };
                return response.status(200).send(successResponse);
            }
            else {
                const errorResponse = {
                    status: 1,
                    message: 'unable to get zone List',
                };
                return response.status(400).send(errorResponse);
            }
        });
    }
    // delete Zone API
    /**
     * @api {delete} /api/zone/delete-zone/:id Delete Zone API
     * @apiGroup Zone
     * @apiHeader {String} Authorization
     * @apiParamExample {json} Input
     * {
     *      "zoneId" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully deleted Zone.",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/zone/delete-zone/:id
     * @apiErrorExample {json} Zone error
     * HTTP/1.1 500 Internal Server Error
     */
    deleteZone(id, response, request) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const zone = yield this.zoneService.findOne({
                where: {
                    zoneId: id,
                },
            });
            if (!zone) {
                const errorResponse = {
                    status: 0,
                    message: 'Invalid zone Id.',
                };
                return response.status(400).send(errorResponse);
            }
            const deleteZone = yield this.zoneService.delete(zone);
            if (deleteZone) {
                const successResponse = {
                    status: 1,
                    message: 'Successfully deleted the Zone.',
                };
                return response.status(200).send(successResponse);
            }
            else {
                const errorResponse = {
                    status: 0,
                    message: 'Unable to delete the zone.',
                };
                return response.status(400).send(errorResponse);
            }
        });
    }
};
tslib_1.__decorate([
    (0, routing_controllers_1.Post)('/add-zone'),
    (0, routing_controllers_1.Authorized)(['admin', 'create-zone']),
    tslib_1.__param(0, (0, routing_controllers_1.Body)({ validate: true })),
    tslib_1.__param(1, (0, routing_controllers_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [CreateZoneRequest_1.CreateZone, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ZoneController.prototype, "addZone", null);
tslib_1.__decorate([
    (0, routing_controllers_1.Put)('/update-zone/:id'),
    (0, routing_controllers_1.Authorized)(['admin', 'edit-zone']),
    tslib_1.__param(0, (0, routing_controllers_1.Param)('id')),
    tslib_1.__param(1, (0, routing_controllers_1.Body)({ validate: true })),
    tslib_1.__param(2, (0, routing_controllers_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, CreateZoneRequest_1.CreateZone, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ZoneController.prototype, "updateZone", null);
tslib_1.__decorate([
    (0, routing_controllers_1.Get)('/zone-list'),
    (0, routing_controllers_1.Authorized)(),
    tslib_1.__param(0, (0, routing_controllers_1.QueryParam)('limit')),
    tslib_1.__param(1, (0, routing_controllers_1.QueryParam)('offset')),
    tslib_1.__param(2, (0, routing_controllers_1.QueryParam)('status')),
    tslib_1.__param(3, (0, routing_controllers_1.QueryParam)('keyword')),
    tslib_1.__param(4, (0, routing_controllers_1.QueryParam)('count')),
    tslib_1.__param(5, (0, routing_controllers_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Number, String, String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ZoneController.prototype, "zonelist", null);
tslib_1.__decorate([
    (0, routing_controllers_1.Delete)('/delete-zone/:id'),
    (0, routing_controllers_1.Authorized)(['admin', 'delete-zone']),
    tslib_1.__param(0, (0, routing_controllers_1.Param)('id')),
    tslib_1.__param(1, (0, routing_controllers_1.Res)()),
    tslib_1.__param(2, (0, routing_controllers_1.Req)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ZoneController.prototype, "deleteZone", null);
ZoneController = tslib_1.__decorate([
    (0, routing_controllers_1.JsonController)('/zone'),
    tslib_1.__metadata("design:paramtypes", [zoneService_1.ZoneService,
        CountryService_1.CountryService])
], ZoneController);
exports.ZoneController = ZoneController;
//# sourceMappingURL=ZoneController.js.map