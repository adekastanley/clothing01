// import { InfiniteSlider } from "./ui/infinite-slider";
"use client";

import { Button } from "@/components/ui/button";

import {
	Sheet,
	// SheetClose,
	SheetContent,
	SheetDescription,
	// SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";

export default function Notice() {
	return (
		<div className="flex items-center justify-center gap-2 h-6 ">
			<p className=" text-white">This site is powered by </p>
			<div>
				<Sheet>
					<SheetTrigger asChild>
						<Button className="p-0 underline m-0 bg-transparent hover:m-0 hover:bg-transparent hover:p-0 hover:border-0 cursor-pointer">
							Idibia
						</Button>
					</SheetTrigger>
					<SheetContent className="mt-5" side={"top"}>
						<SheetHeader>
							<SheetTitle>Need a website?</SheetTitle>
							<SheetDescription>
								Get a free quote for your next project.
							</SheetDescription>
						</SheetHeader>
						<Button className="w-[10rem] ml-4" type="submit">
							Visit Idibia
						</Button>
						<div className="grid gap-4 py-4">
							<div className="grid grid-cols-4 items-center gap-4"></div>
						</div>
					</SheetContent>
				</Sheet>
			</div>
		</div>
	);
}
