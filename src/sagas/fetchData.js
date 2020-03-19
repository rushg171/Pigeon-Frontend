import axios from "axios";

const fetchData = async () => {
  const result = await axios.get(
    "https://pigeon-backend-9909.herokuapp.com/procedure/all"
  );
  const procedureData = result.data.data;
  console.log(procedureData);
  return procedureData;
};

export default fetchData;
