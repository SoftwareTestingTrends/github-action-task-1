# Working with GitHub Actions

## Exercise 5: Setup a GitHub Action to activate a workflow on a repository_dispatch event
### Prerequisite:
1. Github Account
2. An app with existing unit tests executed using Jest.
### Task:
Set up a GitHub Action to automatically run a workflow on a repository_dispatch event, ensuring that unit tests are included in the workflow execution.
### Example YAML File:
* [on-repository-dispatch.yml](.github/workflows/on-repository-dispatch.yml)

**Note:**
For the repository_dispatch event, you can manually trigger it using the GitHub API, or by creating a GitHub Action workflow that dispatches the event.
