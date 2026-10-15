export const GITHUB_REPO = "https://github.com/Jclong98/goose";
export const GITHUB_BRANCH = "main";

/**
 * Builds a GitHub blob URL for a file path relative to the repo root,
 * e.g. `src/components/GButton/GButton.vue`.
 */
export function githubBlobUrl(repoRelativePath: string): string {
  return `${GITHUB_REPO}/blob/${GITHUB_BRANCH}/${repoRelativePath.split(/[\\/]/).join("/")}`;
}
