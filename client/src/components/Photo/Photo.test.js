import { render, screen } from '@testing-library/react';
import Photo from './Photo';
import Like from '../Like/Like';

test('Should render Gallery', () => {
    render(<Photo likes="123" description="test description" imageUrl="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyNDU2M30" />);
    const desc = screen.getByText(/test description/i);
    expect(desc).toBeInTheDocument();
});
