import { cn } from "@/lib/utils";
import React from "react";

function Container({ children, className }) {
	return (
		<section className={cn("mx-auto w-full max-w-7xl", className)}>
			{children}
		</section>
	);
}

export default Container;
