import * as Yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const sendEmailSchema = Yup.object({
	user_name: Yup.string().min(2).max(25).required("Please enter your name"),
	user_email: Yup.string().email().required("Please Enter Your email"),
	user_number: Yup.string().matches(phoneRegExp, 'Phone number is not valid').min(11).max(11).required("Please Enter Your number"),
	message: Yup.string().min(10).max(200).required('Please Enter your message')
})

export default sendEmailSchema; 