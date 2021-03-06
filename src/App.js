import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div>
          <Header />
          <div className="app--body">
            <Sidebar />
            <Feed />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
