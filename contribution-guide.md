# Contribution Guidelines

These are the general rules for contributing to the project repository. Here you will find standards for contribution as well as instructions for making changes to the project.

## How to Make Changes

For those new to working with a group on GitHub, we have provided a brief overview of the process.

### Fork

To make changes to the repository, or otherwise contribute to the project, you first need to fork the repository: 

1. From the repository page, locate the dashboard at the top of the page. Click on the **Code** tab on the far left.

2. From the code tab, move your mouse to the upper right to a menu with *Edit Pins*, *Watch*, *Fork,* and *Star* options. Click **Fork**, *"+ Create a new fork"*. Only Fork from the **main** branch!

### Set up a Development Space

After forking the repository, start setting up your development environment. You can either develop on a local machine or use [GitHub's Codespaces](https://docs.github.com/en/codespaces). We recommend using Visual Studio or Visual Studio Code for local development, as they accommodate several languages and extensions and provide tools that make developing with a team easier. Using the same environment across various machines also prevents the "Well, it works on my machine..." issue common to development. Of course, this also poses the risk of ignoring potential issues that may arise when end users do not have the same or expected set-up.

We will assume that a cloned repository is used for the rest of this document. The other potential fix for this issue is containerizing the project using Docker, for which some support has been configured. Project leads, please thoroughly research and read through the [compose](./n4c/compose.yaml) and [Dockerfile](./n4c/Dockerfile)s before resorting to this method, as they have only been configured for the main app files.

### Create a New Local Branch

1. Use `git branch <new-branch>` to create a new branch within your local repository. Use `git branch` to confirm that your branch has been created.

2. Use `git switch <branch>` or `git checkout <branch>` to access and edit your new branch. Alternatively, you can use `git checkout -b <new-branch>` to create a new branch and switch to it simultaneously. Make sure the title of your new branch suits the name of your change or new feature. Creating a new branch in your local repository will not affect the branches of the remote repository.

### Implement Your Changes

Make the necessary changes to your files.

### Stage Files

Use `git status` to view modified or added files. Stage files for commit by typing `git add <file1> <file2> ...` into the command line, or use `git add .` or `git add --all` to stage all files for commit.

### Commit Changes

Use `git commit` to prompt the text editor and enter a commit message that adequately describes the changes made to the repository. Alternatively, use `git commit -m <message>` or `git commit --message=<msg>` to enter the commit message on the same line.

### Push Commits

If an upstream branch has not yet been set:

1. Type `git remote -v` or `git remote --verbose` to display the full URLs your local repository's remote branches. If you have not added any outside of the default origin branch (the repository you forked from), you should only see: 

```
origin  https://github.com/USERNAME/NCC_Computer_Club_Website_Fork.git (fetch)
origin  https://github.com/USERNAME/NCC_Computer_Club_Website_Fork.git (push)
upstream        https://github.com/NCC-Computer-Club-Projects/NCC_Computer_Club_Website.git (fetch)
upstream        https://github.com/NCC-Computer-Club-Projects/NCC_Computer_Club_Website.git (push)
```

2. Type `git branch --set-upstream-to=origin/main <new-branch>`. This command will set the forked repository's main branch as the upstream branch for your new feature. This allows you to type `git push` without specifying a remote to push to or a local branch to push from. *Do not* set your upstream remote as the upstream for your new branch. Doing so will create a new branch directly on the original repository. If everyone does this, it will be impossible to safely manage changes to the repo.

3. Type `git branch -vv` or `git branch --verbose` to display your local branches and their set upstreams:

```
main f266952 [origin/main] Make a test change
* test f704b21 [upstream/<new-branch>] test #1
```

#### branch names

* 'main': The main branch of the cloned repo
* '* test': The newly-created branch we are currently working on

#### commit hashes

* 'f266952': Hash from the latest commit on the **main** branch
* 'f704b21': Hash from the latest commit on the **test** branch

#### square brackets

* 'origin/': Indicates the repository where this branch was *cloned* from
* 'main': The main branch of the forked remote repository
* 'upstream/': Indicates the repository where this branch was *forked* from
* 'test': The main branch of the forked remote repository

#### commit messages

* 'Make a test change': Message from the latest commit on the **main** branch
* 'test #1': Message from the latest commit on the **test** branch

Once your upstream branch has been set, or if your upstream had already been set, from your new branch type `git push` without arguments to push local commits to the upstream (origin) branch. 

### Create a Pull Request (PR)

After pushing, go to your forked repository. At the top of the page you will see the message "new-branch had recent pushes ... ago" and a green button to the right labeled "Compare and pull request"; click on this. Title your PR and leave a short comment explaining the changes you've made. Wait for a maintainer to review and merge your PR with the rest of the project.

## Standards

These standards are to be maintained by contributors when attempting to make changes to the repository. Following the rules prevents confusion and makes it easier for maintainers to keep track of what's happening with development.

### Writing Commit Messages 

From adding punctuation to injecting new code– every change made to a file in the repo must be committed with a message that adequately describes the change.

### Naming Files and Directories

Use snake case ( - ) when creating files, and camel case ( _ ) for naming directories.