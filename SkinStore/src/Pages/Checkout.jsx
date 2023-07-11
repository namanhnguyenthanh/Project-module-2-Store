import React from "react";
import "../Pages_Css/Checkout.module.css";

function Checkout() {
  return (
    <div>
      <div className="container121">
        <div className="subcontainer">
          <div className="container">
            <form>
              <div className="container121">
                <div className="add">
                  <h3>Billing Address</h3>
                  <label htmlFor="fname">Full Name</label>
                  <input
                    type="text"
                    id="fname"
                    name="firstname"
                    placeholder="John M. Doe"
                  />
                  <label htmlFor="email"> Email</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                  />
                  <label htmlFor="adr"> Address</label>
                  <input
                    type="text"
                    id="adr"
                    name="address"
                    placeholder="542 W. 15th Street"
                  />
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="New York"
                  />
                  <div className="container121">
                    <div className="add">
                      <label htmlFor="state">State</label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        placeholder="NY"
                      />
                    </div>
                    <div className="add">
                      <label htmlFor="zip">Zip</label>
                      <input
                        type="text"
                        id="zip"
                        name="zip"
                        placeholder={10001}
                      />
                    </div>
                  </div>
                </div>
                <div className="add">
                  <label htmlFor="cname">Name on Card</label>
                  <input
                    type="text"
                    id="cname"
                    name="cardname"
                    placeholder="John More Doe"
                  />
                  <label htmlFor="ccnum">Credit card number</label>
                  <input
                    type="text"
                    id="ccnum"
                    name="cardnumber"
                    placeholder="1111-2222-3333-4444"
                  />
                  <label htmlFor="expmonth">Exp Month</label>
                  <input
                    type="text"
                    id="expmonth"
                    name="expmonth"
                    placeholder="September"
                  />
                  <div className="container121">
                    <div className="add">
                      <label htmlFor="expyear">Exp Year</label>
                      <input
                        type="text"
                        id="expyear"
                        name="expyear"
                        placeholder={2018}
                      />
                    </div>
                    <div className="add">
                      <label htmlFor="cvv">CVV</label>
                      <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        placeholder={352}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <label>
                <input type="checkbox" defaultChecked="checked" /> Shipping
                address same as billing
              </label>
              <a href="payment_success.html">
                {" "}
                <input
                  type="button"
                  defaultValue="Continue to checkout"
                  className="btn"
                />
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
