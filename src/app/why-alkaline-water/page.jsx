import Container from "@/components/Container";
import { Separator } from "@/components/ui/separator";
import React from "react";

const page = () => {
	return (
		<>
			<section className="sm:flex sm:justify-between py-3 px-4 bg-blue-50">
				<Container className="py-28">
					<div className="flex flex-col md:flex-row items-center justify-center gap-4">
						{/* left - content */}
						<div className="w-1/2">
							<h1 className="uppercase text-4xl font-bold mb-1 text-blue-900">
								Health Benefits of Alkaline Antioxidant Water
							</h1>
							<Separator
								orientation="horizontal"
								className="bg-blue-300 mb-7 w-1/2"
							/>
							<p className="mb-4 text-lg font-medium">
								The understanding that alkaline water is
								medicinal, curative, and able to bring about
								optimal health is based on scientific studies
								that prove that acidic properties in the body
								and blood are the cause of ill health and
								disease and need to be neutralized. Therefore, a
								more alkaline body will lead to better health.
								<br />
								Alkaline water contains four major minerals that
								contribute to its remarkable health benefits:
							</p>
							<ul className="list-disc font-normal">
								<li>
									<span className="font-bold">Calcium: </span>
									Important for bone health, as well as heart,
									muscle, and nerve function
								</li>
								<li>
									<span className="font-bold">
										Magnesium:{" "}
									</span>
									Helps turn food into energy and is necessary
									for over 300 biochemical reactions in the
									body
								</li>
								<li>
									<span className="font-bold">Sodium: </span>
									Regulates blood pressure and volume, and
									supports nerve/muscle function
								</li>
								<li>
									<span className="font-bold">
										Potassium:{" "}
									</span>
									A type of electrolyte that is essential for
									muscle function and promotes healthy
									digestion
								</li>
							</ul>
						</div>
						{/* right - image */}
						<video
							autoPlay
							loop
							controls
							muted
							className="aspect-video w-1/2"
						>
							<source src="https://www.watertreechampionforest.com/wp-content/uploads/2021/08/The-Water-Truth-By-Dream-Tree-Family-Inc.mp4" />
						</video>
					</div>
				</Container>
			</section>
			<section className="min-h-screen">
				<Container className="py-28">
					<div className="flex flex-col items-center justify-center gap-4">
						<h1 className="uppercase text-4xl font-bold mb-1 text-blue-900">
							4 Benefits of Drinking Alkaline Water
						</h1>
						<Separator
							orientation="horizontal"
							className="w-48 bg-blue-500"
						/>
						<div class="grid grid-cols-1 md:grid-cols-2 gap-7 pt-12">
							<div class="bg-blue-100 p-4 rounded-lg relative">
								<div class="absolute -top-5 -left-5 bg-blue-900 text-white w-10 h-10 rounded-full flex items-center justify-center">
									1
								</div>
								<h3 class="font-semibold mb-2">
									Restores Ph balance in the body
								</h3>
								<p class="text-sm">
									Alkaline water carries a higher amount of Ph
									levels than regular bottled water which
									contributes to reducing the acidity levels
									in your body. According to the Healthline
									online article, Ph is a term referred to as
									levels of acid or alkaline a substance
									contains; this is measured from 0 to 14. The
									lower the number, the more acidic.
									Healthline reveals that “normal drinking
									water generally has a neutral pH of 7;
									alkaline water typically has a pH of 8 or
									9.” Results show that alkaline water is more
									beneficial by being able to effectively
									neutralize the acid in your body compared to
									other waters.
								</p>
							</div>
							<div class="bg-blue-100 p-4 rounded-lg relative">
								<div class="absolute -top-5 -left-5 bg-blue-900 text-white w-10 h-10 rounded-full flex items-center justify-center">
									2
								</div>
								<h3 class="font-semibold mb-2">
									Increases Energy levels
								</h3>
								<p class="text-sm">
									In a Newsmax health review, a co-author of
									the pH Miracle, Robert O. Young expresses
									that too much acid in the body can result in
									the loss of energy, increase in fatigue and
									drowsiness. As it is established that
									alkaline water is an exceptional source of
									reversing acidic levels in the body, it can
									also restore energy levels that were
									withdrawn.
								</p>
							</div>
							<div class="bg-blue-100 p-4 rounded-lg relative">
								<div class="absolute -top-5 -left-5 bg-blue-900 text-white w-10 h-10 rounded-full flex items-center justify-center">
									3
								</div>
								<h3 class="font-semibold mb-2">
									Extra hydrating than other water
								</h3>
								<p class="text-sm">
									Based on the Journal of the International
									Society of Sports Nutrition, alkaline water
									has an increasing hydrating effect through
									blood viscosity versus regular water. Blood
									viscosity is level hydration being measured.
									When you have a low blood viscosity, your
									hydration level should be higher. In this
									case study, participants were given water to
									drink after their workout, half alkaline
									water, half regular purified water. Those
									consumed alkaline water, their viscosity
									reduced to about 6.30% compared to those who
									consumed regular water with their reduction
									averaging 3.36%.
								</p>
							</div>
							<div class="bg-blue-100 p-4 rounded-lg relative">
								<div class="absolute -top-5 -left-5 bg-blue-900 text-white w-10 h-10 rounded-full flex items-center justify-center">
									4
								</div>
								<h3 class="font-semibold mb-2">
									It can help reduce signs of aging
								</h3>
								<p class="text-sm">
									Almost over half the percentage of our body
									is of water; water is essential to keeping
									our organs healthy and functioning
									correctly. “If your water content decreases
									in any particular body parts [such as skin,
									muscles, and organs], then the health of
									these specific parts of your body would
									decrease,” according to the Alkaline Water
									Plus article; “you'd look and feel less
									youthful and more aged.” Alkaline water is
									suggested as containing antioxidants to
									extensively hydrate and filter out free
									radicals in your body, hence, halting the
									aging process of cells by keeping them
									healthy.
								</p>
							</div>
						</div>
					</div>
				</Container>
			</section>
		</>
	);
};

export default page;
