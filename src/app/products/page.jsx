import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Container from "@/components/Container";
import ProductsBanner from "@/components/ProductsBanner";

const page = () => {
	return (
		<>
			<ProductsBanner heading={"Our Products"} />
			<section className="sm:flex sm:justify-between py-3 px-4 bg-blue-50">
				<Container className="pt-28 pb-14">
					<div className="flex flex-col items-center mb-20">
						<h1 className="text-blue-800 font-bold text-3xl uppercase mb-1 text-center">
							Perfectly Balanced Antioxidant Alkaline Water
						</h1>
						<Separator
							orientation="horizontal"
							className="w-48 bg-blue-600 mb-6"
						/>
						<p className="font-medium mx-12 text-center text-pretty">
							Water stripped of its nutrients is often left highly
							acidic. Antioxidant alkaline water raises the pH of
							your body so that it can function as it was made to
							function. The water at Water Tree, located in
							Champion Forest, TX, is filtered naturally with a
							ceramic conversion process- not through electrical
							ionizers.
						</p>
					</div>
				</Container>
			</section>
			<section className="sm:flex sm:justify-between py-3 px-4 bg-blue-100">
				<Container className="py-28">
					<div className="flex flex-col md:flex-row items-center justify-center gap-4">
						{/* left - image */}
						<div
							aria-hidden
							className="bg-center bg-contain bg-no-repeat w-full md:w-1/2 h-72 md:h-96 bg-[url('/images/products-01-2.jpg')] mix-blend-multiply"
						/>
						{/* right - content */}
						<div className="text-balance w-1/2">
							<h1 className="text-4xl font-bold uppercase text-blue-900 mb-7 text-center">
								<span>Refill & Bottled Water</span>
							</h1>
							<p className="mb-4 text-lg font-normal">
								Water Refills:
							</p>
							<ul className="list-disc mb-4">
								<li>Classic PH 8-9.5</li>
								<li>Premium PH 9.5-10.5</li>
								<li>
									Hydrogen Water Refills (PH 9.5-10.5)
									Enriched with more Hydrogen.
								</li>
							</ul>
							<p className="mb-4 text-lg font-normal">
								Benefits of Hydrogen Water:
							</p>
							<ul className="list-disc mb-4">
								<li>
									Hydrogen is the smallest molecule thus
									optimal cellular hydration, best fighter of
									free radicals
								</li>
								<li>More antioxidants</li>
								<li>
									While everyone loves all our Water, Hydrogen
									Water is our number one selling water, try
									it, feel it, come back for more!
								</li>
							</ul>
							<Button
								asChild
								variant="ghost"
								className="text-blue-50 bg-blue-900"
							>
								<Link href={"/contact"}>Order Now</Link>
							</Button>
						</div>
					</div>
				</Container>
			</section>
			<section className="sm:flex sm:justify-between py-3 px-4 bg-[#e4f1f7]">
				<Container className="py-28">
					<div className="flex flex-col-reverse md:flex-row items-center justify-center gap-4">
						{/* Right content */}
						<div className="text-balance w-1/2">
							<h1 className="uppercase text-4xl font-bold mb-7 text-blue-900 text-center">
								Bottled Water
							</h1>
							<p className="mb-4 text-lg font-normal">
								Bottled Water (16.9 oz bottles, 1.5 Lt bottles)
							</p>
							<ul className="list-disc mb-4">
								<li>Natural PH 7.5-8.5,</li>
								<li>Classic PH 8.5-9.5</li>
								<li>Premium PH 9.5-10.5</li>
								<li>Magnesium Water</li>
								<li>Rain Water</li>
							</ul>
							<Button
								asChild
								variant="ghost"
								className="text-blue-50 bg-blue-900"
							>
								<Link href={"/contact"}>Order Now</Link>
							</Button>
						</div>
						{/* Left image */}
						<div
							aria-hidden
							className="md:bg-contain bg-center bg-contain bg-no-repeat w-full md:w-1/2 h-72 md:h-96 bg-[url('/images/products-02-2.jpg')]"
						/>
					</div>
				</Container>
			</section>
			<section className="sm:flex sm:justify-between py-3 px-4 bg-white">
				<Container className="py-28">
					<div className="flex flex-col md:flex-row items-center justify-center gap-4">
						{/* left - image */}
						<div
							aria-hidden
							className="bg-center bg-contain bg-no-repeat w-full md:w-1/2 h-72 md:h-96 bg-[url('/images/products-03-2.jpg')] mix-blend-multiply"
						/>
						{/* right - content */}
						<div className="text-balance w-1/2">
							<h1 className="text-4xl font-bold uppercase text-blue-900 mb-7 text-center">
								<span>Gallon Water</span>
							</h1>
							<p className="mb-4 text-lg font-normal">
								Gallon Water
							</p>
							<ul className="list-disc mb-4">
								<li>1 gallon bottle</li>
								<li>Classic PH 8.5-9.5</li>
								<li>Premium PH 9.5-10.5</li>
							</ul>
							<Button
								asChild
								variant="ghost"
								className="text-blue-50 bg-blue-900"
							>
								<Link href={"/contact"}>Order Now</Link>
							</Button>
						</div>
					</div>
				</Container>
			</section>
		</>
	);
};

export default page;
