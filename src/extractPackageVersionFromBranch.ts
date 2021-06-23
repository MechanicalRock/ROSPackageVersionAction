import * as fs from "fs";
import * as parser from "xml2json";

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

  return extractVersionFromJSON(JSON.parse(packageJSON));
};
