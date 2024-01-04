![Storial Logo](client/public/storial-logo.png)
# Storial 2.0 -- Track Books You'd Like To Read
## Contents
  - [Tech Stack](#tech-stack)
  - [Original MVP](#original-mvp-code-can-be-found-here)
  - [2.0 MVP - The version in this repo](#storial-20----track-books-youd-like-to-read)
  - [2.0 Stretch Features - What's next](#stretch-features)
  - [Design Notes](#design-notes)
  - [Getting Started - Setup](#getting-started)
  - [Contact Me](#contact-me)

## Tech Stack
React, Typescript, Redux Toolkit, TailwindCSS, Node, Express, MongoDB, React Testing Library

## Original MVP (code can be found [here](https://github.com/jespy2/storial "The original Storial!"))
This was for an assessment I did in 2021. The prompt was the following:

> *Using the UI framework of your choice, build a UI around a hypothetical RESTful library API. Assume this API returns a list of books in a library, and allows for CRUD operations on a single book. The application should support those endpoints.*

Because this was a frontend-only role, I was only tasked with building the UI, but decided to build a fullstack app so that the reviewing team could punch through the final product. I started with using Adobe products to build the branding package, including name, logo, color palate and wireframing. The frontend was in React, and I took the opportunity to try out Tailwind.css (which I enjoyed and ended up using quite a bit in my new role). The backend was built with Node/Express and MongoDB.

Since this was a takehome assessment, I had only a few days to go from design to prod and thus had a pretty simple app for the MVP.  



  - Offers basic CRUD functionality for tracking books user hears about and would like to read in the future.
  - Includes title, author and notes for each book tracked

## 2.0 MVP
For 2.0, I refactored the app with new features, cleaner/DRYer code, improved performance and accessibility, code safety through Typescript and testing.  MVP is almost complete.
  - Refactored to include Typescript and testing via React Testing Library.
  - Added authorization/profile layer.
  - Updated React Router syntax for v6+
  - Migrated state management to Redux Toolkit
  - Audited and refactored to improve accessibility and performance.
  - Sorting books by field
  - Added custom components:
    - Modals with branded styling instead of using alerts
    - Pills to display read/unread status that also act as toggle buttons for said status
    - Tooltips for clickable icons 
  - Dark mode
  - Deploy live version (cloud-db branch).

## Stretch Features

In the future, I'd like to add the following:
  - Email functionality (new user welcome, password reset, etc)
  - Filtering and search
  - Apply input field custom hooks to forms (already being used in add book form)
  - Additional fields such as date entered and genre
  - Genre field that has preset options, but editable by user
  - Add state persistance to table so that changes in local state for the pills (read vs unread) doesn't reload app.

## Design Notes
Broadly speaking, this is a very simple CRUD app, which is why I chose it for the original assessment.  2.0 offers some feature improvements, but is largely an exercise in building something scalable, with an eye towards how apps grow and are maintained in an enterprise environment.  This points to design choices that can scale data and feature growth, as well as consider the typical needs of a team. Code and file structure needs to be declarative to make it easier for other engineers (or even my future self) engage the codebase, as well as make it easier for associate-level engineers to take tasks (important for long term cost reduction)
  - An argument could be made that Redux is overkill for this app.  Good componentization where props are passed as children would work fine for something this size.  But attempting to scale this combined with the consequences of long-term codebase maintainence, that design approach would quickly result in spaghetti code.  Redux requires more intial work (frankly, too much for a project of this scope), but will make everything simpler as the product scales.
  - I used directory structure to make the codebase more declarative and navigable.  For instance, the use of placing a primary subdirectory with an index file in each directory (example: components/components/, components/index.ts) makes it easy to locate code for a given component and simplifies import statements (in the example, all component paths point to './components')
  - I use the 'above the fold' theory of componentization as much as possible.  The effort of keeping a given component's file short enough to be seen on a single screen without scrolling encouraged componentization (especially generified components that could be reused and helped to DRY up the codebase), made any given file easier to read and required keeping an eye on the larger architecture of the codebase (specifically how to design the directory structure).
  - Code safety was a consideration for making v2.0 scalable.  For the original assessment, testing and Typescript were not necessary since the code base was so small and the features/functionality of the app were so limited.  Manual debugging was fine.  But if the app was to scale, code safety measures would become essential.
  - Applied a more coherent strategy for the use of Tailwind.CSS.  Global styles (like for 'standard-btn') is now in the index.css file, and everything else is inline with the component/element being styled. 

### Getting Started
After cloning into your local directory, you will need to run npm install in both the client and server directories.  
Be sure you have [Mongo DB installed](https://docs.mongodb.com/manual/installation/) as well.

Once your dependencies are installed, you will need to open three terminals and enter the following commands:
  1. **MongoDB** 

  - Can execute from anywhere within the root directory:
    - ```brew services start mongodb-community```
    - ```mongo```
    - ```use books```

  2. **Server** - Navigate to ./client directory:  ```npm run start```
  
  3. **Client** 
    - Navigate to ./server directory: ```npm run start```

### Contact Me
Reach out, get to know me or check out more of my work:  [My Portfolio Site](https://github.com/jespy2/storial)