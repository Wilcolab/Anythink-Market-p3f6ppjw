// basic_prompt.js
// Prompt describing a function that converts strings to camelCase.
// Exported as a string to be used when generating or testing the implementation.

const prompt = `Write a function named \`toCamelCase(str)\` that converts an arbitrary input string to camelCase.

Behavior and rules:
- Remove all characters that are not letters, digits, spaces, hyphens, or underscores.
- Treat spaces, hyphens, and underscores as word separators.
- Collapse consecutive separators and whitespace into a single separator.
- The first word should be entirely lowercase.
- Capitalize the first letter of each subsequent word and make the rest of that word lowercase.
- Preserve numeric characters as-is within words.
- Trim leading and trailing separators/whitespace.
- Return an empty string for inputs that contain no letters or digits.

Examples:
- "hello world" -> "helloWorld"
- " Foo_bar-baz " -> "fooBarBaz"
- "make    me--CAMEL_case!" -> "makeMeCamelCase"
- "123 go_now" -> "123GoNow"
`;

module.exports = prompt;