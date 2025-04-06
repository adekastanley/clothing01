"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export default function HomeCategory() {
	return (
		<div className="w-full flex max-md:flex-col  min-h-screen border-8 border-primary">
			<motion.div
				className="w-full h-full   relative"
				whileHover={{
					opacity: 0.8,
					transition: { duration: 1 },
				}}
			>
				<Link href={""}>
					<Image
						src={"/assets/homepage/female.jpg"}
						className="object-cover !h-full w-full"
						width={1280}
						height={1920}
						alt="shop female"
					/>
				</Link>
				<div className="absolute bottom-0 left-2">
					<h1 className="text-3xl text-center">Shop Female</h1>
				</div>
			</motion.div>
			<motion.div
				className="w-full !h-full  relative "
				whileHover={{
					opacity: 0.8,
					transition: { duration: 1 },
				}}
			>
				<Link href={""}>
					<Image
						src={"/assets/homepage/male.jpg"}
						className="object-cover h-full w-full"
						width={1280}
						height={1920}
						alt="shop male"
					/>
					<div className="absolute bottom-0  left-2">
						<h1 className="text-3xl text-center">Shop Male</h1>
					</div>
				</Link>
			</motion.div>
		</div>
	);
}
