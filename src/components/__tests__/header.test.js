import { render,screen } from "@testing-library/react"
import Header from "../Header"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import appStore from "../../../utils/cartStore"
import "@testing-library/jest-dom";

test("Shouldload header component",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
    </BrowserRouter>
    )


    const headerLogin=screen.getByRole("button");
    

    expect(headerLogin).toBeInTheDocument();
   
})