export const Utilities = Object.freeze({

	// Note: This does not adhere to COS, since we use the console as hard coded interface.
	printSum: (a: number, b: number): void => {
		console.log(a +b);
	},

	objectToString: <T>(obj: T): string => {
		let s: string = "";

		for (const key in obj) {
			if (Object.prototype.hasOwnProperty.call(obj, key)) {
				s += `${key}: ${obj[key as keyof T]}\n`;
			}
		}

		return s;
	},

	objectToStringAll: <T>(obj: T[], header: string): string => {
		let s: string = `----- ${header} -----\n`;

		for (const inst of obj) {
			s += `${Utilities.objectToString(inst)}\n`;
		}

		s+= "----------";

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

	getHighestValue: <T>(obj: T[], keyToCheck: keyof T): number => Math.max(...obj.map(inst => inst[keyToCheck] as number)),
	getLowestValue: <T>(obj: T[], keyToCheck: keyof T): number => Math.min(...obj.map(inst => inst[keyToCheck] as number)),
	getHighestValueLength: <T>(obj: T[], keyArrayToCheck: keyof T): number => Math.max(...obj.map(inst => (inst[keyArrayToCheck] as []).length)),
	getLowestValueLength: <T>(obj: T[], keyArrayToCheck: keyof T): number => Math.min(...obj.map(inst => (inst[keyArrayToCheck] as []).length)),

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

	getObjectsPerValue: <T>(obj: T[], keyToCheck: keyof T) => {
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
		return valueCount;
	},

	mapToString: (map: Map<unknown, number>) => {
		let str = "";

		// [...] Make array of keyvalue pairs, typ: [['foo', 1],['bar', 23]]
		// Sort based on values a[1] = 1, b[1] = 23 | sort is based on the returned values absolution - 0 +
		// Flipped for decending order
		// Do a foreach and deconstruct the pairs ['foo', 1] | key = 'foo' , value = 1
		[...map.entries()].sort((a, b) => b[1] - a[1]).forEach(([key, value]) => {
  			str += `${key} : ${value}\n`;
		});

		return str;
	},
	
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