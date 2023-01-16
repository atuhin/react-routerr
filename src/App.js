import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Header from './component/Header/Header';
import About from './component/About/About';
import Home from './component/Home/Home';
import Contact from './component/Contact/Contact';
import Products from './component/Products/Products';
import Main from './component/Layout/Main';

function App() {
  const router = createBrowserRouter([
    { path:'/', element: <Main></Main>, children: [
      { path:'home', element: <Home></Home>},
      { path: 'products', element: <Products></Products>},
    ]},
    
    { path:'about', element: <About></About>},
    { path:'contact', element: <Contact></Contact>}, 
  ])
  return (
    <div className="App">
      <RouterProvider router={router} ></RouterProvider>
    </div>
  );
}

export default App;