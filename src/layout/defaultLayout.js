import { Layout } from "antd";
import { Header } from "antd/lib/layout/layout";
import React from "react";
import Navbar from "../components/Navbar";

function DefaultLayout({ children }) {
  return (
    <Layout>
      <Navbar />

      {children}
    </Layout>
  );
}

export default DefaultLayout;
