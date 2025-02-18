import path from 'node:path'

const lintStagedConfigs = {
  '**.{js|ts|cjs|mjs|d.cts|d.mts|jsx|tsx|json|jsonc}': [
    'biome check --files-ignore-unknown=true', // Format and check for errors
    'biome check --write --no-errors-on-unmatched', // Format, organize imports, check for errors, and apply safe fixes
    'biome check --write --organize-imports-enabled=false --no-errors-on-unmatched', // Format and apply safe fixes
    'biome check --write --unsafe --no-errors-on-unmatched', // Format, organize imports, check for errors, and apply safe and unsafe fixes
    'biome format --write --no-errors-on-unmatched', // Formatting
    'biome lint --write --no-errors-on-unmatched', // Check for errors and apply safe fixes
    'git add .'
  ]
}

export default lintStagedConfigs
