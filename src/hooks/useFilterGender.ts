// import { useState } from "react";

type useFilterGenderProps = {
	data: [];
	gender: string;
};
export default function useFilterGender(data, gender): useFilterGenderProps {
	const filteredGender = data.filter((item) => item.gender === gender);

	return filteredGender;
}
