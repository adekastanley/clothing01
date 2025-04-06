import * as React from "react";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const images = [
	"/assets/products/p1.webp",
	"/assets/products/p2.webp",
	"/assets/products/p3.webp",
	"/assets/products/p4.webp",
];
export default function NewArrival() {
	return (
		<section className="px-12 lg:px-40">
			<Carousel>
				<CarouselContent className="-ml-2 md:-ml-4">
					{images.map((image, index) => (
						<CarouselItem key={index} className="basis-1/3">
							<Image
								src={image}
								alt="product"
								className="object-cover w-full h-full"
								width={1280}
								height={1920}
							/>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
			<h2 className="font-semibold text-3xl my-10">New Arrival</h2>
		</section>
	);
}
