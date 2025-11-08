// few_shot_prompt.js
// Converts various string formats to camelCase.
// Examples:
//   "first name"   -> "firstName"
//   "user_id"      -> "userId"
//   "SCREEN_NAME"  -> "screenName"
//   "mobile-number"-> "mobileNumber"

function toCamelCase(input) {
    if (typeof input !== 'string') return '';
    const str = input.trim();
    if (str === '') return '';

    // If there are no non-alphanumeric separators, preserve internal casing
    // but ensure the first character is lowercased (keeps existing camelCase).
    if (!/[^A-Za-z0-9]/.test(str)) {
        return str.charAt(0).toLowerCase() + str.slice(1);
    }

    // Split on any non-alphanumeric sequence, lowercase parts, then join.
    const parts = str
        .split(/[^A-Za-z0-9]+/)
        .filter(Boolean)
        .map(p => p.toLowerCase());

    const [first, ...rest] = parts;
    return first + rest.map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
}

module.exports = toCamelCase;

// Quick manual tests (uncomment to run)
// console.log(toCamelCase('first name'));    // firstName
// console.log(toCamelCase('user_id'));      // userId
// console.log(toCamelCase('SCREEN_NAME'));  // screenName
// console.log(toCamelCase('mobile-number'));// mobileNumber