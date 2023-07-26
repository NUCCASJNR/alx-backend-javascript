import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  const signup = signUpUser(firstName, lastName);
  const upload = uploadPhoto(filename);
  const promises = [signup, upload];
  Promise.allSettled(promises)
    .then((results) => {
      results.forEach((result) => {
        if (result.status) {
          console.log({
            status: result.status,
            value: result.value,
          });
        }
      });
    });
}
