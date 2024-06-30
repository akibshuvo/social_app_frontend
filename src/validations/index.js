import * as Yup from 'yup';

export const signUp = Yup.object({
    fName: Yup.string().min(3).max(25).required("Please Enter Your Name"),
    lName: Yup.string().min(3).max(25).required("Please Enter Your Last Name"),
    username: Yup.string().min(5).max(15).required("Please Enter Your userName"),
    email: Yup.string().email().required("Enter Your Email Address"),
    password: Yup.string().min(6).max(30).required("Password Required"),
    gender: Yup.string().required("Please Select Gender"),
    bDay: Yup.string().required("Please Select Your day"),
    bMonth: Yup.string().required("Please Select Your Month"),
    bYear: Yup.string().required("Please Select Your Years"),
})

export const signIn = Yup.object({
    email: Yup.string().email().required("Enter Your Email Address"),
    password: Yup.string().min(6).max(30).required("Password Required"),
   
})