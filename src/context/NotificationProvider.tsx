import type { ReactNode } from 'react';
import { NotificationContext } from './NotificationGlobal';
import { toast } from 'react-hot-toast';

export type NotificationType = 'success' | 'error' | 'info' | 'warning';

interface NotificationProviderProps {
  children: ReactNode;
}

const notify = (message: string, type?: NotificationType): void => {
  try {
    switch (type) {
      case 'success':
        toast.success(message);
        break;
      case 'error':
        toast.error(message);
        break;
      case 'info':
        toast(message);
        break;
      case 'warning':
        toast(message);
        break;
      default:
        toast(message);
    }
  } catch {
    toast.error('Notification error.');
  }
};

export const NotificationProvider = ({ children }: NotificationProviderProps) => (
  <NotificationContext.Provider value={{ notify }}>
    {children}
  </NotificationContext.Provider>
);
