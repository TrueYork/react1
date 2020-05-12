import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "86c295e4-1750-4b9b-ba10-ce0fc7df952b"
    }
});


export const usersAPI = {
    getUserList(page = 1, pageSize = 10) {
        return instance.get(`users?page=${page}&count=${pageSize}`)
    },

    unfollowUser(userId) {
        return instance.delete(`follow/${userId}`)
    },

    followUser(userId) {
        return instance.post(`follow/${userId}`)
    }
};

export const authAPI = {
    getAuthData() {
        return instance.get(`auth/me`)
    },

    login(email, password, rememberMe = false, captcha) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
    },

    logout() {
        return instance.delete(`auth/login`)
    },
};

export const profileAPI = {
    getProfileByUserId(userId) {
        return instance.get(`profile/${userId}`)
    },

    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },

    setStatus(status) {
        return instance.put(`profile/status`, {status: status})
    },

    savePhoto(file) {
        let formData = new FormData();
        formData.append("image", file);
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },

    saveProfile(profile) {
        return instance.put(`profile`, profile)
    },
};

export const securityAPI = {
    getCaptchaURL() {
        return instance.get(`security/get-captcha-url`)
    }
};