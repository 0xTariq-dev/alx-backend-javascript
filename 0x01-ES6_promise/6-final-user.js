import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);
  return Promise.allSettled([userPromise, photoPromise])
    .then((res) => (
      res.map((p) => ({
        status: p.status,
        value: p.status === 'fulfilled' ? p.value : String(p.reason),
      }))
    ));
}
