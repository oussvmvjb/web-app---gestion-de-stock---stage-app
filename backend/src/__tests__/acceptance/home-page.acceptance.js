"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const test_helper_1 = require("./test-helper");
describe('HomePage', () => {
    let app;
    let client;
    before('setupApplication', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        ({ app, client } = yield (0, test_helper_1.setupApplication)());
    }));
    after(() => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        yield app.stop();
    }));
    it('exposes a default home page', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        yield client
            .get('/')
            .expect(200)
            .expect('Content-Type', /text\/html/);
    }));
    it('exposes self-hosted explorer', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        yield client
            .get('/explorer/')
            .expect(200)
            .expect('Content-Type', /text\/html/)
            .expect(/<title>LoopBack API Explorer/);
    }));
});
//# sourceMappingURL=home-page.acceptance.js.map