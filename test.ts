/**
 * This function is meant to retrieve a list of all users from a server (assume request.get is an actual function)
 * After retrieving the users, it retrieves the picture for each user (in a non-blocking manner) and patches the
 * original user object with the newly retrieved photo URL.
 */
async function getUsers() {
return await request.get('/users').then(users =>{ 
    let newUsers = users.map((user)=> getUserPhoto(user.id).then(photoData => user.photo = photoData.url))
    });

    /*
        for (var i = 0; i < users.length; i++) {
            //var user = users[i];

            // MY CHANGES EXPLAINED BELOW
            
            //in other to successfully patch the original user objects with photo data,
            //there is no need to declare a seperate variable 'user' for each iteration
            //of the for-loop, as this results in no effective change to the original user
            //objects. to fix the bug , I delected the variable declaration line and change
            //all occurences of 'user.id' to 'users[i].id'


            getUserPhoto(users[i].id).then(photoData => users[i].photo = photoData.url);
        }

        return users;
        */
}
async function getUserPhoto(userId) {
      return await request.get(`/users/${String(userId)}/photo`);
}

/**
 * If you don't know TS and would rather use pure JS, you can delete this section and remove all type annotations above
 
declare namespace request {
    function get<T>(string): Promise<T>
}

declare type User = {
    id: string;
    photo?: string;
}

declare type UserPhoto = {
    url: string;
}*/