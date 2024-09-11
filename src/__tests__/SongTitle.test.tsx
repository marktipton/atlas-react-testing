import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import  SongTitle  from "../components/SongTitle";

test("volume control renders correctly", () => {
  const { container } = render(<SongTitle />);
  expect(container).toMatchSnapshot();
});
