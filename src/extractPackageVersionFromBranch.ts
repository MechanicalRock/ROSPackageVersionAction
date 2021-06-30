import * as fs from "fs";
import * as parser from "xml2json";
import * as core from "@actions/core";

type ROSPackageXML = {
  package: {
    name: string;
    version: string;
    description: string;
  };
};
export const extractVersionFromJSON = (json: ROSPackageXML) => {
  return json.package.version;
};

export const extractPackageVersionFromBranch = (path: string) => {
  const packageXML = fs.readFileSync(path);
  const packageJSON = parser.toJson(packageXML);
  const version = extractVersionFromJSON(JSON.parse(packageJSON));
  core.setOutput("version", version);
  return version;
};
