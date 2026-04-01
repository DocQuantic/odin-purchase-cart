import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Nav from "./Nav";

describe("Nav component testing", () => {
    it("renders correct number of links", () => {
        const linksArray = [
            {
                name: "test1",
                path: "test1-path",
            },
            {
                name: "test2",
                path: "test2-path",
            },
        ]

        render(<Nav linksArray={linksArray}/>);

        const linksElements = screen.getAllByRole("listitem")

        expect(linksElements.length).toEqual(2)
    })

    it("renders links names correctly", () => {
        const linksArray = [
            {
                name: "test1",
                path: "test1-path",
            },
            {
                name: "test2",
                path: "test2-path",
            },
        ]

        render(<Nav linksArray={linksArray}/>);

        const linksElements = screen.getAllByRole("listitem")
        console.log(linksElements)

        expect(linksElements[1].textContent).toBe("test2")
    })

    it("Links path are correct", () => {
        const linksArray = [
            {
                name: "test1",
                path: "test1-path",
            },
            {
                name: "test2",
                path: "test2-path",
            },
        ]

        render(<Nav linksArray={linksArray}/>);

        const linksElements = screen.getAllByRole("link")
        console.log(linksElements)

        expect(linksElements[1]).toHaveAttribute("href", "test2-path")
    })
})