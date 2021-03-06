'use strict';

// ==================================================
// Styles Configuration
// ==================================================

// Linting rules : https://github.com/stylelint/stylelint/blob/master/docs/user-guide/rules.md

module.exports = function() {
    var paths = require('../configs/paths')();

    var settings = {
        maps: true,
        autoprefixer: ['last 2 versions'],
        lint: false,
        lintIgnore: [],
        lintFiles: [
            paths.src.styles + '**/*.scss',
            paths.src.base + 'leaves/styles/**/*.scss'
        ],
        lintRules: {
            plugins: [
                'stylelint-scss',
                'stylelint-selector-bem-pattern'
            ],
            defaultSeverity: 'warning',
            rules: {
                'at-rule-empty-line-before': [ 'always', {
                    except: [ 'blockless-group', 'first-nested' ],
                    ignore: ['after-comment'],
                    ignoreAtRules: ['at-root', 'content', 'each', 'else', 'extend', 'for', 'function', 'if', 'include', 'mixin', 'return', 'warn', 'while']
                } ],
                'at-rule-name-case': 'lower',
                'at-rule-name-space-after': 'always-single-line',
                'at-rule-no-unknown': [ true, {
                    ignoreAtRules: [
                        'at-root', 'content', 'each', 'else', 'extend', 'for', 'function', 'if', 'include', 'mixin', 'return', 'warn', 'while'
                    ],
                } ],
                'at-rule-semicolon-newline-after': 'always',
                'block-closing-brace-newline-after': [ 'always', {
                    ignoreAtRules: ['if', 'else']
                } ],
                'block-closing-brace-newline-before': 'always-multi-line',
                'block-closing-brace-space-before': 'always-single-line',
                'block-no-empty': true,
                'block-opening-brace-newline-after': 'always-multi-line',
                'block-opening-brace-space-after': 'always-single-line',
                'block-opening-brace-space-before': 'always',
                'color-hex-case': 'lower',
                'color-hex-length': 'short',
                'color-no-invalid-hex': true,
                'comment-empty-line-before': [ 'always', {
                    except: ['first-nested'],
                    ignore: ['stylelint-commands']
                } ],
                'comment-whitespace-inside': 'always',
                'declaration-bang-space-after': 'never',
                'declaration-bang-space-before': 'always',
                'declaration-block-no-ignored-properties': true,
                'declaration-block-no-shorthand-property-overrides': true,
                'declaration-block-semicolon-newline-after': 'always-multi-line',
                'declaration-block-semicolon-space-after': 'always-single-line',
                'declaration-block-semicolon-space-before': 'never',
                'declaration-block-single-line-max-declarations': 1,
                'declaration-block-trailing-semicolon': 'always',
                'declaration-colon-newline-after': 'always-multi-line',
                'declaration-colon-space-after': 'always-single-line',
                'declaration-colon-space-before': 'never',
                'function-calc-no-unspaced-operator': true,
                'function-comma-newline-after': 'always-multi-line',
                'function-comma-space-after': 'always-single-line',
                'function-comma-space-before': 'never',
                'function-linear-gradient-no-nonstandard-direction': true,
                'function-max-empty-lines': 0,
                'function-name-case': 'lower',
                'function-parentheses-newline-inside': 'always-multi-line',
                'function-parentheses-space-inside': 'never-single-line',
                'function-whitespace-after': 'always',
                'indentation': [ 4, {
                    indentInsideParens: 'once',
                    severity: 'error'
                } ],
                'keyframe-declaration-no-important': true,
                'length-zero-no-unit': true,
                'max-empty-lines': 2,
                'media-feature-colon-space-after': 'always',
                'media-feature-colon-space-before': 'never',
                'media-feature-no-missing-punctuation': true,
                'media-feature-range-operator-space-after': 'always',
                'media-feature-range-operator-space-before': 'always',
                'media-query-list-comma-newline-after': 'always-multi-line',
                'media-query-list-comma-space-after': 'always-single-line',
                'media-query-list-comma-space-before': 'never',
                'media-query-parentheses-space-inside': 'never',
                'no-empty-source': true,
                'no-eol-whitespace': true,
                'no-extra-semicolons': true,
                'no-invalid-double-slash-comments': true,
                'no-missing-eof-newline': true,
                'number-leading-zero': 'never',
                'number-no-trailing-zeros': true,
                'property-case': 'lower',
                'rule-non-nested-empty-line-before': [ 'always-multi-line', {
                    ignore: ['after-comment']
                } ],
                'selector-attribute-brackets-space-inside': 'never',
                'selector-attribute-operator-space-after': 'never',
                'selector-attribute-operator-space-before': 'never',
                'selector-combinator-space-after': 'always',
                'selector-combinator-space-before': 'always',
                'selector-list-comma-newline-after': 'always',
                'selector-list-comma-space-before': 'never',
                'selector-max-empty-lines': 0,
                'selector-pseudo-class-case': 'lower',
                'selector-pseudo-class-no-unknown': true,
                'selector-pseudo-class-parentheses-space-inside': 'never',
                'selector-pseudo-element-case': 'lower',
                'selector-pseudo-element-colon-notation': 'double',
                'selector-pseudo-element-no-unknown': true,
                'selector-type-case': 'lower',
                'selector-type-no-unknown': [ true, {
                    ignoreTypes: ['objectfit']
                } ],
                'shorthand-property-no-redundant-values': true,
                'string-no-newline': true,
                'unit-case': 'lower',
                'unit-no-unknown': true,
                'value-list-comma-newline-after': 'always-multi-line',
                'value-list-comma-space-after': 'always-single-line',
                'value-list-comma-space-before': 'never',
            }
        }
    };

    return settings;
};
