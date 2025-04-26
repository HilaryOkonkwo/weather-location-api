# weather-location-api
A simple weather and location API web application that uses user input or IP address to retrieve real-time weather data and geolocation data. Built with Node.js and external API integration for quick and responsive results.

## Features

- Get weather information for any location in real time.
- Get information about your location using user input or your IP address.
- API endpoints that are simple to use for easy integration.
- Responsive and accurate data fetching using external APIs.

## Technologies Used

- **Node.js**: Backend runtime environment.
- **External APIs**: Integrates with weather and geolocation APIs for dynamic data.

## Folder Structure

    weather-location-api/
    ├── .gitignore
    ├── index.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    ├── README.md
    └── vercel.json


## Installation

To get started with this project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/HilaryOkonkwo/weather-location-api.git
   

2. Navigate to the project directory:

    ```bash
    cd weather-location-apicd weather-location-api

3. Install the required dependencies:

    ```bash
    npm install

3. Create a .env file in the root directory and add your API keys:

    ```bash
    WEATHER_API_KEY=your_weather_api_key
    GEOLOCATION_API_KEY=your_geolocation_api_key

4. Start the development server:

    ```bash
    npm start

5. Access the app at http://localhost:5000.

## Deployment

The project is deployed on Vercel. A platform known for it's fast and easy deployment of web applications

Live URL: [link](https://weather-location-api.vercel.app/api/hello)


## API Endpoints
1. Fetch Weather Data

    GET /api/weather

2. Query Parameters:

    location (string): The name of the location.
        Example:

        bash
        GET http://localhost:3000/api/weather?location=New%20York


2. Fetch Geolocation Data

    GET /api/geolocation

3. Query Parameters:

    ip (string, optional): The IP address to fetch geolocation data for. If omitted, the user's IP will be used.
    Example:

    bash
    GET http://localhost:3000/api/geolocation?ip=8.8.8.8


## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.

2. Create a new branch for your feature or bug fix.

    ```bash
    git checkout -b branch-name

3. Commit your changes and push them to your fork.

    ```bash
    git commit -m "aAdding new feature"

4. Submit a pull request describing your changes.

    ```bash
    git push origin branch-name


## Contact
For any inquiries, please feel free to connect via

    Email: somtoochukwuhilary@gmail.com

    Github: [github](https://github.com/HilaryOkonkwo)

    Mobile No: +2348164514675

    X: [@OkonwoSomto](https://x.com/OkonkwoSomtoo)

    LinkedIn: [Link In](https://www.linkedin.com/in/somtoochukwu-okonkwo-691947124/)