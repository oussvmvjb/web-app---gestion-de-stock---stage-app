"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EtudiantController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
const rest_2 = require("@loopback/rest");
let EtudiantController = class EtudiantController {
    constructor(etudiantRepository) {
        this.etudiantRepository = etudiantRepository;
    }
    create(etudiant) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // Check if a student with the given CIN already exists
            const existingEtudiant = yield this.etudiantRepository.findOne({
                where: { cin: etudiant.cin },
            });
            if (existingEtudiant) {
                throw new rest_2.HttpErrors.BadRequest('An etudiant with this CIN already exists');
            }
            // Save the etudiant if the CIN does not exist
            return this.etudiantRepository.create(etudiant);
        });
    }
    count(where) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.etudiantRepository.count(where);
        });
    }
    find(filter) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.etudiantRepository.find(filter);
        });
    }
    updateAll(etudiant, where) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.etudiantRepository.updateAll(etudiant, where);
        });
    }
    findById(id, filter) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.etudiantRepository.findById(id, filter);
        });
    }
    updateById(id, etudiant) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.etudiantRepository.updateById(id, etudiant);
        });
    }
    replaceById(id, etudiant) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.etudiantRepository.replaceById(id, etudiant);
        });
    }
    deleteById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.etudiantRepository.deleteById(id);
        });
    }
};
exports.EtudiantController = EtudiantController;
tslib_1.__decorate([
    (0, rest_1.post)('/etudiant', {
        responses: {
            '200': {
                description: 'Etudiant model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Etudiant } } },
            },
        },
    }),
    (0, rest_1.response)(200, {
        description: 'Etudiant model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Etudiant) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Etudiant]),
    tslib_1.__metadata("design:returntype", Promise)
], EtudiantController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/etudiant/count'),
    (0, rest_1.response)(200, {
        description: 'Etudiant model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Etudiant)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EtudiantController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/etudiant'),
    (0, rest_1.response)(200, {
        description: 'Array of Etudiant model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Etudiant, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Etudiant)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EtudiantController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/etudiant'),
    (0, rest_1.response)(200, {
        description: 'Etudiant PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Etudiant, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Etudiant)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Etudiant, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EtudiantController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/etudiant/{id}'),
    (0, rest_1.response)(200, {
        description: 'Etudiant model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Etudiant, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Etudiant, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EtudiantController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/etudiant/{id}'),
    (0, rest_1.response)(204, {
        description: 'Etudiant PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Etudiant, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Etudiant]),
    tslib_1.__metadata("design:returntype", Promise)
], EtudiantController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/etudiant/{id}'),
    (0, rest_1.response)(204, {
        description: 'Etudiant PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Etudiant]),
    tslib_1.__metadata("design:returntype", Promise)
], EtudiantController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/etudiant/{id}'),
    (0, rest_1.response)(204, {
        description: 'Etudiant DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], EtudiantController.prototype, "deleteById", null);
exports.EtudiantController = EtudiantController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.EtudiantRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.EtudiantRepository])
], EtudiantController);
//# sourceMappingURL=etudiant.controller.js.map