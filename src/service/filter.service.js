import axios from "axios";
import bask from "../util/back.json";
import api from "../util/apiList.json";

const API_URL = bask.server + api.filter;

const getFilteredTasks = (search) => {
    return axios.get(API_URL + search);
};

const FilterService = {
    getFilteredTasks
}

export default FilterService;