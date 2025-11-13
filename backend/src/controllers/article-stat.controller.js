"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleStatController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ArticleStatController = class ArticleStatController {
    constructor(articleRepository) {
        this.articleRepository = articleRepository;
    }
    get(id, filter) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.articleRepository.stat(id).get(filter);
        });
    }
    create(id, stat) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.articleRepository.stat(id).create(stat);
        });
    }
    patch(id, stat, where) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.articleRepository.stat(id).patch(stat, where);
        });
    }
    delete(id, where) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.articleRepository.stat(id).delete(where);
        });
    }
};
exports.ArticleStatController = ArticleStatController;
tslib_1.__decorate([
    (0, rest_1.get)('/articles/{id}/stat', {
        responses: {
            '200': {
                description: 'Article has one Stat',
                content: {
                    'application/json': {
                        schema: (0, rest_1.getModelSchemaRef)(models_1.Stat),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('filter')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ArticleStatController.prototype, "get", null);
tslib_1.__decorate([
    (0, rest_1.post)('/articles/{id}/stat', {
        responses: {
            '200': {
                description: 'Article model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Stat) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Stat, {
                    title: 'NewStatInArticle',
                    exclude: ['sn'],
                    optional: ['article']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ArticleStatController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/articles/{id}/stat', {
        responses: {
            '200': {
                description: 'Article.Stat PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Stat, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Stat))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ArticleStatController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/articles/{id}/stat', {
        responses: {
            '200': {
                description: 'Article.Stat DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Stat))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ArticleStatController.prototype, "delete", null);
exports.ArticleStatController = ArticleStatController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.ArticleRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ArticleRepository])
], ArticleStatController);
//# sourceMappingURL=article-stat.controller.js.map