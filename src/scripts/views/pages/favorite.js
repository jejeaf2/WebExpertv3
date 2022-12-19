import { createRestaurantItemTemplate } from '../templates/template-creator'
import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb'

const Favorite = {
  async render () {
    return `
      <div id="explore">
        <h1 style="text-align:center">Restaurant Favorite mu</h1>
        <div class="container" id="restaurant-content">
          <div class="restaurant-item__not__found">
            <h5 style="text-align:center">Tidak ada restaurant untuk ditampilkan</h5>
          </div>
        </div>
      </div>
    `
  },

  async afterRender () {
    const listRestaurant = document.querySelector('#restaurant-content')
    const favoritedRestaurants = await FavoriteRestaurantIdb.getAllRestaurants()

    if (favoritedRestaurants.length !== 0) {
      listRestaurant.innerHTML = ''
      favoritedRestaurants.forEach((restaurant) => {
        listRestaurant.innerHTML += createRestaurantItemTemplate(restaurant)
      })
    }
  }
}

export default Favorite
