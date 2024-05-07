import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstname, lastname, filename) {
  const userPromise = signUpUser(firstname, lastname);
  const photoPromise = uploadPhoto(filename);
  return Promise.allSettled([userPromise, photoPromise])
    .then((res) => res);
}
