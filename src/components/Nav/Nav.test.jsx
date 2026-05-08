import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route, Outlet } from "react-router";
import Nav from "./Nav";


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

const RenderRouteWithOutletContext = ({ context, children }) => {
  return(
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Outlet context={context} />}>
          <Route index element={children}/>
        </Route>
      </Routes>
    </MemoryRouter>
  )
}

describe("Nav component testing", () => {
    it("renders correct number of links", () => {
        render(
            <RenderRouteWithOutletContext>
                <Nav linksArray={linksArray}/>
            </RenderRouteWithOutletContext>
        );

        const linksElements = screen.getAllByRole("listitem")

        expect(linksElements.length).toEqual(2)
    })

    it("renders links names correctly", () => {
        render(
            <RenderRouteWithOutletContext>
                <Nav linksArray={linksArray}/>
            </RenderRouteWithOutletContext>
        );

        const linksElements = screen.getAllByRole("listitem")
        console.log(linksElements)

        expect(linksElements[1].textContent).toBe("test2")
    })

    it("Links path are correct", () => {
        render(
            <RenderRouteWithOutletContext>
                <Nav linksArray={linksArray}/>
            </RenderRouteWithOutletContext>
        );

        const linksElements = screen.getAllByRole("link")
        console.log(linksElements)

        expect(linksElements[1]).toHaveAttribute("href", "/test2-path")
    })
})