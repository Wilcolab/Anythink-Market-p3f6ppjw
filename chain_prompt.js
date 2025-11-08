/**
 * toKebabCase
 *
 * Description:
 * Converts a given string into kebab-case: all lowercase words separated by hyphens.
 * It should handle:
 *  - camelCase       -> "myVariableName"   -> "my-variable-name"
 *  - PascalCase      -> "MyClassName"      -> "my-class-name"
 *  - snake_case      -> "some_value_here"  -> "some-value-here"
 *  - strings with spaces or punctuation -> "Hello, World!" -> "hello-world"
 *
 * Examples:
 *  toKebabCase("myVariableName")   // "my-variable-name"
 *  toKebabCase("MyClassName")      // "my-class-name"
 *  toKebabCase("some_value_here")  // "some-value-here"
 *  toKebabCase("Hello, World!")    // "hello-world"
 *
 * Pseudocode:
 *  - Convert input to string and trim whitespace.
 *  - Insert a separator between a lowercase/number and an uppercase letter
 *    so "myVar" becomes "my-Var".
 *  - Insert a separator between an uppercase sequence and an uppercase+lowercase
 *    boundary so "XMLHttp" becomes "XML-Http".
 *  - Replace any non-alphanumeric characters (spaces, underscores, punctuation)
 *    with a hyphen.
 *  - Collapse consecutive hyphens into a single hyphen.
 *  - Remove leading/trailing hyphens.
 *  - Convert the whole result to lowercase and return it.
 */

/**
 * Convert a string to kebab-case.
 *
 * @param {string} input - The input value to convert.
 * @returns {string} Kebab-cased string.
 */
function toKebabCase(input) {
    // Ensure we are working with a string and remove surrounding whitespace.
    const s = String(input).trim();

    if (s.length === 0) return '';

    return s
        // 1) Insert hyphen between a lowercase/number and uppercase letter:
        //    "myVar" -> "my-Var"
        .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
        // 2) Insert hyphen between an uppercase sequence and an uppercase followed by lowercase:
        //    "XMLHttp" -> "XML-Http"
        .replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, '$1-$2')
        // 3) Replace any non-alphanumeric characters (including underscores, spaces, punctuation) with hyphens
        .replace(/[^a-zA-Z0-9]+/g, '-')
        // 4) Collapse multiple hyphens into one
        .replace(/-+/g, '-')
        // 5) Remove leading/trailing hyphens
        .replace(/^-|-$/g, '')
        // 6) Convert everything to lowercase
        .toLowerCase();
}

/* Example usages and outputs */
console.log(toKebabCase('myVariableName'));    // "my-variable-name"
console.log(toKebabCase('MyClassName'));       // "my-class-name"
console.log(toKebabCase('some_value_here'));   // "some-value-here"
console.log(toKebabCase('Hello, World!'));     // "hello-world"
console.log(toKebabCase('  leading and  trailing  ')); // "leading-and-trailing"
console.log(toKebabCase('XMLHttpRequest'));    // "xml-http-request"
console.log(toKebabCase('version1Number2'));   // "version1-number2"

/* Export for CommonJS environments */
module.exports = toKebabCase;