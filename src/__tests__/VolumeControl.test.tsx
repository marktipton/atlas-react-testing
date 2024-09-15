import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import  VolumeControl  from "../components/VolumeControl";

test("volume control renders correctly", () => {
  const { container } = render(<VolumeControl />);
  expect(container).toMatchSnapshot();
});


test("renders volume slider correctly", () => {
  render(<VolumeControl />);
  const slider = screen.getByRole("slider");
  expect(slider).toBeInTheDocument();
  expect(slider).toHaveAttribute("type", "range");
});
