import React from "react";
import Header from "./components/Header";
import AppRouter from "./pages/routes.tsx";
import { BrowserRouter } from "react-router";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Header />
        <main>
          <AppRouter />
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
