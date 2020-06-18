export const toHumpName = (name: string): string => {
  return name.replace(/-(.)/g, g => g[1].toUpperCase())
}

export const toComponentName = (name: string): string => {
  const first = name.slice(0, 1).toUpperCase()
  const last = toHumpName(name.slice(1))
  return `${first}${last}`
}

export const replaceAll = (target: string, find: string, replace: string): string => {
  return target.split(find).join(replace)
}

export const parseStyles = (inlineStyle = '') => {
  return inlineStyle.split(';').reduce((styleObject, stylePropertyValue) => {
    // extract the style property name and value
    let [property, value] = stylePropertyValue
      .split(/^([^:]+):/)
      .filter((val, i) => i > 0)
      .map(item => item.trim().toLowerCase())

    styleObject[property] = value
    return styleObject
  }, {})
}

export const parseSvg = (svg: string, styles: any) => {
  const getSpecifiedColorVar = (val: string | undefined) => {
    if (!val) return '""'
    return val.includes('current') ? 'currentColor' : 'var(--geist-background)'
  }
  const geistFillColor = getSpecifiedColorVar(styles['--geist-fill'])
  const geistStrokeColor = getSpecifiedColorVar(styles['--geist-stroke'])
  svg = svg
    .replace(/<svg([^>]+)>/, `<svg$1 v-on="listeners" v-bind="attrs" :style="styles">`)
    .replace('var(--geist-fill)', geistFillColor)
    .replace('var(--geist-stroke)', geistStrokeColor)
    .replace(/ +(?= )/g, '')

  return svg
}
