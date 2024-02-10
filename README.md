# The Storyblok 5-Minute React Tutorial Starter

In this tutorial, you will learn how to build a headless website using Storyblok and React. Starting with the fundamental integration of Storyblok in React. You can check out the [live demo](https://storyblok-react-5-min-tutorial.netlify.app) on Netlify.  If you haven't done so already, make sure to sign up for a [Storyblok account](https://app.storyblok.com/#/me/spaces).

## Requirements
To use this project you have to have a Storyblok account. If you don't have one yet you can register at [Storyblok](https://www.storyblok.com/), it's free.

## How to get started?

To use this starter application, follow these steps:

1. ### Clone the repo

   ```bash
   git clone https://github.com/your-username/storyblok-react-tutorial-starter.git
   ```

2. ### Install the dependencies 
   ```bash
   npm install # or yarn install
   ```

3. ### Add the Access Token
    Create a new empty Storyblok space and add the preview token of your new space with the accessToken in `index.js` file.
   
   ```javascript
   // In index.js
   storyblokInit({
   accessToken: "W1vLyxT5rQ15jBpANjnv0gtt",
   use: [apiPlugin],
   apiOptions: {
      // for spaces located in the US or China:
      // region: "us" or "cn", // you need to specify the region
      region: ''
   }
   });
   ```

4. ### Run your project 
   Set the preview domain in Storyblok to `http://localhost:3000/`
    ```bash
    # to run in developer mode
    npm run start # or yarn start
    ```
   
   ```bash
   # to run your project 
   yarn build # or npm run build 
   ```

## Resources
- [React Docs](https://react.dev/)
- [Storyblok Tutorial](https://www.storyblok.com/tp/add-a-headless-cms-to-react-in-5-minutes)
- [Storyblok React Technology Hub](https://www.storyblok.com/technologies#react)
