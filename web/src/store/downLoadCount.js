import { downloadInfo } from "../Api/api";
let count = async (id) => {
  await downloadInfo(id);
};

export default count;
