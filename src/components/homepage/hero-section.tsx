import React from "react";

import { Button } from "@/components/ui/button";
import { TextEffect } from "../ui/text-effect";

// import Image from "next/image";
import Notice from "../notice";

// const transitionVariants = {
// 	item: {
// 		hidden: {
// 			opacity: 0,
// 			filter: "blur(12px)",
// 			y: 12,
// 		},
// 		visible: {
// 			opacity: 1,
// 			filter: "blur(0px)",
// 			y: 0,
// 			transition: {
// 				type: "spring",
// 				bounce: 0.3,
// 				duration: 1.5,
// 			},
// 		},
// 	},
// };

export default function HeroSection() {
	return (
		<>
			<div className=" bg-black w-full z-100 relative">
				<Notice />
			</div>
			<main className="overflow-hidden relative flex flex-col justify-center  bg-[url(/assets/homepage/one.jpg)] bg-no-repeat bg-cover h-screen">
				<section className="  ">
					<div className="   px-6 ">
						{/* <div className="absolute left-10 top-0 bg-red-900 px-6 pt-32 lg:pb-16 lg:pt-48"> */}
						<div className=" z-10 text-start max-md:absolute bottom-30 left-0 lg:w-[30rem]">
							{/* <div className="relative z-10 mx-auto max-w-4xl text-center"> */}
							<TextEffect
								preset="fade-in-blur"
								speedSegment={0.3}
								as="h1"
								className="text-balance lg:text-3xl font-medium "
							>
								Your gateway to endless entertainment experiences
							</TextEffect>
							<TextEffect
								per="line"
								preset="fade-in-blur"
								speedSegment={0.3}
								delay={0.5}
								as="p"
								className="mx-auto  text-pretty lg:text-lg"
							>
								Tailwindcss highly customizable components for building modern
								websites and applications that look and feel the way you mean
								it.
							</TextEffect>
							<Button className="w-20">Shop</Button>
						</div>
						<div className="mx-auto md:-mt-20 lg:-mt-40">
							{/* <AnimatedGroup
								variants={{
									container: {
										visible: {
											transition: {
												staggerChildren: 0.05,
												delayChildren: 0.75,
											},
										},
									},
									...transitionVariants,
								}}
							></AnimatedGroup> */}
						</div>
					</div>
				</section>
				{/* <LogoCloud /> */}
			</main>
		</>
	);
}
