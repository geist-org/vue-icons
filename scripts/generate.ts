import { JSDOM } from 'jsdom'
import fs from 'fs-extra'
import path from 'path'
import { toHumpName, parseStyles, parseSvg } from './tools'

const outputDir = path.join(__dirname, '../', 'packages')
const exampleDataFilePath = path.join(__dirname, '../src/assets/data.json')
const sourceFile = path.join(__dirname, '../', '.source')

const makeMixin = () => {
  return `export const props = { size: [String, Number], color: String }
export const computed = {
  listeners() { return { ...this.$listeners } },
  styles() {
    const sizes = this.size ? { height: this.size, width: this.size } : {}
    return {...sizes, ...{"color":this.color || "currentColor"}}
  },
  attrs() {
    return {
      'viewBox': '0 0 24 24',
      'shape-rendering': 'geometricPrecision',
      'width': 24,
      'height': 24,
      ...this.$attrs,
    }
  },
}`
}

export default (async () => {
  // clearup and load svgs
  await fs.remove(outputDir)
  const html = await fs.readFile(sourceFile, 'utf8')
  
  const document = new JSDOM(html).window.document
  const icons: Array<Element> = document.querySelectorAll('.geist-list .icon')
  let imports = '', install = '', exportNames = '', names = []
  
  await Promise.all(Array.from(icons).map(async (icon: Element) => {
    const name: string = icon.querySelector('.geist-text').textContent
    const componentName = toHumpName(name)
    imports += `import ${componentName}Icon from './${name}.vue'\n`
    install += `  vue.component('${name}-icon', ${componentName}Icon)\n`
    exportNames += `  ${componentName}Icon,\n`
    names.push(name)
  
    const svg = icon.querySelector('svg')
    // const styles = parseStyles(svg.getAttribute('style'))
    svg.removeAttribute('style')
  
    const component = `<template>${parseSvg(svg.outerHTML)}</template>
<script>
import { props, computed } from './mixin'
export default {
  name: "${name}-icon", props, computed,
}
</script>`
    return fs.outputFile(
      path.join(outputDir, `${name}.vue`),
      component,
    )
  }))
  
  const indexjs = `${imports}\n
const install = vue => {\n${install}\n}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export {\n${exportNames}  install,\n}`
  
  await fs.outputFile(
    path.join(outputDir, 'index.js'),
    indexjs,
  )
  
  await fs.outputFile(
    path.join(outputDir, 'mixin.js'),
    makeMixin(),
  )
  
  await fs.writeJSON(exampleDataFilePath, names)
})()
