import axios from 'axios';
import jwt_decode from 'jwt-decode';

export const createOrGetUser = async (response) => {
  try {
    const decoded = await jwt_decode(response.credential);

    return decoded;
  } catch (error) {
    console.log(error);

    return undefined;
  }
};
