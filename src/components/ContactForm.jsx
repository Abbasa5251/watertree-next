"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { isValidPhoneNumber } from "libphonenumber-js";
import * as z from "zod";
import Image from "next/image";

import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Country, State, City } from "country-state-city";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./ui/select";
import { useToast } from "@/components/ui/use-toast";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
	firstName: z
		.string()
		.max(50, {
			message: "First name must be at most 50 characters.",
		})
		.refine((val) => val.trim().length > 0, {
			message: "First name is required",
		}),
	lastName: z
		.string()
		.max(50, {
			message: "Last name must be at most 50 characters.",
		})
		.refine((val) => val.trim().length > 0, {
			message: "Last name is required",
		}),
	email: z.string().email(),
	phone: z.string().refine((data) => isValidPhoneNumber(data), {
		message: "Invalid phone number",
	}),
	country: z.string(),
	state: z.string().optional(),
	city: z.string().optional(),
	zipCode: z.string().optional(),
	service: z.string().optional(),
	message: z.string().optional(),
});

const ContactForm = ({ className }) => {
	const [countries, setCountries] = useState([]);
	const [states, setStates] = useState([]);
	const [cities, setCities] = useState([]);
	const form = useForm({
		resolver: zodResolver(formSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			phone: "",
			country: "US",
			state: "",
			city: "",
			zipCode: "",
			service: "",
			message: "",
		},
	});
	const { toast } = useToast();

	useEffect(() => {
		setCountries(Country.getAllCountries());
	}, []);

	useEffect(() => {
		if (form.getValues("country")) {
			setStates(State.getStatesOfCountry(form.getValues("country")));
		}
	}, [form.getValues("country")]);

	useEffect(() => {
		if (form.getValues("state") && form.getValues("country")) {
			setCities(
				City.getCitiesOfState(
					form.getValues("country"),
					form.getValues("state")
				)
			);
		}
	}, [form.getValues("state"), form.getValues("country")]);

	const getFlagImageUrl = (isoCode) => {
		return `https://cdn.ipregistry.co/flags/emojitwo/${isoCode.toLowerCase()}.svg`; // Example flag image URL
	};

	function onSubmit(values) {
		toast({
			title: "Success",
			description: "Your form has been submitted successfully",
		});
		console.log(values);
		form.reset();
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className={cn("space-y-4", className)}
			>
				<div className="md:flex md:flex-row items-start justify-between gap-4 mb-2 space-y-4 md:space-y-0">
					<FormField
						control={form.control}
						name="firstName"
						render={({ field }) => (
							<FormItem className="w-full">
								<FormLabel>
									First Name
									<span className="text-red-500">*</span>
								</FormLabel>
								<FormControl>
									<Input placeholder="John" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="lastName"
						render={({ field }) => (
							<FormItem className="w-full">
								<FormLabel>
									Last Name
									<span className="text-red-500">*</span>
								</FormLabel>
								<FormControl>
									<Input placeholder="Doe" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<div className="md:flex md:flex-row items-start justify-between gap-4 space-y-4 md:space-y-0">
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem className="w-full">
								<FormLabel>
									Email address
									<span className="text-red-500">*</span>
								</FormLabel>
								<FormControl>
									<Input
										placeholder="john.doe@gmail.com"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="phone"
						render={({ field }) => (
							<FormItem className="w-full">
								<FormLabel>
									Phone Number
									<span className="text-red-500">*</span>
								</FormLabel>
								<FormControl>
									<Input
										placeholder="+13034118908"
										{...field}
									/>
								</FormControl>
								<FormDescription>
									Enter the phone number along with country
									code (+1).
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<div className="md:flex md:flex-row items-start justify-between gap-4 space-y-4 md:space-y-0">
					<FormField
						control={form.control}
						name="country"
						render={({ field }) => (
							<FormItem className="w-full">
								<FormLabel>Country</FormLabel>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}
								>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder="Select a Country" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										{countries &&
											countries.map((country) => (
												<SelectItem
													key={country.isoCode}
													value={country.isoCode}
												>
													<div className="flex items-center justify-center gap-x-3">
														<Image
															src={getFlagImageUrl(
																country.isoCode
															)}
															height={18}
															width={18}
															alt={country.name}
														/>
														<span>
															{country.name}
														</span>
													</div>
												</SelectItem>
											))}
									</SelectContent>
								</Select>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="state"
						render={({ field }) => (
							<FormItem className="w-full">
								<FormLabel>State</FormLabel>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}
								>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder="Select a State" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										{states &&
											states.map((state) => (
												<SelectItem
													key={state.isoCode}
													value={state.isoCode}
												>
													{state.name}
												</SelectItem>
											))}
									</SelectContent>
								</Select>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<div className="md:flex md:flex-row items-start justify-between gap-4 space-y-4 md:space-y-0">
					<FormField
						control={form.control}
						name="city"
						render={({ field }) => (
							<FormItem className="w-full">
								<FormLabel>City</FormLabel>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}
								>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder="Select a City" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										{cities &&
											cities.map((city) => (
												<SelectItem
													key={city.name}
													value={city.name}
												>
													{city.name}
												</SelectItem>
											))}
									</SelectContent>
								</Select>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="zipCode"
						render={({ field }) => (
							<FormItem className="w-full">
								<FormLabel>Zip Code</FormLabel>
								<FormControl>
									<Input placeholder="Zip code" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<FormField
					control={form.control}
					name="service"
					render={({ field }) => (
						<FormItem className="w-full">
							<FormLabel>Service of interest</FormLabel>
							<Select
								onValueChange={field.onChange}
								defaultValue={field.value}
							>
								<FormControl>
									<SelectTrigger>
										<SelectValue placeholder="Select a Service" />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									<SelectItem value="refill">
										Refill or Buy Alkaline Water
									</SelectItem>
									<SelectItem value="products">
										Alkaline Water Products
									</SelectItem>
									<SelectItem value="filtration">
										Water Filtration System
									</SelectItem>
								</SelectContent>
							</Select>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="message"
					render={({ field }) => (
						<FormItem className="w-full">
							<FormLabel>Message</FormLabel>
							<FormControl>
								<Textarea
									placeholder="Write your message (optional)"
									className="resize-y"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit">Submit</Button>
			</form>
		</Form>
	);
};

export default ContactForm;
