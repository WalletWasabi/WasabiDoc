// Add custom variables here:
const variables = {
  currentVersion: '1.1.10.1',
  zksnacksPublicKeyFingerprint: '6FB3 872B 5D42 292F 5992 0797 8563 4832 8949 861E'
}

module.exports = source =>
  Object.keys(variables).reduce((result, variable) =>
    result.replace(RegExp('\\${'+ variable +'}', 'g'), variables[variable])
  , source)
