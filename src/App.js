import React from "react";
import { OrderDetailsProvider } from "./context/OrderDetails";
import { Container } from "react-bootstrap";
import OrderSummary from "./pages/summary/OrderSummary";
import OrderEntry from "./pages/orderEntry/OrderEntry";
import OrderConfirmation from "./pages/confirmation/OrderConfirmation";
function App() {
  const [orderPhase, setOrderPhase] = React.useState("inProgress");
  const [orderNumber, setOrderNumber] = React.useState(null);

  const goToNextPhase = () => {
    if (orderPhase === "inProgress") {
      setOrderPhase("review");
    } else if (orderPhase === "review") {
      setOrderPhase("final");
    } else if (orderPhase === "final") {
      setOrderPhase("inProgress");
    }
  };

  // let Component = OrderEntry;
  // switch(orderPhase) {
  //   case "inProgress":
  //     Component = OrderEntry;
  //     break;
  //   case "review":
  //     Component = OrderSummary;
  //     break;
  //   case "final":
  //     Component = OrderConfirmation;
  //     break;
  //   default:
  // }

  return (
    <Container>      
        <OrderDetailsProvider>          
          {orderPhase === 'inProgress' ? <OrderEntry goToNextPhase={goToNextPhase}/> : null}
          {orderPhase === 'review' ? <OrderSummary  goToNextPhase={goToNextPhase} setOrderNumber={setOrderNumber}/> : null}
          {orderPhase === 'final' ? <OrderConfirmation goToNextPhase={goToNextPhase} orderNumber={orderNumber} setOrderNumber={setOrderNumber}/> : null}
        </OrderDetailsProvider>      
    </Container>
  );
}

export default App;
