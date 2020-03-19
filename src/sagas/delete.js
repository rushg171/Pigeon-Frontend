import axios from "axios";

const fetchData = async () => {
  const result = await axios.get(
    "https://pigeon-backend-9909.herokuapp.com/delete"
  );
  const procedreData = result.data.data;
  console.log(procedreData);
  return procedreData;
};

export default fetchData;
