export const Utilities = Object.freeze({

	objectToStringAll: <T>(obj: T[]): string => {
		let s: string = "";

		for (const inst of obj) {
			s += `${Utilities.objectToString(inst)}\n`;
		}

		return s;
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

});