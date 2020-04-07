import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import MainPage from "./pages/MainPage/MainPage";
import BookPage from "./pages/BookPage/BookPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={MainPage}/>
        <Route exact path="/book/:bookId" component={BookPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </Layout>
  );
}

export default App;
