import { hotDownload } from "../src/Api/api";
let count = async (id) => {
  await hotDownload(id);
};

export default count;
