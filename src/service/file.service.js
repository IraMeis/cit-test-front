import axios from "axios";
import bask from "../util/back.json";
import api from "../util/apiList.json";

const API_URL = bask.server + api.file;

const uploadFile = (file, fileName) => {
    let formData = new FormData();
    formData.append("file", file);
    formData.append("name", fileName);
    return axios.patch(API_URL +"/upload", formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
};

const FileService = {
  uploadFile
}

export default FileService;