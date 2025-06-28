# Reusable Components

This package contains extracted components from the Aegis AI landing page that can be reused in other projects.

## Components

### HeroSection
A flexible hero section component with customizable content, buttons, and trust indicators.

**Props:**
- `badge`: Object with icon and text for the top badge
- `title`: Main heading text
- `subtitle`: Optional subtitle (appears in blue)
- `description`: Description text
- `primaryButton`: Primary CTA button configuration
- `secondaryButton`: Secondary button configuration
- `trustIndicator`: Star rating and trust text
- `className`: Additional CSS classes

### AudioAnalysisCard
An animated card showing AI processing metrics with gradient progress bars.

**Props:**
- `title`: Card title (default: "AI Listening Active")
- `status`: Status badge configuration
- `metrics`: Array of progress bars with width and gradient
- `accuracyText`: Bottom description text
- `animated`: Enable/disable animations
- `className`: Additional CSS classes

### LiveAnalysisCard
A clean analytics card with labeled metrics and progress bars.

**Props:**
- `title`: Card title
- `status`: Status text
- `metrics`: Array of metric objects with label, value, progress, and color
- `processingText`: Bottom processing information
- `className`: Additional CSS classes

## Usage

```tsx
import { HeroSection, AudioAnalysisCard, LiveAnalysisCard } from '@/components'

// Basic usage
<HeroSection
  title="Your Product"
  subtitle="Tagline"
  description="Product description"
  primaryButton={{ text: "Get Started", onClick: handleClick }}
/>

<AudioAnalysisCard
  title="AI Active"
  accuracyText="99.7% accuracy"
  animated={true}
/>

<LiveAnalysisCard
  title="Analytics"
  metrics={[
    { label: "Score", value: "95%", progress: 95, color: "bg-blue-500" }
  ]}
/>
```

## Installation

1. Copy the component files to your project
2. Ensure you have the required dependencies:
   - `@radix-ui/react-*` components
   - `lucide-react` for icons
   - `tailwindcss` for styling
   - `class-variance-authority` for variants

## Dependencies

These components depend on:
- Button, Badge, Card components from your UI library
- Lucide React icons
- Tailwind CSS classes

## Customization

All components are fully customizable through props and support additional className props for further styling. The components use CSS variables for theming and are compatible with dark mode.