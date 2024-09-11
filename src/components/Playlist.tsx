import React from 'react'
import PlayListItem from './PlayListItem'

type PlaylistItem = {
  id: number;
  title: string;
  artist: string;
  genre: string;
  duration: string;
  cover: string;
};

type PlaylistProps = {
  playlist: PlaylistItem[];
  currentSong: PlaylistItem | null;
  handleSongClick: (song: PlaylistItem, index: number) => void;
};

function Playlist({playlist, currentSong, handleSongClick}: PlaylistProps) {
  return (
    <div className='p-6 md:w-1/2'>
      <h1 className='font-medium text-xl pb-4'>Playlist</h1>
      {playlist.map((item, index) => (
        <PlayListItem
          key={item.id}
          name={item.title}
          artist={item.artist}
          time={item.duration}
          bgColor={currentSong && currentSong.id === item.id ? "bg-secondary-light" : ''}
          onClick={() => handleSongClick(item, index)}
          />
      ))}
    </div>
  )
}

export default Playlist