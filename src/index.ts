import { extractPackageVersionFromBranch } from "./extractPackageVersionFromBranch";

const handler = async () => {
  const versionFromBranch = extractPackageVersionFromBranch("./package.xml");
  console.log(`Version, of package,xml ${versionFromBranch}`);

  return versionFromBranch;
};
handler();
