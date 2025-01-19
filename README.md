## Overview

Hello! This repository is created by Jann Espino for the sole purpose of a QA Engineer job application exam at Mercari.

## About the test

From the instructions I received, I need to find a public application to run my test cases and to not spend more than 3 hours developing within a 7-day limit with these as main criteria:

> Testing strategy: how you select and prioritize test cases.
> Implementation: how you set up and write tests with Detox including readability and maintainability
> Problem-solving: how you handle any challenges encountered.

For the system under test, I found [Notesnook](https://notesnook.com/). A notes app which is still actively being developed. The repository is a monorepo of React(Web), React-Native(Mobile App), and Electron (Desktop App) which would be perfect to showcase how I can adapt to a team in a current project. Although they have a few tests already, I deleted everything and started from scratch to write my own test cases.

### File Structure

Since this is a monorepo, this includes codes for their web and desktop app, too. But fear not! I actually just ended up using a small part of it so please navigate to ` apps/mobile/e2e`. All of my test cases are written there. Except for the `test.ids.js` this is a file for their own tests (which I removed before I started) and for some reason, another file is referencing an id from it and the build fails when I try to remove it (booo!).

I installed `cucumber-js` along with `Detox` to write my own test cases from scratch.

In ` apps/mobile/e2e`, you will find:

- **tests**
  - **features**: These are where test cases are stored, seperated by features. Even non-coders can understand this! Test data is dynamic here so feel free to change the words with double quotes and re-run the test!
  - **pages**: Since I used POM, these are where the page files are going (Ugh! The messy stuff!)
  - **step_definitions**: These are where the steps from feature files are defined. It's still pretty clean here!
  - **support**
    - **indentifiers.js**: Constants file I used to collate element identifiers
    - **utils.js**: Some codes are used more than once, twice, thrice! Why not put it here?
    - **globalVariables.js**: Let's just store variables that we want to use everywhere here during a run!
- **init.js**: cucumber and detox initializer settings

## Setup and running tests

To install:
`git clone`
`cd notesnook`
`npm install`

Configure your device and at `.detoxrc.js`
Configure your apk binary path at `.detoxrc.js`. Should match your machine if x86_64 or arm64-v8a.

To run tests (Go to `apps/mobile/e2e/tests/features` to get the test IDs):

1. Build the apk first: `npm run build:android`
2. Run all tests: `npm run test:cucumber-android`
3. Run a single test: `TAG=@test-1 npm run test:cucumber-android`
4. Run a single suite: `TAG=@suite-1 npm run test:cucumber-android`
5. Run a multiple test: `TAG="@test-2 and @test-2" npm run test:cucumber-android`

## Tackling the test

I was given this test Tuesday, January 14th (Tuesday). I plan to take this seriously so I want to be in my 100% before I take this exam. But since I am required to come to my office daily, I waited until the weekend, because I always return home late (8 PM to 9 PM). Saturday was a no-go because we had a team building, so Sunday it is! But I didn't just waste my freetime during my working days. I read and practiced mobile development and mobile test automation (Detox React-Native) before I sleep and even while in the train to work (and home). I also looked for potential apps that I can use for the test. My target is to find an open-source on-going project, not just boilerplates or the small apps I used for practice and as I mentioned earlier, I found [Notesnook](https://notesnook.com/). Saturday night I skimmed through their repo mainly on the configuration files and reviewed their structure to set my expectations for Sunday.

Since there are no timetrackers for this exam, I made a system for myself and to track that I only spent 3 hours for this test. My plan was to make a Github repository first, since this is the link I will be submitting to the hiring manager. My initial commit will be the mark of my starting time and my last commit as my ending time. This can be checked using `git log --reverse` (to see first commit) and `git log` (for the last).

### Testing strategy

Since this is a notes app, I focused first on creating test cases for main functions of the notes, given the short timeframe, I focused on the main features, I made the inputs dynamic though so we can test any input anytime we want. Then I proceeded to the notebook feature (organizing notes like a folder). Since this has a login functionality, I was supposed to make a simple auth test case but the one-time-pin cannot be turned off so I didn't waste time for it any longer.

### Implementation

For readability and maintainability, I used POM (Page Object Model) and integrated [Cucumber](https://cucumber.io/) for a clean test file (or as they call it in Cucumber, "Feature files"). Also utilized support files such as a constant file and utils file to reuse repeated codes and texts.

### Problem-solving

For problem solving, I faced multiple issues during the project setup. After I did my initial commit, I didn't know that I would face a lot of issues in building and running the tests. One issue I faced was I can't run the apk because it was pointing to an x86_64 apk instead of arm64-v8a for my machine. Another is setting up the commands in Nx to run the cucumber-commands. For writing test cases, as always, it's the element locators that don't have an ID, so I have to utilize the `withAncestor` and `withChild` functions. I don't want to waste time to add a test ID and build the app for a long time so I just improved my element locators.

In the given timeframe, I spent almost 1 hr. for non-test case development activities such as:

1. Project Setup
2. Creating this README file.

For the rest (2 hrs.), I was just writing test cases
