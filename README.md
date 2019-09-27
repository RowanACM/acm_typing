# ACM Typing

This is a small typing game we'll be making to familiarize ourselves with Node and JavaScript in general.

### How to run
1. Clone this repository using `git clone https://github.com/RowanACM/acm_typing`
1. Navigate into the repository
1. Install dependencies with `npm install`
1. Start the server using `npm run start`

At this point the server should be started and you can navigate to it by going to `http://localhost:3000` in your
browser.

### More Info
* This is an experimental build using `babel-watch`. There might be issues regarding auto transpiling.
* When making any changes to the project, create a new git branch before doing so. This makes merging your changes to
this repository easier. If you need help with this see 
[this git tutorial](https://www.atlassian.com/git/tutorials/using-branches).
* **Please** remember to make your changes on a different branch! You should also be pulling from `upstream` regularly
to avoid merge conflicts.
* Communicate future changes of yours with others as to avoid parallel creation

### Common problems
* When I run `npm run start` I get an error something like this:
`Error: Requires Babel "^7.0.0-0", but was loaded with "6.26.3".`
  * This is caused by Babel being weird for some reason. To fix the issue you have to uninstall and reinstall it with
  `npm uninstall @babel/core @babel/cli` and then `npm install --save-dev @babel/core @babel/cli`. That should
  resolve the issue (If you're updated to the latest version of this project this problem should not happen).
* My changes aren't being updated!
  * `babel-watch` may not be working properly. Try running `npm run build` and then `npm run man-start`
* All of my work was deleted when I built the project!
  * You probably were editing files within the `dist` directory. These files are overwritten every time you manually
   build the project. Do not edit these files. Do all of your work within the `src` directory.
* I can't push my changes to github!
  * You do not have permission to push to the `master` branch. You must push to a separate branch and submit a pull
  request.
