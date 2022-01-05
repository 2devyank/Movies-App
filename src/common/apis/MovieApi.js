// import axios from "axios";
import axios, * as others from 'axios';

export default axios.create({
    baseURL:"http://www.omdbapi.com"
})