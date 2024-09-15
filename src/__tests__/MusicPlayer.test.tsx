import { render, screen } from "@testing-library/react";
import { expect, test, vi, beforeEach } from "vitest";
import MusicPlayer from "../MusicPlayer";
import { PlaylistItem, usePlaylistData } from "../hooks/usePlaylistData";
import '@testing-library/jest-dom/vitest';

const playlistData: PlaylistItem[] = [
  { id: 1, title: 'b2b', artist: 'Charli XCX', genre: 'Hyperpop', duration: '2:58', cover: 'bratCover.png' },
  { id: 2, title: 'One Last Breath', artist: 'Creed', genre: 'Butt Rock', duration: '3:58', cover: 'creedCover.png' },
  { id: 3, title: 'Sphynx', artist: 'La Femme', genre: 'Psychedelic Pop', duration: '5:43', cover: 'MystereCover.jpg' },
  { id: 4, title: 'Pyramids', artist: 'Frank Ocean', genre: 'R&B', duration: '9:52', cover: 'ChannelOrangeCover.png' },
  { id: 5, title: 'Echoes', artist: 'Pink Floyd', genre: 'Rock', duration: '23:32', cover: 'PinkFloydCover.png' },
  { id: 6, title: 'Run From Me', artist: 'Timber Timbre', genre: 'Rock', duration: '4:16', cover: 'TimberTimbreCover.png' },
];

vi.mock('../hooks/usePlaylistData', () => ({
  usePlaylistData: vi.fn(),
}));

beforeEach(() => {
  vi.resetAllMocks();  // Reset all mocks before each test
});

// test load first song........................................................
test("MusicPlayer shows the first song by default", () => {
  (usePlaylistData as vi.Mock).mockReturnValue({
    data: playlistData,
    loading: false,
  });
  render(<MusicPlayer />);


  const coverImage = screen.getByAltText('b2b Cover');
  expect(coverImage).toBeInTheDocument();
  expect(coverImage).toHaveAttribute('src', 'bratCover.png');
});

// Test loading................................................................
test("MusicPlayer shows a loading screen when the playlist is loading", () => {

  (usePlaylistData as vi.Mock).mockReturnValue({
    data: playlistData,
    loading: true,
  });

  vi.mock('../hooks/usePlaylistData', () => ({
    usePlaylistData: vi.fn(() => ({
      data: playlistData,
      loading: true,
    })),
  }));

  render(<MusicPlayer />);

  const loadingMessage = screen.getByText(/loading.../i);  // Match the loading text (case insensitive)
  expect(loadingMessage).toBeInTheDocument();
});

// Test next button............................................................
test("MusicPlayer switches to the next song", async () => {
  (usePlaylistData as vi.Mock).mockReturnValue({
    data: playlistData,
    loading: false,
  });

  render(<MusicPlayer />);

  // utilize aria-label to get the next button
  const nextButton = screen.getByRole('button', { name: /next/i });
  expect(nextButton).toBeInTheDocument();

  // Click the 'Next' button to switch songs
  nextButton.click();

  // check that the second song is displayed after clicking 'Next'
  const coverImage = await screen.findByAltText("One Last Breath Cover");
  expect(coverImage).toBeInTheDocument();
  expect(coverImage).toHaveAttribute('src', 'creedCover.png');  // Verify correct image
});

// test previous button.......................................................
test("MusicPlayer switches to the previous song", async () => {
  (usePlaylistData as vi.Mock).mockReturnValue({
    data: playlistData,
    loading: false,
  });

  render(<MusicPlayer />);
  // Go to next song first
  const nextButton = screen.getByRole('button', { name: /next/i });
  nextButton.click();

  // Wait for the second song's cover to load
  let coverImage = await screen.findByAltText("One Last Breath Cover");
  expect(coverImage).toBeInTheDocument();
  expect(coverImage).toHaveAttribute('src', 'creedCover.png');

  // click previous button to go back to first song (find using aria-label)
  const prevButton = screen.getByRole('button', { name: /previous/i });
  expect(prevButton).toBeInTheDocument();
  prevButton.click();

  // Wait for the first song's cover to load again
  coverImage = await screen.findByAltText("b2b Cover");
  expect(coverImage).toBeInTheDocument();
  expect(coverImage).toHaveAttribute('src', 'bratCover.png');
});

// Test music player shuffle mode with next button
test("MusicPlayer shuffles to a random song", async () => {
  (usePlaylistData as vi.Mock).mockReturnValue({
    data: playlistData,
    loading: false,
  });

  render(<MusicPlayer />);

  const initialCoverImage = screen.getByAltText('b2b Cover');
  expect(initialCoverImage).toBeInTheDocument();

  // Click the "Shuffle" button to toggle to shuffle mode
  const shuffleButton = screen.getByRole('button', { name: /shuffle/i });
  expect(shuffleButton).toBeInTheDocument();
  shuffleButton.click();

  // click next to get random song from playlist
  const nextButton = screen.getByRole('button', { name: /next/i });
  nextButton.click();

  // Ensure a different song cover is displayed after shuffling and clicking next
  const shuffledCoverImage = await screen.findByAltText(/Cover/i);

  expect(shuffledCoverImage).toBeInTheDocument();
  expect(shuffledCoverImage).not.toHaveAttribute('src', 'bratCover.png'); // It should not be the same as the first song
});
