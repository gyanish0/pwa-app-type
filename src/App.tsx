import React, { Fragment, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

const About = lazy(() => import('./About'));
const Home = lazy(() => import('./Home'));
const App: React.FC = () => (
  <Fragment>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Suspense>
  </Fragment>
);
export default App;