# Working with GitHub Actions

## Exercise 4: Setup a GitHub Action to activate a workflow on a given schedule
### Prerequisite:
1. Github Account
2. An app with existing unit tests executed using Jest.
### Task:
Set up a GitHub Action to automatically run a workflow on the given schedule, ensuring that unit tests are included in the workflow execution.
### Example YAML File:
* [on-schedule.yml](.github/workflows/on-schedule.yml)

**Note:**
The schedule configuration using cron: '0 0 * * *' is a way to specify a recurring time-based trigger for a workflow. The cron syntax follows a pattern of minute, hour, day of the month, month, and day of the week.

In the provided file, the 0 0 * * * cron expression means:

Minute: 0 (i.e., at the 0th minute of the hour)
Hour: 0 (i.e., at the 0th hour of the day)
Day of the month: * (every day of the month)
Month: * (every month)
Day of the week: * (every day of the week)
As a result, the workflow will be scheduled to run daily at midnight (00:00) UTC time. This is a common way to set up workflows for tasks that need to occur on a regular basis, such as daily automated builds or cleanup processes.
