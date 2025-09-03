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
import { Button } from '@barenya07/design-system'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@barenya07/design-system'
// Import styles
import '@barenya07/design-system/styles'
// Or import directly: import '@barenya07/design-system/dist/design-system.css'

export default function MyPage() {
  return (
    <div>
      {/* Button Examples */}
      <div className="space-x-2 mb-4">
        <Button variant="default">Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="outline">Outline Button</Button>
        <Button variant="ghost">Ghost Button</Button>
        <Button variant="destructive">Destructive Button</Button>
      </div>

      {/* Tabs Example */}
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <div className="p-4 border rounded-md">
            <h4 className="font-medium mb-2">Account Settings</h4>
            <p className="text-sm text-gray-600">Make changes to your account here.</p>
          </div>
        </TabsContent>
        <TabsContent value="password">
          <div className="p-4 border rounded-md">
            <h4 className="font-medium mb-2">Password Settings</h4>
            <p className="text-sm text-gray-600">Change your password here.</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
```

2. Or import individual components (tree-shaking):

```tsx
import { Button } from '@barenya07/design-system'
```

## Updating in Other Projects

When you add new components or make changes to the design system:

1. **Push changes to GitHub** (as shown above)
2. **Update in your other projects**:

```bash
# Navigate to your project that uses the design system
cd /path/to/your-nextjs-project

# Update to the latest version from GitHub
npm update @barenya07/design-system

# Or reinstall to get the latest changes
npm uninstall @barenya07/design-system
npm install git+https://github.com/Barenya07/design-system.git
```

3. **Clear cache if needed**:
```bash
# Clear npm cache
npm cache clean --force

# Clear Next.js cache (if using Next.js)
rm -rf .next
npm run dev
```

## Available Components

- **Button**: Multiple variants (default, secondary, outline, ghost, destructive) and sizes (sm, default, lg)
- **Tabs**: Horizontal and vertical tabs with accessible keyboard navigation

More components coming soon!

## Publishing to npm (Future)

When ready to publish to npm:

1. Update version in package.json
2. Build: `npm run build:lib`
3. Publish: `npm publish`

Then others can install with:
```bash
npm install @barenya07/design-system
```
