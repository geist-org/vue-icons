export const toHumpName = (name: string): string => {
  return name.replace(/-(.)/g, (g) => g[1].toUpperCase())
}

export const toComponentName = (name: string): string => {
  const first = name.slice(0, 1).toUpperCase()
  const last = toHumpName(name.slice(1))
  return `${first}${last}`
}

export const replaceAll = (
  target: string,
  find: string,
  replace: string,
): string => {
  return target.split(find).join(replace)
}

export const parseStyles = (inlineStyle = '') => {
  const styles = inlineStyle.split(';').reduce((styleObject, stylePropertyValue) => {
    const [property, value] = stylePropertyValue
      .split(/^([^:]+):/)
      .filter((val, i) => i > 0)
      .map((item) => item.trim().toLowerCase())
    styleObject[property] = value
    return styleObject
  }, {})
  return JSON.stringify(styles)
    .replace('"var(--geist-foreground)"', 'this.color || "currentColor"')
    .replace('currentcolor', 'currentColor')
}

export const parseSvg = (svg: string) => {
  // Reactify attrs
  svg = svg.replace(/-([a-z])/g, (g) => g[1].toUpperCase())
  
  // Inject props
  svg = svg.replace(/<svg([^>]+)>/, `<svg$1 v-on="listeners" :style="styles">`)
  
  return svg
}
