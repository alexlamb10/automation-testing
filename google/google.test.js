// Lines 2 through 6 are our boilerplate lines of code, we need them for our tests to work
const {Builder, Capabilities, By} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

// First we're going to navigate to Google.com
beforeAll(async () => {
    await driver.get('https://www.google.com/')
})

// And after our test has completed, we want to close our browser
afterAll(async () => {
    await driver.quit()
})

// This test will require you to change some values in order to get your tests up and running
// You'll want to change each of the commented out pieces below
test('I can search Google', async () => {

    // For this line you'll need to put the name of the search bar which you can find by inspecting that element in Chrome
    let searchBar = await driver.findElement(By.name('q'))
    
    // This time you'll just finish this string with something you want to search on Google, make sure you leanve that \n !
    await searchBar.sendKeys('Hamilton\n')

    // This line will pause our automation so you can see your search!
    await driver.sleep(2000)

    // We now want our automation to get the search bar again since we're on a new page
    searchBar = await driver.findElement(By.name('q'))

    // We'll use this line to clear out our old input.
    await searchBar.clear() 

    // Let's do another search!
    await searchBar.sendKeys('Utah Jazz\n')

    await driver.sleep(2000) 
})


let address = '1550 Digital Dr, Lehi, UT 84043'
test("Search an address on google maps ", async () => {
    let searchBar  = await driver.findElement(By.name('q'))

    await searchBar.clear()

    await searchBar.sendKeys(`${address}\n`)

    await driver.sleep(3000)

    await driver.findElement(By.className('wpk9re')).click()

    await driver.sleep(5000)
    
})