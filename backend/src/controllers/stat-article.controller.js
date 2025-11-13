"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatArticleController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let StatArticleController = class StatArticleController {
    constructor(statRepository) {
        this.statRepository = statRepository;
    }
    getArticle(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const stat = yield this.statRepository.findById(id, {
                include: [{ relation: 'article' }], // Include the article relation
            });
            if (!stat.article) {
                throw new Error(`Article related to stat with id ${id} not found`);
            }
            return stat.article; // Return the related article
        });
    }
};
exports.StatArticleController = StatArticleController;
tslib_1.__decorate([
    (0, rest_1.get)('/stats/{id}/article', {
        responses: {
            '200': {
                description: 'Article belonging to Stat',
                content: {
                    'application/json': {
                        schema: (0, rest_1.getModelSchemaRef)(models_1.Article),
                    },
                },
            },
            '404': {
                description: 'Article not found',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], StatArticleController.prototype, "getArticle", null);
exports.StatArticleController = StatArticleController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.StatRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.StatRepository])
], StatArticleController);
//# sourceMappingURL=stat-article.controller.js.map