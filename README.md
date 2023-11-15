# Prosjekt 1

## Sipfinder

Sipfinder is a website for finding cocktail recipes. The site consists of three pages: the **browse page**, the **home page** and the **drink page**. On the **home page**, the drinks are presented in a carousel list where the user can go back and forth in a slide show of all the recepies. The **browse page** presents the drinks in a list, and the user can apply filters (alcoholic, non-alcoholic and favorites) to control which drinks are displayed. The filtering choices are remembered when the page is reloaded. The user can also save drinks as favorites by clicking a button, and the favorites will be remembered even when the browser is closed and reopened. By clicking on a drink on the browse page, the user is sent to the **drink page** with the full recipe.

## Running the project

- Run the project with _npm run dev_ in the **prosjekt1**-folder. Before running the project for the first time, run _npm install_.
- Run the tests with _npm test_.

## Project structure

- The **assets** folder contains _styles.css_, that defines styling standards that are used in the project.

- The **components** folder contains code and styling for the components _CarouselItem_, _ListElement_ and _NavBar_.

- The **pages** folder contains code and styling for the _home page_, _drink page_ and _browse page_.

- The **utils** folder contains code that is used several times in the projects. _ApiRequests_ holds requests that are used to fetch data from the REST API. _Types_ contains descriptions of the different interfaces that are used in the project.

- The **test** folder holds the different test files and a setup file for testing. The test folder contains a more thorough README that explains the tests.

## Responsive design

We have designed our web application to be usable on various devices and screen sizes. We have mainly focused on it being usable on mobile screens and desktop screens.

Here are some of the technologies used to ensure responsiveness:

- **CSS media queries**: This enabled us to apply different styles based on the characteristics of the user's device. We have used a breakpoint for 800px, and changed the styling for devices that have a screen width below this breakpoint.

- **Flexible grid layouts**: We have used flexboxes with different flex directions based on the screen's size. On the browse-page, the container for the filter and contents boxes changes from to flex direction: row to flex-direction column to ensure that this page works well on both small and large screens.

- **Viewport meta tag**: We have included the viewport meta tag in the HTML, which enables responsiveness and allows us to set the initial scale. In our CSS-code, we have used relative size units such as vh, vw and percentages to ensure that the sizing of elements are relative to the screen size.

### Testing Responsiveness

Throughout development, we have tested the responsiveness by using the browser's inspector tool. This tool makes it possible to check how the web application looks on different devices. With the inspector tool, we have seen that the web application works well on different mobile devices, such as iPhone SE, iPhone 12 Pro, Samsung Galaxy S8+, to name a few.

In addition to using the inspector tool, we have tested the web application on our actual devices, which are various mobile devices and laptops.

## REST API

We have used the Cocktail DB (https://www.thecocktaildb.com/api.php) as our REST API.

We have used TanStack with the method ensureQueryData() when sending requests to the REST API. This method first checks the query cache and only sends a request if the data is not found. By doing this we avoid sending unnecessary requests.

## Testing

- Snaps
