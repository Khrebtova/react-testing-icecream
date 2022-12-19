import {
  render,
  screen,
  
} from "../../../test-utils/testing-library-utils";

import { rest } from "msw";
import { server } from "../../../mocks/server";
import OrderConfirmation from "../OrderConfirmation";

test("displays order error message if error response from server", async () => {
  server.resetHandlers(
    rest.get("http://localhost:3030/order", (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );

  render(<OrderConfirmation setOrderPhase={jest.fn()} orderError={true}/>);

  const alert = await screen.findByRole("alert");
  expect(alert).toHaveTextContent(
    "An unexpected error ocurred. Please try again later."
  );
    
});
