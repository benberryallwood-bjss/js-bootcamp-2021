import { Route, Switch } from "react-router-dom";
import MainNavigation from "./components/layout/MainNavigation";

// bring in pages
import AllTravelBlogs from "./pages/AllTravelBlogs";
import BucketList from "./pages/BucketList";
import NewTravelBlog from "./pages/NewTravelBlog";

function App() {
  return (
    <div>
      <MainNavigation />

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
    </div>
  );
}

export default App;
