import './App.css';
// import { useEffect } from 'react';
import { useAuth, useLoginWithRedirect, ContextHolder, useTenantsState } from "@frontegg/react";
import { AdminPortal } from '@frontegg/react'
import { useEffect } from 'react';


function App() {
  const { user, isAuthenticated } = useAuth();
  const loginWithRedirect = useLoginWithRedirect();
  const tenant = useTenantsState()
  const handleClick = () => {
    AdminPortal.show();
  };


  
// 295f11ad-c21e-4c78-aba6-74757278064f
  // Uncomment this to redirect to login automatically
  useEffect(() => {
    if (!isAuthenticated) {
  loginWithRedirect();
    }
  }, [isAuthenticated, loginWithRedirect]);

  const logout = () => {
    const baseUrl = ContextHolder.getContext().baseUrl;
    window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
  };

  return (
    <div className="App">
      { isAuthenticated ? (
        <div>
          <div>
            <img src={user?.profilePictureUrl} alt={user?.name}/>
          </div>
          <div>
            <span>Logged in as: {user?.name}</span>
          </div>
          <div>
            <button onClick={() => console.log(user.accessToken)}>What is my access token?</button>
          </div>
          <div>
            <button onClick={handleClick}>Settings</button>
          </div>
          <div>
            <button onClick={() => logout()}>Click to logout</button>
          </div>
          
        </div>
      ) : (
        <div>
          <button onClick={() => loginWithRedirect()}>Click me to login</button>
        </div>
      )}
    </div>
  );
}

export default App;
