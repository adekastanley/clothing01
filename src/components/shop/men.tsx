import shopData from "../../../data/store-data";
import AllItemGrid from "./AllItemGrid";
import useFilterGender from "@/hooks/useFilterGender";
export default function MenPage() {
	// const maleData = shopData.filter((item) => item.gender === "male");
	const maleData = useFilterGender(shopData, "male");
	return (
		<div>
			<AllItemGrid shopData={maleData} />
		</div>
	);
}
