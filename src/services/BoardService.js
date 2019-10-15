import { mainAPIOptions, mainAPIHeaderOptions } from "../constant/config";
import { BaseService } from "./BaseService";

export class BoardService extends BaseService {
    fetchSignin = ({ email, password }) => {
        return this.requester.post('/Signin', { email, password }, mainAPIOptions())
    }

    fetchSignup = ({ email, password, genderID, titleID, firstname, lastname }) => {
        return this.requester.post('/Signup', { email, password, genderID, titleID, firstname, lastname }, mainAPIOptions())
    }

    fetchSignout = ({ token }) => {
        return this.requester.post('/Signout', { token }, mainAPIHeaderOptions())
    }

    fetchProfile = () => {
        return this.requester.get('/Profile', mainAPIHeaderOptions())
    }

    fetchUpdateProfile = ({ Userdata, Password }) => {
        return this.requester.post('/Profile/EditProfile', { Userdata, Password }, mainAPIHeaderOptions())
    }
}