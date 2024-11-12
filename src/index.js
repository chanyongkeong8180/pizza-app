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
        <main className="container">
            <Header />
            <Tagline />
            <Menu />
            <Footer />
        </main>
    );
}

function Header () {
    return (
        <header className='header'>
            <h1 style={{color: "orange", fontSize: "48px", textTransform: "uppercase"}}>
                Yong Keong's Pizza Co.
            </h1>
        </header>
    );
}

function Pizza ({name, ingredients, price, image}) {
    return (
        <article className="pizzas">
            <img src={image} alt={name} />
            <h1>{name}</h1>
            <p>{ingredients}</p>
            <p>{price}</p>
        </article>
    );
}

function Menu() {
    return (
        <article className='menu'>
            <section className="pizzas">
                <h2>Our Menu</h2>
                <Pizza />
            </section>

            <section className="pizza">
                {pizzas.map(pizza => (
                    <Pizza key={pizza.id} {...pizza} />
                ))}
            </section>
        </article>
    )
}

function Tagline() {
    const date = new Date();
    const hour = date.getHours();
    return (    
        <article className="container">    
        <p>
            {hour >= 10 && hour < 22 && "Authentic Italian Cuisine"}
        </p>
        </article>
    );
}

function Button(props) {
    return <button className="btn" onClick={props.onClick}>Order Now</button>;
}

function Alert() {
    function handleClick() {
        alert("Sorry, we're closed");
    }
    return <Button onClick={handleClick} />;
}

function Order() {
    const date = new Date();
    const hour = date.getHours();
    return (
        <footer className="footer">
            {hour >= 10 && hour < 22 ? (
            <>
                <p>We're currently open</p>
                <Button />
            </>
            ): (
            <>
                <p>Sorry, we're closed</p>
                <Alert />
                </>
            )}
        </footer>
    );
}

function Footer() {
    return (
        <Order />
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);