import React from "react";
import { OrderDetailsProvider } from "./context/OrderDetails";
import { Container } from "react-bootstrap";
import SummaryForm from "./pages/summary/SummaryForm";
import OrderEntry from "./pages/orderEntry/OrderEntry";

function App() {
  return (
    <Container>
      <OrderDetailsProvider>
        {/* summary page and entry page need provider to access the context  */}
        <OrderEntry />
        {/* <SummaryForm /> */}
      </OrderDetailsProvider>
      {/* OrderEntry does not need provider */}
    </Container>
  );
}

export default App;
