DinoPark Safety platform
==========================

Prerequisites
-------------

- Git client of your choice
- NodeJS (Installation through brew(macos)/chocolatey(windows) recommended)

Install
-------

- Clone project from https://github.com/
- Run `npm i` to install NPM dependencies
- Test project with `npm run test`

Run project
------------

- `npm run dev`

NPM Commands
------------

- `storybook`: Run storybook to work on individual components
- `build`: Build webpack production variant of the application
- `dev`: Start local webpack dev environment
- `test`: Execute jest snapshot testing and other tests
- `test:watch`: Execute tests and watch for changes
- `test:debug <path to test>`: Debug test in chrome debugger `chrome://inspect` click `Open dedicated DevTools for Node`
- `lint`: Lints all typscript

### Versioning
Npm versioning will update the packjson and package-lock file. This will help with versioning of the state saved in the local storage. A new version will trigger a reset of a clean state given there might have been state changes on which the application could fail.

`npm version patch` 0.0.x
`npm version minor` 0.x.0
`npm version major` x.0.0

### Commit messages
Symantic commit messages enables us to generate changelogs and gives developer ease while viewing the git history.

e.g. `test(helper): ensure fetch response object is valid`

The format includes **type** and a **subject**:

```
<type>(<optional scope>): <subject>

<body>
```

#### Type
Must be one of the following:

- **feat**: New feature
- **fix**: Bug fix
- **docs**: Changes to the documentation
- **style**: Formatting, missing semi colons, etc; no production code change
- **refactor**: Refactoring production code, eg. renaming a variable
- **test**: Adding missing tests, refactoring tests; no production code change
- **chore**: Changes to the build process or auxiliary tools and libraries


### Hygen Timesavers
We’ve added [hygen](http://www.hygen.io/), the scalable code generator that saves you time, to the stack so that you can quickly generate a __new__ component using our component standard, which is reflected in the component structure outputted by the command.

Below is an example of issuing the command to create an `atom` component called `my-component`.

```sh
npx hygen modules component --name my-component --type atom
```

#### options - type
* `atom`
* `molecule`
* `organism`
