
import { User, usersArray } from './users';
import { UserInfo, usersInfoArray } from './userInfo';

interface UserPosition {
    name: string;
    position?: string;
    age?: number;
    gender: string;
}

function getUsersJobPositions(usersArray: User[]): UserPosition[] {
    return usersArray.map(function (user) {

        const userInfo = usersInfoArray.find(function (usersInfo) {
            return usersInfo.userid === user.userid;
        });

        return {
            name: user.name,
            gender: user.gender,
            age: userInfo?.age,
            position: userInfo?.organization.position,
        }
    })
}


const usersPositions = getUsersJobPositions(usersArray);
console.log('userPositions', usersPositions);
