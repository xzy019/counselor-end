import axios from 'axios'
function Login(username,userpwd,type){
  return axios({
    url: 'http://localhost:6060/api/Authoize/Login',
    method: 'post', // post、put、delete
    params: {
      username: username,
      userpwd: userpwd,
      type: type
    },
  })
  .then((response)=>{
    sessionStorage.setItem('token',response.data.data);
    return response
  })
  .catch((error)=>{
    return error
  });
}
export default Login