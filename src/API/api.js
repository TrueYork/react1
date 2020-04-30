import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "86c295e4-1750-4b9b-ba10-ce0fc7df952b"
    }
});


export const usersAPI = {
    getUserList (page = 1, pageSize = 10) {
        return instance.get(`users?page=${page}&count=${pageSize}`).then(response => response.data)
    },

    unfollowUser (userId) {
        return instance.delete(`follow/${userId}`).then(response => response.data)
    },

    followUser (userId) {
        return instance.post(`follow/${userId}`).then(response => response.data)
    }
};

export const authAPI = {
  getAuthData () {
      return instance.get(`auth/me`).then(response => response.data)
  }
};

export const profileAPI = {
    getProfileByUserId (userId) {
        return instance.get(`profile/${userId}`).then(response => response.data)
    },

    getStatus (userId) {
        return instance.get(`profile/status/${userId}`)
    },

    setStatus (status) {
        return instance.put(`profile/status`, {status: status})
    }
};