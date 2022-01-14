import apiUrl from "~/configs/apiUrl";
import constant from "~/configs/constant";
import eventBus from "~/configs/eventBus";

export default ({ app }, inject) => {
  inject('apiUrl', apiUrl);
  inject('constant', constant);
  inject('eventBus', eventBus);
}
