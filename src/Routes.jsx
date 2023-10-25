import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Home";
import Aboutpage from "./Pages/About";
import DashboardPage from "./Pages/DashboardPage";
import DashboardTasks from "./Pages/DashboardTasks";
import DashboardMessages from "./Pages/DashboardMessages";
import PageNotFound from "./Pages/PageNotFound";
import ReduxTodoList from "./components/ReduxTodoList";
import PostsPage from "./Pages/PostPage";
import { PostList } from "./Pages/PostList";
import { Post } from "./Pages/post";
import ProtectedRoute from "./Pages/ProtectedRoute";
import MUIDemo from "./Pages/MUI.JSX";
import BigCats from "../src/components/Lab4";
function AppRoutes(props) {
  return (
    <Routes>
      <Route index element={<Homepage {...props} />} />
      <Route path="about" element={<Aboutpage />} />
      <Route
        path="dashboard"
        element={
          <ProtectedRoute>
            <DashboardPage {...props} />
          </ProtectedRoute>
        }
      >
        <Route path="messages" element={<DashboardMessages />} />
        <Route path="tasks" element={<DashboardTasks />} />
        <Route path="lab4" element={<BigCats />} />
      </Route>
      <Route path="todo" element={<ReduxTodoList {...props} />} />
      <Route path="/posts" element={<PostsPage {...props} />}>
        <Route index element={<PostList />} />
        {/* dynamic param taken from route, stored in variable called id */}
        <Route path=":id" element={<Post />} />
      </Route>
      <Route path="MUIDemo" element={<MUIDemo/>}/>

      <Route path="*" element={<PageNotFound />} />
      
    </Routes>
  );
}
export default AppRoutes;
