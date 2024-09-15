import React from 'react'

type CoverArtProps = {
  cover: string;
  title: string;
};

function CoverArt({cover, title}: CoverArtProps) {
  return (
    <div>
      <img src={cover} alt={`${title} Cover`} className='rounded-lg w-full h-auto'/>
    </div>
  )
}

export default CoverArt;