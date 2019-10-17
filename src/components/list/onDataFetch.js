// @ts-check
import axios from 'axios';

/** @param {Object} props */
export default function onDataFetch(props) {
  //"code":"USD","symbol":"&#36;","rate":"8,158.1283","description":"United States Dollar",
  //"rate_float":8158.1283
  props.setSpinner(true);
  axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
  .then((res) => {
    //console.log(res);
    /** @type {any[]} */
    const data = [];
    //res.data.bpi.forEach((entry) => {data.push(entry)});
    data.push(res.data.bpi['EUR']);
    data.push(res.data.bpi['GBP']);
    data.push(res.data.bpi['USD']);
    props.setList(data);
    /** @type {Date} */
    const date = new Date();
    props.setUpdated(
      date.getFullYear() + '/' + 
      addZeroes((date.getMonth() + 1)) + '/' + 
      addZeroes(date.getDate()) + ' ' + 
      addZeroes(date.getHours()) + ':' + 
      addZeroes(date.getMinutes()) + ':' + 
      addZeroes(date.getSeconds())
    );//res.data.time.updated
    props.setSpinner(false);
  })
  .catch(/** @param {Error} error */(error) => {
    console.error('Error: ' + error.message);
    alert('Failure to load from API.');
  });
}

/** @param {number} numericValue */
function addZeroes (numericValue) {
  /** @type {string} */
  let stringValue = numericValue.toString();
  if (numericValue < 10) stringValue =+ '0' + stringValue;
  return stringValue;
}