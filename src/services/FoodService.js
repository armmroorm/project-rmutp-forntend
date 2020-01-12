import { mainAPIHeaderOptions, mainAPIHeaderUpload } from "../constant/config";
import { BaseService } from "./BaseService";

export class FoodService extends BaseService {
  fetchGetCategoryMenu = ({ categoryId }) => {
    return this.requester.post('/GetCategoryMenu', { categoryId }, mainAPIHeaderOptions())
  }
  fetchGetApiIngredients = () => {
    return this.requester.get('/CMS/GetIngredients', mainAPIHeaderOptions())
  }
  fetchPostApiCMS = ({model}) => {
    return this.requester.post('/CMS/CreateMenu',{model}, mainAPIHeaderOptions())
  }
  fetchPostApiCMSUpdate = (formData) => {
    return this.requester.post('/CMS/Upload', formData, mainAPIHeaderUpload())
  }
}