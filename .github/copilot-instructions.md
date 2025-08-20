<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Scimplify Design System - Development Guidelines

This is a React component library project built with TypeScript, Vite, and modern CSS. The library is designed to be reusable across multiple Next.js projects.

## Code Style and Conventions

### Components
- All components should be written in TypeScript with proper type definitions
- Use React.forwardRef for components that need ref forwarding
- Export both the component and its prop types
- Follow the naming convention: ComponentName.tsx and ComponentName.css
- Use CSS custom properties (CSS variables) for consistent theming
- Prefix all CSS classes with `scimplify-` to avoid conflicts

### File Structure
- Components should be organized in their own directories under `src/components/`
- Each component should have its own CSS file
- Utilities should be placed in `src/utils/`
- Main entry point is `src/index.ts`

### Styling
- Use CSS custom properties defined in `src/styles/index.css` for consistency
- Follow BEM-like naming convention for CSS classes
- Ensure all components are responsive and accessible
- Include hover, focus, and disabled states where appropriate

### TypeScript
- Extend appropriate HTML element props when creating component interfaces
- Use `Omit` when you need to override existing props (like `size` in InputProps)
- Provide proper JSDoc comments for all props

### Accessibility
- Include proper ARIA attributes
- Ensure keyboard navigation works
- Use semantic HTML elements
- Provide screen reader support

### Build Configuration
- The library uses Vite for building in library mode
- React and React-DOM are peer dependencies
- TypeScript declarations are generated automatically
