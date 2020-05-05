import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import {Provider} from "react-redux";
import store from "./Redux/reduxStore";
import {BrowserRouter} from "react-router-dom";

test('renders learn react link', () => {
  const { getByText } = render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
