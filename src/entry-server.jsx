import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { HelmetProvider } from 'react-helmet-async'
import { AppRoutes } from './App.jsx'

export function render(url, helmetContext) {
  return ReactDOMServer.renderToString(
    <React.StrictMode>
      <HelmetProvider context={helmetContext}>
        <div className="App">
          <StaticRouter location={url}>
            <AppRoutes />
          </StaticRouter>
        </div>
      </HelmetProvider>
    </React.StrictMode>
  )
}
