import { describe, it, vi, expect } from "vitest";
import { MemoryRouter, Outlet, Routes, Route } from "react-router";
import { render, screen } from "@testing-library/react";
import Cart from "./Cart"
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
    },
    {
        id: '3',
        title: 'Beautiful yellow pants',
        price: '1',
        description: 'Very nice yellow pants',
        category: 'pants',
        image: 'image3.png',
    }
]

let cart = [
    {
        id: '1',
        quantity: '10',
    },
    {
        id: '3',
        quantity: '1',
    }
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

function setCart(newCart) {
    cart = newCart
}

describe('Cart component test', () => {
    it('renders page title correctly', () => {
        render(
            <RenderRouteWithOutletContext context={{products, cart, setCart}}>
                <Cart />
            </RenderRouteWithOutletContext>
        )

        const title = screen.getByRole('heading', {level: 1})

        expect(title.textContent).toBe('Cart')
    })

    it('renders Cart Items with correct item elements', () => {
        render(
            <RenderRouteWithOutletContext context={{products, cart, setCart}}>
                <Cart />
            </RenderRouteWithOutletContext>
        )

        const names = screen.getAllByRole('heading', {level: 2})

        expect(names.length).toBe(2)
        expect(names[0].textContent).toBe('Beautiful red hat')
        expect(names[1].textContent).toBe('Beautiful yellow pants')
    })

    it('click on Remove from cart button removes corresponding item from cart', async () => {
        const user = userEvent.setup()
        
        render(
            <RenderRouteWithOutletContext context={{products, cart, setCart}}>
                <Cart />
            </RenderRouteWithOutletContext>
        )

        const buttons = screen.getAllByText('Remove from cart')

        await user.click(buttons[0])

        expect(cart.length).toBe(1)
    })
})