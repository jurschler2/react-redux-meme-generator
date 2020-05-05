import React, {useState} from "react";


// Component that renders a form to add a meme.
function MemeForm({addMeme}) {

  const INITIAL_STATE = {topText:"", bottomText:"", pictureURL:""}
  const [formData, setFormData] = useState({...INITIAL_STATE})


  const handleChange = evt => {

    const {name, value} = evt.target;
    setFormData(fData => ({...fData, [name]: value}))

  }
  const handleSubmit = evt => {
    evt.preventDefault();
    addMeme(formData);
    setFormData({...INITIAL_STATE});
  }


  return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="topText">Top Text:</label>
          <input name="topText" 
                onChange={handleChange} 
                value={formData.topText}>
          </input>
        </div>
        <div>
          <label htmlFor="bottomText">Bottom Text:</label>
          <input name="bottomText" 
                onChange={handleChange} 
                value={formData.bottomText}>
          </input>
        </div>
        <div>
          <label htmlFor="pictureURL">Photo URL:</label>
          <input name="pictureURL" 
                onChange={handleChange} 
                value={formData.pictureURL}>
          </input>
        </div>
        <button>Generate Meme</button>
      </form>
    );


  }


export default MemeForm;