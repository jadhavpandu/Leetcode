const validator = require("validator");



const  validate = (data)=>{
     const mandatoryField = ['firstName','emailId','password'];
     const isAllowed =  mandatoryField.every((k)=>Object.keys(data).includes(k));
}
module.exports = validate;