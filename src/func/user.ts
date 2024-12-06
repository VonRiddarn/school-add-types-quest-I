type User = {
	name: string;
	hobbies: string[];
	age: number;
};

export const getUserDummyArray = (): User[] => [
	{
		name: "Stina",
		hobbies: ["läsa böcker"],
		age: 67,
	},
	{
		name: "Lisa",
		hobbies: ["åka skidor"],
		age: 26,
	},
	{
		name: "Mio",
		hobbies: ["spela rollspel", "spela brädspel"],
		age: 22,
	},
	{
		name: "Olle",
		hobbies: ["sportklättring", "vandra", "sticka", "virka"],
		age: 38,
	},
	{
		name: "Leo",
		hobbies: ["matlagning", "bakning"],
		age: 17,
	},
];

export default User;