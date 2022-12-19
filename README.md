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

# install AXIOS to retrieve data from the server

`npm install axios`

import axios and use it as fetch request 
axios
      .get(`http://localhost:3030/${optionType}`)
      .then((response) => setItems(response.data))
      .catch((error) => {
        console.log(error);
      });
      
update package.json with :
`"test": "react-scripts test --transformIgnorePatterns \"node_modules/(?!axios)/\""`

# wrap tests in context provider

create dir : test-utils
create file: testing-library-utils.jsx

with code:

import { render  } from "@testing-library/react";
import { OrderDetailsProvider } from "../context/OrderDetails";

const renderWithContext = (ui, options) => {
  render(ui, { wrapper: OrderDetailsProvider, ...options });
}

// re-export everything
export * from "@testing-library/react";

// override render method
export { renderWithContext as render }


them update all test (what needed) by importing all methods like render and screen and waitFor from that file. 


# Standard questions to ask before write new tests:

1. what to render? 
    - the smallest component possible 

2. Do we need to pass any props ? 

3. do we need to wrap the component ( for example in context provider)
    - does the provider get used? 
    - is it already wrapped within the component?

4. Where should the test go? 
    - which file should test go? 
    - is it unit test? of functional?
    - do we need new file? or they belong in existing file

5. What to test? 
    - what behavior that needs testing?

6. How to test? 
    - what queries and events? 

7. Do we need await? 
    - is there anything async going on ?
