import React, {useState} from 'react'

type PlayControlsProps = {
  onNextSong: () => void;
  onPrevSong: () => void;
  isPrevDisabled: boolean;
  isNextDisabled: boolean;
  onShuffleToggle: (isShuffled: boolean) => void;
};

const PlayControls = ({ onNextSong, onPrevSong, isPrevDisabled, isNextDisabled, onShuffleToggle }: PlayControlsProps) => {
  const [speed, setSpeed] = useState<'1x' | '2x' | '3x'>('1x');
  const [play, setPlay] = useState<boolean>(false);
  const [isShuffled, setIsShuffled] = useState<boolean>(false);

  const speedClick = () => {
    setSpeed((prevSpeed) => {
      switch (prevSpeed) {
        case '1x':
          return '2x';
        case '2x':
          return '3x';
        case '3x':
          return '1x';
      }
    });
  };

  const playClick = () => {
    setPlay((prevState) => !prevState);
  };

  const shuffleClick = () => {
    const newShuffleState = !isShuffled;
    setIsShuffled(newShuffleState);
    onShuffleToggle(newShuffleState);
  };

  return (
    <div className='flex justify-between items-center h-8'>
      <button onClick={speedClick}>{speed}</button>
      <button onClick={onPrevSong} disabled={isPrevDisabled} className={`${isPrevDisabled ? 'text-secondary' : 'text-primary'}`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
          <path d="M9.195 18.44c1.25.714 2.805-.189 2.805-1.629v-2.34l6.945 3.968c1.25.715 2.805-.188 2.805-1.628V8.69c0-1.44-1.555-2.343-2.805-1.628L12 11.029v-2.34c0-1.44-1.555-2.343-2.805-1.628l-7.108 4.061c-1.26.72-1.26 2.536 0 3.256l7.108 4.061Z" />
        </svg>
      </button>
      <button className='outline rounded' onClick={playClick}>
        {play ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
          </svg>
        )}
      </button>
      <button onClick={onNextSong} disabled={isNextDisabled} className={`${isNextDisabled ? 'text-secondary' : 'text-primary'}`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
          <path d="M5.055 7.06C3.805 6.347 2.25 7.25 2.25 8.69v8.122c0 1.44 1.555 2.343 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.343 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256l-7.108-4.061C13.555 6.346 12 7.249 12 8.689v2.34L5.055 7.061Z" />
        </svg>
      </button>
      <button onClick={shuffleClick} className={`${isShuffled ? 'text-accent-bright' : 'text-primary'}`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-6 ${isShuffled ? 'text-accent-bright' : 'text-primary'}`}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
        </svg>
      </button>
    </div>
  )
}

export default PlayControls