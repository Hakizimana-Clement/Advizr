import authService from "../appwrite/auth";
import { showErrorToast } from "../conf/ToastConfig";
import { login, logout } from "../redux/features/authSlice";
import { store } from "../redux/store";

const userInfo = async () => {
  try {
    const user = await authService.getCurrentUser();

    if (user) {
      store.dispatch(login({ userData: user }));
      return user;
    } else {
      store.dispatch(logout());
      return null;
    }
  } catch (error: unknown) {
    const typeError = error as Error;

    showErrorToast(typeError.message);

    store.dispatch(logout());

    return null;
  }
};
export default userInfo;
