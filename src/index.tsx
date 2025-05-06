import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';

import ReactDOM from 'react-dom/client';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container!); // if using TypeScript
root.render(<App />);
