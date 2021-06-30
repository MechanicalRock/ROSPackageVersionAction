import { extractPackageVersionFromBranch } from "./extractPackageVersionFromBranch";

const handler = async () => {
  const versionFromBranch = extractPackageVersionFromBranch("./package.xml");
  console.log(`Versions from branch, ${versionFromBranch}`);

  return versionFromBranch;
};
handler();
