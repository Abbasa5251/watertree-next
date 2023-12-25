import ContactForm from "@/components/ContactForm";
import Container from "@/components/Container";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/config/site";
import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const page = () => {
	return (
		<>
			<section className="sm:flex sm:justify-between">
				<Container className={"py-28"}>
					<div className="flex flex-col gap-16 items-center justify-center">
						<p className="text-center text-balance md:mx-36 mx-12">
							We appreciate your interest in WaterTree Jones road.
							Our bottled water, filtration, and pantry services
							have been in demand for decades. We look forward to
							hearing how we can provide quality products and
							excellent services to your home and business!
						</p>
						<div className="flex flex-col md:flex-row justify-between items-start mx-8 gap-5">
							{/* left content */}
							<div className="flex flex-col">
								<h1 className="text-xl font-bold text-blue-900 uppercase">
									Info
								</h1>
								<Separator
									orinetation="horizontal"
									className="w-1/2 bg-blue-200 mb-4"
								/>
								<div className="flex flex-row items-center justify-center gap-2 mb-4">
									<MapPin className="w-8 h-8 text-blue-900 hidden sm:block" />
									<p className="text-gray-900 font-medium text-base text-wrap max-w-80">
										{siteConfig.address}
									</p>
								</div>
								<div className="flex flex-row items-center justify-start gap-2 mb-4">
									<Phone className="w-8 h-8 text-blue-900 hidden sm:block" />
									<p className="text-gray-900 font-medium text-base">
										{siteConfig.contactNumber}
									</p>
								</div>
								<div className="flex flex-row items-center justify-start gap-2 mb-4">
									<Mail className="w-8 h-8 text-blue-900 hidden sm:block" />
									<p className="text-gray-900 font-medium text-base">
										{siteConfig.emailAddress}
									</p>
								</div>
							</div>
							{/* right content */}
							<div className="flex flex-col">
								<h1 className="text-xl font-bold text-blue-900 uppercase">
									Hydration Hours
								</h1>
								<Separator
									orinetation="horizontal"
									className="w-1/2 bg-blue-200 mb-4"
								/>
								<ul className="list-none">
									{siteConfig.workingHours.map((wh) => (
										<li
											key={wh.day}
											className="mb-2 text-base font-normal"
										>
											{wh.day}: {wh.hours}
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</Container>
			</section>
			<section className="bg-blue-50">
				<Container className={"py-28"}>
					<h1 className="text-center text-lg font-medium text-balance mx-12 md:mx-28 text-blue-900 mb-4">
						Fill out the form for sales, questions, refills or
						scheduling a visit to our store located at Jones road,
						Houston, TX.
					</h1>
					<ContactForm className="mx-12" />
				</Container>
			</section>
		</>
	);
};

export default page;
