import { useLocation, useNavigate } from 'react-router-dom';

export function useNavLinkHandler(onClose?: () => void) {
  const location = useLocation();
  const navigate = useNavigate();

  function handleNavClick(
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    link: { to: string; label: string; scrollTo?: string }
  ) {
    if (link.scrollTo) {
      e.preventDefault();
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const section = document.getElementById(link.scrollTo ?? '');
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
        if (onClose) onClose();
      } else {
        const section = document.getElementById(link.scrollTo ?? '');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
        if (onClose) onClose();
      }
    } else {
      if (onClose) onClose();
    }
  }

  return handleNavClick;
}
