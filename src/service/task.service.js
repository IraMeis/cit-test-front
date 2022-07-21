import axios from "axios";
import bask from "../util/back.json";
import api from "../util/apiList.json";

const API_URL_SQUARE = bask.server + api.square;
const API_URL_SUBSTRING = bask.server + api.substring;

const post = (url, obj) => {
    return axios.post(url, obj);
};

const createTaskSQ = (obj) => {
    return post(API_URL_SQUARE + "/create", obj);
};

const createTaskSUB = (obj) => {
    return post(API_URL_SUBSTRING + "/create", obj);
};

const solveSUB = (obj) => {
    return post(API_URL_SUBSTRING + "/solve", obj);
}

const solveSQ = (obj) => {
    return post(API_URL_SQUARE + "/solve", obj);
};

const TaskService = {
    createTaskSUB,
    createTaskSQ,
    solveSQ,
    solveSUB
};

export default TaskService;