import React from 'react'

type CoverArtProps = {
  cover: string;
};

function CoverArt({cover}: CoverArtProps) {
  return (
    <div>
      <img src={cover} alt="CoverArt" className='rounded-lg w-full h-auto'/>
    </div>
  )
}

export default CoverArt