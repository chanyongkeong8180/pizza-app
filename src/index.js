import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const pizzas = [
    {id: 1,
    name: "Foccacia", 
    ingredients: "Bread with italian olive oil and rosemary", 
    price: "$6", 
    image: "pizzas/focaccia.jpg"},

    {id: 2,
    name: "Pizza Spinaci",
    ingredients: "Tomato, Mozarella, Spinach and Ricotta Cheese",
    price: "$12",
    image: "pizzas/spinaci.jpg"},

    {id: 3,
    name: "Pizza Salamino",
    ingredients: "Tomato, Mozarella, Pepperoni",
    price: "$15",
    image: "pizzas/salamino.jpg"},

    {id: 4,
    name: "Pizza Margherita",
    ingredients: "Tomato and Mozarella",
    price: "$10",
    image: "pizzas/margherita.jpg"},

    {id: 5,
    name: "Pizza Funghi",
    ingredients: "Tomato, Mozarella, Mushrooms and Onion",
    price: "$12",
    image: "pizzas/funghi.jpg"},

    {id: 6,
    name: "Pizza Prosciutto",
    ingredients: "Tomato, Mozarella, Ham, Argula and Burrata Cheese",
    price: "$18",
    image: "pizzas/prosciutto.jpg"}
]

function App () {
    return (
        <div className="container">
            <Header />
            <Tagline />
            <Menu />
            <Footer />
        </div>
    );
}

function Header () {
    return (
        <h1 style={{color: "orange", fontSize: "48px", textTransform: "uppercase"}}>
            Yong Keong's Pizza Co.
        </h1>
    );
}

function Pizza ({name, ingredients, price, image}) {
    return (
        <div className="pizzas">
            <img src={image} alt={name} />
            <h1>{name}</h1>
            <p>{ingredients}</p>
            <p>{price}</p>
        </div>
    );
}

function Menu() {
    return (
        <div>
            <div className="menu">
                <h2>Our Menu</h2>
                <Pizza />
            </div>

            <div className="pizza">
                {pizzas.map(pizza => (
                    <Pizza key={pizza.id} {...pizza} />
                ))}
            </div>
        </div>
    )
}

function Tagline() {
    const date = new Date();
    const hour = date.getHours();
    return (
        <div>            
            <header className="header">
                {hour >= 10 && hour <= 22 ? "Authentic Italian Cuisine" : ""}
            </header>
        </div>
    );
}

function Button(props) {
    return <button className="btn" onClick={props.onClick}>Order Now</button>;
}
function Alert() {
    function handleClick() {
        alert("Sorry, we're closed.");
    }
    return <Button onClick={handleClick} />;
}

function Footer() {
    const date = new Date();
    const hour = date.getHours();
    return (
        <div>            
            <footer className="footer">
                {hour >= 10 && hour <= 22 ? "We're currently open." : "Sorry we're closed."}
            </footer>
            <div>
                {hour >= 10 && hour <= 22 ? <Button/> : <Alert />}
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);