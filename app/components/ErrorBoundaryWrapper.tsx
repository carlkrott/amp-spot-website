'use client';

import { ErrorBoundary as ReactErrorBoundary } from './ErrorBoundary';

export default function ErrorBoundaryWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ReactErrorBoundary>{children}</ReactErrorBoundary>;
}
