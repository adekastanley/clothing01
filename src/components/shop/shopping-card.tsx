import {
	Carousel,
	CarouselContent,
	CarouselNavigation,
	CarouselIndicator,
	CarouselItem,
} from "@/components/ui/styled-carousel";
import Image from "next/image";

type SingleImageProps = {
	color: string;
	images: [];
};

type ImagesProps = {
	images: [SingleImageProps];
	color: string;
};
export default function ShoppingCard({ images, color }: ImagesProps) {
	const selectedColorGroup = images.find((group) => group.color === color);

	return (
		<div className="relative w-full max-w-xs">
			<Carousel>
				<CarouselContent>
					{selectedColorGroup?.images.map((img, index) => (
						<CarouselItem key={index} className="p-4">
							<div className="flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800">
								<Image
									draggable={false}
									className="w-full"
									src={img}
									width={100}
									height={100}
									alt="product"
								/>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselNavigation alwaysShow />
				<CarouselIndicator />
			</Carousel>
		</div>
	);
}
