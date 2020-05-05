import React from "react";


// A component which renders a single meme.
function Meme({id, topText, bottomText, pictureURL, deleteMeme}) {

  const handleRemove = evt => {
    deleteMeme(id);
  }

  return (

    <div >
      <h2>{topText}</h2>
      <h2>{pictureURL}</h2>
      <h2>{bottomText}</h2>
      <button name={id} onClick={handleRemove}>X</button>
    </div>

  )

}

export default Meme;