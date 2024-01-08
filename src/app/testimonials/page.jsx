import Container from "@/components/Container";
import Review from "@/components/Review";
import { Separator } from "@/components/ui/separator";
import { reviews } from "@/config/reviews";
import React from "react";

const Testimonials = () => {
	return (
		<>
			<section className="sm:flex sm:justify-between py-3 px-4 bg-blue-50">
				<Container className="pt-28 pb-14">
					<div className="flex flex-col items-center mb-20">
						<h1 className="text-blue-800 font-bold text-3xl uppercase mb-1 text-center">
							Words from our customers
						</h1>
						<Separator
							orientation="horizontal"
							className="w-48 bg-blue-600 mb-6"
						/>
						<p className="font-medium mx-12 text-center text-pretty">
							See what our customers have to say about our
							alkaline water products and water filtration
							systems. Contact Water Tree Champion Forest today
							for a FREE basic water testing.
						</p>
					</div>
				</Container>
			</section>
			<section className="py-3 px-4 flex flex-col md:flex-row flex-wrap gap-4 justify-center items-center md:items-start">
				{reviews.map((review, index) => (
					<Review key={index} review={review} />
				))}
			</section>
		</>
	);
};

export default Testimonials;
