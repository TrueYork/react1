import React from 'react';
import {render as testingRender} from '@testing-library/react';
import MainApp from "./App";
import {render, unmountComponentAtNode} from 'react-dom'

test('renders learn react link', () => {
  const { getByText } = testingRender(<MainApp/>);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders without crashing', () => {
  const div = document.createElement('div');
  render(<MainApp/>, div);
  unmountComponentAtNode(div);
});
