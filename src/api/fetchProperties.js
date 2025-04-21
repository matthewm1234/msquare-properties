import axios from "axios"


const instance = axios.create({
  baseURL: "http://ec2-54-221-86-133.compute-1.amazonaws.com:3000",
  withCredentials: false,
  headers: {
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }
});

const fetchProperties = async () => {
  try {
    const userIdResponse = await instance.get("/properties");
    console.log({ userIdResponse })
    const data = userIdResponse.data;

    return { data };
  } catch (error) {
    console.log(error);
  }
};

export default fetchProperties;
