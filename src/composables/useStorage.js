import { ref } from "vue";
import { projectStorage } from "@/configs/firebase";
import { useUser } from "./useUser";

const { getUser } = useUser();
const { user } = getUser();
const useStorage = (name) => {
  const error = ref(null);
  const filePath = ref(null);
  const url = ref(null);

  async function uploadFile(file) {
    //tạo filePath cho nơi lưu file đc up lên theo collections/ user id
    filePath.value = `${name}/${user.value.uid}/${file.name}`;
    //ref filePath lên firebase Storage
    const fileRef = projectStorage.ref(filePath.value);
    try {
      //put file lên storage theo fileRef
      const response = await fileRef.put(file);

      //Lấy url của file đã tải lên
      url.value = await response.ref.getDownloadURL();

      return url.value;
    } catch (err) {
      error.value = err.message;
    }
  }
  return { error, filePath, url, uploadFile };
};
export default useStorage;
