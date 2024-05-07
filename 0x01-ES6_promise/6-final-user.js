import signUpUser from './4-user-promise'
import uploadPhoto from './5-photo-reject'

export default function handleProfileSignup(firstname, lastname, filename) {
    const userPromise = signUpUser(firstname, lastname).then(
        (user) => ({ status: 'fulfilled', value: user }),
        (error) => ({ status: 'rejected', value: error })
    );
    const photoPromise = uploadPhoto(filename).then(
        (photo) => ({ status: 'fulfilled', value: photo}),
        (error) => ({ status: 'rejected', value: error})
    );
    return Promise.all([userPromise, photoPromise]);
}
