import { useState } from "react";

export default function useColorSelector(images: { color: string }[]) {
	const defaultColor = images?.[0]?.color || "";
	const [selectedColor, setSelectedColor] = useState(defaultColor);

	const handleColorChange = (color: string) => {
		setSelectedColor(color);
	};

	return { selectedColor, handleColorChange };
}
