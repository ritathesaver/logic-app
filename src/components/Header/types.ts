import { ReactNode } from 'react';

export interface IHeaderProps {
  title: string;
  isRightButtonShown?: boolean;
  rightIcon?: ReactNode;
}
