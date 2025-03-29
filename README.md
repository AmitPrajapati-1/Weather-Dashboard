# Weather Dashboard

## Overview
The **Weather Dashboard** is a responsive web application that allows users to check the current weather and a 5-day forecast for any city worldwide. It provides a simple and interactive interface with dark/light mode support, search history, a refresh button, and animated loading indicators for a smooth user experience.

## Features
✅ **Real-Time Weather Data** - Fetches weather conditions, temperature, humidity, and wind speed using the OpenWeather API.  
✅ **5-Day Forecast** - Displays a daily forecast filtered for midday readings.  
✅ **Dark & Light Mode** - Toggle between themes for better visibility.  
✅ **Search History** - Stores the last five searched cities for quick access.  
✅ **Refresh Button** - Allows users to refresh weather data for the selected city.  
✅ **Animated Loading Indicator** - A spinner animation while fetching data.  
✅ **User-Friendly Error Handling** - Displays clear messages for invalid city names or API errors.  
✅ **Fully Responsive** - Optimized for both mobile and desktop devices.  

## Tech Stack
- **Frontend:** React.js (Hooks for state management)
- **API Integration:** OpenWeather API for fetching weather data
- **UI Enhancements:** Tailwind CSS for styling, Framer Motion for animations

## Installation & Setup

### Prerequisites
Ensure you have the following installed:
- **Node.js** (https://nodejs.org/)
- **npm** or **yarn** (Comes with Node.js)

### Steps to Run the Project
1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/weather-dashboard.git
   cd weather-dashboard
2. Install dependencies:
    ```sh
     npm install  # or yarn install
3. Create an .env file in the root directory and add your OpenWeather API key:
     ```sh
     REACT_APP_WEATHER_API_KEY=your_api_key_here
4. Start the development server:
    ```sh
    npm start  # or yarn start
The app will be available at http://localhost:3000

Usage:-
✅ Enter a city name in the search bar and press Enter or click Search.
✅ View the current weather details, including temperature, humidity, and wind speed.
✅ Check the 5-day forecast with daily temperature and conditions.
✅ Click the Refresh button to update weather data.
✅ Toggle Dark/Light Mode for better readability.
✅ Click on recently searched cities to fetch their weather instantly.

Error Handling:-
✅ If an invalid city name is entered, a friendly error message is displayed.
✅ If there is an API issue, the app informs the user with a proper message.

Deployment:-
You can deploy the Weather Dashboard using Vercel, Netlify, or GitHub Pages:
    ```sh
    
    npm run build  # Create an optimized production build
Then follow your hosting provider’s instructions.

Contributions are welcome! Feel free to fork this repository and improve the project. 🚀
  
      You can copy-paste this as your `README.md` file and push it to your GitHub repository. 🚀
=======
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
>>>>>>> 7119f64 (weather dashboard)
