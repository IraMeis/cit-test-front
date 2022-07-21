import axios from "axios";
import bask from "../util/back.json";
import api from "../util/apiList.json";

const API_URL = bask.server + api.file;

const uploadFile = (file) => {
    let formData = new FormData();
    formData.append("file", file);
    return axios.patch(API_URL +"/upload", formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
};

const downloadFileSQ = (fileObj) => {
    return axios.patch(API_URL +`/download/SQ`, fileObj,{
        responseType: 'blob',
    });
};

const downloadFileSUB = (fileObj) => {
    return axios.patch(API_URL +`/download/SUB`, fileObj,{
        responseType: 'blob',
    });
};

const FileService = {
    uploadFile,
    downloadFileSQ,
    downloadFileSUB
}

export default FileService;