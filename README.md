# Next kit

This is a [Next.js](https://nextjs.org/) project setup.

## Getting Started

First, run the development server:

```bash
npm run website:start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/zeit/next.js/) - your feedback and contributions are welcome!

## Deploy on ZEIT Now

The easiest way to deploy your Next.js app is to use the [ZEIT Now Platform](https://zeit.co/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Conventions

### Commit messages

Commit messages follow [angular convention](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#commit-message-format)

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

#### Type

Must be one of the following:

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing
  semi-colons, etc)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing or correcting existing tests
- **chore**: Changes to the build process or auxiliary tools and libraries such as documentation
  generation

#### Scope

The scope could be anything specifying place of the commit change. For example `$location`,
`$browser`, `$package`, `$workspace`, etc...

You can use `*` when the change affects more than a single scope.

#### Subject

The subject contains succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- don't capitalize first letter
- no dot (.) at the end

#### Body

Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes".
The body should include the motivation for the change and contrast this with previous behavior.

#### Footer

The footer should contain any information about **Breaking Changes** and is also the place to
reference GitHub issues that this commit closes.

- **Breaking Changes** should start with the word `BREAKING CHANGE:` with a space or two newlines.
  The rest of the commit message is then used for this.

### Naming of folders, files, variables, functions, classes and etc..

Naming should adhere to the following rules:

- folder names are written in **camelCase**
- file names are created in **PascalCase**
  > ❗️Exception: library configuration files and supplementary files: `*.svg`, `*.ico`, `index.ts`
- **variables**, **classes**, **interfaces**, etc. are written in **PascalCase**
  > ❗️Exception: **functions** and **scoped variables** that are created in the scope of _classes, functions, components and objects_ are written in **camelCase**

If the above rules do not apply, the following should not be used under any circumstances:

- **snake_case**
- **kebab-case**
- **SNAKE_CASE_ALL_CAPS**
