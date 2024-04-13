import { render, screen } from "@testing-library/react"
import Contact from "../components/Contact"; 
import "@testing-library/jest-dom";

test("Should load contact us component", () => {
    //For ui Testing we use render method
    render(<Contact />);

    // now we trying to check the heading is loaded or not 
    const heading = screen.getByRole('heading');
    
    //Assertion
    expect(heading).toBeInTheDocument();
});

test("Should load contact us component", () => {
    //For ui Testing we use render method
    render(<Contact />);

    // now we trying to check the heading is loaded or not 
    const button = screen.getByRole('button');
    
    //Assertion
    expect(button).toBeInTheDocument();
})