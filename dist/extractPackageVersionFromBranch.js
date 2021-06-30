"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractPackageVersionFromBranch = exports.extractVersionFromJSON = void 0;
const fs = __importStar(require("fs"));
const parser = __importStar(require("xml2json"));
const core = __importStar(require("@actions/core"));
const extractVersionFromJSON = (json) => {
    return json.package.version;
};
exports.extractVersionFromJSON = extractVersionFromJSON;
const extractPackageVersionFromBranch = (path) => {
    const packageXML = fs.readFileSync(path);
    const packageJSON = parser.toJson(packageXML);
    const version = exports.extractVersionFromJSON(JSON.parse(packageJSON));
    core.setOutput("version", version);
    return version;
};
exports.extractPackageVersionFromBranch = extractPackageVersionFromBranch;
