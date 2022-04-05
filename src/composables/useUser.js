import { ref } from "vue";
import { projectAuth } from "@/config/firebase";

//Tạo biến lưu thông tin user, lấy ngay user ban đầu là currentUser, nếu ko có thì null
const user = ref(projectAuth.currentUser);

//Lắng nghe dữ liệu database
projectAuth.onAuthStateChanged(function (_user) {
  if (_user) user.value = _user;
});

//Get user
function getUser() {
  return { user };
}
export function useUser() {
  return { getUser };
}
