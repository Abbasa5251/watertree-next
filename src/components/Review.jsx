"use client";
import React, { useState } from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./ui/card";
import { CircleUserRound, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const Review = ({ review }) => {
	const [isExpanded, setIsExpanded] = useState(false);
	const isContentLong = review.content.length > 100;

	const toggleExpand = () => {
		setIsExpanded(!isExpanded);
	};

	return (
		<Card className="w-[28rem] border-stone-400">
			<CardHeader>
				<div className="flex items-center justify-between">
					<CardTitle className="flex justify-center items-center gap-x-2">
						<CircleUserRound className="h-8 w-8 hidden md:inline-block" />
						<span className="capitalize text-blue-900 font-medium">
							{review.name.toLowerCase()}
						</span>
					</CardTitle>
					<CardDescription>
						<p className="flex">
							{[...Array(5)].map((_, index) => {
								return index < review.stars ? (
									<Star
										className="text-yellow-500 fill-yellow-400 w-5 h-5"
										key={index}
									/>
								) : (
									<Star
										className="text-gray-300 w-5 h-5"
										key={index}
									/>
								);
							})}
						</p>
					</CardDescription>
				</div>
			</CardHeader>
			<CardContent>
				<p
					className={cn(
						"prose prose-stone text-ellipsis overflow-hidden",
						{
							"line-clamp-2": !isExpanded || !isContentLong,
						}
					)}
				>
					{review.content}
				</p>
			</CardContent>
			{isContentLong && (
				<CardFooter
					className="text-blue-500 hover:text-blue-700 text-sm cursor-pointer"
					onClick={toggleExpand}
				>
					{isExpanded ? "Read less" : "Read more"}
				</CardFooter>
			)}
		</Card>
	);
};

export default Review;
