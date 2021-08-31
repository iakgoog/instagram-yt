import { firebase } from '../lib/firebase';

export async function doesUsernameExits(username) {
  const result = await firebase
    .firestore()
    .collection('users')
    .where('username', '==', username)
    .get();

  return result.docs.map((user) => user.date().length > 0);
}
