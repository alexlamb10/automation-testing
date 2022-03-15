const {By} = require('selenium-webdriver')

module.exports = {
  addMovie: async (driver) => {
    await driver.findElement(By.xpath('//input')).sendKeys('The Batman')

    await driver.findElement(By.xpath('//button[text()="Add"]')).click()

    const movie = await driver.findElement(By.xpath('//li'))

    expect(movie.isDisplayed()).toBeTruthy()
  },

  crossMovie: async (driver) => {
      await driver.findElement(By.xpath('//span[text()="The Batman"]')).click()
  },

  uncrossMovie: async (driver) => {
      await driver.findElement(By.xpath('//span[text()="The Batman"]')).click()
  },

  
}