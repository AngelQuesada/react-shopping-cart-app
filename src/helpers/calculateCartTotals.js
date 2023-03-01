export const calculateCartTotal = ( cart, setCartTotal ) => {

    let total = 0;

    cart.forEach(cartElement => {
        
        const price = cartElement.price;
        const quantity = cartElement.quantity;

        total = total + quantity * price;

    });

    setCartTotal(total);
}
