import React from 'react'
import Navbar from '../components/Home/Navbar'
import Main from '../components/Home/Main'


function Home(props) {
  console.log(props)
  return (
    <div>
      <Navbar />
      <Main/>
    </div>
  )
}

export default Home