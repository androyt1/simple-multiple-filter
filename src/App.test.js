import { render, screen,within } from '@testing-library/react';
import Search from './components/Search'

test('renders list of names', () => {
  render(<Search/>);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  const list=screen.getByRole('list')
  expect(list).toBeInTheDocument()
});
 
test('List should contain 6 names',()=>{
  render(<Search/>)
  const list=screen.getByRole('list')
  const { getAllByRole } = within(list)
  const items = getAllByRole("listitem") 
  expect(items.length).toBe(6) 
})
