
module.exports = {
    roots: [
        '<rootDir>/public/js'
    ],
    collectCoverageFrom: [
        '<rootDir>/public/js/**/*.{js,jsx,ts,tsx}',
        '!<rootDir>/public/js/**/*.d.ts'
    ],
    setupFiles: [
        'react-app-polyfill/jsdom'
    ],
    setupFilesAfterEnv: [
        '<rootDir>/jest_scripts/jest-setup.js'
    ],
    testMatch: [
        '<rootDir>/public/js/**/__tests__/**/*.{js,jsx,ts,tsx}',
        '<rootDir>/public/js/**/*.{spec,test}.{js,jsx,ts,tsx}'
    ],
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.(js|jsx|mjs|cjs|ts|tsx)$': '<rootDir>/jest_scripts/babelTransform.js',
        '^.+\\.css$': '<rootDir>/jest_scripts/cssTransform.js',
        '^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)': '<rootDir>/jest_scripts/fileTransform.js'
    },
    transformIgnorePatterns: [
        '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$',
        '^.+\\.module\\.(css|sass|scss)$'
    ],
    modulePaths: [],
    moduleFileExtensions: [
        'web.js',
        'js',
        'web.ts',
        'ts',
        'web.tsx',
        'tsx',
        'json',
        'web.jsx',
        'jsx',
        'node'
    ],
    moduleNameMapper: {
        'report_plugins': '<rootDir>/public/js/null_plugins/report_plugins.js',
        'download_links': '<rootDir>/public/js/null_plugins/download_links.js',
        'hit_buttons': '<rootDir>/public/js/null_plugins/hit_buttons.js',
        'search_header_plugin': '<rootDir>/public/js/null_plugins/search_header_plugin.js',
    },
    watchPlugins: [
        'jest-watch-typeahead/filename',
        'jest-watch-typeahead/testname'
    ],
    resetMocks: true
};