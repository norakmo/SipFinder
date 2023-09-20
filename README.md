# Prosjekt 1

## Sipfinder

Sipfinder is a website for finding cocktail recepies. The site consists of two pages: the **browse page** and the **home page**. On the **home page**, the drinks are presented in a carousel list where the user can go back and forth in a slide show of all the recepies. The **browse page** presents the drinks in a list, and the user can apply filters (alcoholic, non-alcoholic and favorites) to control which drinks are displayed. The filtering choices are remembered when the page is reloaded. The user can also save drinks as favorites by clicking a button, and the favorites will be remembered even when the browser is closed and reopened.

## Running the project

- Run the project with _npm run dev_ in the **prosjekt1**-folder. Before running the project for the first time, run _npm install_.
- Run the tests with _npm test_.

## Project structure

- **Assets** contains _styles.css_, that describes styling standards that are used in the project.

- The **component** folder contains code and styling for the components _CarouselItem_, _ListElement_ and _NavBar_.

- **Pages** contains code and styling for the _home page_ and _browse page_.

- The **utils** folder contains code that is used several times in the projects. _ApiRequests_ holds requests that are used to fetch data from the REST API. _Types_ contains descriptions of the different interfaces that are used in the project.

- The **test** folder holds the different test files and a setup file for testing. The test folder contains a more thorough README that explains the tests.

## Responsive design

We have designed the page with focus on screen size by using viewport (vw and wh), percentages and changing the placement of objects based on screen size.

We have tested the project on different devices: !!!!!!!

## REST API

We have used the Cocktail DB (https://www.thecocktaildb.com/api.php) as our REST API.

We have used TanStack with the method ensureQueryData() when sending requests to the REST API. This method first checks the query cache and only sends a request if the data is not found. By doing this we avoid sending unnecessary requests.

## Further development

For the next iteration we plan on working on these tasks:

- Improve the design
  - Add logo
  - Add possibility to favorite from home page
  - Add more CSS to make the page more user friendly
- Improve error handling
  - Add more handlers to our error checks
- Write more tests and improve our test coverage
