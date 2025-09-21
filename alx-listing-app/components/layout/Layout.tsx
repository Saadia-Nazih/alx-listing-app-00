// File: components/layout/Layout.tsx

import React from 'react';
import Header from "./Header";
import Footer from "./Footer";

// Definiamo il tipo per le props, specificando che 'children' è un nodo React
type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;