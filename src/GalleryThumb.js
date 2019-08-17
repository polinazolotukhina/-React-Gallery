import React from 'react';

function GalleryThumb({images, onDelete, selectImage}) {
    return (
      <div className="scrolling-wrapper-flexbox">
        {
            images&&images.map(
                (image, i )=>
                <div key ={i} className="card" >
                    <img
                        alt={image.images.downsized.url}
                        src={image.images.fixed_height_small.url}
                        onClick={()=>{ selectImage(image.images.downsized.url) }}
                        />
                    <button onClick={ ()=>{onDelete(image.images.fixed_height_small.url) }}>Delete</button>
                </div>
                )
        }

      </div>
    )
}
export default GalleryThumb;
