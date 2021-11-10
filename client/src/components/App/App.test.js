import { render, screen } from '@testing-library/react';
import { Provider } from "react-redux";
import ticketStore from "../../redux/store";
import App from './App';

const renderComponent = (component, { store = ticketStore } = {}) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

test('renders tickers', () => {
  render(renderComponent(<App />));
  screen.debug();
});
