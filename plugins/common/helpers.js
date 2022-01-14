import commonHelpers from "~/helpers/commonHelpers";
import jwtAuthHelper from "~/helpers/jwtAuthHelper";

export default ({ app }, inject) => {
  inject('commonHelpers', commonHelpers);
  inject('jwtAuthHelper', jwtAuthHelper);
}
