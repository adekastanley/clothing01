import { SingleItemProps } from "@/types/itemsTypes";

export default function useFilterGender(
	data: SingleItemProps[],
	gender: string
): SingleItemProps[] {
	const filteredGender = data.filter((item) => item.gender === gender);
	return filteredGender;
}
