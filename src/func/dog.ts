type Dog = {
	name: string;
	color: string;
};


// When creating a set duplicate values are removed
// d.map (dog) => dog.color -- Creates an array of colors
// Take less space than reduce as we wont have to compare exisitng values and store the unique ones manually
export const numberOfColors = (d: Dog[]) => new Set(d.map((dog: Dog) => dog.color)).size;

export const commonColor = (d:Dog[]) => {
	const colorCount = new Map<string, number>();

	// Aha!!!
	// Typescript: 	d.foreach((dog: Dog) => { ... });
	// c#: 			foreach(Dog dog in d) {}
	d.forEach((dog: Dog) => {

		// If the color exists in the map, get the count - else get 0
		const count = colorCount.get(dog.color) || 0;
		colorCount.set(dog.color, count + 1); // Set the color to c + 1 (or 0 + 1 and add it)
	});

	// Tricky little bugger right here.
	// [...colorCount.entries] gets an array of arrays that are key value pairs: [key, value]
	// A = Prevoius value (accumalated value) OBSERVE: Ths value can increase as it is saved
	// B = The current vale - latest value
	return [...colorCount.entries()].reduce((a, b) => (a[1] > b[1] ? a : b))[0];
}

export const getDogsDummyArray = (): Dog[] => [
		{ name: "Nisse", color: "brown" },
		{ name: "Fiffi", color: "white" },
		{ name: "Fluffe", color: "black" },
		{ name: "Hoppe", color: "beige" },
		{ name: "Pluto", color: "gray" },
		{ name: "Winter", color: "gray" },
		{ name: "Rolf", color: "brown" },
		{ name: "Benny", color: "brown" },
		{ name: "Krister", color: "brown" },
	];