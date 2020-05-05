import React from 'react';
import './App.css';
import MemeForm from "./MemeForm"
import Meme from "./Meme"
import {v4 as uuid} from "uuid"
import { useDispatch, useSelector } from "react-redux";


// Component which renders the meme generator app.
// Also contains the meme container.
function App() {


  // Define dispatch within the app and get memes from the store.
  const dispatch = useDispatch();
  const memes = useSelector(store => store.memes);
  
  const addMeme = meme => {
    let memeToAdd = {...meme, id: uuid()}
    dispatch({ type: "ADD_MEME", meme: memeToAdd});
    
  }
  
  const deleteMeme = memeID => {
    dispatch({ type: "REMOVE_MEME", id: memeID});
    
  }
  
  let memesHTML = memes.map(m => <Meme key={m.id} 
                                       id={m.id} 
                                       topText={m.topText} 
                                       bottomText={m.bottomText} 
                                       pictureURL={m.pictureURL} 
                                       deleteMeme={deleteMeme} />)
  
  return (
    <div className="App">
      <MemeForm addMeme={addMeme}/>
      <div className="meme-container">
      {memesHTML}
      </div>
    </div>
  );
}

export default App;
