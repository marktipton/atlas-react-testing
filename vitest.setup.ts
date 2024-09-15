import "@testing-library/jest-dom/vitest";
import '@testing-library/jest-dom';
import { afterAll, beforeAll, afterEach } from "vitest";
import { server } from "./mocks";
// import { afterEach } from "node:test";


beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});