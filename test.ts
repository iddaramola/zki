/**
 * This function is meant to retrieve a list of all users from a server (assume request.get is an actual function)
 * After retrieving the users, it retrieves the picture for each user (in a non-blocking manner) and patches the
 * original user object with the newly retrieved photo URL.
 */
function getUsers(): Promise<User[]> {
    return request.get<User[]>('/users').then(users => {
        for (var i = 0; i < users.length; i++) {
            var user = users[i];
            getUserPhoto(user.id).then(photoData => user.photo = photoData.url);
        }

        return users;
    });
}

/**
 * This function retrieves a picture for a given user
 * @param userId User to retrieve photo for
 */
function getUserPhoto(userId: string): Promise<UserPhoto> {
    return request.get(`/users/${String(userId)}/photo`);
}

/**
 * If you don't know TS and would rather use pure JS, you can delete this section and remove all type annotations above
 */
declare namespace request {
    function get<T>(string): Promise<T>
}

declare type User = {
    id: string;
    photo?: string;
}

declare type UserPhoto = {
    url: string;
}