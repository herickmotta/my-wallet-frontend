import api from "../config/api";

class SignInService {
  async signIn(userData) {
    try {
      const res = await api.post(`/users/sign-in`, userData);
      if (res.data) {
        return { success: res.data };
      }
      return null;
    } catch (err) {
      return err.response.data;
    }
  }
}

export default new SignInService();
