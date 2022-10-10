import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import StyleCss from '~/components/StyleCss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <StyleCss>
            <App />
        </StyleCss>
    </React.StrictMode>,
);
