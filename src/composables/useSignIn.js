import { ref } from "vue";
import { projectAuth } from "@/config/firebase";
// Request lên server kiểu gì cũng có lỗi nên cần khai trước.
const error = ref(null);
// isPending Lưu trạng thái xem có đang request tới server không.
const isPending = ref(false);

async function signin(email, password) {
  //Bắt đầu gửi request
  isPending.value = true;
  // Reset error
  error.value = null;
  try {
    const response = await projectAuth.signInWithEmailAndPassword(
      email,
      password
    );
    return response;
  } catch (err) {
    error.value = err.message;
  } finally {
    //Kết thúc gửi request
    isPending.value = false;
  }
}

export function useSignIn() {
  return { error, isPending, signin };
}
