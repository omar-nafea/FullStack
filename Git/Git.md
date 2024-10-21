# Git 
### What is Git and GitHub?

Git is a version control system designed to help users keep track of changes to files within their projects. 

Git was designed to fix the problem that it's created, Linus Torvalds was having with managing the huge challenge of keeping track of all changes to the kernel, the operating system for Linux  
Linux has thousands of contributors who commit changes and updates daily. Git was designed to help with the challenge of tracking all these changes and updates.

GitHub is a Cloud-based hosting service that lets
you manage Git repositories from a user interface.
A Git repository is used to track
all changes to files in a specific folder,
and keep a history of all those changes. 

### Connecting to GitHub
When using Github via the Coursera platform, it is required to authenticate using a Personal Access Token over HTTPS. A Personal Access Token is a special password that you use instead of your actual account password. When you're finished using the token, you can revoke it so that it can no longer be used. It is also possible to set an expiry time for the token. This helps to keep your account secure.

This token can now be used when connecting to a repository over HTTPS.

When accessing a repository and using HTTPS authentication, make sure you have access/permission to connect, and then just use the HTTPS address for the Git repository itself. 

If you plan to use Github from your local device, the recommended way to authenticate is using Secure Shell, or SSH for short. This requires the creation of keys: a public and a private key. The advantage of using SSH is that you don't need to enter in your credentials when interacting with the remote repository. The keys are generated and stored on your local machine and then the public key is copied to the Github server. After you finish setting up, every operation will be authenticated using the keys.

### How Git works
when I clone a repo or initialize git in a dir there is a folder with `.git` name, it's hidden and used to track all the changes.  
This folder is automatically created when you create a repository.

> In Linux, any folder starting with a dot is a hidden folder.

As the repository was created on GitHub, it was not required for us to run it. GitHub handled all of this as part of its create new repo flow. 

### Workflow
Git uses workflows which can be broken into three states namely,
- modified, 
- staged, 
- committed. 

Let's start with the first state, adding removing and updating any file inside the repository is considered a modified state. Git knows the file has changed, but does not track it.

In order for Git to track a file, it needs to be put in the staged area. Once added, any modifications are tracked. Which offers a security blanket prior to committing the changes. Then, the last state is the committed state. Committing a file in Git is like a save point in many ways. Git will save the file, and have a snapshot of the current changes.

![how_git_works](../Pics/how_git_works.png)

Suppose you have a workflow that contains the three stages just mentioned, as well as the remote repository:
- A file is added from the working directory to the staging area.
- From there the file is committed,  
- And then pushed to the remote repository.
- From the remote repository, the file can now be fetched and checked out, or merged to a working directory.

### Git commands, Add and commit
if you want to create a repo you either create it on GitHub and clone it on your machine or you initialize it on your machine and then push it to new repo (also need to create one on github)
##### Steps
First, create a repo on github

```bash
git init
git remote add origin <repo_link>
git push -u origin main
```
or you can clone the repo 
```bash
git clone <repo_link>
```
___
Before I add any files or make any changes, it's always good practice to check if any changes or commits are currently there. I can do this by using the `git status` command. 

Git status also displays what branch I'm on. 
```
on branch main
your branch is up to date with 'origin/main'
nothing to commit, working tree clean
```
This means that all the latest files on my local machine are exactly the same as what is displayed on the GitHub UI. 

Let's add a file 
```bash
echo "# test" >> README.md
```
the output of `git status` after adding a file
```bash
On branch main
No commits yet
Untracked files:
  (use "git add <file>..." to include in what will be committed)
	README.md
nothing added to commit but untracked files present (use "git add" to track)
```

Now git is telling me that I have an untracked file. It's also telling me that I have nothing added to the commit but that untracked files are present and that I should use git add to track them.  

The purpose of the git add command is that I'm essentially prompting git and letting it know that I want to track this file, and that it will be included as part of my commit. 
To do so:
```bash
git add README.md
``` 
to add readme file to staging phase if I want to add all my modification to staging phase I can type:
```bash
git add .
```
if I run `git status` now I'd get:
```bash
On branch main
No commits yet
Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
	new file:   README.md
```

it's telling me that there are staged changes to be committed, which is this new file It prompts me asking if I want to revert those changes through:  
`git rm --cached README.md` or with
`git restore --stage README.md`  
Running the command will unstage the file from the commit.

How to run the git commit command.
First, type in `git commit`, you can pass in a flag of -m which stands for message, allowing you to type in a message which will be attached to the commit so, the final result:  
```bash
git commit -m "Adding a new file"

[main (root-commit) bc02976] Adding a new file
 1 file changed, 1 insertion(+)
 create mode 100644 README.md
```
if I run status command 
```bash
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean
```
## Branches

To create a new branch, I use the `git checkout` command:
```bash
git checkout -B feature/lesson
``` 

But this is just one way to create a branch. I could also use `git branch` and pass in the name as well.
```bash
git branch feature/lesson
```
These methods are the same and
can both be used to create a branch.
The key difference between them is
that `git branch` just creates a branch.
But `git checkout -B` moves
me from the main branch into the branch that I created. 

I can verify that I've been moved between branches by running the `git branch` command.   
this command list all branches in the repo and which one I'm in.  
This will then tell me if I have switched from the main branch to one of the feature lesson branches, any changes that I make will now only occur in this new branch. 

It's important to remember that the main branch has no indication or knowledge of any of these changes even when push code to the main repository, this is because that branch exists in isolation.   
The new branch needs to be merged back into the main branch to recognize changes in the feature/lesson branch. 

This is where it'll come in with a pull request. The purpose of a pull request is to obtain a peer review of changes made to the branch.   
In other words, to validate that the changes are correct when coding, many teams will have conditions around the unit tests and integration tests. These conditions will usually include validating that the standards have been met for merging back into the main line, a team will also check for any issues that might have been missed. 

To push the changes to the remote repo:
```bash
git push -u origin feature/lesson
```
It's good practice to specify `-u`. This means that I'm only going to get updates from the upstream, which in this case will be the main branch. The result of this is that the origin won't be my main branch anymore. Instead, it's feature lesson. 
```bash
Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Delta compression using up to 12 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 294 bytes | 294.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
remote: 
remote: Create a pull request for 'feature/lesson' on GitHub by visiting:
remote:      https://github.com/omar-nafea/test/pull/new/feature/lesson
remote: 
To github.com:omar-nafea/test.git
 * [new branch]      feature/lesson -> feature/lesson
branch 'feature/lesson' set up to track 'origin/feature/lesson'.
```
It will then prompt me to create a pull requests that can be compared against another branch, in this case, the main branch. 

Next If I go to repo on github I'll see a compare & pull request green button and I'll click on it
![](../Pics/compare&pull_req.png)
A pull request lets the team know that I've made new changes that I want them to review and that I also want to approve or request changes to the actual pull request itself.  
Another thing to note on the GitHub UI is that I'm comparing this with the main branch. I've essentially cut a branch from the main called feature/lesson. 
![](../Pics/pull_req.png)
And I made changes on this branch wether modifing the code or add more files or removing files the point is it's different from main branch so it need to be merged
![](../Pics/merge_req.png)
I then click create pull request. The team will then review the changes and either approve or decline them. Once approved, you can then merge your changes to the main branch. 


Team decide on the naming conventions to use. In a lot of cases when adding a new feature, you can add the keyword feature then followed by the branch name, like a URL path, such as `feature/lesson` in this example. 
![](../Pics/merged.png)
I'm going to merge the branch. Then I'll confirm the merge. Once confirmed, I'm presented with the option to delete the branch. 


I can then confirm that by going back to my command line.
Next, I look at `git status` again to check if there is something to commit. At this point, there's nothing outstanding. I'm still in the `feature/lesson` branch.
I can check out my main branch by
typing `git checkout main`.
Then I run the `git pull` command.
I'll then receive the latest changes that were merged in from the feature branch that I just created. 

```bash
remote: Enumerating objects: 1, done.
remote: Counting objects: 100% (1/1), done.
remote: Total 1 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
Unpacking objects: 100% (1/1), 907 bytes | 907.00 KiB/s, done.
From github.com:omar-nafea/test
   bc02976..6e3e37b  main       -> origin/main
Updating bc02976..6e3e37b
Fast-forward
 hello.txt | 1 +
 1 file changed, 1 insertion(+)
 create mode 100644 hello.txt
```

## Remote vs. local

Remote refers to any other remote repository to which developers can push changes. This can be a centralized repository, such as one provided by Git hub or repositories on other developer devices. 

The remote code is accessed through a URI which is unique and only accessible to those who have permission local.   
local On the other hand refers to your machine which can be a laptop, desktop and is only accessible to you 

if there is a project is stored on a remote server. When a user wants to copy this project to their local device, they need to either perform a `clone` if it's the first time or pull it to get the latest changes. 

The user can make changes to the project after clone it and push those changes back to the server. **Other users working on the code base won't see those changes on their local machines unless they pull the latest changes from the server**. 

One of the advantages of it is that you can work offline and then commit your changes when you are ready. 

if I need to check the connection of a repo to github I type: `git remote -v`  
```
origin	git@github.com:omar-nafea/FullStack.git (fetch)
origin	git@github.com:omar-nafea/FullStack.git (push)
```
In this case we're going to add this URL to the remote settings by using the command.  
`git remote add` specifying a name and then passing in URI, the name that is typically used here is `origin`.
So I'll stick with that. So again the full command with the URL should read `git remote add origin git@github.com:gittutorials101/myfirstrepo.git.`

This time when I execute the `git remote -v command`. I have this set up against the `gittutorials101` which sits up on Git hub. 

What I'm going to do next is use the `git pull` command which will connect with 
the GitHub server, and pull down all the changes from the repository. 

So on my local I now have all the changes, but when I check the directory it's blank.   
The reason for this is that I haven't set up a branch that matches with what I have on the server repository. Fortunately I can change that by performing the command. `git checkout main` **Which will set up a branch main on my local that tracks the branch main from the remote**.
And now when I check my folder it confirms that I have files available on my local. 

### Push and pull

Before we begin, let's go over
the command line and perform the command git status. after committing changes and before push it to remote repo
```
On branch main
Your branch is ahead of 'origin/main' by 1 commit.
  (use "git push" to publish your local commits)
nothing to commit, working tree clean
```
Git tells me that my branch is ahead of the origin main branch by one commit. What this means is that all the changes that I have on my local repository are currently ahead of what is stored in the remote repository on GitHub that ties into Git's distributed workflow in which you can work in an offline state and then only ever communicate with a remote repository when you use the commands of git push or git pull. 

```bash
git push origin main

# Enumerating objects: 7, done.
# Counting objects: 100% (7/7), done.
# Delta compression using up to 12 threads
# Compressing objects: 100% (4/4), done.
# Writing objects: 100% (4/4), 961 bytes | 961.00 KiB/s, done.
# Total 4 (delta 2), reused 0 (delta 0), pack-reused 0 (from 0)
# remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
# To github.com:omar-nafea/FullStack.git
#    879b532..51b71ce  main -> main
```

After pushing  
Let's refresh the page on the GitHub website. You can see that my changes now appears on github. That's taken the commit snapshots that I have in my local repository and pushed it up to the remote repository. Git has then compared those files with what's on the remote repository to find any conflicts or problems.  
If none are found, it'll just merge them straight through, which is classed as an auto merge. If there are any conflicts, my push will fail.  
Before doing a push, it's also good practice to perform a `git pull` in order to get the latest changes from the remote repository and reduce the odds of encountering a conflict. 


Normally when you're working on a project, you could have several developers all submitting with different branches, different code, and different features. In order for you to get those changes, you need to use the git pull command. 

If I do changes directly from github ui or other developer do changes and he pushed it remotely   
The changes now appear on the UI. But because I haven't used the git pull command on my local machine yet, I should have no content on my local machine of the changes that happened remotely


I need to run the command  
```bash
git pull
```
This will get the latest changes from the remote repository. If any new changes were added, it'll be reflected in the shell output. I run the command, and in this case, Git tells me that one file has changed with one insertion. 








