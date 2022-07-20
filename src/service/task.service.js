import axios from "axios";
import bask from "../util/back.json";
import api from "../util/apiList.json";

const API_URL_SQUARE = bask.server + api.square;
const API_URL_SUBSTRING = bask.server + api.substring;

const createTask = (url, obj) => {
    return axios.post(url, obj);
};

const createTaskSQ = (obj) => {
    return createTask(API_URL_SQUARE + "/create", obj);
};

const createTaskSUB = (obj) => {
    return createTask(API_URL_SUBSTRING + "/create", obj);
};

const TaskService = {
    createTaskSUB,
    createTaskSQ
};

export default TaskService;