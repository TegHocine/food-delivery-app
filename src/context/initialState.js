import { fetchUser, fetchCartItems } from '../utils/fetchLocalStorage'

const userInfo = fetchUser()
const cartInfo = fetchCartItems()

export const initialState = {
  user: userInfo,
  foodItem: null,
  cartShow: false,
  cartItems: cartInfo
}
