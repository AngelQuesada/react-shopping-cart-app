export const addCartToLocalStorage = (cart) => {
    
    localStorage.setItem('cart', JSON.stringify(cart));
}