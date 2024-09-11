import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import  CoverArt  from "../components/CoverArt";

test("CoverArt renders correctly", () => {
  const cover = "https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/images/albumn6.webp";

  const { container } = render(<CoverArt cover={cover} />);
  expect(container).toMatchSnapshot();
});