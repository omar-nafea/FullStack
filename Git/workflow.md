## Workflow
### why workflows are important. As a developer working on a project, you

- first need to pull the project down from a remote repository to your local machine. This is commonly called checking out a project or pulling a project.  
- Once on your local machine, you can build and run the project and make changes.  
- When you're done, you have to push the changes you made back to the remote repository so other developers can see them.  

From this example, you can understand that
the purpose of a workflow is to guide you and other members of your team. It should not disrupt or cause blockers for deployment or testing or for any other developer who contributes to the project itself.  

Feature branching means you create a new branch from the main line and work on this dedicated branch until the task is completed.  
![](../Pics/feature_branch.png)  

Every code base has a main repository which is essentially the source of truth for the application. All changes such as add, edit or delete are submitted directly to the feature branch, the main branch stays as is. When you are ready and happy with the code you have added, you have to commit the changes and then push to the server repository. To commit, you push the changes and as it's a feature branch, a pull request follows.   
![](../Pics/peer_review.png)  
The pull request is compared to the main branch, so developers who peer reviewed the code can see exactly what was changed. Once it's reviewed and approved, it can then be merged into the mainline. Now let me guide you through how this works using Git and Git hub.  

Before creating a new branch, always ensure you have the latest code. You can do this by running the `git pull` command to pull the latest code from the remote repository. Next you need to create your new branch. You can do this by passing the `-b` flag with the `checkout` action.   

Next, let's make changes ,type git add. Next, we need to commit the changes now changes  added to the local branch, this means that the file is only visible locally to you. To allow other developers to see the changes, you need to push the file to the remote repository. `git push -u origin feature/my-new-feature`   
Your next action is to get a review as part of a pull request, but more about that later.

## HEAD
`.git` folder is responsible for keeping track of all changes across the project.   

### How does it know what branch you're currently on?

It keeps a special pointer called head
which is one of the files inside the dot git folder. This file refers to the current
committee you are viewing.   

![](../Pics/head.png)
### How to identify the current committee you are working on?  
- First, open the `.git` folder   
- Next type `cat HEAD`    

In git we only work on a single branch at a time. This file also exists inside
the `.git` folder 
```bash
cd .git
cat HEAD
# ref: refs/heads/main
# HEAD (END)
```
```bash
cd .git 
cat /ref/heads/main
23lhr4l213213lrhldhaslh42lhrlwejdssfd
  main (END)
```
This single hashed ID is a reference for the current commit. Let's switch branches to see how the head is moved to point to a new branch. 
```bash
git checkout testing
git branch
# main
# *testing
```
![](../Pics/head.png)
This moves the head to point to the testing branch. Let me explain how this happens by using a diagram. We have two branches, the main and testing branch. When you run the check out command, it moves the head to now point to the testing branch, to check the contents of the head file inside the dot git folder.   
![](../Pics/moving_head.png)  


```bash
cat .git/HEAD
# ref: refs/heads/testing
```
Now I will demonstrate how git
head works with a simple example. So I am here in the terminal,


```bash
git branch
# *main
# feature/testing-branches
cat .git/HEAD
# ref: refs/heads/main
git checkout feature/testing-branches
cat .git/HEAD
# ref: refs/heads/feature/testing-branches
git checkout main
cat .git/refs/heads/main
# 82a431l3245441328sfa21343234
vim README.md
# making chages
cat .git/refs/heads/main
# 82a431l3245441328sfa21343234
git add .
git commit -m "updating README file"
cat .git/refs/heads/main
# 113424234njjh32432k423443223
# look the commit id changes after commiting the readme file
```
