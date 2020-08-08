# Getting Started with Github

## Introduction



## Setup
Download git CLI https://git-scm.com/
Download git GUI https://desktop.github.com/

## Configuration
### Set name
```terminal
$ git config --global user.name
$ git config --global user.name [name]
```
### Set email
```terminal
$ git config --global user.email
$ git config --global user.email [email]
```
### Set line endings & color
```terminal
$ git config --global core.autocrlf true
$ git config --global core.ui auto
```
## Initializing
### Set init local repository
```terminal
$ git init
$ git init [new repo]
```
### Set init a repository on Github
> The *"README.md"* just tells people what your project is about
> *".gitignore"* tells git what files you don't want
> under version control if you already have project on your local computer
> that you want to push up to Github, **Skip those Steps**

## Commit
> The *"git status"* command is gonna tell you about what files might need to be
> committed it's gonna tell you about files that have changed, or maybe new files
> that you have added since that last commit
```
$ git status
$ git add [file name] [.]
$ git commit -m "desciptive message"
```
> If you were to edit that same file a second time,
> you'd actually use the *"git add"* command again before
> committing it, and then, with the file stage, you'd use the *"git commit"*
> command again to take another snapshot of your changes
