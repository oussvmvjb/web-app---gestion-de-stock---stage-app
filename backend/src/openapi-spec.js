"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const application_1 = require("./application");
/**
 * Export the OpenAPI spec from the application
 */
function exportOpenApiSpec() {
    var _a, _b, _c;
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const config = {
            rest: {
                port: +((_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000),
                host: (_b = process.env.HOST) !== null && _b !== void 0 ? _b : 'localhost',
            },
        };
        const outFile = (_c = process.argv[2]) !== null && _c !== void 0 ? _c : '';
        const app = new application_1.BackendApplication(config);
        yield app.boot();
        yield app.exportOpenApiSpec(outFile);
    });
}
exportOpenApiSpec().catch(err => {
    console.error('Fail to export OpenAPI spec from the application.', err);
    process.exit(1);
});
//# sourceMappingURL=openapi-spec.js.map