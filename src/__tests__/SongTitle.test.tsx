import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import  SongTitle  from "../components/SongTitle";

test("volume control renders correctly w/", () => {
  const { container } = render(<SongTitle />);
  expect(container).toMatchSnapshot();
});

test("renders songtitle component w/ given title and artist", () => {
  const { container } = render(<SongTitle title="Sandstorm" artist="Darude"/>);
  expect(container).toMatchSnapshot();
  expect(screen.getByText("Sandstorm")).toBeTruthy();
  expect(screen.getByText("Darude")).toBeTruthy();
});

test("renders SongTitle component with empty artist and title", () => {
  const { container } = render(<SongTitle title="" artist="" />);
  expect(container).toMatchSnapshot();

  // Check that the <h1> element is rendered but contains no text
  const titleElement = container.querySelector('h1');
  expect(titleElement).not.toBeNull();
  expect(titleElement?.textContent).toBe("");

  // Check that the <p> element is rendered but contains no text
  const artistElement = container.querySelector('p');
  expect(artistElement).not.toBeNull();
  expect(artistElement?.textContent).toBe("");
});
