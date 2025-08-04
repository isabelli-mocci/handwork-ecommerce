import { toast } from 'react-hot-toast';
import InfoIcon from '../components/common/icons/InfoIcon';
import WarningIcon from '../components/common/icons/WarningIcon';
import type { NotificationType } from '../context/NotificationGlobal';

export const useNotification = () => {
  const notify = (message: string, type?: NotificationType) => {
    try {
      switch (type) {
        case 'success':
          toast.success(message);
          break;
        case 'error':
          toast.error(message);
          break;
        case 'info':
          toast(message, { icon: <InfoIcon /> });
          break;
        case 'warning':
          toast(message, { icon: <WarningIcon /> });
          break;
        default:
          toast(message);
      }
    } catch {
      toast.error('Notification error.');
    }
  };
  return { notify };
};
