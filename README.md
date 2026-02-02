# Rarity Surf Frontend

<img src="https://i.imgur.com/ehQfvy1.png" height="100" />

React frontend for NFT rarity ranking with real-time OpenSea marketplace integration. Provides instant rarity analysis within minutes of metadata reveal.

![React](https://img.shields.io/badge/React-18-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-CSS-teal)
![OpenSea](https://img.shields.io/badge/OpenSea-API-blue)

## Overview

A dynamic React application that displays NFT rarity rankings and integrates with OpenSea's marketplace API. Users can filter NFTs by rarity score and price, identifying undervalued listings in real-time. Works with the [Django backend](https://github.com/Kevin-Mok/rarity-surf) for rarity calculations.

## Features

- **Rarity Rankings** - View NFTs sorted by calculated rarity scores
- **OpenSea Integration** - Live marketplace listing data via API
- **Dynamic Filtering** - Filter by rarity rank and price ranges
- **React Hooks** - Efficient state management for real-time updates
- **Responsive Design** - Tailwind CSS for modern UI/UX

## Tech Stack

| Component | Technology |
|-----------|------------|
| **Frontend** | React 18, React Hooks |
| **Styling** | Tailwind CSS |
| **API Integration** | OpenSea API, Axios |
| **State Management** | React Hooks |
| **Backend** | Django (separate repo) |

## Project Structure

```
rarity-surf-frontend/
├── src/
│   ├── components/       # React components
│   ├── hooks/            # Custom React hooks
│   ├── services/         # API integration
│   └── App.js            # Main application
├── public/
└── package.json
```

## Installation

### Prerequisites
- Node.js and npm
- Running instance of [rarity-surf backend](https://github.com/Kevin-Mok/rarity-surf)

### Setup

```bash
# Clone and install
git clone git@github.com:Kevin-Mok/rarity-surf-frontend.git
cd rarity-surf-frontend
npm install

# Start development server
npm start
```

## Why This Project is Interesting

### Technical Highlights

1. **Real-Time NFT Analytics**
   - Dynamic rarity data loading with React hooks
   - OpenSea marketplace API integration
   - Filter and sort large NFT collections efficiently

2. **Full-Stack Architecture**
   - React frontend with Django backend separation
   - RESTful API communication
   - Scalable microservices design

3. **Market Intelligence**
   - Identify undervalued NFTs by rarity/price ratio
   - Real-time listing data from OpenSea
   - Minutes-fast analysis after metadata reveal

### Skills Demonstrated

- **React Development**: Hooks, state management, component architecture
- **API Integration**: OpenSea marketplace, RESTful services
- **UI/UX**: Tailwind CSS, responsive design
- **NFT/Web3**: Understanding of NFT metadata and rarity mechanics

## Related

- [rarity-surf](https://github.com/Kevin-Mok/rarity-surf) - Django backend for rarity calculations

## Author

[Kevin Mok](https://github.com/Kevin-Mok)
