import api from "../config/api";

class SignUpService {
  async signUp(userData) {
    try {
      const res = await api.post(`/users/sign-up`, userData);
      if (res.status === 201) {
        return { success: 201 };
      }
      return null;
    } catch (err) {
      return err;
    }
  }
}

export default new SignUpService();
