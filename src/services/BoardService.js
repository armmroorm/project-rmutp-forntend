import { mainAPIOptions, mainAPIHeaderOptions, mainAPIHeaderUpload } from "../constant/config";
import { BaseService } from "./BaseService";

export class BoardService extends BaseService {
    fetchSignin = ({ email, password }) => {
        return this.requester.post('/SignIn', { email, password }, mainAPIOptions())
    }
    fetchForgetPassword = ({ email }) => {
        return this.requester.post('/ForgetPassword/SendOTP', { email }, mainAPIOptions())
    }
    
    fetchResetPassword = ({ email, newPassword, OTP }) => {
        return this.requester.post('/ForgetPassword/ResetPassword', { email, newPassword, OTP }, mainAPIOptions())
    }

    fetchSignup = ({ email, password, genderID, titleID, firstname, lastname }) => {
        return this.requester.post('/SignUp', { email, password, genderID, titleID, firstname, lastname }, mainAPIOptions())
    }

    fetchSignout = ({ token }) => {
        return this.requester.post('/SignOut', { token }, mainAPIHeaderOptions())
    }

    fetchProfile = () => {
        return this.requester.get('/Profile', mainAPIHeaderOptions())
    }

    fetchUpdateProfile = ({ Userdata, changePassword }) => {
        return this.requester.post('/Profile/EditProfile', { Userdata, changePassword }, mainAPIHeaderOptions())
    }

    fetchUpdateMenu = (formData) => {
        return this.requester.post('/CMS/Upload',formData, mainAPIHeaderUpload())
    }

    fetchUploadAvatar = (formData) => {
        return this.requester.post('/Profile/UploadAvatar',formData, mainAPIHeaderUpload())
    }
}