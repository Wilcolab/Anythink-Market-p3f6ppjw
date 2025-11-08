'use strict';

/**
 * Convert a string to camelCase.
 * Throws a descriptive Error for invalid or non-convertible inputs.
 *
 * Examples:
 *   camelCase("Hello world") // -> "helloWorld"
 *
 * @param {string} input
 * @returns {string}
 */
function camelCase(input) {
    if (arguments.length !== 1) {
        throw new TypeError('camelCase expects exactly one argument.');
    }

    if (input === null || input === undefined) {
        throw new TypeError('Invalid input: value is null or undefined.');
    }

    if (typeof input !== 'string') {
        throw new TypeError('Invalid input: expected a string.');
    }

    const trimmed = input.trim();
    if (trimmed.length === 0) {
        throw new Error('Invalid input: empty string cannot be converted to camelCase.');
    }

    // Require at least one alphabetic character to consider it convertible (reject "5", "123", etc.)
    if (!/[A-Za-z]/u.test(trimmed)) {
        throw new Error('Invalid input: string does not contain alphabetic characters and cannot be converted.');
    }

    // Split by any non-alphanumeric sequence (spaces, punctuation, underscores, dashes, etc.)
    const tokens = trimmed.match(/[A-Za-z0-9]+/gu) || [];
    if (tokens.length === 0) {
        throw new Error('Invalid input: no convertible words found.');
    }

    const first = tokens[0].toLowerCase();
    const rest = tokens.slice(1).map(token => {
        const chars = Array.from(token);
        const firstChar = chars.shift() || '';
        return firstChar.toUpperCase() + chars.join('').toLowerCase();
    });

    return first + rest.join('');
}

module.exports = camelCase;

/**
 * Convert a string to dot.case (lowercase words joined by dots).
 * Throws a descriptive Error for invalid or non-convertible inputs.
 *
 * Examples:
 *   dotCase("Hello world") // -> "hello.world"
 *
 * @param {string} input
 * @returns {string}
 */
function dotCase(input) {
    if (arguments.length !== 1) {
        throw new TypeError('dotCase expects exactly one argument.');
    }

    if (input === null || input === undefined) {
        throw new TypeError('Invalid input: value is null or undefined.');
    }

    if (typeof input !== 'string') {
        throw new TypeError('Invalid input: expected a string.');
    }

    const trimmed = input.trim();
    if (trimmed.length === 0) {
        throw new Error('Invalid input: empty string cannot be converted to dot.case.');
    }

    // Split by any non-alphanumeric sequence (spaces, punctuation, underscores, dashes, etc.)
    const tokens = trimmed.match(/[A-Za-z0-9]+/gu) || [];
    if (tokens.length === 0) {
        throw new Error('Invalid input: no convertible words found.');
    }

    return tokens.map(t => t.toLowerCase()).join('.');
}

module.exports = { camelCase, dotCase };