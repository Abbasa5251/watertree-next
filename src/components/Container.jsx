import { cn } from "@/lib/utils";
import React from "react";

function Container({ children, className }) {
	return (
		<div className={cn("mx-auto w-full max-w-7xl", className)}>
			{children}
		</div>
	);
}

export default Container;
