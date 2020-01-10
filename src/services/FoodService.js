import { mainAPIHeaderOptions } from "../constant/config";
import { BaseService } from "./BaseService";

export class FoodService extends BaseService {
  fetchGetCategoryMenu = ({ categoryId }) => {
    return this.requester.post('/GetCategoryMenu', { categoryId }, mainAPIHeaderOptions())
  }
  fetchGetApiIngredients = () => {
    return this.requester.get('/CMS/GetIngredients', mainAPIHeaderOptions())
  }
  fetchPostApiMCS = ({model}) => {
    return this.requester.post('/CMS/CreateMenu',{model}, mainAPIHeaderOptions())
  }
}