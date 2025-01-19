interface UserInfo {
    userid: string;
    name: string;
    birthdate: Date;
    age: number;
    organization: {
        name: string;
        position: string;
    }


}

const usersInfoArray: UserInfo[] = [
    {
        userid: '127e4567-e89b-12d3-a458-426614174000',
        name: 'John',
        birthdate: new Date('1982-02-17T21:00:00.000Z'),
        age: 40,
        organization: {
            name: 'Amazon',
            position: 'General manager'
        }
    },
    {
        userid: '127e4567-e89a-12f3-a458-327395154000',
        name: 'Anna',
        birthdate: new Date('1988-02-17T21:00:00.000Z'),
        age: 34,
        organization: {
            name: 'Amazon',
            position: 'Manager'
        }
    }
];

export { UserInfo, usersInfoArray };
