import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import ShopItem from "./ShopItem";

const product = {
  id: '1',
  title: 'Beautiful red hat',
  price: '100',
  description: 'A very nice red hat',
  category: 'hats',
  image: 'image.png',
}

describe('Shop Item component testing', () => {
  it('renders item image correctly', () => {
    render(<ShopItem item={product}/>)
    const image = screen.getByRole('img')
    expect(image).toHaveAttribute('src', product.image)
  })

  it('renders category correctly', () => {
    render(<ShopItem item={product}/>)
    const cat = screen.getByRole('heading', {level: 2})
    expect(cat.textContent).toBe(product.category)
  })

  it('renders item name correctly', () => {
    render(<ShopItem item={product}/>)
    const title = screen.getByRole('heading', {level: 3})
    expect(title.textContent).toBe(product.title)
  })

  it('renders description correctly', () => {
    render(<ShopItem item={product}/>)
    const desc = screen.getByTestId('description')
    expect(desc.textContent).toBe(product.description)
  })

  it('renders price correctly', () => {
    render(<ShopItem item={product}/>)
    const price = screen.getByTestId('price')
    expect(price.textContent).toBe(product.price + " $")
  })

  it('renders buttons correctly', () => {
    render(<ShopItem item={product}/>)
    const buttons = screen.getAllByRole('button')
    expect(buttons[0].textContent).toBe('-')
    expect(buttons[1].textContent).toBe('+')
    expect(buttons[2].textContent).toBe('Add to cart')
  })

  it('renders quantity field correctly', () => {
    render(<ShopItem item={product}/>)
    const input = screen.getByRole('spinbutton')
    expect(input).toHaveValue(1)
  })

  it('increment and decrement buttons increment or decrement quantity value by one when clicked', async () => {
    const user = userEvent.setup()
    
    render(<ShopItem item={product}/>)
    
    const buttonMinus = screen.getByText('-')
    const buttonPlus = screen.getByText('+')

    const quantity = screen.getByRole('spinbutton')

    await user.click(buttonPlus);
    await user.click(buttonPlus);
    await user.click(buttonPlus);
    expect(quantity).toHaveValue(4)

    await user.click(buttonMinus);
    await user.click(buttonMinus);
    expect(quantity).toHaveValue(2);
  })

  it('click on Add to cart button calls the add to cart callback function', async () => {
    const onAddToCart = vi.fn()
    const user = userEvent.setup()
    render(<ShopItem item={product} onAddToCart={onAddToCart}/>)

    const button = screen.getByText('Add to cart')

    await user.click(button)

    expect(onAddToCart).toHaveBeenCalled();
  })

  it('Add to cart callback function is not called if Add to cart button is not clicked', async () => {
    const onAddToCart = vi.fn()
    render(<ShopItem item={product} onAddToCart={onAddToCart}/>)

    expect(onAddToCart).not.toHaveBeenCalled();
  })
})
