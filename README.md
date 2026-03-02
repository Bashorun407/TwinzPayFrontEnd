# TwinzPay Automation

A Next.js application for automating recurring financial obligations. Schedule TwinzPays, levies, and transfers to loved ones—all triggered automatically when your paycheck arrives.

## Features

- **Bill Automation** - Set up recurring payments for utilities, rent, subscriptions, and more
- **Levy & Tax Payments** - Schedule property taxes, government fees, and levies
- **Family Transfers** - Automatically send allowances to family members on payday
- **Payday Triggers** - Link your income schedule to automate payments when funds arrive
- **Secure** - Bank-level encryption for all financial data

## Tech Stack

- **Framework**: Next.js 16
- **UI**: React 19, Tailwind CSS, Radix UI, shadcn/ui
- **State Management**: Zustand
- **Data Fetching**: TanStack Query
- **Forms**: Formik + Yup validation
- **Animations**: Framer Motion

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
pnpm build
pnpm start
```

## Scripts

| Command               | Description               |
| --------------------- | ------------------------- |
| `pnpm dev`            | Start development server  |
| `pnpm build`          | Build for production      |
| `pnpm start`          | Start production server   |
| `pnpm lint`           | Run ESLint                |
| `pnpm prettier:write` | Format code with Prettier |

## License

MIT
