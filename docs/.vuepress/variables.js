// Add custom variables here:
const variables = {
  currentVersion: '1.1.9.2'
}

/**
 * Replaces all string occurrences of "${variableName}" in Markdown
 * with the variable value: "${currentVersion}" -> "1.1.9.2"
 */
module.exports = source =>
  Object.keys(variables).reduce((result, variable) =>
    result.replace(RegExp('\\${'+ variable +'}', 'g'), variables[variable])
  , source)
