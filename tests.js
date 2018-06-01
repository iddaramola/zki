
import {getUsers, getUserPhoto} from "./test.ts"



// TEST using JEST
test(' test getUserPhoto', async () => {
    expect.assertions(1);
    const userphoto =  await getUserPhoto('test-user-id-1223378484hutugjgltiruu1244356');
    expect(userphoto).toBeDefined();
})

test(' test getUsers', async () => {
    expect.assertions(1);
    const users =  await getUsers();
    expect(users).toBeDefined();
})


