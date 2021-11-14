import  axios from './axios';

let token = '';
export let signin = ({username,password})=>{
    return axios.post('api-token-auth/',{username,password})
    .then((response)=>{
        token = response.data.token;
        axios.defaults.headers.common['Authorization'] = 'Token ' + token;
        return 'success';
    })
    .catch((error)=>{
        return 'something wrong';
    });

}

export let signup = ({username,password,confirm_password})=>{
    return axios.post('api/users/',{username,password,confirm_password})
    .then(response=>{
        token = response.data.token;
        axios.defaults.headers.common['Authorization'] = 'Token ' + token;
        return 'success';
    }).catch((error)=>{
        token = '';
        axios.defaults.headers.common['Authorization'] = null;
        return 'something wrong';
    });
}

export let signout = ()=>{
    return axios.post('api/users/logout/').then((response)=>{
        token = '';
        axios.defaults.headers.common['Authorization'] = null;
        return 'success';
    }).catch((error)=>{
        token = '';
        axios.defaults.headers.common['Authorization'] = null;
        return 'something wrong';
    });
}

export let is_auth = ()=>{
    return token !== '';
}