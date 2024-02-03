import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Container from "@/components/Container";
import ProductsBanner from "@/components/ProductsBanner";
import { siteConfig } from "@/config/site";

const page = () => {
	return (
		<>
			<ProductsBanner heading={"Our Products"} />
			<section className="sm:flex sm:justify-between py-3 px-4 bg-blue-50">
				<Container className="pt-28">
					<div className="flex flex-col items-center mb-20">
						<h1 className="text-blue-800 font-bold text-3xl uppercase mb-1 text-center">
							Alkaline Water Products
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
						<div className="text-balance w-1/2">
							<h1 className="uppercase text-4xl font-bold mb-7 text-blue-900 text-center">
								Power Stix
							</h1>
							<p className="mb-4 text-lg font-normal">
								A convenient and portable way to produce healthy
								water! Our secret is our patented process that
								utilizes hydrogen, activated ceramics, and a
								state-of-the-art system that naturally removes
								the oxygen-free radicals and re-energizes your
								water. The Power Stix is also antibacterial, so
								it can be used in a number of applications. Call
								us for current price.
							</p>
							<p className="mb-4 text-lg font-medium">
								What Are the Benefits?
							</p>
							<ul className="list-disc mb-4">
								<li>
									Will treat up to 250 12-20 oz. bottles of
									water
								</li>
								<li>
									Similar benefits as the Water Tree Power
									Pitcher
								</li>
								<li>
									Portable - put them into your travel or
									workout bag
								</li>
								<li>Convenient - add to any bottled water</li>
								<li>Simple to use - drop them in and shake</li>
								<li>Work in bottled or filtered water</li>
								<li>
									Antibacterial properties add to the benefits
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
						{/* Left image */}
						<div
							aria-hidden
							className="md:bg-contain bg-center bg-contain bg-no-repeat w-full md:w-1/2 h-72 md:h-96 bg-[url('/images/products-water-01.jpg')]"
						/>
					</div>
				</Container>
			</section>
			<section className="sm:flex sm:justify-between py-3 px-4 bg-blue-100">
				<Container className="py-28">
					<div className="flex flex-col md:flex-row items-center justify-center gap-4">
						{/* left - image */}
						<div
							aria-hidden
							className="bg-center bg-contain bg-no-repeat w-full md:w-1/2 h-72 md:h-96 bg-[url('/images/products-water-02.jpg')] mix-blend-multiply"
						/>
						{/* right - content */}
						<div className="text-balance w-1/2">
							<h1 className="text-4xl font-bold uppercase text-blue-900 mb-7 text-center">
								<span>Power Pitcher</span>
							</h1>
							<p className="mb-4 text-lg font-normal">
								A convenient and portable way to produce healthy
								water! Our secret is our patented process that
								utilizes hydrogen, activated ceramics, and a
								state-of-the-art system that naturally removes
								the oxygen-free radicals and re-energizes your
								water. Call us for current price.
							</p>
							<p className="mb-4 text-lg font-medium">
								What are the Benefits:
							</p>
							<p className="mb-1 text-lg font-normal">
								This process is a completely natural filtration
								system that utilizes “Far Infrared” technology
								that generates an electromagnetic wave that
								ultimately creates alkaline or antioxidant water
								to help you maintain youthfulness and health.
							</p>
							<p className="mb-4 text-lg font-normal">
								Our secret is our patented process that utilizes
								hydrogen, activated ceramics, and a
								state-of-the-art system that naturally removes
								the oxygen-free radicals and re-energizes your
								water. It is all housed inside a medical grade,
								Nano Silver, plastic portable pitcher that is
								specially designed to combat the formation of
								bacteria.
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
			<section className="sm:flex sm:justify-between py-3 px-4 bg-white">
				<Container className="py-28">
					<div className="flex flex-col-reverse md:flex-row items-center justify-center gap-4">
						{/* Left content */}
						<div className="text-balance w-1/2">
							<h1 className="uppercase text-4xl font-bold mb-7 text-blue-900 text-center">
								Dream Pitcher
							</h1>
							<p className="mb-4 text-lg font-normal">
								The Dream Pitcher is convenient, portable and
								effective, and is a great addition to the Water
								Tree Family product line. It wasn&apos;t easy
								developing a pitcher that could filter your “tap
								water” and at the same time create alkaline,
								antioxidant water but the Water Tree research
								and development team was able to pull it off!
							</p>
							<p className="mb-4 text-lg font-medium">
								Easy to use
							</p>
							<p className="mb-1 text-lg font-normal">
								The Dream Pitcher will filter up to 75 gallons
								of your tap (or bottled) water and in about 15
								minutes will transform that water into the kind
								of water that “simply makes you feel good.” If
								you choose to decide to use purified bottled
								water, the filter will last up to 250 gallons.
								It will create alkaline, antioxidant; Water Tree
								Water!
							</p>
							<p className="mb-4 text-lg font-normal">
								That&apos;s not all it will do, it will also
								make that same water “antibacterial!” After the
								water has been in the pitcher for at least one
								hour the water will take on properties very
								similar to our antibacterial Power Stix but a
								little.
							</p>
							<Button
								asChild
								variant="ghost"
								className="text-blue-50 bg-blue-900"
							>
								<Link href={"/contact"}>Order Now</Link>
							</Button>
						</div>
						{/* Right image */}
						<div
							aria-hidden
							className="md:bg-contain bg-center bg-contain bg-no-repeat w-full md:w-1/2 h-72 md:h-96 bg-[url('/images/products-water-03.jpg')]"
						/>
					</div>
				</Container>
			</section>
			<section className="sm:flex sm:justify-between py-3 px-4 bg-blue-100">
				<Container className="py-28">
					<div className="flex flex-col md:flex-row items-center justify-center gap-4">
						{/* left - image */}
						<div
							aria-hidden
							className="bg-center bg-contain bg-no-repeat w-full md:w-1/2 h-72 md:h-96 bg-[url('/images/products-water-04.jpg')] mix-blend-multiply"
						/>
						{/* right - content */}
						<div className="text-balance w-1/2">
							<h1 className="text-4xl font-bold uppercase text-blue-900 mb-7 text-center">
								<span>Premium Spray Bottles</span>
							</h1>
							<p className="mb-4 text-lg font-normal">
								We have taken our amazing antioxidant, alkaline
								ceramic, mineral composition, and supercharged
								it with crystals that increase the oxidation
								fighting power to the extreme. You will see
								amazing results! DT Premium Antioxidant Spray
								comes in 3 sizes, from our most portable 1-ounce
								bottle to our super-sized 16-ounce bottle. Use
								it to refresh skin, enhance hair, and ease minor
								cuts, bites, and irritation.
							</p>
							<p className="mb-4 text-lg font-medium">
								What are the Benefits?
							</p>
							<p className="mb-4 text-lg font-normal">
								Water Tree is committed to offering you a
								healthier way of life, so you can be assured
								that our range of DT antioxidant sprays contain
								no parabens, sulfates, synthetic fragrances or
								dyes, petrochemicals, or phthalates — just pure,
								mineral, antioxidant, alkaline goodness! Our
								product is naturally antibacterial and will kill
								up to 99% of bacteria, which allows the DT
								antioxidant spray to be used for so much more
								than skin care. It can aid in the healing of
								cuts and burns. It reduces bacteria, itching,
								and irritation from insect bites and stings. And
								a few sprays after meals or drinking acidic
								beverages (like coffee or soda) promotes fresher
								breath and rebalances your mouth&apos;s pH
								levels!
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
			<section className="sm:flex sm:justify-between py-3 px-4 bg-white">
				<Container className="py-28">
					<div className="flex flex-col-reverse md:flex-row items-center justify-center gap-4">
						{/* Left content */}
						<div className="text-balance w-1/2">
							<h1 className="uppercase text-4xl font-bold mb-7 text-blue-900 text-center">
								Anion 1 and 2 Shower Head
							</h1>
							<p className="mb-1 text-lg font-normal">
								When you use the Water Tree Anion Power Shower
								for the first time, it creates an experience you
								won&apos;t soon forget. The filter inside
								removes harmful chlorine on contact adds natural
								moisturizers that can relieve skin irritations
								while adding an exciting citrus aroma. The
								result is a natural vitamin C, aromatherapy
								shower experience. We don&apos;t stop there, to
								add to the magic, the treated water travels
								through our patented plate design that emits
								over 400,000 negative ions at a rate of more
								than 400,000 per cm.
							</p>
							<p className="mb-1 text-lg font-normal">
								The design of the Anion Shower Plate is a
								low-flow shower head, which is a great
								money-saver. High-quality shower heads like the
								one featured on the Anion Power Shower provide a
								forceful, satisfying shower while using only
								half as much water as your old one. Since this
								is heated water, you also save the energy to
								heat it.
							</p>
							<p className="mb-1 text-lg font-normal">
								This sophisticated technology combines to create
								a “SOFT” negative ion waterfall effect that is
								refreshing, relaxing, and has been known in some
								instances to relieve headaches and have a
								positive effect on depression. These benefits
								are not limited to any age group; studies have
								shown that even children can find huge benefits
								from negative ions. The patented plate design is
								the “key” to relief.
							</p>
							<p className="mb-4 text-lg font-normal">
								The patented plate is removable and should be
								cleaned regularly to remove debris that can
								collect in the holes of the plate. This debris
								can cause damage from excessive buildup if left
								for long periods. Simply remove the plate, rinse
								it off, and put it back in anytime you notice
								water spraying anywhere other than straight
								through the head.
							</p>
							<p className="mb-4 text-lg font-medium">
								What Can It Do?
							</p>
							<ul className="list-disc mb-4">
								<li>Removes harmful chlorine</li>
								<li>Natural moisturizer</li>
								<li>Vitamin C, aromatherapy</li>
							</ul>
							<p className="mb-4 text-lg font-medium">
								How Could a Simple Shower Head Have Such Impact?
							</p>
							<ul className="list-disc mb-4">
								<li>Removes chlorine on contact</li>
								<li>
									Natural Vitamin C shower with Citrus Aroma
									loved by everyone
								</li>
								<li>“Soft” waterfall effect</li>
								<li>
									Provides optimum hydration results in the
									body
								</li>
								<li>
									Emits 480,000 negative ions at a rate of
									480,000 per cm
								</li>
								<li>
									Natural moisturizer, relieves skin
									irritations
								</li>
								<li>
									Refreshing and relaxing, relieves headaches
								</li>
								<li>
									The patented plate design is the “key” to
									relief
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
						{/* Right image */}
						<div
							aria-hidden
							className="md:bg-contain bg-center bg-contain bg-no-repeat w-full md:w-1/2 h-72 md:h-96 bg-[url('/images/products-water-05.jpg')]"
						/>
					</div>
				</Container>
			</section>
			<section className="sm:flex sm:justify-between py-3 px-4 bg-blue-100">
				<Container className="py-28">
					<div className="flex flex-col md:flex-row items-center justify-center gap-4">
						{/* left - image */}
						<div
							aria-hidden
							className="bg-center bg-contain bg-no-repeat w-full md:w-1/2 h-72 md:h-96 bg-[url('/images/products-water-06.jpg')] mix-blend-multiply"
						/>
						{/* right - content */}
						<div className="text-balance w-1/2">
							<h1 className="text-4xl font-bold uppercase text-blue-900 mb-7 text-center">
								<span>Alkaline Antioxidant Balls</span>
							</h1>
							<p className="mb-1 text-lg font-normal">
								Alkaline Antioxidant Balls will add more oxygen
								to your water. They are great to add to your
								sports bottle and even your Water Tree Power
								Pitcher. They&apos;ll last for up to six months.
							</p>
							<p className="mb-4 text-lg font-normal">
								These are a great option for when you&apos;re on
								the go and run out of your Alkaline Antioxidant
								Water. All you do is simply add your Alkaline
								Antioxidant Balls to any purified bottled water.
								Once you add the water, you shake vigorously for
								a few seconds, wait three to four minutes, and
								you&apos;ll have great tasting alkaline drinking
								water. Contact {siteConfig.name} today for
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
