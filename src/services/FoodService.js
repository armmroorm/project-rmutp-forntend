import { mainAPIHeaderOptions } from "../constant/config";
import { BaseService } from "./BaseService";

export class FoodService extends BaseService {
  fetchGetCategoryMenu = ({ categoryId }) => {
    return this.requester.post('/GetCategoryMenu', { categoryId }, mainAPIHeaderOptions())
  }
}