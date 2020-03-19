import axios from "axios";

const deleteById = async id => {
  console.log(`Deleting by id.. ${id}`);
  const result = await axios.post(
    "https://pigeon-backend-9909.herokuapp.com/procedure/delete",
    id
  );
  const data = result.data.data;
  console.log(result);
  return data;
};

export default deleteById;
