# Testing in project 1

Run the tests by running the command 'npm test' in the folder 'prosjekt1'.

#### Choices

The testing is based on vitest and jest.
We have set up a mock server and made a few drink items just for testing.

#### What is tested

- We have a snapshot test for the 'home page' to check that the UI does not change unexpectedly.

- We have a test for checking that the prop 'CarouselItem' contains the mock items we ask for.

- We have a user interactive test that checks if the button for favouriting an item acually changes css class when clicked, so that it changes color.
- Lastly we have a state test that also uses the css class of the favourite button to check if local storage works as expected.

### Further development

In the later iterations we will expand the testing, so that we have a more thorough and greater test coverage.
