import { api } from "../lib/axios";

export default class ApartmentsService {
  async getApartments(page = 1, search = "") {
    const params = new URLSearchParams([
      ["limit", 16],
      ["page", page],
      ["search", search],
    ]);
    try {
      const response = await api.get("/apartments", { params });
      return response.data.data;
    } catch (error) {
      throw new Error(error);
    }
  }
}
