/* eslint-disable no-undef */
const assert = require('assert')

// eslint-disable-next-line no-undef
Feature('Favoriting Restaurants')

Before(({ I }) => {
  I.amOnPage('/#/favorite')
})

Scenario('showing empty favorited restaurants', ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found')
})

Scenario('favoriting and unfavoriting one restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found')
  I.amOnPage('/')

  // Press ENTER in terminal to run the next step
  pause()

  I.seeElement('.contents x')

  const firstRestaurant = locate('.contents x').first()
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant)
  I.click(firstRestaurant)

  I.seeElement('#favoriteButton')
  I.click('#favoriteButton')

  I.amOnPage('/#/favorite')

  const favoritedRestaurantTitle = await I.grabTextFrom('.contents x')

  assert.strictEqual(firstRestaurantTitle, favoritedRestaurantTitle)

  I.seeElement('.contents x')

  const favoritedRestaurant = locate('.contents x').first()
  I.click(favoritedRestaurant)

  I.seeElement('#favoriteButton')
  I.click('#favoriteButton')

  I.amOnPage('/#/favorite')

  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found')
})
