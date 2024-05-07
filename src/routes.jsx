import App from './components/App'
import EmptyProfile from './components/EditProfile'
import Profile from './components/Profile'
import ErrorPage from './components/ErrorPage'

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'profile',
    element: <EmptyProfile />,
  },
  {
    path: 'profile/:name',
    element: <Profile />,
  },
]

export default routes
