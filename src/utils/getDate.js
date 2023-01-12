import moment from 'moment';
import 'moment/dist/locale/pt-br';
moment.locale('pt-br');

export default (date = undefined) => {
    if (!date) {
        let day = moment().format('ddd');
        day = day.charAt(0).toUpperCase() + day.slice(1);

        let mouth = moment().format('MMM');
        mouth = mouth.charAt(0).toUpperCase() + mouth.slice(1);

        return moment().format(`[${day},] DD [${mouth}]`);
    } else {
        let mouth = moment(date.slice(5, 7)).format('MMM');
        mouth = mouth.charAt(0).toUpperCase() + mouth.slice(1);

        return `${date.slice(8, 10)} ${mouth} ${date.slice(2, 4)}`;
    }
}