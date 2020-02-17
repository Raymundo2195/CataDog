import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../App';

const defaultLocalStorage = {
  retriever: []
}
const breedListUrl = "https://dog.ceo/api/breeds/list/all"

describe("App", () => {
  it("renders headline", () => {
    const { getByText } = render(<App />);
    const welcomeLine = getByText(/Welcome to CataDog, where you can browse your favorite dog breeds!/i);
    expect(welcomeLine).toBeInTheDocument();
  });

  it("doesn't make api calls if localstorage has cached values", () => {
    global.localStorage.getItem.mockReturnValueOnce(JSON.stringify(defaultLocalStorage))
    jest.spyOn(global, 'fetch')
    render(<App />)
    expect(global.fetch).not.toHaveBeenCalledWith(breedListUrl)
  })

  it("does call list api if no values are cached", () => {
    global.localStorage.getItem.mockReturnValueOnce("{}")
    jest.spyOn(global, 'fetch')
    render(<App />)
    expect(global.fetch).toHaveBeenCalledWith(breedListUrl)
  })

  it("updates filter state on input change", () => {
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState')
    useStateSpy.mockImplementation((init) => [init, setState]);

    const { getByLabelText } = render(<App />)
    const filterInput = getByLabelText(/Filter by breed:/)
    fireEvent.change(filterInput, { target: { value: 'f' }})
    expect(setState).toHaveBeenCalledWith('f')
  })
})
