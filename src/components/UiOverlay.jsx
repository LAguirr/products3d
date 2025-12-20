import { useStore } from '../store';
import { Settings2, Zap, DollarSign, ChevronLeft, ChevronRight } from 'lucide-react';

const colors = [
    { name: 'Red', value: '#b11226' },
    { name: 'Blue', value: '#1a3a6c' },
    { name: 'Black', value: '#0a0a0a' },
    { name: 'Silver', value: '#c0c0c0' },
    { name: 'White', value: '#ffffff' },
];

export function UiOverlay() {
    const { bodyColor, setBodyColor, price, power, nextModel, prevModel, models, currentModelIndex } = useStore();
    const currentModel = models[currentModelIndex];

    return (
        <>
            {/* Model Navigation */}
            <div className="nav-arrow left" onClick={prevModel}>
                <ChevronLeft size={48} />
            </div>
            <div className="nav-arrow right" onClick={nextModel}>
                <ChevronRight size={48} />
            </div>

            <div className="model-title">
                {currentModel.badge && (
                    <div className="model-badge">
                        {currentModel.badge}
                    </div>
                )}
                {currentModel.name.toUpperCase()}
            </div>

            <div className="config-panel glass-panel">
                <header style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Settings2 size={18} />
                    <h1 style={{ fontSize: '1rem', margin: 0 }}>SPECIFICATIONS</h1>
                </header>

                <section>
                    <h2>Exterior Color</h2>
                    <div className="color-swatch-container">
                        {colors.map((color) => (
                            <div
                                key={color.value}
                                className={`color-swatch ${bodyColor === color.value ? 'active' : ''}`}
                                style={{ backgroundColor: color.value }}
                                onClick={() => setBodyColor(color.value)}
                                title={color.name}
                            />
                        ))}
                    </div>
                </section>
            </div>

            <div className="bottom-panel glass-panel">
                <div className="stat-item">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <Zap size={14} color="#ffd700" />
                        <span className="stat-value">{power > 0 ? `${power} HP` : 'N/A'}</span>
                    </div>
                    <span className="stat-label">Power</span>
                </div>

                <div className="stat-item">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <DollarSign size={14} color="#ffffff" />
                        <span className="stat-value">{price.toLocaleString()}</span>
                    </div>
                    <span className="stat-label">Starting Price</span>
                </div>
            </div>
        </>
    );
}
