import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

test("order phases for happy path", async () => {
  //render app
  render(<App />);

  // add ice cream scoops and toppings
  const vanillaInput = await screen.findByRole("spinbutton", {
    name: "Vanilla",
  });
  userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, "1");

  const cherriesCheckbox = await screen.findByRole("checkbox", {
    name: "Cherries",
  });
  userEvent.click(cherriesCheckbox);

  // find and click order button
  const orderSummaryButton = await screen.findByRole("button", {
    name: "Order Sundae!",
  });
  userEvent.click(orderSummaryButton);

  // check summary information based on order
  const scoopsSubtotal = await screen.findByText("Scoops : $2.00");
  const toppingsSubtotal = await screen.findByText("Toppings : $1.50");
  const grandTotal = await screen.findByText("Grand Total : $3.50");

  expect(scoopsSubtotal).toBeInTheDocument();
  expect(toppingsSubtotal).toBeInTheDocument();
  expect(grandTotal).toBeInTheDocument();

  // accept terms and conditions and click button to confirm order
  const termsAndConditionsCheckbox = await screen.findByRole("checkbox", {
    name: "I agree to Terms and Conditions",
  });
  userEvent.click(termsAndConditionsCheckbox);

  const confirmOrderButton = await screen.findByRole("button", {
    name: "Confirm Order",
  });
  userEvent.click(confirmOrderButton);

  // confirm order number on confirmation page
  const orderNumber = await screen.findByText(/Order number:/i, {
    exact: false,
  });
  expect(orderNumber).toBeInTheDocument();

  //click new order button on confirmation page
  const newOrderButton = await screen.findByRole("button", {
    name: "Create new order",
  });
  expect(newOrderButton).toBeInTheDocument();
  userEvent.click(newOrderButton);
  // check that scoops and toppings subtotals have been reset
  const scoopsNewSubtotal = await screen.findByText("Scoops total: $0.00");
  const toppingsNewSubtotal = await screen.findByText("Toppings total: $0.00");
  expect(scoopsNewSubtotal).toBeInTheDocument();
  expect(toppingsNewSubtotal).toBeInTheDocument();

  //do we need to await anything to avoid test errors?
  await screen.findByRole("spinbutton", { name: "Vanilla" });
  await screen.findByRole("checkbox", { name: "Cherries" });
});
