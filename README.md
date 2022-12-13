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