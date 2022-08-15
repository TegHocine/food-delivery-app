export const fetchUser = () => {
  const userInfo =
    localStorage.getItem('user') !== 'undefined'
      ? JSON.parse(localStorage.getItem('user'))
      : localStorage.clear()
  return userInfo
}

export const fetchCartItems = () => {
  const cartItems =
    localStorage.getItem('cart') !== 'undefined'
      ? JSON.parse(localStorage.getItem('cart'))
      : localStorage.clear()
  return cartItems
}
