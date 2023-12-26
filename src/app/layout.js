import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Poppins } from "next/font/google";
import { Separator } from "@/components/ui/separator";
import { Toaster } from "@/components/ui/toaster";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

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
			<head>
				<link rel="icon" href="/favicon.ico" sizes="any" />
			</head>
			<body className={cn(poppins.className)}>
				<Navbar />
				<Separator orientation="horizontal" />
				{children}
				<Toaster />
				<Footer />
			</body>
		</html>
	);
}
