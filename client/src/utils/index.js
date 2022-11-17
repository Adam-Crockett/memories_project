import axios from 'axios';
import jwt_decode from 'jwt-decode';

export const createOrGetUser = async (response) => {
  const decode = jwt_decode(response.credential);

  console.log(decode);
};
