# Working with GitHub Actions

## Exercise 6: Setup an E2E pipeline - In progress
### Prerequisite:
1. Github Account
2. An existing app with unit tests setup.
### Task:
Set up a GitHub Action to automatically trigger an E2E CI/CD check.
### Workflow Details:
* Build Phase:
  * Execute Unit Tests
  * Perform linting checks
  * Static code analysis (Security Analysis using CodeQL Bundle)
  * Add a label to the ReadMe file
 
    <img width="1145" alt="image" src="https://github.com/SoftwareTestingTrends/github-actions-practice/assets/12689597/91094a1a-0477-47fa-ae73-d200f8321a30">


### Example YAML File:
* [e2e-pipeline.yml](.github/workflows/e2e-pipeline.yml)

