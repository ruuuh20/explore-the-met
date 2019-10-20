import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Art from './components/Art'

const App = () => {



  const [art, setArt] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('sunflowers')
 

  useEffect(() => {
    getArt();

  }, [query])  //only on query
  // const getArt = async () => {
  //   // const response = await fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/500')
  //   const response = await fetch(url)
  //   const data = await response.json();
  //   console.log(data)
  //   setArt(data)
  // }

  const getArt = () => {
    fetch('https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&q=' + query)
    .then(response => response.json())
  
    .then(fullResponse => {
      let ids = fullResponse.objectIDs  //array of ids
      if (ids.length < 100) {
      let collection = ids.map(id => 
        fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/' + id)
        .then(response => response.json()))
      Promise.all(collection).then(results => {
        setArt(results)
        // console.log(titles)
      })
      } else {
        alert("Please narrow down your search!")
        return
      }
    })
  
  }

  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search)
    setSearch('')
  }

  return (
    <div className="App">
      <div className="form-container">
        <h1>Let's explore the MET</h1>
        <form onSubmit={getSearch} className="search-form">
          <input className="search-bar" type="text" value={search} onChange={updateSearch} />
          <button className="search-button" type="submit">Search</button>
        </form>
      </div>
      <h1>Here are some of the museum's highlights for <span className="query">{query}</span></h1>
      <div className="art-list">
        {art.map(a => (
          <Art key={a.objectID} title={a.title} image={a.primaryImage} date={a.objectDate} />
        )


    
   
        
      )}
      </div>
    </div>
  
  );
}

export default App;
