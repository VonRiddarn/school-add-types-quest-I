export type Monster = {
	name: string;
	age: number;
	tentacles: number;
	eyes: number;
	hasWings: boolean;
};

export const monsterToStringAll = (m: Monster[]): string => {
	let s: string = "";

	m.forEach((monster) => {
		s += `${monsterToString(monster)}\n`;
	});

	return s;
}

export const monsterToString = (m: Monster): string => {
	let s: string = "----------\n";

	for (const key in m) 
	{
        if (Object.prototype.hasOwnProperty.call(m, key)) {
            s += `${key}: ${m[key as keyof Monster]}\n`;
        }
	}

	s+= "----------";

	return s;
};

export const averageMonsterAge = (m) => {
	return 2;
};

export const averageNumberOfTentacles = (m) => {
	return 2;
};

export const numberOfMonstersWithWings = (m) => {
	return 0;
};

export const getAllNoWingedMonster = (m) => {
	return [];
};
