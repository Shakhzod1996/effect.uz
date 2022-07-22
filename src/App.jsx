import React from 'react'
import MainPage from './components/MainPage/MainPage'
import Navbar from './components/Navbar/Navbar'
import SideBar from './components/Sidebar/SideBar'
import './App.css'
import FotoNews from './components/FotoNews/FotoNews'
import VideoNews from './components/VideoNews/VideoNews'
import Footer from './components/Footer/Footer'

export default function App() {
  return (
    <>
    <div className='main_flex'>
    <Navbar />
    <MainPage />
    <SideBar />
    </div>
    <FotoNews />
    <VideoNews />
    <Footer />
    </>
  )
}
