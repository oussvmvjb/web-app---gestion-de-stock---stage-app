"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migrate = void 0;
const tslib_1 = require("tslib");
const application_1 = require("./application");
function migrate(args) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const existingSchema = args.includes('--rebuild') ? 'drop' : 'alter';
        console.log('Migrating schemas (%s existing schema)', existingSchema);
        const app = new application_1.BackendApplication();
        yield app.boot();
        yield app.migrateSchema({ existingSchema, models: ['Etudiant'] });
        yield app.migrateSchema({ existingSchema, models: ['Article'] });
        yield app.migrateSchema({ existingSchema, models: ['Stat'] });
        // Connectors usually keep a pool of opened connections,
        // this keeps the process running even after all work is done.
        // We need to exit explicitly.
        process.exit(0);
    });
}
exports.migrate = migrate;
migrate(process.argv).catch(err => {
    console.error('Cannot migrate database schema', err);
    process.exit(1);
});
//# sourceMappingURL=migrate.js.map