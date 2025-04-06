import AllItemGrid from "./AllItemGrid";
import shopData from "../../../data/store-data";
import useFilterGender from "@/hooks/useFilterGender";

export default function WomenPage() {
	const femaleData = useFilterGender(shopData, "female");
	return (
		<>
			<AllItemGrid shopData={femaleData} />
		</>
	);
}
