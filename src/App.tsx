import { Suspense } from 'react';

import './translations/config'; // Internationalization config using 'react-i18next' package
import '../src/assets/style/style.scss'; // Styles

import { AppFrame } from './components'; // Frame component

// Apart from 'injection-js', Install 'reflect-metadata' and import in service index.ts file
import { ServiceContext } from './contexts'; // Service injection context
import { ServiceInjector } from './services'; // Service injection creation by 'resolveAndCreate' method of 'ReflectiveInjector' from 'injection-js' package

import { AppRoute } from './routes/AppRoute'; // Routing either public/private using 'react-router', 'react-router-dom' packages

const App = () => {

  return (
    <Suspense fallback='Loading ..'>
      <ServiceContext.Provider value={ServiceInjector}>
        <AppFrame>
          <AppRoute />
        </AppFrame>
      </ServiceContext.Provider>
    </Suspense>
  );
}

export default App;
