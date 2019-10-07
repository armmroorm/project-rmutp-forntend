import { mainAPIOptions, mainAPIHeaderOptions } from "../constant/config";
import { BaseService } from "./BaseService";

export class BoardService extends BaseService {
    fetchSignin = ({email, password}) => {
        return this.requester.post('/Signin',{email, password},  mainAPIOptions())
    }

    fetchSignup = ({ email, password, gender, titlename, firstname, lastname }) => {
        return this.requester.post('/Signup', { email, password, gender, titlename, firstname, lastname },  mainAPIHeaderOptions())
    }

    fetchSignout = () => {
        return this.requester.post('/Signout',  mainAPIOptions())
    }
}