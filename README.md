This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Structure

app.js defines the content of the website. Its setup to show a navigation bar and content below that.
The content is loaded from the application routing.

navbar is content in defined in 'page-navbar.js'. 
Unless you need to change the navbar dynamically based on the routes, you may never need to edit the navbar file.

routes.js defines the routes and the component to load for each of the routes

## Define a new component
Create a new js file and define the component class here. Unless its a small utility component, its 
recommended to write the component as a ES6 class. Example is provided in hello-world.js.

If this component must be displayed as the content of a route, edit routes.js to import this
component and use this at a given path.