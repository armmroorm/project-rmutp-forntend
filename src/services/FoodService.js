import { mainAPIHeaderOptions, mainAPIHeaderUpload } from "../constant/config";
import { BaseService } from "./BaseService";

export class FoodService extends BaseService {  
  fetchGetCategoryMenu = ({ categoryId, userId, adminId }) => {
    return this.requester.post('/GetCategoryMenu', { categoryId , userId, adminId }, mainAPIHeaderOptions())
  }
  fetchGetDetailFood = ({ id , categoryId }) => {
    return this.requester.post('/GetDetailFood', { id, categoryId }, mainAPIHeaderOptions())
  }
  fetchSetPoint = ({ id , userId, point }) => {
    return this.requester.post('/GetPointMenu', { id, userId, point }, mainAPIHeaderOptions())
  }
  fetchGetApiIngredients = () => {
    return this.requester.get('/CMS/GetIngredients', mainAPIHeaderOptions())
  }
  fetchPostApiCMS = ({id,menuId,ingredients,menuName,methods,name,point,userId,adminId,categoryId,databases}) => {
    return this.requester.post('/CMS/CreateMenu',{id,menuId,ingredients,menuName,methods,name,point,userId,adminId,categoryId,databases}, mainAPIHeaderOptions())
  }
  fetchPostApiCMSUpdate = (formData) => {
    return this.requester.post('/CMS/Upload', formData, mainAPIHeaderUpload())
  }
}