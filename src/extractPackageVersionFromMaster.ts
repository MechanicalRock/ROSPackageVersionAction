import simpleGit, { SimpleGit } from "simple-git";
import * as parser from "xml2json";
import * as core from "@actions/core";
import { extractVersionFromJSON } from "./extractPackageVersionFromBranch";

export const extractPackageVersionFromMaster = async () => {
  const git: SimpleGit = simpleGit();

  const packageXMLFile = await git.show("main:package.xml");
  core.info(`XML master, ${packageXMLFile}`);
  const packageJSON = parser.toJson(packageXMLFile);

  return extractVersionFromJSON(JSON.parse(packageJSON));
};
