module.exports = {
  // 'prepare-commit-msg': 'exec < /dev/tty && npx cz --hook || true',
  'pre-commit': 'npx lint-staged',
  'commit-msg': 'npx tsx scripts/verify-commit.ts $1',
};
