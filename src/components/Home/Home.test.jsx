import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "./Home";

describe("Home component testing", () => {
    it("renders page properly", () => {
        const { container } = render(<Home />);
        expect(container).toMatchSnapshot();
    })
})