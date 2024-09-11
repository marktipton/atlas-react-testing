import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import  VolumeControl  from "../components/VolumeControl";

test("volume control renders correctly", () => {
  const { container } = render(<VolumeControl />);
  expect(container).toMatchSnapshot();
});
