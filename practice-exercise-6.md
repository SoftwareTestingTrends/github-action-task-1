# Working with GitHub Actions

## Exercise 6: Setup an E2E pipeline - In progress
### Prerequisite:
1. Github Account
2. An existing app with unit tests setup.
### Task:
Set up a GitHub Action to automatically trigger an E2E CI/CD check.
### Workflow Details:
#### Build Phase:
* Execute Unit Tests
* Perform linting checks
* Static code analysis (Security Analysis using CodeQL Bundle)
* Add a status badge to the ReadMe file that shows the workflow status.
 
    1. Create Status Badge
 
    <img width="1145" alt="image" src="https://github.com/SoftwareTestingTrends/github-actions-practice/assets/12689597/91094a1a-0477-47fa-ae73-d200f8321a30">
 
    2. Copy status badge markdown

    <img width="439" alt="image" src="https://github.com/SoftwareTestingTrends/github-actions-practice/assets/12689597/646910bc-d480-4e0c-8932-a68e9b04f771">
 
    3. Paste the code in the README.md (or wherever you want to show the status badge)

    <img width="1146" alt="image" src="https://github.com/SoftwareTestingTrends/github-actions-practice/assets/12689597/6d51fb5f-6fbf-4b0f-bd9e-bc7affea5779">

#### Delivery Phase:
* Execute cleanup & install
* Copy artifact to the server
* Use Github secrets for credentials

### Example YAML File:
* [e2e-pipeline.yml](.github/workflows/e2e-pipeline.yml)

