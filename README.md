# Weather Wise

Weather Wise is a weather dashboard application that allows users to search for the current weather and a 5-day forecast for a given city. Users can also manage a list of favorite cities and toggle between Celsius and Fahrenheit units.

## Features

- Search for a city to get the current weather and 5-day forecast.
- Add cities to a list of favorites.
- Remove cities from the list of favorites.
- Display weather data for favorite cities.
- Toggle between Celsius and Fahrenheit units.
- Remember the user's last searched city.
- Toast notifications for various actions (e.g., adding/removing favorites).

## Technologies Used

- **Next.js**: A React framework for building fast web applications.
- **React**: A JavaScript library for building user interfaces.
- **CSS Modules**: For scoped and maintainable CSS styling.
- **Axios**: For making HTTP requests to the OpenWeatherMap API.
- **JSON Server**: For storing and managing favorite cities.
- **React Toastify**: For toast notifications.

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later) or yarn (v1.22 or later)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/weather-wise.git
   cd weather-wise
   ```

2. Install the dependencies:

   ```bash
      npm install
   ```

## or

    ```
    yarn install
    ```

3. Set up the environment variables:

### Create a .env.local file in the root of the project with the following content:

    ```bash
       NEXT_PUBLIC_API_KEY=your_openweathermap_api_key
    ```

4. Start a JSON server:

   ```bash
      npx json-server --watch db.json --port 5000
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open your browser and go to http://localhost:3000.
