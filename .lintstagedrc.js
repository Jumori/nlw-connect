import path from 'path'

const buildEslintCommand = filenames =>
  `next lint --fix --file ${filenames
    .map(f => path.relative(process.cwd(), f))
    .join(' --file ')}`

const lintStagedConfigs = {
  '*.{js,jsx,ts,tsx,mjs,cjs}': [buildEslintCommand, 'git add .']
}

export default lintStagedConfigs
