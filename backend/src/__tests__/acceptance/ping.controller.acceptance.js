"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const testlab_1 = require("@loopback/testlab");
const test_helper_1 = require("./test-helper");
describe('PingController', () => {
    let app;
    let client;
    before('setupApplication', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        ({ app, client } = yield (0, test_helper_1.setupApplication)());
    }));
    after(() => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        yield app.stop();
    }));
    it('invokes GET /ping', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const res = yield client.get('/ping?msg=world').expect(200);
        (0, testlab_1.expect)(res.body).to.containEql({ greeting: 'Hello from LoopBack' });
    }));
});
//# sourceMappingURL=ping.controller.acceptance.js.map