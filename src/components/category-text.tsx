export default function TextCategory() {
	return (
		<section className="py-12 md:py-20">
			<div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
				<div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
					<div className="space-y-4">
						<div className="text-5xl font-bold">Tops</div>
						<div className="flex gap-5 w-full justify-center">
							<p className="underline">Men</p>
							<p className="underline">Women</p>
						</div>
					</div>
					<div className="space-y-4">
						<div className="text-5xl font-bold">Bottoms</div>
						<div className="flex gap-5 w-full justify-center">
							<p className="underline">Men</p>
							<p className="underline">Women</p>
						</div>
					</div>
					<div className="space-y-4">
						<div className="text-5xl font-bold">Fragrance</div>
						<div className="flex gap-5 w-full justify-center">
							<p className="underline">Men</p>
							<p className="underline">Women</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
