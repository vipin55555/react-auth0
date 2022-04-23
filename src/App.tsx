import { Suspense } from 'react';

import './translations/config'; // Internationalization config using 'react-i18next' package
import '../src/assets/style/style.scss'; // Styles

import { AppFrame } from './components'; // Frame component

// Apart from 'injection-js', Install 'reflect-metadata' and import in service index.ts file
import { ServiceContext } from './contexts'; // Service injection context
import { ServiceInjector } from './services'; // Service injection creation by 'resolveAndCreate' method of 'ReflectiveInjector' from 'injection-js' package

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
          onRedirectCallback={onRedirectCallback}>
          <ServiceContext.Provider value={ServiceInjector}>
            <AppFrame>
              <AppRoute />
            </AppFrame>
          </ServiceContext.Provider>
        </Auth0Provider>
    </Suspense>
  );
}

export default App;
