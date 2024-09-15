import { render, screen, fireEvent } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import MusicPlayer from "../MusicPlayer";
import { PlaylistItem } from "../hooks/usePlaylistData";
import '@testing-library/jest-dom/vitest';

// Example playlist data
const playlistData: PlaylistItem[] = [
  { id: 1, title: 'b2b', artist: 'Charli XCX', genre: 'Hyperpop', duration: '2:58', cover: 'bratCover.png' },
  { id: 2, title: 'One Last Breath', artist: 'Creed', genre: 'Butt Rock', duration: '3:58', cover: 'creedCover.png' },
  { id: 3, title: 'Sphynx', artist: 'La Femme', genre: 'Psychedelic Pop', duration: '5:43', cover: 'MystereCover.jpg' },
];

// Mock the usePlaylistData hook to return the playlist data
vi.mock('../hooks/usePlaylistData', () => ({
  usePlaylistData: vi.fn(() => ({
    data: playlistData,
    loading: false,
  })),
}));

test("MusicPlayer shows the first song by default", () => {
  // Render the MusicPlayer without passing props, as we are using the mocked hook
  render(<MusicPlayer />);

  // Check that the first song is displayed
  const coverImage = screen.getByAltText('b2b Cover');
  expect(coverImage).toBeInTheDocument();
  expect(coverImage).toHaveAttribute('src', 'bratCover.png');
});

// test("MusicPlayer plays the next song when the Next button is clicked", () => {
//   // Render the MusicPlayer
//   render(<MusicPlayer />);

//   // Simulate the user clicking the Next button
//   const nextButton = screen.getByRole("button", { name: /next/i });
//   fireEvent.click(nextButton);

//   // Check that the second song is now playing
//   const coverImage = screen.getByAltText('One Last Breath Cover');
//   expect(coverImage).toBeInTheDocument();
//   expect(coverImage).toHaveAttribute('src', 'creedCover.png');
// });

// test("MusicPlayer disables the Previous button when on the first song", () => {
//   // Render the MusicPlayer
//   render(<MusicPlayer />);

//   // The Previous button should be disabled when on the first song
//   const prevButton = screen.getByRole("button", { name: /prev/i });
//   expect(prevButton).toBeDisabled();
// });
