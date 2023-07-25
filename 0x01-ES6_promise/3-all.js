/* eslint-disable camelcase */
import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const photo = uploadPhoto();
  const user = createUser();
  return Promise.all([photo, user])
    .then((results) => {
      const new_res = results[0];
      const { body } = new_res;
      const res = results[1];
      const first_name = res.firstName;
      const last_name = res.lastName;
      console.log(`${body} ${first_name} ${last_name}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
