import axios from "axios";

const http = axios.create({
    baseURL: `https://escolheaicomidas.vercel.app/`

})
   
export default http