import React from 'react'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'

import Footer from '../Components/Footer'
import Recentbooks from '../Components/Recentbooks'
function Home() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Recentbooks/>
      <Footer/>
    </div>
  )
}

export default Home
