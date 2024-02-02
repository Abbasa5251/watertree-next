import Container from "@/components/Container";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/config/site";
import React from "react";

const page = () => {
	return (
		<>
			<section className="sm:flex sm:justify-between">
				<Container className={"pb-28"}>
					<div
						aria-hidden
						className="bg-center bg-contain bg-no-repeat w-full md:w-full h-72 md:h-96 bg-[url('/images/products-blue_bg.jpg')] mix-blend-multiply"
					/>
					<div className="">
						<p>
							Water is one of the most important components of
							life - it's unavoidable. What is also unavoidable is
							all the contaminants found in US municipal water,
							including microorganisms, radiation and inorganic
							chemicals like arsenic, fluoride, and even lead and
							mercury! Most filtration systems get rid of the
							contaminants, along with all the healthy properties!
						</p>
					</div>
				</Container>
			</section>
		</>
	);
};

export default page;
