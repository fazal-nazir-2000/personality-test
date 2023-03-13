import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const API_URL = 'http://localhost:3000/api/assesment_questions';

export const warningToast = () => {
  toast.warn('Name is missing', {
  position: "top-center",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: false,
  pauseOnHover: true,
  draggable: false,
  progress: undefined,
  theme: "light",
  });
};

export const errorToast = () => {
  toast.error('Unable to load questions', {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};
