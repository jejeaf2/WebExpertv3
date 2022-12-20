/* eslint-disable no-undef */
import { itActsAsFavoriteRestaurantModel } from './contract/favoriteCulinaryContract'
import FavoriteRestaurantIdb from '../src/scripts/data/favoriterestaurantCulinaryIdb'

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestaurantIdb.getAllRestaurants()).forEach(async (restaurant) => {
      await FavoriteRestaurantIdb.deleteRestaurant(restaurant.id)
    })
  })

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantIdb)
})
