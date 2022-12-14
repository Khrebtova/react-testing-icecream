# testing react 

# ESLint 
`npm install eslint-plugin-testing-library eslint-plugin-jest-dom `

delete ESLint config from package.json and 

add separate file : `.eslintrc.json ` with :

`{
    "plugins": [
        "testing-library",
        "jest-dom"
    ],
    "extends": [
        "react-app",
        "react-app/jest",
        "plugin:testing-library/react",
        "plugin:jest-dom/recommended"
    ]
}`

create folder `.vscode` inside create file `settings.json `:

`{
    "editor.codeActionsOnSave": { "source.fixAll.eslint": true }
}`

add to the `.gitignore`: 

`
.vscode
.eslintcache
`

# Bootstrap installation 

`npm install react-bootstrap bootstrap `

## Mock Service Worker Setup

https://mswjs.io/docs/getting-started/mocks/rest-api

`npm install msw --save-dev`

1. create handlers:
    `mkdir src/mocks`
    `touch src/mocks/handlers.js`

2.  create test server 
    `touch src/mocks/server.js`
    with:
    `
    import { setupServer } from 'msw/node'
    import { handlers } from './handlers'

    // This configures a request mocking server with the given request handlers.
    export const server = setupServer(...handlers)

    `

3.  make sure test server listens during all test reset test server after each test:
    
    Modify the src/setupTests.js tests setup file:

    `
    import { server } from './mocks/server.js'
    // Establish API mocking before all tests.
    beforeAll(() => server.listen())
    // Reset any request handlers that we may add during the tests,
    // so they don't affect other tests.
    afterEach(() => server.resetHandlers())
    // Clean up after the tests are finished.
    afterAll(() => server.close())
    `

