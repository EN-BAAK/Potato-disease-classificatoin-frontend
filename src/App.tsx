import React from "react";
import Header from "./layouts/Header";
import Home from "./screens/Home";

function App(): React.JSX.Element {
  return (
    <main className="text-muted">
      <Header />
      <Home />
    </main>
  );
}

export default App;
