import { render ,screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContactUS from "../ContactUS";

describe("Contact us testing",()=>{
    test("should load contactus component",()=>{
        render(<ContactUS />)
        const heading =screen.getByRole("heading")
    
        //Assersestion
        expect(heading).toBeInTheDocument();
    });
 
    //it is same as test

    it("should find submit button in contactus",()=>{
        render(<ContactUS />)
        const submitbutton =screen.getByText("Submit")
    
        //Assersestion
        expect(submitbutton).toBeInTheDocument();
    });
})

