import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import Layout from "./components/Layout";
import Post from "./views/Post";
import Favorites from "./views/Favorites";

import { Provider } from "react-redux";
import store from "./state";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/post/:id" element={<Post />}></Route>
              <Route path="/favorites" element={<Favorites />}></Route>
            </Routes>
          </Layout>
        </Router>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
