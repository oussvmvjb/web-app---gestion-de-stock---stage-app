"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ArticleController = class ArticleController {
    constructor(articleRepository) {
        this.articleRepository = articleRepository;
    }
    create(article) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // Check if an article with the given serial number already exists
            const existingArticle = yield this.articleRepository.findOne({
                where: { sn: article.sn }, // Ensure `serialNumber` is unique
            });
            if (existingArticle) {
                throw new rest_1.HttpErrors.BadRequest('An article with this serial number already exists');
            }
            // Save the article if the serial number does not exist
            return this.articleRepository.create(article);
        });
    }
    count(where) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.articleRepository.count(where);
        });
    }
    find(filter) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.articleRepository.find(filter);
        });
    }
    updateAll(article, where) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.articleRepository.updateAll(article, where);
        });
    }
    findById(id, filter) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.articleRepository.findById(id, filter);
        });
    }
    updateById(id, article) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.articleRepository.updateById(id, article);
        });
    }
    replaceById(id, article) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.articleRepository.replaceById(id, article);
        });
    }
    deleteById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.articleRepository.deleteById(id);
        });
    }
};
exports.ArticleController = ArticleController;
tslib_1.__decorate([
    (0, rest_1.post)('/article', {
        responses: {
            '200': {
                description: 'Article model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Article) } },
            },
        },
    }),
    (0, rest_1.response)(200, {
        description: 'Article model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Article) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Article]),
    tslib_1.__metadata("design:returntype", Promise)
], ArticleController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/article/count'),
    (0, rest_1.response)(200, {
        description: 'Article model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Article)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ArticleController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/article'),
    (0, rest_1.response)(200, {
        description: 'Array of Article model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Article, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Article)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ArticleController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/article'),
    (0, rest_1.response)(200, {
        description: 'Article PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Article, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Article)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Article, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ArticleController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/article/{id}'),
    (0, rest_1.response)(200, {
        description: 'Article model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Article, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Article, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ArticleController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/article/{id}'),
    (0, rest_1.response)(204, {
        description: 'Article PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Article, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Article]),
    tslib_1.__metadata("design:returntype", Promise)
], ArticleController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/article/{id}'),
    (0, rest_1.response)(204, {
        description: 'Article PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Article]),
    tslib_1.__metadata("design:returntype", Promise)
], ArticleController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/article/{id}'),
    (0, rest_1.response)(204, {
        description: 'Article DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], ArticleController.prototype, "deleteById", null);
exports.ArticleController = ArticleController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.ArticleRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ArticleRepository])
], ArticleController);
//# sourceMappingURL=article.controller.js.map