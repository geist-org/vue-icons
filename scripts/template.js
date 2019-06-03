// zeit's svg is not standard, unable to fill uniformly.

const makeComponent = (name, content, darkContent) => {
  return`<template>
  ${darkContent.replace(/<svg/, '<svg v-if="dark"')}
  ${content.replace(/<svg/, '<svg v-else')}
</template>
<script>
export default {
  name: '${name}',
  props: { dark: Boolean },
}
</script>`
}

const makeModules = (name) => {
  const formatName = str => {
    return str
      .split('-')
      .reduce((pre, current) => {
        if (!pre) return current
        const firstUpChar = current[0].toUpperCase()
        return `${pre}${firstUpChar}${current.slice(1, current.length)}`
      }, '')
  }
  const moduleName = name.includes('-') ? formatName(name) : name
  return {
    importStr: `import ${moduleName}Icon from './${name}'`,
    moduleName: `${moduleName}Icon`,
  }
}

const makeExports = moduleNames => {
  moduleNames.push('install')
  const content = moduleNames.reduce((pre, current) => `${pre}  ${current},\n`, '')
  return `if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)\n}\nexport {\n${content}}`
}

const makeExportAll = (moduleNames, aliasNameMap) => {
  const installs = moduleNames.reduce((pre, current) => `${pre}  vue.component('${aliasNameMap[current]}-icon', ${current})\n`, '')
  return `const install = vue => {\n${installs}}\n`
}

module.exports = {
  makeComponent,
  makeModules,
  makeExports,
  makeExportAll,
}
