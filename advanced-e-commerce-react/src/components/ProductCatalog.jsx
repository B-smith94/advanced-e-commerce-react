import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addItem } from '../features/cart/cartSlice';
import { fetchProducts } from '../features/products/productsSlice';
//import products from '../data/product';
import { Card, Button, Row, Col, Spinner, Alert } from 'react-bootstrap';

const ProductCatalog = () => {
    const dispatch = useDispatch(); // creates dispatch

    const products = useSelector((state) => state.products.items);
    const productsStatus = useSelector((state) => state.products.status);
    const error = useSelector((state) => state.products.error);

    useEffect(() => {
        if (productsStatus === 'idle') {
            dispatch(fetchProducts()); // gonna result in a promise
        }
    }, [productsStatus, dispatch]);

    const handleAddToCart = (id) => {
        dispatch(addItem({ id })); // pass id into addItem, which is passed into dispatch so that store can check for actions
    };

    return (
        <div>
            <h2>Product Catalog</h2> {/* productsStatus matches addCases in builder in productsSlice */}
            {productsStatus === 'loading' && <Spinner animation='border' role='status'><span className='visually-hidden'>Loading...</span></Spinner>}
            {productsStatus === 'failed' && <Alert variant='danger'>{error}</Alert>}
            <Row xs={1} md={4} className='g-4'>
            {products.map(product => (
                <Col key={product.id}>
                    <Card style={{ width: '18rem' }}>
                        <div style={{ padding: '10px' }}>
                            <Card.Img variant='top' src={product.image} style={{ height: '250px', objectFit: 'contain' }} />
                        </div>
                        <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Text>Price: ${product.price}</Card.Text>
                            <Button variant='primary' onClick={() => handleAddToCart(product.id)}>Add to Cart</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
            </Row>
        </div>
    );
};

export default ProductCatalog;