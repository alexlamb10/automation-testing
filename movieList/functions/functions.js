const {By} = require('selenium-webdriver')


let movieScreen = 'Remember the Titans'
module.exports = {
    addMovie: async (driver) => {
    await driver.findElement(By.xpath('//input')).sendKeys(`${movieScreen}`)

    await driver.findElement(By.xpath('//button[text()="Add"]')).click()

    const movie = await driver.findElement(By.xpath('//li'))

    expect(movie.isDisplayed()).toBeTruthy()
  },

  crossMovie: async (driver) => {
      await driver.findElement(By.xpath(`//span[text()="${movieScreen}"]`)).click()
  },

  uncrossMovie: async (driver) => {
      await driver.findElement(By.xpath(`//span[text()="${movieScreen}"]`)).click()
  },

  deleteMovie: async (driver) => {
    movieScreen = movieScreen.split(" ").join("")

      await driver.findElement(By.id(`${movieScreen}`)).click()
  }
}