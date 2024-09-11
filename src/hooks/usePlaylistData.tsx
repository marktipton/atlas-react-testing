import { useState, useEffect } from 'react';

type PlaylistItem = {
  id: number;
  title: string;
  artist: string;
  genre: string;
  duration: string;
  cover: string;
};

export const usePlaylistData = () => {
  const [data, setData] = useState<PlaylistItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPlaylistData = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/playlist');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: PlaylistItem[] = await response.json();
        setData(data);
      } catch (error) {
        console.error('Error fetching playlist:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlaylistData();
  }, []);

  return { data, loading };
};