export type ImageVariant = {
	color: string;
	images: string[];
};

export type SingleItemProps = {
	id: number;
	title: string;
	description: string;
	price: string;
	discount?: string; // ← optional, in case not all have it
	gender: string;
	sizes?: string[];
	images: ImageVariant[];
};
export type DataProps = {
	shopData: SingleItemProps[];
};
