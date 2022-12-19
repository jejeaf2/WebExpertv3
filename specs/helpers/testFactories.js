import FavoriteButtonInitiator from '../../src/scripts/utils/favorite-button-initiator'
import FavoriteRestaurantIdb from '../../src/scripts/data/favoriterestaurant-idb'

const createFavoriteButtonPresenterWithRestaurant = async (restaurant) => {
  await FavoriteButtonInitiator.init({
    favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
    favoriteRestaurants: FavoriteRestaurantIdb,
    restaurant
  })
}

export { createFavoriteButtonPresenterWithRestaurant }
