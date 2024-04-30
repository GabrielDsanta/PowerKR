import "moment/locale/pt-br"
import moment from "moment"

export function formatDate(date: Date){
  const dataMoment = moment(date);
  dataMoment.locale('pt-br');
  const dataFormatada = dataMoment.format('D [de] MMMM [de] YYYY');
  return dataFormatada;
}