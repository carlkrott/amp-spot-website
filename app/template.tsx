import { ErrorBoundary } from './components/ErrorBoundary';

export default function RootTemplate({ children }: { children: React.ReactNode }) {
  return <ErrorBoundary>{children}</ErrorBoundary>;
}
