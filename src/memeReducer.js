// Create the reducer function and set the different conditions and effects of updating state.

const INITIAL_STATE = {memes: []}

function memeReducer(state=INITIAL_STATE, action) {

  if (action.type === "ADD_MEME") {

    return {...state, memes: [...state.memes, action.meme]};

  } else if (action.type === "REMOVE_MEME") {

    return {...state, memes: state.memes.filter(m => action.id !== m.id)}

  } else {
    return state;
  }

}
module.exports = memeReducer;
export default memeReducer;
