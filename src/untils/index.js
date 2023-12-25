import moment from 'moment';
function formatPrice(value) {
    const formattedNumber = value.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD' // Định dạng thành tiền USD
    });
    return formattedNumber
}
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function formathDate(isoDateString) {
    const formattedDate = moment(isoDateString).format('DD MMM YYYY');
    return formattedDate;
}
export { formatPrice, validateEmail,formathDate }