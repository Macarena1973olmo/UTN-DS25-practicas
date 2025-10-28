import React from 'react'
import Header from './components/Header'
import FeaturedBooks from './components/FeaturedBooks'
import Footer from './components/Footer'
import './App.css'


function App() {
return (
<div className="app-container">
<Header />
<main>
<FeaturedBooks />
</main>
<Footer />
</div>
)
}


export default App