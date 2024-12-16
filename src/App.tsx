import React from "react";
import Header from "./components/Header";
import AppRouter from "./pages/routes.tsx";
import { BrowserRouter } from "react-router";
import { ToastProvider } from "./components/Toast";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ToastProvider>
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          <Header />
          <main>
            <AppRouter />
          </main>
        </div>
      </ToastProvider>
    </BrowserRouter>
  );
};

export default App;
