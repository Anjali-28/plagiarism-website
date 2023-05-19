import React from 'react'

import './Home.css'
import HomeCard from './HomeCard/HomeCard'

function Home() {
  return (
    <div className='home'>
      <HomeCard title="LOREM IPSUM" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of" image="https://images.theconversation.com/files/350748/original/file-20200803-22-19446k1.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip"/>
     </div>
  )
}

export default Home