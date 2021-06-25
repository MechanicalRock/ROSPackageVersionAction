import simpleGit, { SimpleGit } from "simple-git";
import * as parser from "xml2json";

import { extractVersionFromJSON } from "./extractPackageVersionFromBranch";

export const extractPackageVersionFromMaster = async () => {
  const git: SimpleGit = simpleGit();
  await git.checkout("main");
  const branch = await git.branch();

  console.log("gittttt", branch.all, branch.current, branch.branches);
  let packageXMLFile;
  try {
    packageXMLFile = await git.show("main:package.xml");
  } catch (e) {
    throw e;
  }

  console.log(`XML master, ${packageXMLFile}`);
  const packageJSON = parser.toJson(packageXMLFile);

  return extractVersionFromJSON(JSON.parse(packageJSON));
};
extractPackageVersionFromMaster();
