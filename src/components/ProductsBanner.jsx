import React from "react";

const ProductsBanner = ({ heading }) => {
	return (
		<section className="relative bg-center bg-contain bg-no-repeat w-full h-72 md:h-96 bg-[url('/images/products-banner.jpg')] mix-blend-multiply">
			<h1 className="md:absolute mx-10 text-center mt-10 md:mt-0 right-28 top-1/2 text-5xl font-bold uppercase text-blue-900">
				{heading}
			</h1>
		</section>
	);
};

export default ProductsBanner;
