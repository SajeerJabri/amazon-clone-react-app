import React, { useContext } from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import ContextData from "../../ContextData/ContextData";
import { useHistory } from "react-router-dom";

const Subtotal = () => {
  const { baskets } = useContext(ContextData);
  const history = useHistory();
  const totalPrice = baskets.reduce(
    (total, currentItem) => total + currentItem.price,
    0
  );

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={value => (
          <>
            <p>
              Subtotal ({baskets.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={totalPrice}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={e => history.push("/payment")}>
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Subtotal;
