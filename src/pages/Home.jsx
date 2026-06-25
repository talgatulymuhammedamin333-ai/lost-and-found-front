import React from 'react'
import Header from '../widgets/header/Header'
import HeroTitle from '../widgets/main/HeroTitle'
import Footer from '../widgets/footer/Footer'

function Home() {
  return (
    <div>

        <Header/>
      
      <main>
        <HeroTitle/>
      </main>

      <Footer/>

    </div>
  )
}

export default Home