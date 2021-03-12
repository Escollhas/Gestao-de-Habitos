import { Switch, Route, Redirect } from "react-router-dom";
import Login from "../../pages/Login";
import Register from "../../pages/register";
import { useSelector } from "react-redux";
import Groups from "../../pages/groups";
import Habits from "../../pages/habits";

const Routes = () => {
  const isLogged = useSelector((state) => state.logged);

  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>

      <Route path="/register">
        <Register />
      </Route>
      {isLogged ? (
        <>
          <Route path="/home">
            <Habits />
          </Route>

          <Route path="/dashboard">
            <div>Dashboard</div>
          </Route>

          <Route path="/group">
            <Groups />
          </Route>

          <Route path="/password-reset">
            <div>Alteração de senha</div>
          </Route>
        </>
      ) : (
        <Redirect to="/" />
      )}
    </Switch>
  );
};

export default Routes;
