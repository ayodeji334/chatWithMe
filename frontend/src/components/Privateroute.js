import {Route, Redirect} from 'react-router-dom';

function PrivateRoute({ component: Component, user , ...rest }) {
  return (
    <Route
      {...rest}
      render={
        (props) => {
          if (user) {
            return <Component {...rest} {...props} />
          } else {
            return <Redirect to={{
              pathname: "/",
              state: {
                from: props.location
              }
            }} />
          }
        }
      }
    />
  );
}

export default PrivateRoute;