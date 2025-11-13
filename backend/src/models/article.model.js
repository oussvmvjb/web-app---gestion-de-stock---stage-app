"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Article = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const stat_model_1 = require("./stat.model");
let Article = class Article extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.Article = Article;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: false,
        required: true,
        length: 50,
    }),
    tslib_1.__metadata("design:type", String)
], Article.prototype, "sn", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        length: 50,
    }),
    tslib_1.__metadata("design:type", String)
], Article.prototype, "nomarticle", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        length: 50,
    }),
    tslib_1.__metadata("design:type", String)
], Article.prototype, "model", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Article.prototype, "description", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        length: 50,
    }),
    tslib_1.__metadata("design:type", String)
], Article.prototype, "quantity", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Article.prototype, "emplacement", void 0);
tslib_1.__decorate([
    (0, repository_1.hasOne)(() => stat_model_1.Stat),
    tslib_1.__metadata("design:type", stat_model_1.Stat)
], Article.prototype, "stat", void 0);
exports.Article = Article = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Article);
//# sourceMappingURL=article.model.js.map