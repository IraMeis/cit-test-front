import axios from "axios";
import bask from "../util/back.json";
import api from "../util/apiList.json";

const API_URL = bask.server + api.substring;

const createTask = (obj) => {
    return axios.post(API_URL + "/create", obj);
};

const SubstringService = {
    createTask
};

export default SubstringService;