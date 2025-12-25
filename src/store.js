import { create } from 'zustand';

export const useStore = create((set) => ({
  bodyColor: '#b11226',
  wheelType: 'standard',
  interiorMaterial: 'leather-black',
  view: 'exterior',
  price: 85000,
  power: 520,

  models: [
    {
      name: 'Ferrari SF90',
      path: '/models/ferrari.glb',
      price: 85000,
      power: 520,
      scale: 0.8,
      position: [0, -0.1, 0],
      colorableParts: ['body', 'paint', 'carpaint']
    },
    {
      name: 'Porsche 911 Turbo',
      path: '/models/free_1975_porsche_911_930_turbo.glb',
      price: 125000,
      power: 300,
      scale: 1,
      position: [0, -0.1, 0],
      colorableParts: ['body', 'paint', 'carpaint', 'shell'],
      badge: 'Just in black color'
    },
    {
      name: 'BYD Seal',
      path: '/models/2024_byd_seal.glb',
      price: 45000,
      power: 310,
      scale: 1,
      position: [0, -0.1, 0],
      colorableParts: ['body', 'paint', 'carpaint', 'shell', 'exterior']
    },
    {
      name: 'Air Jordan 1',
      path: '/models/air_jordan_1.glb',
      price: 170,
      power: 0,
      scale: 0.1, // Reduced significantly
      position: [0, -0.5, 0],
      colorableParts: ['leather', 'fabric', 'upper', 'panel', 'swoosh'],
      badge: 'Single color'
    },
    {
      name: 'Nike Pegasus ',
      path: '/models/nike_air_zoom_pegasus_36.glb',
      price: 120,
      power: 0,
      scale: 1, // Reduced from 10
      position: [0, -0.5, 0],
      colorableParts: ['upper', 'mesh', 'fabric', 'material', 'logo']
    },
    {
      name: 'Trash Bin',
      path: '/models/basura.glb',
      price: 25,
      power: 0,
      scale: 1.5,
      position: [0, 0, 0],
      colorableParts: ['body', 'lid', 'container']
    },
  ],
  currentModelIndex: 0,

  setBodyColor: (color) => set({ bodyColor: color }),
  setWheelType: (type) => set({ wheelType: type }),
  setInteriorMaterial: (material) => set({ interiorMaterial: material }),
  setView: (view) => set({ view: view }),
  updatePrice: (newPrice) => set({ price: newPrice }),

  nextModel: () => set((state) => {
    const nextIndex = (state.currentModelIndex + 1) % state.models.length;
    const model = state.models[nextIndex];
    return {
      currentModelIndex: nextIndex,
      price: model.price,
      power: model.power
    };
  }),

  prevModel: () => set((state) => {
    const prevIndex = (state.currentModelIndex - 1 + state.models.length) % state.models.length;
    const model = state.models[prevIndex];
    return {
      currentModelIndex: prevIndex,
      price: model.price,
      power: model.power
    };
  }),
}));
