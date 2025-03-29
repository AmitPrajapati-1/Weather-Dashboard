Weather Dashboard

Overview

The Weather Dashboard is a responsive web application that allows users to check the current weather and a 5-day forecast for any city worldwide. It provides a simple and interactive interface with dark/light mode support, search history, a refresh button, and animated loading indicators for a smooth user experience.

Features

✅ Real-Time Weather Data - Fetches weather conditions, temperature, humidity, and wind speed using the OpenWeather API.✅ 5-Day Forecast - Displays a daily forecast filtered for midday readings.✅ Dark & Light Mode - Toggle between themes for better visibility.✅ Search History - Stores the last five searched cities for quick access.✅ Refresh Button - Allows users to refresh weather data for the selected city.✅ Animated Loading Indicator - A spinner animation while fetching data.✅ User-Friendly Error Handling - Displays clear messages for invalid city names or API errors.✅ Fully Responsive - Optimized for both mobile and desktop devices.

Tech Stack

Frontend: React.js (Hooks for state management)

API Integration: OpenWeather API for fetching weather data

UI Enhancements: Tailwind CSS for styling, Framer Motion for animations

Installation & Setup

Prerequisites

Ensure you have the following installed:

Node.js (https://nodejs.org/)

npm or yarn (Comes with Node.js)

Steps to Run the Project

Clone the repository:

git clone https://github.com/your-username/weather-dashboard.git
cd weather-dashboard

Install dependencies:

npm install  # or yarn install

Create an .env file in the root directory and add your OpenWeather API key:

REACT_APP_WEATHER_API_KEY=your_api_key_here

Start the development server:

npm start  # or yarn start

The app will be available at http://localhost:3000

Usage

Enter a city name in the search bar and press Enter or click Search.

View the current weather details, including temperature, humidity, and wind speed.

Check the 5-day forecast with daily temperature and conditions.

Click the Refresh button to update weather data.

Toggle Dark/Light Mode for better readability.

Click on recently searched cities to fetch their weather instantly.

Error Handling

If an invalid city name is entered, a friendly error message is displayed.

If there is an API issue, the app informs the user with a proper message.

Deployment

You can deploy the Weather Dashboard using Vercel, Netlify, or GitHub Pages:

npm run build  # Create an optimized production build

Then follow your hosting provider’s instructions.
