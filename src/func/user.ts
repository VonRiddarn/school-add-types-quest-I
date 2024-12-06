type User = {
	name: string;
	hobby: string[];
	age: number;
};

// TODO: Replace this with a generic function later
export const getAverageUserHobbies = (u: User[]): number => {
	let sum = 0;

	for (const user of u) {
		sum += user.hobby.length;
	}

	return sum / u.length;
};

export default User;