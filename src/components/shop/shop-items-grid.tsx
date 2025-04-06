"use client";
import Link from "next/link";
import shopData from "../../../data/store-data";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import ShoppingCard from "./shopping-card";
import { useState } from "react";

export default function ShopItemGrid() {
	const [selectedColor, setSelectedCOlor] = useState(
		shopData[0].images[0].color
	);

	const handleColorChange = (color: string) => {
		setSelectedCOlor(color);
	};

	return (
		<section className="bg-gray-50 py-16 md:py-32 dark:bg-transparent">
			<div className="mx-auto max-w-5xl border-t px-6">
				<span className="text-caption -ml-6 -mt-3.5 block w-max bg-gray-50 px-6 dark:bg-gray-950">
					SHOP
				</span>

				<div className="mt-12 md:mt-24">
					<div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
						{shopData.map((item, index) => (
							<section key={index} className="">
								<div key={index} className="group overflow-hidden">
									{/* <img
									className="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl"
									src={image.images[0]}
									alt="team image"
									width="826"
									height="1239"
								/> */}
									<ShoppingCard images={item.images} color={selectedColor} />

									<div className="px-2 pt-2 sm:pb-0 sm:pt-4">
										<div className="flex justify-between">
											<h3 className="text-title text-base font-medium transition-all duration-500 group-hover:tracking-wider">
												{item.title}
											</h3>
											<span className="text-xs">_0{index + 1}</span>
										</div>
										<div className="mt-1 flex items-center justify-between">
											{/* <span className="text-muted-foreground inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
												{item.description}
											</span> */}
											{/* <Link
											href={image.category}
											className="group-hover:text-primary-600 dark:group-hover:text-primary-400 inline-block translate-y-8 text-sm tracking-wide opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:opacity-100"
										>
											Linktree
										</Link> */}
										</div>
									</div>
								</div>

								<RadioGroup
									defaultValue={item.images[0]?.color}
									className="flex mt-1"
									onValueChange={(value) => handleColorChange(value)}
								>
									{item.images.map((color, index) => {
										return (
											<div key={index} className="flex items-center space-x-2">
												<RadioGroupItem
													style={{ backgroundColor: `#${color.color}` }}
													value={color.color}
													id={item.images[index - 1]?.color}
													className=""
												/>
											</div>
										);
									})}
								</RadioGroup>
							</section>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
