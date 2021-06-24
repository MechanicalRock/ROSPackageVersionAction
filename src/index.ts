import { extractPackageVersionFromBranch } from "./extractPackageVersionFromBranch";
import { extractPackageVersionFromMaster } from "./extractPackageVersionFromMaster";
import * as core from "@actions/core";

const handler = async () => {
  const versionFromBranch = extractPackageVersionFromBranch("./package.xml");
  const versionFromMaster = await extractPackageVersionFromMaster();
  core.info(
    `Versions from branch and mater, ${versionFromBranch}, ${versionFromMaster}`
  );
  console.log(
    `Versions from branch and mater, ${versionFromBranch}, ${versionFromMaster}`
  );
  return versionFromBranch === versionFromMaster
    ? core.setFailed(
        "Action failed due to the package version between main and the branch are same. Please bump the package version"
      )
    : true;
};

handler();
