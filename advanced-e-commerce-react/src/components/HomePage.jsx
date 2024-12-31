import { useContext } from "react";
import UserContext from "../context/UserContext";
import { Container } from "react-bootstrap";
import { useCartCount } from "../hooks/useCartCount";

function HomePage() {
    const { user } = useContext(UserContext);
    const cartCount = useCartCount(); // Use the custom hook
    // gets access from user via useContext, displays current name and log status
    return (
        <Container className="mt-5">
            <h1>Welcome, {user.name}!</h1>
            <p>You are now {user.isLoggedIn ? 'logged in' : 'logged out'}.</p>
            <p>Your cart has {cartCount} item(s).</p>
        </Container>
    );
}

export default HomePage;