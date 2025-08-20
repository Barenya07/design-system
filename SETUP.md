# Quick Setup Guide for Using the Design System

## Option 1: Install from GitHub (Recommended for now)

```bash
npm install git+https://github.com/Barenya07/design-system.git
```

## Option 2: Install as a local dependency during development

1. Clone the repository:
```bash
git clone https://github.com/Barenya07/design-system.git
cd design-system
```

2. Build the library:
```bash
npm install
npm run build:lib
```

3. In your Next.js project, install it:
```bash
npm install /path/to/design-system
```

## Usage in Next.js Projects

1. Import components and styles in your pages or components:

```tsx
import { Button, Card, Input, Modal, Spinner } from '@barenya07/design-system'
import '@barenya07/design-system/styles'

export default function MyPage() {
  return (
    <div>
      <Card>
        <h1>Welcome</h1>
        <Button variant="primary">Get Started</Button>
      </Card>
    </div>
  )
}
```

2. Or import only what you need (tree-shaking):

```tsx
import Button from '@barenya07/design-system/dist/Button'
```

## Publishing to npm (Future)

When ready to publish to npm:

1. Update version in package.json
2. Build: `npm run build:lib`
3. Publish: `npm publish`

Then others can install with:
```bash
npm install @barenya07/design-system
```
