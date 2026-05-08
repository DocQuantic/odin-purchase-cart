import { describe, it, expect } from "vitest";
import { MemoryRouter, Outlet, Routes, Route } from "react-router";
import { render, screen } from "@testing-library/react";
import ErrorPage from "./ErrorPage";

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

describe('ErrorPage component test', () => {
    it('renders page correctly', () => {
        const { container } = render(
            <RenderRouteWithOutletContext>
                <ErrorPage />
            </RenderRouteWithOutletContext>
        );
        expect(container).toMatchSnapshot();
    })
})