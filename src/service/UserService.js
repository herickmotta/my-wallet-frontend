import api from "../config/api";

class AccountService {
  async getTransactions(token, userId) {
    try {
      const { data } = await api.get(`/transactions/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (data) {
        return { success: data };
      }
      return null;
    } catch (e) {
      return e;
    }
  }

  async postTransaction(body, token, type) {
    try {
      const { data } = await api.post(`/transactions/new/${type}`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (data) {
        return { success: data };
      }
      return null;
    } catch (e) {
      return e;
    }
  }
}

export default new AccountService();
