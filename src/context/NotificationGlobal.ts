import { createContext } from 'react';

export type NotificationType = 'success' | 'error' | 'info' | 'warning';

export interface NotificationData {
  message: string;
  type?: NotificationType;
}

export interface NotificationContextProps {
  notify: (message: string, type?: NotificationType) => void;
}

export const NotificationContext = createContext<NotificationContextProps | undefined>(undefined);
