"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stat = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const article_model_1 = require("./article.model");
let Stat = class Stat extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.Stat = Stat;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: false,
        required: true,
        length: 50,
    }),
    tslib_1.__metadata("design:type", String)
], Stat.prototype, "sn", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        default: 0,
        length: 50,
    }),
    tslib_1.__metadata("design:type", Number)
], Stat.prototype, "onstock", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        default: 0,
        length: 50,
    }),
    tslib_1.__metadata("design:type", Number)
], Stat.prototype, "onpanne", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        default: 0,
        length: 50,
    }),
    tslib_1.__metadata("design:type", Number)
], Stat.prototype, "enreparation", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        default: 0,
        length: 50,
    }),
    tslib_1.__metadata("design:type", Number)
], Stat.prototype, "rebut", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => article_model_1.Article),
    tslib_1.__metadata("design:type", article_model_1.Article)
], Stat.prototype, "article", void 0);
exports.Stat = Stat = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Stat);
//# sourceMappingURL=stat.model.js.map