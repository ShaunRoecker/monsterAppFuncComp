import { useState, useEffect } from 'react';
import CardList from '../components/card-list/card-list.component';
import SearchBar from "../components/search-bar/search-bar.component";
import "tachyons";
import './App.css';

const App = () => {
  //States
  //Only updates if hard equality change in state
  //when it updates, the entire functional component code is ran
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [filterMonsters, setFilterMonsters] = useState(monsters);


  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString)
  };


  useEffect(() => {fetch("https://jsonplaceholder.typicode.com/users")
              .then((response) => response.json())
              .then((users) => setMonsters(users));
  }, []);


  useEffect(() => {
    const newFilterMonsters = monsters.filter((monster) => {
        return monster.name.toLocaleLowerCase().includes(searchField); 
    });
    setFilterMonsters(newFilterMonsters); 
    }, [monsters, searchField])
  
  
  return(
    <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>
      
      <SearchBar 
        className="monsters-search-box"
        onChangeHandler={onSearchChange}
        placeHolder={"search monsters"}/>
       
      <CardList 
        monsters={filterMonsters}/>   
  </div> 

  );
};

export default App;
