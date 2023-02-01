import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import Main from './pages/Main';
import Post from './pages/Post';

const AppWrapper = () => {
  let routes = useRoutes([
    { path: '/', element: <Main /> },
    { path: 'post', element: <Post /> },
    // ...
  ]);
  return routes;
};

function App() {
  return (
    <>
      <Router>
        <AppWrapper />
      </Router>
    </>
  );
}

export default App;
