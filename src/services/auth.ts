import Cookies from 'js-cookie';
import { ref } from 'vue';

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
  Cookies.remove(tokenKey);
};

const initializeAuthState = () => {
  const token = getToken('authToken');
  console.log(token);
  if (token) {
    // Optionally: decode the token and check if it has expired
    const isTokenValid = checkTokenValidity(token);
    if (isTokenValid) {
      authState.value = true;
      console.log('Token valid');
    } else {
      removeToken();
      console.log('Token invalid'); // If expired, remove token
    }
  } else {
    authState.value = false;
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
