import { render, screen } from '@testing-library/react';
import Card from '../Card';
import { BrowserRouter } from 'react-router-dom';

const title = 'Apple pie';
const image = 'https://www.invaluable.com/blog/wp-content/uploads/sites/77/2022/06/Toxic-LA.jpg';


describe('MyComponent', () => {
    it('renders correctly', () => {
      render(<BrowserRouter><Card title={title} image={image}/></BrowserRouter>);
      expect(screen.getByText('Apple pie')).toBeInTheDocument();
    });
});