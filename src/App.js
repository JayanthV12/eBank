import {Switch, Route, Redirect} from 'react-router-dom'

import './App.css'
import LoginForm from './LoginForm'
import Home from './Home'
import ProtectedRoute from './ProtectedRoute'
import NotFound from './NotFound'

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/ebank/login" component={LoginForm} />
    <ProtectedRoute exact path="/" component={Home} />
    <Route exact path="/bad-path" component={NotFound} />
    <Redirect to="/bad-path" />
  </Switch>
)

export default App
