import React from 'react'
import ReactDOM from 'react-dom/client'
import '../design-system.css'

function App() {
  return (
    <div className="container" style={{ padding: '40px 20px' }}>
      <div className="text-center">
        <h1 className="heading-large">Funnel Research Tool</h1>
        <p className="text-body">Your production-ready funnel research system is working!</p>
        <div className="card" style={{ marginTop: '40px' }}>
          <h2 className="heading-medium">Integration Options</h2>
          <div className="grid grid-2" style={{ marginTop: '20px' }}>
            <div>
              <h3 className="heading-small text-accent">iframe Embed</h3>
              <p className="text-body">Use embed-iframe.html for any website</p>
            </div>
            <div>
              <h3 className="heading-small text-accent">React Component</h3>
              <p className="text-body">Import components for React projects</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)