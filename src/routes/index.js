import { Switch, Route } from "react-router-dom";
import Login from "../components/Login";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>

      <Route path="/home">
        <div>Hábitos</div>
      </Route>

      <Route path="/register">
        <div>Register</div>
      </Route>

      <Route path="/home">
        <div>Tela de hábitos</div>
      </Route>

      <Route path="/dashboard">
        <div>Dashboard</div>
      </Route>

      <Route path="/group">
        <div>Tela de grupos</div>
      </Route>

      <Route path="/password-reset">
        <div>Alteração de senha</div>
      </Route>
    </Switch>
  );
};

export default Routes;
