import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import  PlayListItem  from "../components/PlayListItem";

test("volume control renders correctly w/", () => {
  const { container } = render(
  <PlayListItem
    name="Daily Routine"
    artist="Animal Collective"
    time="5:47"
    bgColor="bg-secondary-light"
    onClick={() => {}}
  />
  );
  expect(container).toMatchSnapshot();
});