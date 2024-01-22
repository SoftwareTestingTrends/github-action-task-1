# Working with GitHub Actions

## Exercise 3: 
### Prerequisite:
1. Github Account
2. An existing app.
### Task:
Set up a GitHub Action to automatically run a workflow when a PR is created.

Hint: To trigger the pull request event, you can create a new branch, add a new test, and open a pull request.
### Workflow Details:
On a pull request, the workflow checks out the code, sets up Node.js, installs dependencies, and runs the Jest tests.
### Example YAML File:
* [code-pull-request.yml](.github/workflows/code-pull-request.yml)

