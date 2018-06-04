/**
 * This function is meant to retrieve a list of all users from a server (assume request.get is an actual function)
 * After retrieving the users, it retrieves the picture for each user (in a non-blocking manner) and patches the
 * original user object with the newly retrieved photo URL.
 */
 export async function getUsers() {

          const users = await request.get('/users');
           // this is a non-blocking loop
           let newUsers = users.map(async (user) => {
                                 const userPhoto =  await getUserPhoto(user.id)
                                 user.photo = userPhoto.url;
                                 return user;
                                }
                        )
            return newUsers;

}
 export async function getUserPhoto(userId) {
      return await request.get(`/users/${String(userId)}/photo`);
}


