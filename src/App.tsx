import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import Layout from "./components/Layout";
import Post from "./views/Post";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/post/:id" element={<Post />}></Route>
          </Routes>
        </Layout>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
