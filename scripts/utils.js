const replaceKeyVal = {
  'fill="var(--geist-foreground)"': ' :fill="dark ? \'#fff\' : \'#000\'"',
  'stroke="var(--geist-foreground)"': ' :stroke="dark ? \'#fff\' : \'#000\'"',
  'fill="var(--geist-background)"': ' :fill="dark ? \'#000\' : \'#fff\'"',
  'stroke="var(--geist-background)"': ' :stroke="dark ? \'#000\' : \'#fff\'"',
  'fill="var(--accents-5)': ' :fill="dark ? \'#888\' : \'#666\'"',
  'stroke="var(--accents-5)"': ' :stroke="dark ? \'#888\' : \'#666\'"',
  'stop-color="var(--geist-foreground)"': ' :stop-color="dark ? \'#fff\' : \'#000\'"',
  'stop-color="var(--geist-background)"': ' :stop-color="dark ? \'#000\' : \'#fff\'"',
}

const replaceAll = (str, source, target) => {
  const result = str.replace(source, target)
  if (!result.includes(source)) return result
  return replaceAll(result, source, target)
}

const replaceVar = (str) => {
  Object
    .keys(replaceKeyVal)
    .forEach(key => {
      str = replaceAll(str, key, replaceKeyVal[key])
    })
  return str
}

const removeClass = str => {
  return str
    .replace(/(?<= )class=".*?"/g, '')
}

const hasReplaceKey = str => {
  return !!Object
    .keys(replaceKeyVal)
    .find(key => str.includes(key))
}

module.exports = {
  replaceVar,
  removeClass,
  hasReplaceKey,
}
