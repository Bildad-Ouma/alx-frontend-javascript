import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  try {
    const [userData, photoData] = await Promise.allSettled([userPromise, photoPromise]);

    return [
      { status: userData.status, value: userData.status === 'fulfilled' ? userData.value : userData.reason },
      { status: photoData.status, value: photoData.status === 'fulfilled' ? photoData.value : photoData.reason }
    ];
  } catch (error) {
    return [{ status: 'rejected', value: error }];
  }
}
