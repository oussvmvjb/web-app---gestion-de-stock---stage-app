"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let StatRepository = class StatRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, articleRepositoryGetter) {
        super(models_1.Stat, dataSource);
        this.articleRepositoryGetter = articleRepositoryGetter;
        this.article = this.createBelongsToAccessorFor('article', articleRepositoryGetter);
        this.registerInclusionResolver('article', this.article.inclusionResolver);
    }
};
exports.StatRepository = StatRepository;
exports.StatRepository = StatRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.bdetud')),
    tslib_1.__param(1, repository_1.repository.getter('ArticleRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.BdetudDataSource, Function])
], StatRepository);
//# sourceMappingURL=stat.repository.js.map