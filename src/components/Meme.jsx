import React from "react";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    imageUrl: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemeImages(data.data.memes));
  }, []);

  function randomUrl() {
    let randomNum = Math.floor(Math.random() * allMemeImages.length);
    let url = allMemeImages[randomNum].url;

    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        imageUrl: url,
      };
    });
  }

  function changeHandler(event) {
    setMeme((prevText) => {
      const { name, value } = event.target;
      return {
        ...prevText,
        [name]: value,
      };
    });
  }
  return (
    <div className="meme-form">
      <div className="meme-input-container">
        <input
          className="meme-p1"
          type="text"
          placeholder="Top text"
          name="topText"
          value={meme.topText}
          onChange={changeHandler}
        />
        <input
          className="meme-p2"
          type="text"
          placeholder="Bottom text"
          name="bottomText"
          value={meme.bottomText}
          onChange={changeHandler}
        />
      </div>
      <button onClick={randomUrl} className="meme-btn">
        Get a new meme image 🖼
      </button>
      <div className="img-container">
        <h1 className="top-text">{meme.topText}</h1>
        <img className="meme-image" src={meme.imageUrl} />
        <h1 className="bottom-text">{meme.bottomText}</h1>
      </div>
    </div>
  );
}
