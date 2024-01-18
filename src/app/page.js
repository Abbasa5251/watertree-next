import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<section className="sm:flex sm:justify-between py-3 px-4 bg-blue-100">
				<Container className="py-28">
					<div className="flex flex-col md:flex-row items-center justify-center gap-4">
						{/* left - image */}
						<div
							aria-hidden
							className="md:bg-contain bg-center bg-contain bg-no-repeat w-full md:w-1/2 h-72 md:h-96 bg-[url('/images/image-1.png')] mix-blend-multiply"
						/>
						{/* right - content */}
						<div className="text-balance text-center">
							<h1 className="text-2xl font-bold uppercase text-blue-900 mb-7">
								<span>Your Local Premium Water, </span>
								<br />
								<span>Wellness & Filtration Provider</span>
							</h1>
							<p className="mb-4 text-lg font-medium">
								Proudly serving and delivering to Houston areas.
							</p>
							<Button
								asChild
								variant="ghost"
								className="text-blue-50 bg-blue-900"
							>
								<Link href={"/products"}>Our Products</Link>
							</Button>
						</div>
					</div>
				</Container>
			</section>
			<section className="sm:flex sm:justify-between py-3 px-4 bg-blue-600">
				<Container className="py-28">
					<div className="flex flex-col-reverse md:flex-row items-center justify-center gap-4">
						{/* Right content */}
						<div className="text-balance text-center w-1/2">
							<h1 className="uppercase text-2xl font-bold mb-7 text-blue-50">
								What is an Alkaline Antioxidant water?
							</h1>
							<p className="mb-4 text-lg font-medium text-blue-200">
								You may think that all purified water is good
								enough. It&apos;s all the same, right? The truth
								is, water treated by distillation and reverse
								osmosis takes “the good” out with “the bad”,
								leaving us with Acidic/Dead Water that contains
								no minerals. Conventional filtration methods
								often remove everything and strip water bare,
								leaving almost nothing but water molecules.
								That&apos;s great for removing toxins and
								waterborne diseases, but it doesn&apos;t retain
								any of the other beneficial elements of water.
								That&apos;s why Water Tree Family uses a
								proprietary process called Ceramic Conversion to
								bring your water back to life! We put the right
								things back in so you can drink water the way
								nature intended.
							</p>
						</div>
						{/* Left image */}
						<div
							aria-hidden
							className="md:bg-contain bg-center bg-contain bg-no-repeat w-full md:w-1/2 h-72 md:h-96 bg-[url('/images/image-2.png')]"
						/>
					</div>
				</Container>
			</section>
			<section className="sm:flex sm:justify-between py-3 px-4 bg-blue-200">
				<Container className="py-28">
					<div className="flex flex-col-reverse md:flex-row items-center justify-center gap-4">
						{/* Right image */}
						<div className="text-balance text-center w-1/2">
							<h1 className="uppercase text-2xl font-bold mb-7 text-blue-900">
								Why Choose Alkaline Water?
							</h1>
							<p className="mb-4 text-lg font-medium">
								The alkalinity and acidity of any solution can
								be measured using a pH scale. This scale
								measures the concentration of hydrogen ions,
								from 0-14, in water. On the pH scale, 7 is
								considered neutral, below 7 acidic, and above 7
								is alkaline. The quality of our drinking water
								today continues to be of great concern to many.
								Most of us want the best water available for
								consumption, and we believe the healthiest water
								on the market today is alkaline water. Years of
								scientific and medical research have gone into
								its development, and recent studies are
								revealing the great benefits alkaline water can
								provide.
							</p>
							<Button
								asChild
								variant="ghost"
								className="text-blue-50 bg-blue-900"
							>
								<Link href={"/why-alkaline-water"}>
									Read more
								</Link>
							</Button>
						</div>
						{/* Left content */}
						<div
							aria-hidden
							className="md:bg-contain bg-center bg-contain bg-no-repeat w-full md:w-1/2 h-72 md:h-96 bg-[url('/images/image-3.jpg')] mix-blend-multiply"
						/>
					</div>
				</Container>
			</section>
		</>
	);
}
