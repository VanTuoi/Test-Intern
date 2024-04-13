// Third-party
import { useState } from "react";
import { useRouter } from 'next/navigation'
// In the Project

let emailTest = 'tranvantuoi@gmail.com'
let passwordTest = '123456'

const useLogin = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [errEmail, setErrorEmail] = useState(null)
    const [errorPassWord, setErrorPassWord] = useState(null);

    const router = useRouter()

    const isValidEmail = (email) => {
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return regex.test(email);
    };

    const isValidPassword = (password) => {
        const regex = /^.*/;
        return regex.test(password);
    };

    const checkEmail = (email) => {
        setEmail(email)
        if (isValidEmail(email) === false || !email) {
            setErrorEmail('Email không hợp lệ')
            return false;
        } else {
            setErrorEmail(null)
            return true
        }
    }

    const checkPassword = (password) => {
        if (!password || isValidPassword(password) === false) {
            setErrorPassWord('Mật khẩu không được trống')
            return false;
        } else {
            setPassword(password)
            setErrorPassWord(null)
            return true
        }
    };

    const login = async () => {
        try {
            if (!checkEmail(email) || !checkPassword(password)) return;

            if (email !== emailTest) {
                setErrorEmail('Không tìm thấy email');
                return;
            }
            setErrorEmail(null);

            if (password !== passwordTest) {
                setErrorPassWord('Mật khẩu không đúng');
                return;
            }
            setErrorPassWord(null);

            sessionStorage.setItem('U_Name', 'Trần Văn Tươi');
            router.push('/');

        } catch (error) {
            console.log('error login', error);
        }
    };


    return {
        errEmail, errorPassWord,
        checkEmail, checkPassword,
        login,
    };
}

export default useLogin
