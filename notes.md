GitHub Actions is a feature on the GitHub platform that helps automate various tasks in the software development process. It allows you to define workflows—sequences of steps or actions—that run automatically in response to events like code pushes, pull requests, or issue creations. These workflows can include tasks such as running tests, building and deploying applications, and performing other custom actions. GitHub Actions helps streamline and enhance the software development lifecycle by automating repetitive tasks, improving collaboration among team members, and ensuring consistent and reliable processes in your projects.

**GitHub Actions – From GitHub Blog**
GitHub Actions now makes it easier to automate how you build, test, and deploy your projects on any platform, including Linux, macOS, and Windows. Run your workflows in a container or in a virtual machine.

**What is a workflow?**
A workflow is a configurable automated process that will run one or more jobs.

**What is an event?**
An event is a specific activity in the repository that's triggerable for a run. And an event can also be triggered from outside the repository. For example, an API call.

**What is a job? What are steps?**
A job is a set of steps in a workflow that are executed on the same runner. So, each step is either a shell script that will be executed or an action that will be run.
And steps are always executed in order, but they can be dependent on each other.

**What is an action?**
An action is a custom application for the GitHub Action platform that performs a complex but frequently repeated task. 
Actions are the building blocks that empower your workflow. 
Actions are individual tasks that you can combine to empower the jobs.

**What is a runner?**
A runner is a server that runs your workflow whenever it's triggered, each runner can run a single job at the same time.
A runner is a virtual machine (or any computer with a supported operating system) that runs the steps in a job.
Workflows are defined as .yml or .yaml file that are store in .github/workflows

**Other tasks possible with GitHub Actions:**
* You can run a workflow to automatically add the appropriate labels whenever someone creates a new issue in your repository. 

