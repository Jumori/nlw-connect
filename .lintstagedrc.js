const lintStagedConfigs = {
  '**.{js,ts,cjs,mjs,d.cts,d.mts,jsx,tsx,json,jsonc}': [
    'biome check --files-ignore-unknown=true --write --unsafe --organize-imports-enabled=true --no-errors-on-unmatched',
    'biome format --files-ignore-unknown=true --write --no-errors-on-unmatched --staged',
    'biome lint --files-ignore-unknown=true --write --no-errors-on-unmatched --staged',
    'git add .'
  ]
}

export default lintStagedConfigs
