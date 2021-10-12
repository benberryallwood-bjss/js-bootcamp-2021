import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";

// bring in pages
import AllTravelBlogs from "./pages/AllTravelBlogs";
import BucketList from "./pages/BucketList";
import NewTravelBlog from "./pages/NewTravelBlog";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllTravelBlogs />
        </Route>
        <Route path="/new-travel-blog">
          <NewTravelBlog />
        </Route>
        <Route path="/bucket-list">
          <BucketList />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
