import { describe, it, vi, expect } from "vitest";
import { MemoryRouter, Outlet, Routes, Route } from "react-router";
import { render, screen } from "@testing-library/react";
import Shop from "./Shop";
import userEvent from "@testing-library/user-event";

const products = [
    {
        id: '1',
        title: 'Beautiful red hat',
        price: '100',
        description: 'A very nice red hat',
        category: 'hats',
        image: 'image.png',
    },
    {
        id: '2',
        title: 'Beautiful blue dress',
        price: '10',
        description: 'A very nice blue dress',
        category: 'dress',
        image: 'image2.png',
    }
]

let cart = []

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

function setCart(newCart) {
    cart = newCart
}

describe('Shop component test', () => {
    it('renders page title correctly', () => {
        render(
            <RenderRouteWithOutletContext context={{products, cart, setCart}}>
                <Shop />
            </RenderRouteWithOutletContext>
        )

        const title = screen.getByRole('heading', {level: 1})

        expect(title.textContent).toBe('Shop')
    })

    it('renders Shop Items with correct item elements', () => {
        render(
            <RenderRouteWithOutletContext context={{products, cart, setCart}}>
                <Shop />
            </RenderRouteWithOutletContext>
        )

        const names = screen.getAllByRole('heading', {level: 3})

        expect(names.length).toBe(2)
    })

    it('click on Add to Cart button adds corresponding product to cart', async () => {
        const user = userEvent.setup()

        render(
            <RenderRouteWithOutletContext context={{products, cart, setCart}}>
                <Shop />
            </RenderRouteWithOutletContext>
        )

        const buttons = screen.getAllByText('Add to cart')

        await user.click(buttons[0])

        expect(cart.length).toBe(1)
        expect(cart[0].id).toBe('1')
        expect(cart[0].quantity).toBe('1')
    })

    it('click twice on same Add to Cart button only modifies quantity field of corresponding cart item', async () => {
        const user = userEvent.setup()

        render(
            <RenderRouteWithOutletContext context={{products, cart, setCart}}>
                <Shop />
            </RenderRouteWithOutletContext>
        )

        const buttons = screen.getAllByText('Add to cart')

        await user.click(buttons[0])
        await user.click(buttons[0])

        expect(cart.length).toBe(1)
        expect(cart[0].quantity).toBe('2')
    })
})