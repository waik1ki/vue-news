import axios from 'axios';

const config =  {
  baseUrl: 'https://api.hnpwa.com/v0/',
}

async function fetchList(pageName) {
  try {
    return await axios.get(`${config.baseUrl}${pageName}/1.json`);
  } catch (error) {
    console.log(error)
  }
}

function fetchUserInfo(username) {
  return axios.get(`${config.baseUrl}user/${username}.json`);
}

function fetchAskData(id) {
  return axios.get(`${config.baseUrl}item/${id}.json`);
}


export { fetchList, fetchUserInfo, fetchAskData }