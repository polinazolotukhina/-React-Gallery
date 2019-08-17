import React from 'react';

function GalleryThumb({images, onDelete, selectImage}) {
    return (
      <div className="scrolling-wrapper-flexbox">
        {
            images&&images.map(
                (image, i )=>
                <div key ={i} className="card" >
                    <div className="cardContainer" >
                        <button
                            onClick={ ()=>{onDelete(image.images.fixed_height_small.url) }}
                            className="delete"
                        >
                            x
                        </button>
                        <img
                            alt={image.images.downsized.url}
                            src={image.images.fixed_height_small.url}
                            onClick={()=>{ selectImage(image.images.downsized.url) }}
                            />

                    </div>
                </div>
                )
        }

      </div>
    )
}
export default GalleryThumb;
