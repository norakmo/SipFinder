# Prosjekt 1

# Table of Contents

1. [Sipfinder](#sipfinder)
2. [Running the project](#running-the-project)
3. [Project structure](#project-structure)
4. [REST API](#rest-api)
5. [Responsive design](#responsive-design)
   - [Technologies used](#technologies-used)
   - [Testing Responsiveness](#testing-responsiveness)
6. [Code quality](#code-quality)
   - [Testing](#testing)
   - [Prettier](#prettier)
   - [ESLint](#eslint)

## Sipfinder

Sipfinder is a website for finding cocktail recipes. The site consists of three pages: the **browse page**, the **home page** and the **drink page**. On the **home page**, the drinks are presented in a carousel list where the user can go back and forth in a slide show of all the recepies. The **browse page** presents the drinks in a list, and the user can apply filters (alcoholic, non-alcoholic and favorites) to control which drinks are displayed. The filtering choices are remembered when the page is reloaded. The user can also save drinks as favorites by clicking a button, and the favorites will be remembered even when the browser is closed and reopened. By clicking on a drink on the browse page, the user is sent to the **drink page** with the full recipe.

## Running the project

Make sure to be in the folder _prosjekt1_ when running the project.

Before running the project for the first time, run `npm install`.

Run the project with the command `npm run dev`.

## Project structure

- The **assets** folder contains _styles.css_, that defines styling standards that are used in the project.

- The **components** folder contains code and styling for the components _CarouselItem_, _ListElement_ and _NavBar_.

- The **pages** folder contains code and styling for the _home page_, _drink page_ and _browse page_.

- The **utils** folder contains code that is used several times in the projects. _ApiRequests_ holds requests that are used to fetch data from the REST API. _Types_ contains descriptions of the different interfaces that are used in the project.

- The **test** folder holds the different test files and a setup file for testing. The test folder contains a more thorough README that explains the tests.

## REST API

We have used the Cocktail DB (https://www.thecocktaildb.com/api.php) as our REST API.

We have used TanStack with the method ensureQueryData() when sending requests to the REST API. This method first checks the query cache and only sends a request if the data is not found. By doing this we avoid sending unnecessary requests.

## Responsive design

We have designed our web application to be usable on various devices and screen sizes. We have mainly focused on it being usable on mobile screens and desktop screens.

Here are some of the technologies used to ensure responsiveness:

- **CSS media queries**: This enabled us to apply different styles based on the characteristics of the user's device. We have used a breakpoint for 800px, and changed the styling for devices that have a screen width below this breakpoint.

- **Flexible grid layouts**: We have used flexboxes with different flex directions based on the screen's size. On the browse-page, the container for the filter and contents boxes changes from to flex direction: row to flex-direction column to ensure that this page works well on both small and large screens.

- **Viewport meta tag**: We have included the viewport meta tag in the HTML, which enables responsiveness and allows us to set the initial scale. In our CSS-code, we have used relative size units such as vh, vw and percentages to ensure that the sizing of elements are relative to the screen size.

### Testing Responsiveness

Throughout development, we have tested the responsiveness by using the browser's inspector tool. This tool makes it possible to check how the web application looks on different devices. With the inspector tool, we have seen that the web application works well on different mobile devices, such as iPhone SE, iPhone 12 Pro, Samsung Galaxy S8+, to name a few.

In addition to using the inspector tool, we have tested the web application on our actual devices, which are various mobile devices and laptops.

## Code quality

### Testing

The tests can be run using `npm run test` (make sure to be in the folder _prosjekt1_).

The test coverage can be seen by running `npm run coverage`.

We have used Vitest for testing the code. In this project, we have employed various types of tests to ensure code quality and functionality:

- **Props Tests**: These tests focus on validating the properties passed to components, ensuring that the components receive the expected props.

- **Snapshot Tests**: Snapshot testing involves capturing the rendered output of a component and comparing it to a stored snapshot. This helps detect unintended UI changes.

- **State Tests**: We have implemented tests to verify the correctness of component states, ensuring that state changes occur as expected during different interactions.

- **User Tests**: User tests simulate user interactions with the application. These tests are crucial for ensuring that the user interface behaves as intended and that user actions trigger the expected outcomes.

We have mainly tested the components, which are CarouselItem, ListElement and NavBar. We haven't thoroughly tested the browse page, especially the filtering functionality, because of time constraints. If we were to develop this web application further, this would be something to focus on.

### Prettier

TODO

### ESLint

We have used ESLint to help identify and fix problems in the code. ESLint is a static code analysis tool that enforces coding standards and best practices, ensuring a consistent and maintanable codebase.

Run linting with the command `npm run lint`.

We have identified issues by using this tool during development, and tried to fix the issues. There were some issues that we weren't able to fix without making substantial changes to the code, so we chose to ignore these warnings. They were in the browse page code (Browse.tsx), and related to the filtering functionality. We acknowledge that this is not the best way to fix the issue, but because of time constraints we weren't able to solve the issue in a better way.
