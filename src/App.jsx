import { useEffect, useState } from "react";
import CenterContent from "./components/CenterContent";
import Input from "./components/Input";
import NavBar from "./components/NavBar";

const App = () => {
  const [memeImages, setMemeImages] = useState([]);
  const [activeImage, setActiveImage] = useState("");
  const [captions, setCaptions] = useState({
    top: "",
    bottom: "",
  });

  const handleCaptionChange = (event) => {
    const { name, value } = event.target;
    setCaptions((prevState) => ({ ...prevState, [name]: value }));
  };

  const selectRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * memeImages.length);
    setActiveImage(memeImages[randomIndex].url);
  };

  useEffect(() => {
    const getMemeData = async () => {
      const response = await fetch("https://api.imgflip.com/get_memes");
      const responseData = await response.json();
      setMemeImages(responseData.data.memes);
    };
    getMemeData();
  }, []);

  useEffect(() => {
    if (memeImages.length > 0) selectRandomImage();
  }, [memeImages]);

  return (
    <div>
      <NavBar />
      <CenterContent>
        <form className="flex gap-[18px] mt-9">
          <Input
            label="Top caption"
            name="top"
            value={captions.topCaption}
            onChange={handleCaptionChange}
          />
          <Input
            label="Bottom caption"
            name="bottom"
            value={captions.bottomCaption}
            onChange={handleCaptionChange}
          />
        </form>
        <button
          type="button"
          className="w-full py-3 mt-8 text-center text-white rounded-md bg-dark-to-light-violet-gradient mb-9"
          onClick={selectRandomImage}
        >
          Get a new meme image 🖼️
        </button>
        <div className="relative text-5xl font-black tracking-wide text-white font-oswald leading-[56px] text-stroked">
          {captions.top && (
            <h4 className="absolute w-full px-5 text-center top-[16px]">
              {captions.top}
            </h4>
          )}

          {activeImage && (
            <img
              src={activeImage}
              alt="Meme cover"
              className="object-cover w-full h-[400px]"
            />
          )}

          {captions.bottom && (
            <h4 className="absolute w-full px-5 text-center bottom-[16px]">
              {captions.bottom}
            </h4>
          )}
        </div>
      </CenterContent>
    </div>
  );
};

export default App;
