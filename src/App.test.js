import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const welcomeLine = getByText(/Welcome to CataDog, where you can browse your favorite dog breeds!/i);
  expect(welcomeLine).toBeInTheDocument();
});

test("doesn't make api calls if localstorage has cached values", () => {
  // Mock local storage
  // expect(fetch.get("dogs/list")).toHaveBeenCalled().toEqual(false)
})

test("filter correctly filters", () => {
  // Mock local storage with something like { doberman: [], retriever: [] }
  // Set filter value to "retriever"
  // expect(<BreedCard breed="retriever" />).toBeInTheDocument()
  // expect(<BreedCard breed="doberman" />).toNotBeInTheDocument()
})