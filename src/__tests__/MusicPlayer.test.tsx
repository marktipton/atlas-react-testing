import { render, screen } from "@testing-library/react";
import { expect, test, vi, beforeEach } from "vitest";
import MusicPlayer from "../MusicPlayer";
import { PlaylistItem, usePlaylistData } from "../hooks/usePlaylistData";
import '@testing-library/jest-dom/vitest';

const playlistData: PlaylistItem[] = [
  { id: 1, title: 'b2b', artist: 'Charli XCX', genre: 'Hyperpop', duration: '2:58', cover: 'bratCover.png' },
  { id: 2, title: 'One Last Breath', artist: 'Creed', genre: 'Butt Rock', duration: '3:58', cover: 'creedCover.png' },
  { id: 3, title: 'Sphynx', artist: 'La Femme', genre: 'Psychedelic Pop', duration: '5:43', cover: 'MystereCover.jpg' },
];

vi.mock('../hooks/usePlaylistData', () => ({
  usePlaylistData: vi.fn(),
}));

beforeEach(() => {
  vi.resetAllMocks();  // Reset all mocks before each test
});

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

test("MusicPlayer switches to the next song", async () => {
  (usePlaylistData as vi.Mock).mockReturnValue({
    data: playlistData,
    loading: false,
  });

  render(<MusicPlayer />);

  // Assume there is a button with the text 'Next' to skip to the next song
  const nextButton = screen.getByRole('button', { name: /next/i });
  expect(nextButton).toBeInTheDocument();

  // Click the 'Next' button to switch songs
  nextButton.click();

  // check that the second song is displayed after clicking 'Next'
  const coverImage = await screen.findByAltText("One Last Breath Cover");
  expect(coverImage).toBeInTheDocument();
  expect(coverImage).toHaveAttribute('src', 'creedCover.png');  // Verify correct image
});
