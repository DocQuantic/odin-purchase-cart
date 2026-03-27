import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { expect } from 'vitest';

describe('App component', () => {
    it('renders h1 element', () => {
        render(<App />)

        screen.debug()

        expect(screen.getByText("Hello World")).toBeInTheDocument()
    });
});