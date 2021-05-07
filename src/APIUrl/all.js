import axios from 'axios'
let instance = axios.create({
  baseURL: 'http://localhost:5000/api/',
  headers: {'Authorization': 'Bearer ' + sessionStorage.getItem('token')}
})

const WorkInfo = {
  getAll(){
    return axios({
      baseURL: 'http://localhost:5000/api/',
      headers: {'Authorization': 'Bearer ' + sessionStorage.getItem('token')},
      url: '/WorkInfo/FindAll',
      method: 'get', // post、put、delete、
      params: {
        page:1,
        size:10
      },
    })
    .then(function (response) {
      return response
    })
    .catch(function (error) {
      return error
    });
  },
  getSelf(){
    return axios({
      baseURL: 'http://localhost:5000/api/',
      headers: {'Authorization': 'Bearer ' + sessionStorage.getItem('token')},
      url: '/WorkInfo/Find',
      method: 'get', // post、put、delete、
    })
    .then(function (response) {
      return response
    })
    .catch(function (error) {
      return error
    });
  },
  deleteWork(id){
    return axios({
      baseURL: 'http://localhost:5000/api/',
      headers: {'Authorization': 'Bearer ' + sessionStorage.getItem('token')},
      url: '/WorkInfo/Delete',
      method: 'delete', // post、put、delete、
      params:{
        id: id
      }
    })
    .then(function (response) {
      return response
    })
    .catch(function (error) {
      return error
    });
  },
  editWork(id,name,place,reason,licence){
    return axios({
      baseURL: 'http://localhost:5000/api/',
      headers: {'Authorization': 'Bearer ' + sessionStorage.getItem('token')},
      url: '/WorkInfo/Edit',
      method: 'put', // post、put、delete、
      params:{
        id: id,
        name:name,
        place:place,
        reason:reason,
        licence:licence
      }
    })
    .then(function (response) {
      return response
    })
    .catch(function (error) {
      return error
    });
  },
  createWork(name,place,reason,licence){
    return axios({
      baseURL: 'http://localhost:5000/api/',
      headers: {'Authorization': 'Bearer ' + sessionStorage.getItem('token')},
      url: '/WorkInfo/Create',
      method: 'post', // post、put、delete、
      params:{
        name:name,
        place:place,
        reason:reason,
        licence:licence
      }
    })
    .then(function (response) {
      return response
    })
    .catch(function (error) {
      return error
    });
  }
}

const RoadInfo = {
  getAll(){
    return axios({
      baseURL: 'http://localhost:5000/api/',
      headers: {'Authorization': 'Bearer ' + sessionStorage.getItem('token')},
      url: '/RoadInfo/FindAll',
      method: 'get', // post、put、delete、
      params: {
        page:1,
        size:10
      },
    })
    .then(function (response) {
      return response
    })
    .catch(function (error) {
      return error
    });
  },
  getSelf(){
    return axios({
      baseURL: 'http://localhost:5000/api/',
      headers: {'Authorization': 'Bearer ' + sessionStorage.getItem('token')},
      url: '/RoadInfo/Find',
      method: 'get', // post、put、delete、
    })
    .then(function (response) {
      return response
    })
    .catch(function (error) {
      return error
    });
  },
  deleteRoad(id){
    return axios({
      baseURL: 'http://localhost:5000/api/',
      headers: {'Authorization': 'Bearer ' + sessionStorage.getItem('token')},
      url: '/RoadInfo/Delete',
      method: 'delete', // post、put、delete、
      params:{
        id: id
      }
    })
    .then(function (response) {
      return response
    })
    .catch(function (error) {
      return error
    });
  },
  editRoad(id,location,state){
    return axios({
      baseURL: 'http://localhost:5000/api/',
      headers: {'Authorization': 'Bearer ' + sessionStorage.getItem('token')},
      url: '/RoadInfo/Edit',
      method: 'put', // post、put、delete、
      params:{
        id: id,
        location:location,
        state:state
      }
    })
    .then(function (response) {
      return response
    })
    .catch(function (error) {
      return error
    });
  },
  createRoad(location,state){
    return axios({
      baseURL: 'http://localhost:5000/api/',
      headers: {'Authorization': 'Bearer ' + sessionStorage.getItem('token')},
      url: '/RoadInfo/Create',
      method: 'post', // post、put、delete、
      params:{
        location: location,
        state,state
      }
    })
    .then(function (response) {
      return response
    })
    .catch(function (error) {
      return error
    });
  }
}

const NoticeInfo = {
  get(){
    return axios({
      baseURL: 'http://localhost:5000/api/',
      headers: {'Authorization': 'Bearer ' + sessionStorage.getItem('token')},
    url: '/NoticeInfo/NoticeInfoPage',
    method: 'get', 
    params: {
      page : 1,
      size: 10
    },
    })
    .then(function (response) {
      return response
    })
    .catch(function (error) {
      return error
    });
  },
  deleteNotice(id){
    return axios({
      baseURL: 'http://localhost:5000/api/',
      headers: {'Authorization': 'Bearer ' + sessionStorage.getItem('token')},
    url: '/NoticeInfo/delete',
    method: 'delete', 
    params: {
      id: id
    },
    })
    .then(function (response) {
      return response
    })
    .catch(function (error) {
      return error
    });
  },
  createNotice(formData){
    return axios({
      baseURL: 'http://localhost:5000/api/',
      url:'/NoticeInfo/Create',
      method:'post',
      data:formData,
      headers:{
        'Content-Type':'application/x-www-form-urlencoded',
        'Authorization': 'Bearer ' + sessionStorage.getItem('token')
      }
    }).then(function(res){
      console.log(res);
    });
  },
  editNotice(formData){
    return axios({
      baseURL: 'http://localhost:5000/api/',
      url: '/NoticeInfo/Edit',
      method: 'put', // post、put、delete、
      headers:{
        'Content-Type':'application/x-www-form-urlencoded',
        'Authorization': 'Bearer ' + sessionStorage.getItem('token')
      },
      data:formData
    })
    .then(function (response) {
      return response
    })
    .catch(function (error) {
      return error
    });
  }
}

export default {WorkInfo,RoadInfo,NoticeInfo}