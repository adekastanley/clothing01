"use client";
// import Link from "next/link";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import ShoppingCard from "./shopping-card";
// import { useState } from "react";
import useColorSelector from "@/hooks/useColorSelector";

export default function AllItemGrid({ shopData }: any) {
	return (
		<section className="bg-gray-50 py-16 md:py-32 dark:bg-transparent">
			<div className="mx-auto max-w-5xl border-t px-6">
				<span className="text-caption -ml-6 -mt-3.5 block w-max bg-gray-50 px-6 dark:bg-gray-950">
					SHOP
				</span>

				<div className="group overflow-hidden">
					<div className="mt-12 md:mt-24">
						<div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
							{shopData.map((item: any, index: number) => {
								const { selectedColor, handleColorChange } = useColorSelector(
									item.images
								);

								return (
									<section key={index}>
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
											{item.images.map(
												(color: { color: string }, index: number) => (
													<div
														key={index}
														className="flex items-center space-x-2"
													>
														<RadioGroupItem
															style={{ backgroundColor: `#${color.color}` }}
															value={color.color}
															id={color.color}
														/>
													</div>
												)
											)}
										</RadioGroup>
									</section>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
