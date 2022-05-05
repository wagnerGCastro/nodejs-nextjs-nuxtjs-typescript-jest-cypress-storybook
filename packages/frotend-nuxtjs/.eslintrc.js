module.exports = {
  root: true,

  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },

  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    ecmaFeatures: {
      legacyDecorators: true
    }
  },

  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'plugin:prettier-vue/recommended',
    'prettier/standard',
    'plugin:prettier/recommended',
    'prettier'
  ],

  plugins: ['standard', 'vue', 'prettier'],

  settings: {
    'prettier-vue': {
      SFCBlocks: {
        script: false,
        style: false
      }
    }
  },

  rules: {

    // 'prettier-vue/prettier': 'off',
    'prettier/prettier': [
      'error',
      {
        'endOfLine': 'auto'
      }
    ],

    'no-void': 'off',
    'block-spacing': 'error',
    'no-multi-spaces': 'error',
    'space-before-blocks': 'error',
    // 'space-before-function-paren': ['error', {'anonymous': 'always', 'named': 'never', 'asyncArrow': 'always'}],
    'space-in-parens': 'error',
    'spaced-comment': 'error',
    'arrow-spacing': 'error',
    'keyword-spacing': 'error',
    'no-useless-concat': 'error',
    'comma-dangle': ['error', 'never'],
    'semi': 'error',
    'quotes': ['error', 'single'],
    'no-param-reassign': 'error',

    'vue/attribute-hyphenation': 'error',
    'vue/component-definition-name-casing': 'error',
    'vue/html-closing-bracket-newline': 'error',
    'vue/mustache-interpolation-spacing': 'error',
    'vue/no-multi-spaces': 'error',
    'vue/no-spaces-around-equal-signs-in-attribute': 'error',
    'vue/prop-name-casing': 'error',
    'vue/require-default-prop': 'error',
    'vue/require-prop-types': 'error',
    'vue/v-bind-style': 'error',
    'vue/v-on-style': 'error',
    'vue/v-slot-style': 'error',
    'vue/no-v-html': 'error',
    'vue/this-in-template': 'error',
    'vue/no-boolean-default': 'error',
    'vue/no-duplicate-attr-inheritance': 'error',
    'vue/no-empty-component-block': 'error',
    'vue/no-static-inline-styles': 'error',
    'vue/no-useless-mustaches': 'error',
    'vue/padding-line-between-blocks': 'error',
    'vue/v-for-delimiter-style': 'error',
    'vue/html-self-closing': 'off',
    'vue/html-indent': 'off',
    'vue/require-direct-export': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/attributes-order': [
      'error',
      {
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'GLOBAL',
          ['UNIQUE', 'SLOT'],
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'OTHER_ATTR',
          'EVENTS',
          'CONTENT'
        ],
        alphabetical: false
      }
    ],
    'vue/component-tags-order': [
      'error',
      {
        order: ['script', 'template', 'style']
      }
    ],
    'vue/order-in-components': [
      'error',
      {
        order: [
          'el',
          'name',
          'key',
          'parent',
          'functional',
          ['delimiters', 'comments'],
          ['components', 'directives', 'filters'],
          'extends',
          'mixins',
          ['provide', 'inject'],
          'ROUTER_GUARDS',
          'layout',
          'middleware',
          'validate',
          'scrollToTop',
          'transition',
          'loading',
          'inheritAttrs',
          'model',
          ['props', 'propsData'],
          'emits',
          'setup',
          'asyncData',
          'data',
          'fetch',
          'head',
          'computed',
          'watch',
          'watchQuery',
          'LIFECYCLE_HOOKS',
          'methods',
          ['template', 'render'],
          'renderError'
        ]
      }
    ],
    'vue/block-tag-newline': [
      'error',
      {
        singleline: 'always',
        multiline: 'always',
        maxEmptyLines: 0
      }
    ],
    'vue/new-line-between-multi-line-property': [
      'error',
      {
        minLineOfMultilineProperty: 2
      }
    ],
    'vue/no-useless-v-bind': [
      'error',
      {
        ignoreIncludesComment: false,
        ignoreStringEscape: false
      }
    ],
    'vue/script-indent': [
      'error',
      2,
      {
        baseIndent: 0,
        switchCase: 0,
        ignores: []
      }
    ],
    'vue/max-attributes-per-line': ['error', {
      'singleline': {
        'max': 12
      },
      'multiline': {
        'max': 12
      }
    }]
  },

  overrides: [
    {
      files: ['*.vue'],
      rules: {
        'prettier-vue/prettier': 'error'
      }
    }
  ]
}
