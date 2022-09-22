# How to contribute
 
Thanks for checking out **Hakawati**, a collection of UI components for Vue. Hakawati is an open source project currently maintained by the team at [Hikaya](https://hikaya.io/team). All contributors are welcome to submit issues and make pull requests to the repository.
 
If you'd like to contribute, start by searching through the [issues](https://github.com/hikaya-io/hakawati/issues) and [pull requests](https://github.com/hikaya-io/hakawati/pulls) to see whether someone else has raised a similar idea or question. To get started with a simple issue, you can checkout the issues labelled `good first issue`. If you see none, feel free to create an issue and ask for guidance on where to start.

- If you find an issue you would like to work on, feel free to write a comment on the issue and ask to be assigned.
- If you don't find one you would like to work on, create an issue, assign a label and @mention one of the maintainers to let them know about the issue.

## Contribution review process
 
This repo is currently maintained by the team at [Hikaya](https://hikaya.io/team/), who have `maintainer` access. They will likely review your contribution. If you haven't heard from anyone in 5 days, feel free to bump the thread or @mention a maintainer to review your contribution.

## Community
 
Discussions about Hakawati take place in the `Issues` as well as in [Discussions](https://github.com/hikaya-io/hakawati/discussions). Anybody is welcome to join these conversations.

# How we manage our code

**Source control:** Git

**Source code:** This project is stored in [GitHub](https://github.com/hikaya-io/hakawati)

**Branches:**

We use 3 types of branches in all our repositories :

`develop` - All bug fixes, defects, and tasks.<br>
`Feature branches`: All feature branches must be named like `123-explanation-of-feature-fix`, where 123 is the issue number on GitHub.<br>
`main` - Clean code in production environment<br>

> **Note:**
> * All pull requests should be based off of the `develop` branch.

## Commits

We use Github to track **Issues** and **Pull Requests** for all our work. When making commits, please ensure that you have created a separate branch off of the `develop` branch before you begin making changes to the source code.

Feel free to make commits as often as possible to your branch. If the issue you are working on has been open for a few days, consider rebasing your branch to `develop` branch get the latest changes before you create a Pull Request. This will help you avoid merge conflicts when raising your Pull Request.

### Commit message format
To ensure commit messages are readable when going through project history, we use a common commit message format. The message format by [Angular](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines) is very comprehensive and we find it useful to follow.

Each commit message consists of a header, a body and a footer. The header is mandatory with the body and the footer as optional given the size of the commit. The header has a special format that includes a type, a scope, and a subject, where the scope of the header is optional.

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

Please refer to the [Angular guidelines](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines) for more details on the format.

## Pull Requests

Once you have pushed code and your branch to Github, you can open a Pull Request. There are two types of Pull Requests: *Draft* and *Ready for review*. Feel free to create a draft Pull Request for larger features that require additional input from other contributors or is a research/proof of concept task.

Here are some guidelines for making Pull Requests:
- All developers MUST submit Pull Requests for any change made on any of the Hikaya Repositories.
- The PR must be reviewed by at least **1 developer** other than the author.
- PR Checkpoints:
  - Check that the application still functions locally as before
  - All set checks pass
  - The bug/feature/enhancement in question is fully addressed and satisfies the issue acceptance criteria
  - PRs will use a predefined template. In the PR body, the following questions should be addressed:
    - **Descriptive Title:** Add the issue number followed by a brief description of the ticket e.g., `HAK-001: Adds project status`
    - **What issue(s) does this PR resolve?** *List all the issues resolved by this PR*
      - [ ] Issue 1
      
      Type the following to automatically link the issue to this PR: `Resolves _[Github Issue #](https://example.com/ABCD-XXXX)_`
      
      > If this PR is still a `work in progress`, add the label = `WIP`.
    - **Considerations and implementation** Describe the approach you took to solve the issue and mention any issues that others should pay attention to.
    - **How to test** List the steps for others to test your changes.
      - [ ] Step 1
    - **Test(s) added** List the tests you've added or need to be added:
      - [ ] Test 1
    - **Mentions?** @mention the people you'd like to review this PR

## Deployments

We are currently using a mix of **GitHub Actions** for simple build checks and deployments to our environments.

We use `CodeCov` to provide reports on test coverage for each Pull Request against the main branches. Over time, our aim is to increase test coverage including unit tests, integration tests, end-to-end tests, and automatic deployments to development process.

We have a CI/CD process set up for deployment to all our environments. On `develop`, any PR that is merged will automatically deploy to our dev environment. Any developer is allowed to deploy their changes to `develop` environment. To request access, contact one of the maintainers.

## QA testing
We perform QA testing when features are merged into `develop`. We use automated end-to-end testing by Cypress to provide a strong foundation for functional testing.

## Coding conventions

### Naming conventions
- All folder names should only contain lowercase characters.
- All file names should have only lowercase characters and use CamelCase.
 