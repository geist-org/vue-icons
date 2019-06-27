const { join } = require('path')
const { makeComponent, makeModules, makeExports, makeExportAll } = require('./template')
const fse = require('fs-extra')

const lightSources = join(__dirname, '../svgs/light')
const darkSources = join(__dirname, '../svgs/dark')
const target = join(__dirname, '../packages')
const exampleDataFilePath = join(__dirname, '../src/assets/data.json')

const clear = (target) => {
  fse.removeSync(target)
  fse.ensureDirSync(target)
}

const makeEntry = names => {
  let content = '', moduleNames = [], aliasNameMap = {}
  names.forEach(name => {
    const { importStr, moduleName } = makeModules(name)
    content += `${importStr}\n`
    moduleNames.push(moduleName)
    aliasNameMap[moduleName] = name
  })
  const exportStr = makeExports(moduleNames)
  const exportAll = makeExportAll(moduleNames, aliasNameMap)
  
  return `${content}\n${exportAll}\n${exportStr}\n`
}

const compile = async () => {
  const files = fse.readdirSync(lightSources)
  const names = []
  await Promise.all(files.map(async name => {
    const lightPath = join(lightSources, name)
    const lightcontent = await fse.readFile(lightPath, 'utf-8')
  
    const componentName = name.replace('.svg', '')
    const component = makeComponent(componentName, lightcontent)
    
    await fse.writeFile(join(target, `${componentName}.vue`), component)
    names.push(componentName)
  }))
  
  const entryContent = makeEntry(names)
  await fse.writeFile(join(target, 'index.js'), entryContent)
  await fse.writeJSON(exampleDataFilePath, names)
}

;(async () => {
  clear(target)
  await compile()
})()

