import "@testing-library/jest-dom/vitest";

import { afterAll, beforeAll } from "vitest";
import { server } from "./mocks";
import { afterEach } from "node:test";


beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});