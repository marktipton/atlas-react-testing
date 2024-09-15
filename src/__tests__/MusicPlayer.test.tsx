import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { expect, test, vitest  } from "vitest";
import MusicPlayer from "../MusicPlayer";
import  { usePlaylistData } from "../hooks/usePlaylistData";

type PlaylistItem = {
  id: number;
  title: string;
  artist: string;
  genre: string;
  duration: string;
  cover: string;
};

type UsePlaylistDataReturn = {
  data: PlaylistItem[];
  loading: boolean;
};

vitest.mock('../hooks/usePlaylistData', () => ({
  usePlaylistData: vitest.fn(),
}));

test("Next button grabs next song", () => {
  const mockPlaylist = [
    { id: 1, title: "b2b", artist: "Charli XCX", genre: "Hyperpop", duration: "2:58", cover: "bratCover.png"},
    { id: 2, title: "One Last Breath", artist: "Creed", genre: "Butt Rock", duration: "3:58", cover: "creedCover.png"},
    { id: 3, title: "Sphynx", artist: "La Femme", genre: "psychedelic pop", duration: "5:43", cover: "MystereCover.jpg"},
  ];

  (usePlaylistData as vitest.Mock).mockReturnValue({
    data: mockPlaylist,
    loading: false,
  });

  render(<MusicPlayer />);

  const coverImage = screen.getByAltText("b2b Cover");
  expect(coverImage).toHaveAttribute("src", "bratCover.png");
})
