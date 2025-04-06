"use client";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import ShoppingCard from "./shopping-card";
import useColorSelector from "@/hooks/useColorSelector";
//@ts-ignore
export default function ShopItem({ item, index }) {
	const { selectedColor, handleColorChange } = useColorSelector(item.images);

	return (
		<section>
			<ShoppingCard images={item.images} color={selectedColor} />
			<div className="px-2 pt-2 sm:pb-0 sm:pt-4">
				<div className="flex justify-between">
					<h3 className="text-title text-xs font-medium transition-all duration-500 ">
						{item.title}
					</h3>
					<span className="text-xs">_0{index + 1}</span>
				</div>
			</div>
			<RadioGroup
				value={selectedColor}
				onValueChange={handleColorChange}
				className="flex mt-1"
			>
				{item.images.map((color: { color: string }, index: number) => (
					<div key={index} className="flex items-center space-x-2">
						<RadioGroupItem
							style={{ backgroundColor: `#${color.color}` }}
							value={color.color}
							id={color.color}
						/>
					</div>
				))}
			</RadioGroup>
		</section>
	);
}
