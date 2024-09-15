import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import CoverArt from "../components/CoverArt";

test("CoverArt renders correctly", () => {
  const cover = "https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/images/albumn6.webp";
  const title = "Album Title";

  const { container } = render(<CoverArt cover={cover} title={title} />);

  expect(container).toMatchSnapshot();

  const imgElement = screen.getByAltText(`${title} Cover`);
  expect(imgElement).toBeInTheDocument();
  expect(imgElement).toHaveAttribute('src', cover);
});