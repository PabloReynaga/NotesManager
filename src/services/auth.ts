import Cookies from 'js-cookie';
import { ref } from 'vue';
import router from '@/router';

const authState: boolean = ref(false);

// Save JWT to cookie
const saveToken = (token: string) => {
  Cookies.set('authToken', token, { secure: true, sameSite: 'Strict' }); // Optional: Add options like secure, sameSite
};

// Get JWT from cookie
const getToken = (tokenKey: string) => {
  return Cookies.get(tokenKey);
};

// Remove JWT from cookie
const removeToken = (tokenKey: string) => {
  const resp = Cookies.get(tokenKey);
  if (resp) {
    Cookies.remove(tokenKey);
    localStorage.removeItem('userId');
    router.go();
  }
};

const initializeAuthState = () => {
  const token = getToken('authToken');
  console.log(token);
  if (token) {
    const isTokenValid = checkTokenValidity(token);
    if (isTokenValid) {
      authState.value = true;
      console.log('Token valid');
    } else {
      removeToken('authToken');
      console.log('Token invalid'); // If expired, remove token
    }
  } else {
    authState.value = false;
    localStorage.removeItem('userId');
    console.log('Token not found.');
  }
};

function checkTokenValidity(token: string): boolean {
  try {
    const payload = JSON.parse(atob(token.split('.')[1])); // Decode the JWT payload
    const exp = payload.exp * 1000; // Expiration time in milliseconds
    return exp > Date.now(); // Check if the token is still valid
  } catch (error) {
    return false;
  }
}

export default {
  saveToken,
  getToken,
  removeToken,
  initializeAuthState,
  authState
};
