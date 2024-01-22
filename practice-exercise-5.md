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

To manually trigger a repository_dispatch event using the GitHub API, you can use the following steps:

1. Generate a Personal Access Token (PAT):
* Go to your GitHub account settings.
* Navigate to "Developer settings" > "Personal access tokens."
* Generate a new token with the repo scope, which grants access to repositories.

2. Make a cURL Request:
* Open a terminal or command prompt.

3. Send the Repository Dispatch Event:

Use the following cURL command to trigger the repository_dispatch event for your repository.

curl -X POST \
  -H "Authorization: token YOUR_ACCESS_TOKEN" \
  -H "Accept: application/vnd.github.everest-preview+json" \
  -d '{"event_type": "practice-event"}' \
  https://api.github.com/repos/your-username/your-repository/dispatches

**Example:**

curl -X POST \
  -H "Authorization: token YOUR_ACCESS_TOKEN" \
  -H "Accept: application/vnd.github.everest-preview+json" \
  -d '{"event_type": "practice-event"}' \
  https://api.github.com/repos/SoftwareTestingTrends/github-actions-practice/dispatches

