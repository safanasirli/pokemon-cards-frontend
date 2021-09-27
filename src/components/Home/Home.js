import React from 'react';
import './Home.css'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'

function Home() {
    return (
        <div className="container">
            <header>
                <Nav />
            </header>
            <main>
                <h1>This is the main content</h1>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default Home;