import type { FC } from 'react';
import { twMerge } from 'tailwind-merge';

export const Title: FC<{ children: string; className?: string }> = ({
  children,
  className,
}) => (
  <h1 className={twMerge('text-2xl font-medium font-roboto', className)}>
    {children}
  </h1>
);
