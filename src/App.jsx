import { Configurator } from './components/Configurator';
import { UiOverlay } from './components/UiOverlay';
import './App.css';

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <Configurator />
      <UiOverlay />

      {/* Brand Watermark */}
      <div style={{
        position: 'absolute',
        top: '2rem',
        left: '2rem',
        pointerEvents: 'none',
        zIndex: 5
      }}>
        <h1 style={{
          margin: 0,
          letterSpacing: '0.4em',
          fontSize: '1.2rem',
          fontWeight: 300,
          color: 'rgba(255,255,255,0.8)'
        }}>
          AETHER <span style={{ fontWeight: 800 }}>MOTORS</span>
        </h1>
      </div>
    </div>
  );
}

export default App;
