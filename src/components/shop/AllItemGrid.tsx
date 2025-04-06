"use client";
// import Link from "next/link";

import ShopItem from "./shop-item";
// import { useState } from "react";

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
							{shopData.map((item: any, index: number) => (
								<ShopItem key={index} item={item} index={index} />
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
