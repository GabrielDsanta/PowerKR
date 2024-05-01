import "moment/locale/pt-br";
import moment from "moment";

export function formatDate(date: Date) {
  const dataMoment = moment(date);
  const formatedDateToString = dataMoment.format("D MMM");
  return formatedDateToString;
}
