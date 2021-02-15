import ReactDOM from 'react-dom';
import App from 'app';

test('App renders without crashing', () => {
  ReactDOM.render(
    <App />,
    document.getElementById('root') || document.createElement('div'), // For testing purposes
  );
});
