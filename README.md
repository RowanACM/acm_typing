# ACM Typing

This is a small typing game we'll be making to familiarize ourselves with Node and JavaScript in general.

### How to run
1. Clone this repository using `git clone https://github.com/RowanACM/acm_typing`
1. Navigate into the repository
1. Install dependencies with `npm install`
1. Build the project using `npm run build`
1. Start the server using `npm run start`

At this point the server should be started and you can navigate to it by going to `http://localhost:3000` in your
browser.

### More Info
* You must run both `npm run build` and `npm run start` after each change you make in the code for it to be shown in the
browser.
* If you use an IDE like IntelliJ or WebStorm you can configure it to run both scripts at once at the push of a button
to make this easier
* After building the project a new directory `dist` should be created with the newly compiled code in there. **DO NOT
EDIT THESE FILES!** None of your changes in there will be saved
* When making any changes to the project, create a new git branch before doing so. This makes merging your changes to
this repository easier. If you need help with this see 
[this git tutorial](https://www.atlassian.com/git/tutorials/using-branches).
* **Please** remember to make your changes on a different branch! You should also be pulling from `upstream` regularly to avoid merge conflicts.
* Communicate future changes of yours with others as to avoid parallel creation

### Common problems
* When I run `npm run build` I get an error something like this:
`Error: Requires Babel "^7.0.0-0", but was loaded with "6.26.3".`. This is caused by Babel being weird for some reason.
To fix the issue you have to uninstall and reinstall it with `npm uninstall @babel/core @babel/cli` and then
`npm install --save-dev @babel/core @babel/cli`. That should resolve the issue (If you're updated to the latest version of this project this problem should not happen).
