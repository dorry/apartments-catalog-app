import { create } from "zustand";
import { api } from "../axios";
export const useApartmentStore = create((set) => ({
  apartments: [],
  loading: false,
  error: null,

  fetchApartments: async (search = "", page = 1) => {
    set({ loading: true });
    try {
      const params = new URLSearchParams([
        ["limit", 16],
        ["page", page],
        ["search", search],
      ]);
      const response = await api.get("/apartments", { params });
      set({ apartments: response.data.data, loading: false });
    } catch (error) {
      set({ error: "Failed to fetch apartments", loading: false });
    }
  },

  postApartment: async (data) => {
    try {
      const fd = new FormData();

      for (const key in data) {
        fd.append(key, data[key]);
      }
      const res = await api.post("/apartments", fd, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      set((state) => ({
        apartments: [...state.apartments, res.data],
      }));
    } catch (error) {
      console.error(error);
      set({ error: "Failed to add apartment" });
    }
  },

  fetchApartmentDetails: async (id) => {
    const response = await api.get(`/apartments/${id}`);
    return response.data;
  },
}));
