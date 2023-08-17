import HomePage from "../pages/index";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Calculator", () => {
    it("renders a calculator", () => {
        render(<HomePage />);
        // check if all components are rendered
        expect(screen.getByText("book a demo")).toBeInTheDocument();

    });
});