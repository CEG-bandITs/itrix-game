import React from 'react'
import {Wrapper} from "../../RootPage"

function Home() {
  
  const value =React.useContext(Wrapper);
  return (
    <div>

      <h2>Home</h2>
    
      {value.isLogin?"your are  logined":"you are not logined"}
      <h3>test image</h3>
      <img src={"/images/test_image.jpg"}></img> 

    </div>
  )
}

export default Home