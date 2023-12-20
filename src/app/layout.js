import "@/app/globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import Footer from "@/components/Footer";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
	title: siteConfig.name,
	description: siteConfig.description,
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={cn(poppins.className)}>
				<Navbar />
				<Separator orientation="horizontal" />
				{children}
				<Footer />
			</body>
		</html>
	);
}
