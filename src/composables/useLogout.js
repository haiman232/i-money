import { ref } from "vue";
import { projectAuth } from "@/configs/firebase";
// Request lên server kiểu gì cũng có lỗi nên cần khai trước.
const error = ref(null);

async function logout() {
  // Reset error
  error.value = null;
  try {
    const response = await projectAuth.signOut();
    return response;
  } catch (err) {
    error.value = err.message;
  }
}

export function useLogout() {
  return { error, logout };
}
