import { extractPackageVersionFromBranch } from "./extractPackageVersionFromBranch";
import { extractPackageVersionFromMaster } from "./extractPackageVersionFromMaster";
import * as core from "@actions/core";

async () => {
  console.log("To check if this function has been called");
  const versionFromBranch = extractPackageVersionFromBranch("./package.xml");
  const versionFromMaster = await extractPackageVersionFromMaster();
  console.log(
    "Versions from branch and mater",
    versionFromBranch,
    versionFromMaster
  );
  return versionFromBranch === versionFromMaster
    ? core.setFailed(
        "Action failed due to the package version between main and the branch are same. Please bump the package version"
      )
    : true;
};
