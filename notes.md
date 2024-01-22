GitHub Actions is a feature on the GitHub platform that helps automate various tasks in the software development process. It allows you to define workflows—sequences of steps or actions—that run automatically in response to events like code pushes, pull requests, or issue creations. These workflows can include tasks such as running tests, building and deploying applications, and performing other custom actions. GitHub Actions helps streamline and enhance the software development lifecycle by automating repetitive tasks, improving collaboration among team members, and ensuring consistent and reliable processes in your projects.

**GitHub Actions – From GitHub Blog**
GitHub Actions now makes it easier to automate how you build, test, and deploy your projects on any platform, including Linux, macOS, and Windows. Run your workflows in a container or in a virtual machine.

## What is a workflow?
* A workflow is a configurable automated process that will run one or more jobs.
* Workflows are defined as .yml or .yaml file that are store in .github/workflows
* Defines jobs, runners, steps & actions.
* It's possible to enable/disable a work flow on need basis.
<img width="1144" alt="image" src="https://github.com/SoftwareTestingTrends/github-action-task-1/assets/12689597/5e8c3b25-901e-4d03-a46d-bb87c49e5e12">

### Workflow Artifacts: 
* An artifact refers to any output or result produced during the build and deployment process.
* Examples of artifacts include executable files, packages, archives (such as ZIP or JAR files), and other build outputs.
* Workflow artifacts are typically stored in a repository or another designated location and can be retrieved or downloaded by other parts of the workflow for further processing or deployment. 
* For free versions, GitHub stores these artifacts for 90 days.
* To share artifacts between jobs, you need to use these two actions: `actions/upload-artifact` and `actions/download-artifact`.

### Workflow Caching:
* Workflow caching is a mechanism used in continuous integration workflows, such as GitHub Actions, to improve build and execution times by storing and reusing certain dependencies or intermediate results across workflow runs.
* When a workflow is executed, it often involves tasks like downloading dependencies, compiling code, or other time-consuming operations. Workflow caching allows the results of these tasks to be cached or stored. In subsequent workflow runs, instead of repeating these tasks, the system can check if the necessary dependencies or intermediate results are already present in the cache. If so, it can retrieve them from the cache, saving time and resources.
* Workflow caching is particularly useful in scenarios where the dependencies or intermediate artifacts don't change frequently, as it helps avoid redundant work and speeds up the overall workflow execution. It contributes to the efficiency of continuous integration processes by optimizing the utilization of resources and reducing build times.
  
## What is an event?
An event is a specific activity in the repository that's triggerable for a run. And an event can also be triggered from outside the repository. For example, an API call.

## What is a job? What are steps?
A job is a set of steps in a workflow that are executed on the same runner. So, each step is either a shell script that will be executed or an action that will be run.
And steps are always executed in order, but they can be dependent on each other.

## What is an action?
* An action is a custom application for the GitHub Action platform that performs a complex but frequently repeated task. 
* Actions are the building blocks that empower your workflow. 
* Actions are individual tasks that you can combine to empower the jobs.

## What is a runner?
* A runner is a server that runs your workflow whenever it's triggered, each runner can run a single job at the same time.
* A runner is a virtual machine (or any computer with a supported operating system) that runs the steps in a job.

## Other tasks possible with GitHub Actions:
* You can run a workflow to automatically add the appropriate labels whenever someone creates a new issue in your repository. 

# Practice Drill:
1. Create a new action on a GitHub repository & trigger the action manually.
2. Practive workflow creation with below type of events:
* push event
* scheduled event
* pull-request event, and
* repository_dispatch event.
