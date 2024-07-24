import { render ,screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Cart } from "../Cart";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../../utils/cartStore";
it("should load cart page",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Cart />
            </Provider>
        </BrowserRouter>
    )
   const cartPage= screen.getByTestId("cartPage");
   expect(cartPage).toBeInTheDocument();
})