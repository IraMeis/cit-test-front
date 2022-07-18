import axios from "axios";
import bask from "../util/back.json";
import api from "../util/apiList.json";

const API_URL = bask.server + api.square;

const createTask = (obj) => {
    return axios.post(API_URL + "/create", obj);
};

const SquareService = {
    createTask
};

export default SquareService;