import { api } from "../lib/axios";

export default class ApartmentDetailsService {
  async getApartmentDetails(id) {
    const response = await api.get(`/apartments/${id}`);
    return response.data;
  }
}
