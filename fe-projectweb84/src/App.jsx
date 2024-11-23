import {Routes, Route} from 'react-router-dom'
import { useContext } from 'react'

import Footer from './components/footer'
import Header from './components/header'
import LoginPage from './components/loginPage'
import RegisterPage from './components/registerPage'
import HomePage from './components/homePage'
import CategoryPage from './components/categoryPage'
import DetailPage from './components/detailPage'
import PaymentPage from './components/paymentPage'

import { Store } from './Store'

import './App.css'

function App() {
    const store = useContext(Store)
    return (
        <div className='container'>
            <header><Header/></header>
            <main>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/category' element={<CategoryPage/>}/>
                    <Route path='/detail' element={<DetailPage/>}/>
                    <Route path='/payment' element={<PaymentPage/>}/>
                    <Route path='/login' element={<LoginPage/>}/>
                    <Route path='/register' element={<RegisterPage/>}/>
                </Routes>
            </main>
            <footer><Footer/></footer>
        </div>
    )
}

export default App
