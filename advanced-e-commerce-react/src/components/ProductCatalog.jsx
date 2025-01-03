import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart/cartSlice';
import products from '../data/product';
import { Card, Button } from 'react-bootstrap';

const ProductCatalog = () => {
    const dispatch = useDispatch(); // creates dispatch

    const handleAddToCart = (id) => {
        dispatch(addItem({ id })); // pass id into addItem, which is passed into dispatch so that store can check for actions
    };

    return (
        <div>
            <h2>Product Catalog</h2>
            <div>
                {products.map(product => (
                    <Card key={product.id} style={{ width: '18rem', margin: '10px' }}>
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text>
                                Price: ${product.price}    
                            </Card.Text>    
                            <Button variant='primary' onClick={() => handleAddToCart(product.id)}>Add to Cart</Button>
                        </Card.Body>   
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default ProductCatalog;