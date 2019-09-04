import React, { useState, useEffect } from 'react';
import GalleryThumb from './GalleryThumb';

function GalleryHooks() {
  // Declare a new state variable, which we'll call "count"
  const [images, getImages] = useState([]);
  const [hasError, setErrors] = useState(false);
  const  [selectedImg, setSelectedImg]  = useState('');


    useEffect(() => {
        async function fetchData() {
        const res = await fetch( `https://api.giphy.com/v1/gifs/trending?api_key=PEyIrGaWdf08Lw4nezyXejpD9Y0pO6Rt`);
          res
            .json()
            .then(res => getImages(res.data))
            .catch(err => setErrors(err));
        }

        fetchData();


    }, []);
images[0]&&setInterval(() => setSelectedImg((images[Math.floor(Math.random() * images.length)]).images.downsized.url), 3000)

  return (
    <div>
    <img
        src={ selectedImg!== '' ? (selectedImg):(images[0]&&images[0].images.fixed_height.url)}
        className="mainImg"
    />

      <GalleryThumb
        images = { images }
        onDelete={ (i)=>getImages(images.filter(image=> image.images.fixed_height_small.url !== i))}
        selectImage={(i)=>setSelectedImg(i)}
    />

    </div>
  );
}


export default GalleryHooks
