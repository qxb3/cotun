/**
 * @param {number} indent
 * @param {string} str
 * @returns {string}
 */
export function multiLine(indent, str) {
  return str
    .split('\n')
    .slice(1)
    .map(v => v.slice(indent))
    .join('\n')
}
