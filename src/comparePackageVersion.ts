import { extractPackageVersionFromBranch } from "./extractPackageVersionFromBranch";
import { extractPackageVersionFromMaster } from "./extractPackageVersionFromMaster";
import * as core from "@actions/core";

async () => {
  const versionFromBranch = extractPackageVersionFromBranch("./package.xml");
  const versionFromMaster = await extractPackageVersionFromMaster();

  return versionFromBranch !== versionFromMaster
    ? core.setFailed(
        "Action failed due to the difference of package version between main and the branch."
      )
    : true;
};
