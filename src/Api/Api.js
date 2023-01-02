import axios from "axios";

var baseUrl =
  // "https://cors-anywhere.herokuapp.com/https://crudapi.co.uk/api/v1/";
  "http://localhost:3001/api/";
var header = {
  "Content-Type": "application/json",
  Authorization: "Bearer -x4lh2uQVDw6APz677MEC_c8gFZd3BnjxX5MHFUXi1_qGCA7NQ",
};

const GetData = async (type, _callback) => {
  var config = {
    method: "get",
    url: baseUrl + type,
    headers: header,
  };

  axios(config)
    .then(async function (response) {
      await _callback(response.data.items);
    })
    .catch(function (error) {
      //console.log(error);
    });
};

const DeleteData = async (type, id, _callback) => {
  var config = {
    method: "delete",
    url: baseUrl + type + "/" + id,
    headers: header,
  };

  axios(config)
    .then(function (response) {
      // window.location.reload();
      _callback();
    })
    .catch(function (error) {
      //console.log("book", error);
    });
};

const AddApi = async (data, _callback, type) => {
  var config = {
    method: "post",
    url: baseUrl + type,
    headers: header,
    data: data,
  };

  axios(config)
    .then(function (response) {
      _callback();
    })
    .catch(function (error) {
      console.log("book", error);
    });
};

const UpdateApi = async (data, _callback, type) => {
  var config = {
    method: "put",
    url: baseUrl + type,
    headers: header,
    data: data,
  };

  axios(config)
    .then(function (response) {
      _callback();
    })
    .catch(function (error) {
      //console.log("book", error);
    });
};

const UploadImage = async (data, _callback) => {
  var config = {
    method: "post",
    url: "https://frozen-journey-49199.herokuapp.com/https://freeimage.host/api/1/upload",
    headers: {
      "Content-Type": "application/octet-stream",
      Authorization: "Bearer CFPAT-AYCr-D5jDdrDxeS57u8YdRm57--CTmeE_tFAwoxv7do",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      _callback(response.data.image.url);
    })
    .catch(function (error) {
      _callback("https://iili.io/PytDYJ.jpg");
    });
};

const editData = (id, _callback, type) => {
  var config = {
    method: "get",
    url: `${baseUrl}${type}/${id}`,
    headers: header,
  };

  axios(config)
    .then(async function (response) {
      await _callback(response.data);
    })
    .catch(function (error) {
      //console.log(error);
    });
};
export default GetData;
export { DeleteData, AddApi, UpdateApi, UploadImage, editData };
