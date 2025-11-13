"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupApplication = void 0;
const tslib_1 = require("tslib");
const __1 = require("../..");
const testlab_1 = require("@loopback/testlab");
function setupApplication() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const restConfig = (0, testlab_1.givenHttpServerConfig)({
        // Customize the server configuration here.
        // Empty values (undefined, '') will be ignored by the helper.
        //
        // host: process.env.HOST,
        // port: +process.env.PORT,
        });
        const app = new __1.BackendApplication({
            rest: restConfig,
        });
        yield app.boot();
        yield app.start();
        const client = (0, testlab_1.createRestAppClient)(app);
        return { app, client };
    });
}
exports.setupApplication = setupApplication;
//# sourceMappingURL=test-helper.js.map