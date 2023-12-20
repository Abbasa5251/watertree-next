import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { ArrowLeftCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

const Error = () => {
	return (
		<section className="min-h-[32rem] bg-blue-100">
			<Container className="pt-64 flex flex-col gap-4 items-center justify-center text-center">
				<h1 class="uppercase tracking-widest font-semibold text-blue-900">
					404 | Not Found
				</h1>
				<Button
					asChild
					variant="ghost"
					className="text-blue-100 bg-blue-900"
				>
					<Link href="/">
						<ArrowLeftCircle className="w-6 h-6 mr-2" />
						Home
					</Link>
				</Button>
			</Container>
		</section>
	);
};

export default Error;
