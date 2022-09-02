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
      <h1>Search HTTP Code Dog Image</h1>
      <h2>enter no. within range of 100 - 600</h2>
      <input required placeholder="Enter the HTTP code" onChange={(event) => setNumber(event.target.value)}></input>
      <button onClick={fetchImage}>Search</button>
      <div>
        {
          dogImage.length > 0 &&
          <a href={dogImage} target="_blank">
            <img src={dogImage} className="logo" alt="dog image" />
          </a>
        }
      </div>
    </div>
  )
}

export default App
