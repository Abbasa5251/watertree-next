import React from "react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const Question = ({ question, answer }) => {
	return (
		<Accordion type="single" collapsible>
			<AccordionItem value="item-1">
				<AccordionTrigger className="hover:bg-slate-200 rounded-lg px-4 py-4">
					<div className="flex flex-row items-center justify-start text-left">
						<HelpCircle className="w-5 h-5 mr-4" />
						{question}
					</div>
				</AccordionTrigger>
				<AccordionContent className="px-4 py-4 text-base font-normal text-gray-900">
					{answer}
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
};

export default Question;
