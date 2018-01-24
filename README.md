# React-Pack
YARB

(Yet ANOTHER React Boilerplate)

... Like, why do we even need this many ???

🤔 🤔 🤔

Because JavaScript in 2018, that's why.

## We've got all your needs (if you need these things)
Included | What It Is | Major Ver
---|---|---
React | JS framework | 16
React Router | URL and route management | 4
Redux | App state management | 3
Redux Thunk | Function as Redux actions | 2
Redux Promise Middleware | Chainable async Redux actions | 5
Styleguidist | Individual React component testing and documentation | 6
Jest | JS unit and component testing | 21
Babel | Use the latest JS syntax safely | 6
PostCSS | Use the latest CSS syntax safely | 3
ESLint + Prettier | Enforcing JS best practices + Auto-formatting | 4
Stylelint + Stylefmt | Enforcing CSS best practices + Auto-formatting | 8
Webpack | Build and bundle | 3
React Hot Loader | Instantly update your React app without refreshing |  3
Optimizations | Minifying, tree-shaking, image compression | ...
Pre-Commit Hooks | Force linting clean code before committing | 1
Environment Based Globals | Specific variables for dev and production environments | ...


## Getting Started
#### First, simply install your dependencies
```js
npm install
```

## Local Development
#### Start your futuristic React dev environment at [localhost:3000](localhost:3000)
```js
npm start
```
## Production Grade** Distribution
#### Create a compressed and compatible release at [./dist](./dist)
```js
npm run dist
```

** Needs to actually be tested in production before claim is valid

## Testing
* Create test file with a .spec.js or .test.js extensions and watch 'em goooooo

#### Run a single pass of all unit tests
```js
npm test
```

#### Run tests in the background for related changes
```js
npm run test:watch
```

## Linting
* Linting happens automatically before each commit to ensure code is properly clean before pushing
* You can also lint manually as well as automagically fixing (almost) all linting issues
* Feel free to configure your own settings with `.eslintrc` and `.stylelintrc` in the root directory

CMD | What it does 
---|---
`npm run lint`| Check for JS and CSS linting issues
`npm run lint:fix` | Automatically format and fix most JS and CSS linting issues
`npm run lint:js` | Check for JS only linting issues
`npm run lint:js:fix ` | Automatically format and fix most JS only linting issues
`npm run lint:css` | Check for CSS only linting issues
`npm run lint:css:fix` | Automatically format and fix most CSS only linting issues

I also recommend using a linting extension for your text editor of choice to easily highlight issues informing you that your style dun goofed

## Styleguidist
#### Interact with your React components in isolation while doubling as documentation
```js
npm run styleguide
```

## TODO:
* babel-preset-env polyfills for targetted browser versions
* Reorganized package.json dependencies into proper dev/non-dev