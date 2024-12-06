export const Utilities = Object.freeze({

	// Note: This does not adhere to COS, since we use the console as hard coded interface.
	printSum: (a: number, b: number): void => {
		console.log(a +b);
	},

	objectToString: <T>(obj: T): string => {
		let s: string = "----------\n";

		for (const key in obj) {
			if (Object.prototype.hasOwnProperty.call(obj, key)) {
				s += `${key}: ${obj[key as keyof T]}\n`;
			}
		}

		s += "----------";

		return s;
	},

	objectToStringAll: <T>(obj: T[]): string => {
		let s: string = "";

		for (const inst of obj) {
			s += `${Utilities.objectToString(inst)}\n`;
		}

		return s;
	},

    filterWithMargin: <T>(array: T[], key: keyof T, margin = 0): T[] => array.filter(inst => {

		const value = inst[key];
		
		if (typeof value !== 'number') {
			console.error("The key provided does not contain a number!");
			return false;
		}

		return value >= margin;
	}),

	filterWithBoolean: <T>(array: T[], key: keyof T, invert = false): T[] => array.filter(inst => {
		const value = inst[key];

		if (typeof value != 'boolean') {
			console.error("The key provided does not contain a boolean!");
			return invert ? true : false;
		}

		return invert ? !(value as boolean) : value as boolean;
	}),

	getAverageFromArray: <T>(obj: T[], keyArrayToAverage: keyof T):number => {
		let sum = 0;

		for (const inst of obj) {
			const currentValue = inst[keyArrayToAverage];

			if (!Array.isArray(currentValue)) {
				console.error("The key provided is not an array!");
				return 0;
			}

			sum += currentValue.length;
		}

		return sum / obj.length;
	},

	getAverage: <T>(obj: T[], keyToAverage: keyof T):number => {
		let sum = 0;

		for (const inst of obj) {
			const currentValue = inst[keyToAverage];

			if (typeof currentValue !== "number") {
				console.error("The key provided is not a number!");
				return 0;
			}

			sum += currentValue;
		}

		return sum / obj.length;
	},
	// When creating a set duplicate values are removed
	// Map(inst => inst[keyToCheck]) -- Creates an array of the values inside all the keys
	// [... *set*] -- Creates an array from the set
	getUniqueValues: <T>(obj: T[], keyToCheck: keyof T) => [...new Set(obj.map(inst => inst[keyToCheck]))],

	getMostCommonValue: <T>(obj: T[], keyToCheck: keyof T) => {
		const valueCount = new Map<unknown, number>();

		obj.forEach(inst => {
			
			// If the key exists in the map, get the count - else get 0
			const count = valueCount.get(inst[keyToCheck]) || 0;
			valueCount.set(inst[keyToCheck], count + 1);
		});

		// Tricky little bugger right here.
		// [...colorCount.entries] gets an array of arrays that are key value pairs: [key, value]
		// A = Prevoius value (accumalated value) OBSERVE: Ths value can increase as it is saved
		// B = The current vale - latest value
		return [...valueCount.entries()].reduce((a, b) => (a[1] > b[1] ? a : b))[0];
	},
});