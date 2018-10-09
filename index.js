module.exports = {
  transform: {
    '^.+\\.[jt]sx?$': 'ts-jest',
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub'
  },

  testRegex: '/tests?/.+\\.spec\\.(js|ts)x?$',

  moduleNameMapper: {
    '^@/(.+)$': '<rootDir>/src/$1',
    '^vue$': 'vue/dist/vue.runtime.common.js'
  },

  moduleFileExtensions: ['ts', 'js', 'json', 'vue', 'jsx', 'tsx'],

  snapshotSerializers: ['jest-serializer-vue'],

  testURL: 'http://localhost/'
}
