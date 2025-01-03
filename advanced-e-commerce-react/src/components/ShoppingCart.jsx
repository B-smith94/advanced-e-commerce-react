import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, checkout } from '../features/cart/cartSlice';
import { Button, ListGroup } from 'react-bootstrap';
import products from '../data/product';


const ShoppingCart = () => {
    const cart = useSelector((state) => state.cart); //gets the state of the cart
    const dispatch = useDispatch(); 
    // references actions in cartSlice, allows actions to be used in component
    const handleAddItem = (id) => dispatch(addItem({ id }));
    const handleRemoveItem = (id) => dispatch(removeItem({ id }));
    const handleCheckout = () => dispatch(checkout());


    // Function to get product name by ID
    const getProductName = (id) => {
        const product = products.find(product => product.id === parseInt(id));
        return product ? product.name : 'Unknown Product';
    };

    return (
        <div>
            <h2>Shopping Cart</h2>
            <ListGroup> {/* loops over items in cart state, then maps over state */}
                {Object.entries(cart.items).map(([id, quantity]) => (
                    <ListGroup.Item key={id} className='d-flex justify-content-between align-items-center'>
                        <span>{getProductName(id)}  - Quantity: {quantity}</span>
                        <div>
                            <Button variant='success' onClick={() => handleAddItem(id)}>+</Button>
                            <Button variant='danger' onClick={() => handleRemoveItem(id)}>-</Button>
                        </div>
                    </ListGroup.Item>
                ))}
            </ListGroup>
            <p>Total Items: {cart.totalItems}</p>
            <Button variant='primary' onClick={handleCheckout}>Checkout</Button>
            <Link to={'/home'}>
                <Button variant='secondary' className='ms-2'>Return to Home</Button>
            </Link>
        </div>
    );
};

export default ShoppingCart;