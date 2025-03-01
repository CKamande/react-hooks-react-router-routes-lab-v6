// src/layouts/RootLayout.jsx
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div className="root-layout">
      <nav>
        <h1>My Movie App</h1>
      </nav>
      <main>
        <Outlet /> {/* This will render child routes */}
      </main>
    </div>
  );
}

export default RootLayout;
