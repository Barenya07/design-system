# Scimplify Design System

A modern, reusable React component library built with TypeScript and designed for Next.js projects.

## Features

- 🚀 **Modern Stack**: Built with React 19, TypeScript, and Vite
- 🎨 **Design System**: Consistent design tokens and theming
- 📱 **Responsive**: Mobile-first responsive design
- ♿ **Accessible**: WCAG compliant components
- 🎯 **TypeScript**: Full type safety and IntelliSense support
- 📦 **Tree Shakeable**: Import only what you need
- 🔧 **Customizable**: Easy to theme and extend

## Installation

### From npm (when published)
```bash
npm install @barenya07/design-system
```

### From GitHub (development)
```bash
npm install git+https://github.com/Barenya07/design-system.git
```

## Usage

### Basic Import
```tsx
import { Button, Card, Input, Modal, Spinner } from '@barenya07/design-system'
import '@barenya07/design-system/styles'

function MyApp() {
  return (
    <div>
      <Button variant="primary">Click me!</Button>
      <Card>
        <h3>Hello World</h3>
        <p>This is a card component.</p>
      </Card>
    </div>
  )
}
```

## Components

- **Button**: Versatile button with multiple variants and sizes
- **Card**: Flexible container component with different styles
- **Input**: Form input with validation states and icons
- **Modal**: Accessible modal dialog
- **Spinner**: Loading spinner component

## Development

### Setup
```bash
git clone https://github.com/Barenya07/design-system.git
cd design-system
npm install
```

### Development Server
```bash
npm run dev
```

### Build Library
```bash
npm run build:lib
```

## Publishing

1. Update version in `package.json`
2. Build the library: `npm run build:lib`
3. Publish: `npm publish`

## License

MIT License
