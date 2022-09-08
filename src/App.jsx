import { useState } from 'react'
import './App.css'

function App() {
  const [number, setNumber] = useState(null)
  const [dogImage, setImage] = useState('https://http.dog/200.jpg');

  async function fetchImage() {
    if (!number) {
      alert('Please enter the number first then hit the button')
      return
    }

    if (number < 100 || number > 599) {
      alert('Not a valid HTTP code')
      return
    }

    // Set image link manually because localhost is getting CORS
    // error
    setImage(`https://http.dog/${number}.jpg`)

    // using FETCH API
    // const response = await fetch(`https://http.dog/${number}.jpg`).catch(() => null)
    // if (!response) {
    //   alert('Something went wrong, please check the number provided')
    //   return
    // }

    // const data = await response.blob();
    // setImage(URL.createObjectURL(data))
  };

  return (
    <div className="App">
     <div className="container">
        <header className="header"> 
        <p className='ctxt'> Get Your Dog </p>
      

      
      



        </header>  
        <a href='https://twitter.com/dog_feelings' target='_blank' >
  <button className="button-3" role="button">Follow US</button>
     </a>
        <p>Dogs for every HyperText Transfer Protocol response status code.</p>

      
        <div className='searchBox'>
       
          
<input className='input' required placeholder="Enter the HTTP code" onChange={(event) => setNumber(event.target.value)}></input>
      <button className='search' onClick={fetchImage}>Search</button>
      <div>
        {
          dogImage.length > 0 &&
          <a href={dogImage} target="_blank">
            <img src={dogImage} className="logo" alt="dog image" />
          </a>
        }
      

          </div>
          
        </div>
      
    </div>
    </div>
  )
}

export default App

