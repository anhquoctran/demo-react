import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/component-A">ComponentA</Link>
          </li>
          <li>
            <Link to="/component-B">ComponentB</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
