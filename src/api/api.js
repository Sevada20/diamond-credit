import { $api } from "./axiosInstance";

export async function setPawnshopId(pawnshopId) {
  try {
    const response = await $api.post("/admin/set-pawnshop", {
      pawnshop_id: pawnshopId,
    });
    return response.data;
  } catch (error) {
    console.error("Error setting pawnshop ID:", error);
    throw error;
  }
}
