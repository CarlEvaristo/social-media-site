import axios from "axios";
import Axios from "axios";

const baseURL = 'Socialmediaserver-env.eba-3v5vf2qa.us-east-1.elasticbeanstalk.com';
const Api = Axios.create({
 baseURL: "baseURL" || "http://localhost:3001",
});

export default Api;
