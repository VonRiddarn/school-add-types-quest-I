import User from "./user";
import UserKey from "./UserKey";

const getUserAverage = (allUsers: User[], key: UserKey) => {
	let sum = 0;

	allUsers.forEach((u) => {
		switch (key) {
			case UserKey.Age:
				sum += u.age;
				break;
			case UserKey.Hobby:
				sum += u.hobby.length;
				break;
		}
	});

	return sum / allUsers.length;
};

export default getUserAverage;