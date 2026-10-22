import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

// Old links used hash routing (/#/services); move them to the real URL.
const fromHashUrl = window.location.hash.startsWith('#/')
if (fromHashUrl) {
  window.history.replaceState(null, '', window.location.hash.slice(1))
}

const container = document.getElementById('root')!
const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

// Pages are prerendered at build time; hydrate them, or render from scratch in dev.
if (container.hasChildNodes() && !fromHashUrl) {
  hydrateRoot(container, app)
} else {
  createRoot(container).render(app)
}
