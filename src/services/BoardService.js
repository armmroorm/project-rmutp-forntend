import { mainAPIOptions } from "../constant/config";
import { BaseService } from "./BaseService";

export class BoardService extends BaseService {
    fetchSignin = ({email, password}) => {
        return this.requester.get('/Signin',{email, password}, mainAPIOptions())
    }

    fetchSignup = ({ email, password, gender, firstname, lastname }) => {
        return this.requester.post('/Signup', { email, password, gender, firstname, lastname }, mainAPIOptions())
    }

    fetchSignout = () => {
        return this.requester.post('/Signout',  mainAPIOptions())
    }
}