import { useUserContext } from "../store/UserContext";
function DashboardMessages(props) {
  const {currentUser} = useUserContext();

  return (
  <div className="DashboardMessage">
  <p>Welcome to your dashboard, {currentUser.email}</p>
  </div>
  )
  }
  export default DashboardMessages;
