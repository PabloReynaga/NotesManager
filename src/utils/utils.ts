import type { View } from '@/types/View';

const generateUniqueId = () => {
  return Date.now().toString(36) + Math.random().toString(36);
};


const SignUpView:View = {
    title: "Sign Up",
    firstButtonValue: "Log In",
    secondButtonValue: "Enter",
}

const LogInView:View = {
  title: "Log In",
  firstButtonValue: "Sign Up",
  secondButtonValue: "Enter",
}


export default { generateUniqueId , LogInView, SignUpView };