import { render, screen } from '@testing-library/react';
import Gallery from './Gallery';

test('Should render Gallery', () => {
    render(<Gallery />);
    const loading = screen.getByText(/Loading/i);
    expect(loading).toBeInTheDocument();
});
