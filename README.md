This project was created with creat-react-app. Refer to the CRNA-README.md file for details general details about that package.

This project, called CataDog, is a simple one page app that displays dog breeds and images of them in a grid. You can filter for specific breeds by name using the text input near the top of the page.

# Installation and Running the app/tests

This project uses yarn, to install and run it locally, you should just need to run `yarn` to install the necessary dependencies and then `yarn start` to open the app on your `localhost:3000`.

To run tests, simply run `yarn test` in the root directory.

# Future Improvements
As this is a first iteration, I'll put together some future ideas for how the project could be improved with more time spent on it.

* Better ways to view all images for an animal. Didn't show all available urls initially as it kind of flooded the page with images. Think that some sort of carousel that virtualizes the loading of the images would be really useful here to maintain size constraints on the page and performance.
* I haven't built a web react app in a little while and I wasn't familiar with the testing framework included in CRA, so I included a couple descriptions of tests in the App.test.js file in pseudocode. Obviously these would be something to flesh out and make a reality.