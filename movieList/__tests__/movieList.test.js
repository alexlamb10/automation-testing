// Boilerplate lines we need in order to set up the tests

const {Builder, Capabilities, By} = require('selenium-webdriver')

const {addMovie, crossMovie, uncrossMovie, deleteMovie} = require('../functions/functions')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

//Navigate to the movie list webpage
beforeAll(async () => {
    await driver.get('http://127.0.0.1:5501/movieList/index.html')
})

//Closes the webpage once completed
afterAll(async () => {
    await driver.quit()
})

//Get a movie on screen to work with
test('Adds a movie to the list', async () => {
    await addMovie(driver)

    await driver.sleep(3000)
})

//Cross off a the movie
test('Cross off movie that was added', async () => {
    await crossMovie(driver)

    await driver.sleep(3000)
})

test('Uncross the movie', async () => {
    await uncrossMovie(driver)

    await driver.sleep(3000)
})

test('Delete movie that was added', async() => {
    await deleteMovie(driver)

    await driver.sleep(3000)
})