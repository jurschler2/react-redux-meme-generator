const memeReducer = require("./memeReducer");


const testMeme = {topText:"topTextTest", 
                  bottomText:"bottomTextTest", 
                  pictureURL: "pictureURLTest", 
                  id:"Test1"}


describe("#memeReducer", function () {

  it("is a function", function () {
    expect(typeof memeReducer).toEqual("function");
  });
  test('it correctly adds a meme', () => {
    expect(memeReducer({memes:[]},{type:"ADD_MEME", meme: testMeme})).toEqual({memes:[testMeme]});
  });
});