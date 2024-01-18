import React from "react";
import Content from "./components/Content/Content";
import ToggleLangs from "./components/ToggleLangs/ToggleLangs";
import ContextProvider from "./context/langContext";

function App() {
  return (
    <ContextProvider>
      <Content />
      <ToggleLangs />
    </ContextProvider>
  );
}

export default App;
