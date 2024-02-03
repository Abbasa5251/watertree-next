import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/config/site";
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
							Water Filtration System
						</h1>
						<Separator
							orientation="horizontal"
							className="w-48 bg-blue-600 mb-6"
						/>
					</div>
				</Container>
			</section>
			<section className="sm:flex sm:justify-between py-3 px-4 bg-white">
				<Container className="py-28">
					<div className="flex flex-col-reverse md:flex-row items-center justify-center gap-4">
						{/* Right content */}
						<div className="text-balance w-3/4 ">
							<h1 className="uppercase text-4xl font-bold mb-7 text-blue-900 text-center">
								House Filtration Systems
							</h1>
							<p className="mb-4 text-lg font-normal">
								This standard house system is an amazing
								addition to your house for better, cleaner, and
								safer water. This standard house system includes
								large tornado, three sediment filters and one
								housing or canister, and one sediment self-flush
								filter. Call us for current price.
							</p>
							<p className="mb-4 text-lg font-medium">
								The premium whole house system includes:
							</p>
							<ul className="list-disc mb-4">
								<li>Five-Micron filter</li>
								<li>CARBON or KDF filter</li>
								<li>ne-Micron filter</li>
								<li>Shut-off-valve</li>
								<li>Pre-flush filter</li>
								<li>Large tornado</li>
								<li>Outer housing for the system</li>
								<li>2 extra 5-Micron filters</li>
								<li>2 extra 1-Micron filters</li>
								<li>Wrench for assembly</li>
							</ul>
							<p className="mb-4 text-lg font-medium">
								What Are the Benefits?
							</p>
							<p className="mb-1 text-lg font-normal">
								This is a non-back washing unit with some
								significant advantages. There is no wasted water
								and no use of energy when using it. It is less
								expensive than most whole house filters and
								requires little or no maintenance during their
								lifetime. When the materials are exhausted, you
								simply purchase a refill and replace the old
								material with the new. Our newly formulated KDF
								cubes allow both KDF and carbon to reside in the
								same tank with no channeling or packing
								problems.
							</p>
							<p className="mb-4 text-lg font-normal">
								Water Tree Water filtration system for the house
								provides an uninterrupted supply of pure,
								filtered water throughout the house and yard.
								All the water used for drinking, cooking,
								bathing, washing, and landscaping benefits from
								being purified by one central system. Water Tree
								Water whole house system safeguards the health
								and protects plumbing and appliances from
								staining, corrosion, and scale. The Whole House
								System removes hundreds of contaminants,
								including chlorine, DBPs, lead, heavy metals,
								asbestos, iron, hydrogen sulfide, and hard
								scale. Water Tree filtered water is noticeably
								softer - without salts or chemicals.
							</p>
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
							className="md:bg-contain bg-center bg-contain bg-no-repeat w-full md:w-1/2 h-72 md:h-96 bg-[url('/images/products-filtration-01.jpg')]"
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
							className="bg-center bg-contain bg-no-repeat w-full md:w-1/2 h-72 md:h-96 bg-[url('/images/products-filtration-02.jpg')] mix-blend-multiply"
						/>
						{/* right - content */}
						<div className="text-balance w-3/4">
							<h1 className="text-4xl font-bold uppercase text-blue-900 mb-7 text-center">
								<span>Roccs System</span>
							</h1>
							<p className="mb-4 text-lg font-normal">
								The ROCCS unit has a (6) six-stage filtration
								system. It will increase your water pH to a
								range of 9-9.5, decrease the ORP range to -350
								to -400, add up to 100% more oxygen to your
								water, and create micro-cluster water molecules.
								Installs under your kitchen sink. It's portable
								so you can take it with you to any location.
							</p>
							<p className="mb-4 text-lg font-medium">
								What Are the Benefits?
							</p>
							<p className="mb-4 text-lg font-normal">
								For many years, people have searched for an
								effective way to filter their municipal tap
								water at a reasonable cost. Most people are
								already aware that the chlorine that is added to
								kill harmful bacteria is necessary for municipal
								water to control the spread of disease, but
								chlorine is not good for the body and it also
								makes the water taste bad. Over the past decade,
								there has been a gigantic increase in sales of
								bottled water and the incredible number of water
								filtration devices that are sold annually in
								this country and around the world is at an
								all-time high. With so many people turning to
								filtered water, we at Water Tree decided to
								develop the most cost-effective solution in the
								industry. Contact {siteConfig.name} today for
								current pricing.
							</p>
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
