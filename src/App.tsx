import { Suspense } from 'react';

import './translations/config'; // Internationalization config using 'react-i18next' package
import '../src/assets/style/style.scss'; // Styles

import { AppFrame } from './components'; // Frame component

import { AppRoute } from './routes/AppRoute'; // Routing either public/private using 'react-router', 'react-router-dom' packages
import { Auth0Provider } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const navigate = useNavigate();

  const onRedirectCallback = (appState: any) => {
    navigate(appState?.returnTo || window.location.pathname);
  }

  return (
    <Suspense fallback='Loading ..'>
        <Auth0Provider
          domain={process.env.REACT_APP_AUTH0_DOMAIN || ''}
          clientId={process.env.REACT_APP_AUTH0_CLIENT_ID || ''}
          redirectUri={process.env.REACT_APP_AUTH0_REDIRECT_URL || ''}
          audience={process.env.REACT_APP_AUTH0_AUDIENCE || ''}
          onRedirectCallback={onRedirectCallback}>
            <AppFrame>
              <AppRoute />
            </AppFrame>
        </Auth0Provider>
    </Suspense>
  );
}

export default App;
