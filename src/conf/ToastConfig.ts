import { ToastContainerProps, ToastOptions, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastProps: ToastContainerProps = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  newestOnTop: false,
  closeOnClick: true,
  rtl: false,
  pauseOnFocusLoss: true,
  draggable: true,
  pauseOnHover: true,
};

const customToastOptionError: ToastOptions = {
  className:
    "mx-3 mt-4 sm:mx-0 md:mt-0 bg-white-400 text-black p-4 rounded shadow-lg",
  bodyClassName: "text-sm",
};

const customToastOptionSuccess: ToastOptions = {
  className:
    "mx-3 mt-4 sm:mx-0 md:mt-0 bg-white-400 text-green p-4 rounded shadow-lg",
  bodyClassName: "text-sm",
};

const customToastOptionInfo: ToastOptions = {
  className:
    "mx-3 mt-4 sm:mx-0 md:mt-0 bg-white text-black/80 p-4 rounded shadow-lg",
  bodyClassName: "text-sm",
};

export const showSuccessToast = (message: string, options?: ToastOptions) => {
  toast.success(message, { ...customToastOptionSuccess, ...options });
};

export const showErrorToast = (message: string, options?: ToastOptions) => {
  toast.error(message, { ...customToastOptionError, ...options });
};

export const showInfoToast = (message: string, options?: ToastOptions) => {
  toast.info(message, { ...customToastOptionInfo, ...options });
};

export default ToastProps;
