"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let StatController = class StatController {
    constructor(statRepository) {
        this.statRepository = statRepository;
    }
    create(stat) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.statRepository.create(stat);
        });
    }
    count(where) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.statRepository.count(where);
        });
    }
    find(filter) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.statRepository.find(filter);
        });
    }
    updateAll(stat, where) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.statRepository.updateAll(stat, where);
        });
    }
    findById(id, filter) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.statRepository.findById(id, filter);
        });
    }
    updateById(id, stat) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.statRepository.updateById(id, stat);
        });
    }
    replaceById(id, stat) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.statRepository.replaceById(id, stat);
        });
    }
    deleteById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.statRepository.deleteById(id);
        });
    }
};
exports.StatController = StatController;
tslib_1.__decorate([
    (0, rest_1.post)('/stat'),
    (0, rest_1.response)(200, {
        description: 'Stat model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Stat) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Stat, {
                    title: 'NewStat',
                    exclude: ['sn'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], StatController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/stat/count'),
    (0, rest_1.response)(200, {
        description: 'Stat model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Stat)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], StatController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/stat'),
    (0, rest_1.response)(200, {
        description: 'Array of Stat model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Stat, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Stat)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], StatController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/stat'),
    (0, rest_1.response)(200, {
        description: 'Stat PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Stat, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Stat)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Stat, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], StatController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/stat/{id}'),
    (0, rest_1.response)(200, {
        description: 'Stat model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Stat, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Stat, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], StatController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/stat/{id}'),
    (0, rest_1.response)(204, {
        description: 'Stat PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Stat, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Stat]),
    tslib_1.__metadata("design:returntype", Promise)
], StatController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/stat/{id}'),
    (0, rest_1.response)(204, {
        description: 'Stat PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Stat]),
    tslib_1.__metadata("design:returntype", Promise)
], StatController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/stat/{id}'),
    (0, rest_1.response)(204, {
        description: 'Stat DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], StatController.prototype, "deleteById", null);
exports.StatController = StatController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.StatRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.StatRepository])
], StatController);
//# sourceMappingURL=stat.controller.js.map