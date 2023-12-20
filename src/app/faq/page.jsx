import Container from "@/components/Container";
import Question from "@/components/Question";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
	return (
		<main className="min-h-screen py-3 px-4 bg-white">
			<Container>
				<div className="flex flex-col items-center mb-20">
					<h1 className="text-blue-800 font-bold text-3xl uppercase mb-1">
						frequently asked questions
					</h1>
					<Separator
						orientation="horizontal"
						className="w-48 bg-blue-600 mb-3"
					/>
					<p className="font-semibold mb-4">
						Need a question answered?
					</p>
					<p className="font-medium">
						Browse our list of FAQs to find the answers that you are
						looking for.
					</p>
				</div>
				<div className="flex flex-col lg:flex-row gap-20">
					{/* faqs */}
					<div className="lg:basis-2/3 flex flex-col gap-y-3">
						{siteConfig.faqs.map((faq) => (
							<Question
								key={faq.answer}
								question={faq.question}
								answer={faq.answer}
							/>
						))}
					</div>
					{/* sidebar */}
					<div className="lg:basis-1/3">
						<h1 className="uppercase font-semibold mb-4">
							One More Question?
						</h1>
						<p className="mb-5">
							If you want to find out more about our products
							and/or services, or have any question or doubt, or
							need to contact a sales representative, please
							contact us.
						</p>
						<Button asChild variant="ghost">
							<Link
								href={"/contact"}
								className="text-lg font-semibold bg-blue-900 text-blue-100 transition-colors uppercase"
							>
								Contact us
							</Link>
						</Button>
					</div>
				</div>
			</Container>
		</main>
	);
}
