import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react';
import NavBar from '../../src/components/NavBar';

describe('NavBar component', () => {
  it('should render correctly', () => {
    render(<BrowserRouter><NavBar /></BrowserRouter>);

    const homeLink = screen.getByText(/Home/i);
    expect(homeLink).toBeInTheDocument();

    const cartLink = screen.getByText(/Cart\(0\)/i);
    expect(cartLink).toBeInTheDocument();
  })
});