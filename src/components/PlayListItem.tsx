import React from 'react'

type PlayListItemProps = {
  name: string;
  artist: string;
  time: string;
  bgColor?: string;
  onClick: () => void;
};

function PlayListItem({ name, artist, time, bgColor, onClick }: PlayListItemProps) {
  return (
    <div className={`flex w-full items-center justify-between ${bgColor} rounded-lg`} onClick={onClick}>
      <div>
        <p className='text-primary font-medium'>{name}</p>
        <p className='text-secondary font-medium'>{artist}</p>
      </div>
      <p className='text-secondary font-medium'>{time}</p>

    </div>
  )
}

export default PlayListItem