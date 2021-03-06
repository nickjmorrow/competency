import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { App } from '~/landing/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from '~/redux/rootReducer';
import { ThemeProvider } from '~/theming/ThemeProvider';
import { MemoryRouter } from 'react-router';

let container = (null as unknown) as HTMLDivElement;
beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    (container as unknown) = null;
});

it('renders without an error', () => {
    act(() => {
        const store = createStore(rootReducer);
        render(
            <MemoryRouter>
                <ThemeProvider>
                    <Provider store={store}>
                        <App />
                    </Provider>
                </ThemeProvider>
            </MemoryRouter>,
            container,
        );
    });
});
