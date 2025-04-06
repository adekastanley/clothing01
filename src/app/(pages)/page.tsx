import HeroSection from "@/components/homepage/hero-section";
import HomeCategory from "@/components/homepage/home-catergory";
import TextCategory from "@/components/category-text";
import NewArrival from "@/components/homepage/new-arival";

export default function Home() {
	return (
		<>
			<HeroSection />
			<HomeCategory />
			<TextCategory />
			<NewArrival />
		</>
	);
}
