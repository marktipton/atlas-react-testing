import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";

export const handlers = [
  http.get(
    "https://api.example.com/api/v1/data",
    () => {
      return HttpResponse.json([
        {
          id: 1,
          title: "Lorem Ipsum",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
          id: 2,
          title: "Lorem Ipsum",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        }
      ]);
    }
  ),
];

export const server = setupServer(...handlers);