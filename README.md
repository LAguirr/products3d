# AETHER 3D Asset Configurator

A premium, interactive 3D product configurator built with **React**, **Three.js**, and **React Three Fiber**. This application allows users to preview high-fidelity 3D models (cars, sneakers, etc.) with real-time color customization and specifications tracking.

![3D Configurator](public/vite.svg)

## 🚀 Features

- **Dynamic Model Carousel**: Seamlessly switch between different 3D assets (GLB/GLTF) with smooth GSAP scale transitions.
- **Universal Color Customization**: Real-time material updates for body parts, leather, mesh, and uppers across all models.
- **Spec Tracking**: Live updates for pricing and technical specifications (HP, labels) per model.
- **Premium UI/UX**: Glassmorphism design system, responsive layouts, and floating information badges.
- **Smooth Navigation**: High-end orbit controls and cinematic camera transitions.

## 🛠️ Tech Stack

- **Framework**: [React](https://reactjs.org/)
- **3D Engine**: [Three.js](https://threejs.org/)
- **React-3D Integration**: [@react-three/fiber](https://github.com/pmndrs/react-three-fiber) & [@react-three/drei](https://github.com/pmndrs/drei)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Animations**: [GSAP](https://greensock.com/gsap/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 📦 Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/LAguirr/products3d.git
   cd 3dCar
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

## 🚗 Adding New Models

To add more assets:
1. Place your `.glb` file in the `public/models/` folder.
2. Register the model in `src/store.js`:
   ```javascript
   {
     name: 'Your Asset',
     path: '/models/your_asset.glb',
     price: 1000,
     scale: 1,
     position: [0, 0, 0],
     colorableParts: ['body', 'upper'], // Parts that should change color
     badge: 'New Arrival' // Optional
   }
   ```

## 🎨 License

This project is licensed under the MIT License.
