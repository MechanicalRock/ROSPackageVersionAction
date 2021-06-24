import simpleGit, { SimpleGit } from "simple-git";
import * as parser from "xml2json";

import { extractVersionFromJSON } from "./extractPackageVersionFromBranch";
export const extractPackageVersionFromMaster = async () => {
  const git: SimpleGit = simpleGit();

  const packageXMLFile = await git.show("main:package.xml");
  const packageJSON = parser.toJson(packageXMLFile);

  return extractVersionFromJSON(JSON.parse(packageJSON));
};
