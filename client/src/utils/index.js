import jwt_decode from 'jwt-decode';

// Decode Google user information when a user signs in with OAuth
export const createOrGetUser = async (response) => {
  try {
    const decoded = await jwt_decode(response.credential);

    return decoded;
  } catch (error) {
    console.log(error);

    return undefined;
  }
};
