import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Art from './components/Art'

const App = () => {

  useEffect( async () => {
    getArt();
    
  }, [])

  const [art, setArt] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('sunflowers')
  const url = 'https://collectionapi.metmuseum.org/public/collection/v1/search?q=sunflowers'

  // const getArt = async () => {
  //   // const response = await fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/500')
  //   const response = await fetch(url)
  //   const data = await response.json();
  //   console.log(data)
  //   setArt(data)
  // }

  const getArt = () => {
    fetch(url)
    .then(response => response.json())
    .then(fullResponse => {
      let ids = fullResponse.objectIDs  //array of ids
      let collection = ids.map(id => 
        fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/' + id)
        .then(response => response.json()))
      Promise.all(collection).then(results => {
        setArt(results)
        // console.log(titles)
      })
    })
  }

  const updateSearch = e => {
    setSearch(e.target.value)
  }

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">Search</button>
      </form>
      {art.map(a => (
        <Art title={a.title} image={a.primaryImage} date={a.objectDate} />
      )
        
      )}
   
     
    </div>
  );
}

export default App;
