import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import  PlayListItem  from "../components/PlayListItem";

test("volume control renders correctly w/", () => {
  const { container } = render(<PlayListItem />);
  expect(container).toMatchSnapshot();
});