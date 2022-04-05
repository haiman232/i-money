import { ref } from "vue";
import { projectAuth } from "@/config/firebase";
// Request lên server kiểu gì cũng có lỗi nên cần khai trước.
const error = ref(null);
// isPending Lưu trạng thái xem có đang request tới server không.
const isPending = ref(false);

//Hàm xử lý signup, chú ý bật setting trên firebase trước.
async function signup(email, password, fullName) {
  //Bắt đầu gửi request
  isPending.value = true;
  // Reset error
  error.value = null;
  try {
    //Hàm trả về Promise -> sử dụng async await
    const response = await projectAuth.createUserWithEmailAndPassword(
      email,
      password
    );
    //Chủ động bắt lỗi khi response trả về không đúng
    if (!response) throw new Error("Could not create a new  user");
    //Update fullName vào displayName trong response trả về
    await response.user.updateProfile({ displayName: fullName });
    console.log(response);
    return response;
  } catch (err) {
    error.value = err.message;
  } finally {
    //Kể cả lỗi hay thành công đều phải kết thúc gửi request
    isPending.value = false;
  }
}
export function useSignUp() {
  return { error, isPending, signup };
}
