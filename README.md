## Project Name: The-Interactive-Shipping-Calculator

## Overview
The-Interactive-Shipping-Calculator is a web application designed to make decisions on which courier to use for a specific shipment. It provides a user-friendly interface for users to enter their data and choose their suitable courier.

## Installation
1. Clone the repository: https://github.com/dinahagar/The-Interactive-Shipping-Calculator
2. Navigate into the project directory: cd shipping-calculator
3. Install dependencies: npm install

## Running the Project
npm start

## Usage
After setting up and running the project locally, follow these steps to navigate and use the application:

1. Open you browser
    * Navigate to http://localhost:3000.
2. Home Page
    * The first page you will see is the Home page.
    * "Get Started" button allows you to navigate to first form stage.
3. Steps Page
    * This page contains stepper contains three stages [Origin
        Details, Destination Details, Package Dimensions].
    * In Origin Details stage to be able to navigate to next step you   should enter your country code and to be number.
    * In Destination Details stage to be able to navigate to next step you should enter your country code and to be number.
    * In Package Dimensions stage to be able to navigate to next step you should enter your package's weight and to be > 0.
    * Header contains [FinCart] link navigates you to home page.
4. Courier Cards
    * You will find all couriers data, you should choose one courier to can navigate to checkout page.
    * [Reset] button will show a dialog to confirm if the user is sure about reseting all his entered data, if sure will go back to step one with no data, if cancel will stay in the same page.
5. Checkout Page
    * It's summary page to be able to review all your entered data and confirm on it.
6. Last Page
    * It's just a final page to inform the user that the process is finished successfully.

## API Documentation
Using Fack local data file in "public/couriers.mock.json".