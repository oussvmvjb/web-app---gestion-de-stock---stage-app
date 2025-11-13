"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Etudiant = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Etudiant = class Etudiant extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.Etudiant = Etudiant;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: false,
        required: true,
        length: 50,
    }),
    tslib_1.__metadata("design:type", String)
], Etudiant.prototype, "cin", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        length: 50,
    }),
    tslib_1.__metadata("design:type", String)
], Etudiant.prototype, "nom", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        length: 50,
    }),
    tslib_1.__metadata("design:type", String)
], Etudiant.prototype, "prenom", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        length: 50,
    }),
    tslib_1.__metadata("design:type", String)
], Etudiant.prototype, "email", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        length: 50,
    }),
    tslib_1.__metadata("design:type", String)
], Etudiant.prototype, "clas", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        length: 50,
    }),
    tslib_1.__metadata("design:type", String)
], Etudiant.prototype, "psw", void 0);
exports.Etudiant = Etudiant = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Etudiant);
//# sourceMappingURL=etudiant.model.js.map