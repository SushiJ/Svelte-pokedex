export interface Pokeman {
	name: string;
	weight: number;
	sprites: {
		front_default: string;
	};
	height: number;
	types: Array<{
		slots: string;
		type: {
			name: string;
			url: string;
		};
	}>;
}

export interface Pokemon {
	count: number;
	next: string;
	previous: null;
	results: Array<{
		name: string;
		url: string;
	}>;
}
