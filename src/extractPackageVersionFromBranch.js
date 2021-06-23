"use strict";
exports.__esModule = true;
exports.extractPackageVersionFromBranch = exports.extractVersionFromJSON = void 0;
var fs = require("fs");
var parser = require("xml2json");
var extractVersionFromJSON = function (json) {
    return json.package.version;
};
exports.extractVersionFromJSON = extractVersionFromJSON;
var extractPackageVersionFromBranch = function (path) {
    var packageXML = fs.readFileSync(path);
    var packageJSON = parser.toJson(packageXML);
    return exports.extractVersionFromJSON(JSON.parse(packageJSON));
};
exports.extractPackageVersionFromBranch = extractPackageVersionFromBranch;
