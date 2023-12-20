import React from "react";
import Container from "./Container";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Button } from "./ui/button";
import Link from "next/link";
import { Separator } from "./ui/separator";

const Footer = () => {
	return (
		<>
			<footer className="bg-blue-950 text-blue-50">
				<Container className={"py-28"}>
					{/* main div */}
					<div className="flex flex-col md:flex-row md:items-start items-center justify-center gap-4">
						{/* left description */}
						<div className="flex flex-col items-center md:items-start justify-center w-2/4">
							<div className="flex flex-row items-center justify-center gap-4">
								<Image
									src={"/logo.png"}
									width={72}
									height={72}
									alt="Logo Image"
								/>
								<h1>{siteConfig.name}</h1>
							</div>
							<p className="mb-2 text-blue-100">
								The WaterTree Family is an alkaline, hydrogen,
								and specialty water company that seeks to
								empower individuals through water, wellness, and
								filtration products.
							</p>
							<p className="mb-4 text-blue-100">
								{siteConfig.address}
							</p>
							<Button
								asChild
								variant="ghost"
								className="bg-blue-50 text-blue-900 mb-4"
							>
								<Link href={"/contact"}>Contact</Link>
							</Button>
						</div>
						{/* Quick links */}
						<div className="flex flex-col items-start justify-center w-1/4">
							<h1 className="mb-1 text-xl font-semibold">
								Quick Links
							</h1>
							<Separator
								orientation="horizontal"
								className="mb-4 w-1/3"
							/>
							<ul className="list-none">
								{siteConfig.mainNav.map((nav) => (
									<li className="mb-2 text-base font-normal hover:underline hover:cursor-pointer">
										<Link href={nav.href}>{nav.title}</Link>
									</li>
								))}
							</ul>
						</div>
						{/* Working hours */}
						<div className="flex flex-col items-start justify-center w-1/4">
							<h1 className="mb-1 text-xl font-semibold">
								Hydration Hours
							</h1>
							<Separator
								orientation="horizontal"
								className="mb-4 w-1/2"
							/>
							<ul className="list-none">
								{siteConfig.workingHours.map((wh) => (
									<li className="mb-2 text-base font-normal">
										{wh.day}: {wh.hours}
									</li>
								))}
							</ul>
						</div>
					</div>
				</Container>
			</footer>
			<Container className={"py-2"}>
				<div className="flex flex-col md:flex-row gap-x-4 gap-y-2 justify-between items-center">
					<h1>
						© All rights reserved 2023. The WaterTree Jonas Road
					</h1>
					<h1>
						Made with 💙 by{" "}
						<span className="text-blue-900">
							<Link
								href="https://www.linkedin.com/in/abbasanandwala/"
								rel="noopener noreferrer"
								target="_blank"
							>
								ADev
							</Link>
						</span>
					</h1>
				</div>
			</Container>
		</>
	);
};

export default Footer;
