"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
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
		.min(2, {
			message: "Username must be at least 2 characters.",
		})
		.max(50, {
			message: "Username must be at most 50 characters.",
		}),
	lastName: z
		.string()
		.min(2, {
			message: "Username must be at least 2 characters.",
		})
		.max(50, {
			message: "Username must be at most 50 characters.",
		}),
	email: z.string().email(),
	country: z.string().optional(),
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
			country: "",
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
				className={cn("space-y-8", className)}
			>
				<FormField
					control={form.control}
					name="firstName"
					render={({ field }) => (
						<FormItem>
							<FormLabel>First Name</FormLabel>
							<FormControl>
								<Input placeholder="John" {...field} />
							</FormControl>
							{/* <FormDescription>
								This is your public display name.
							</FormDescription> */}
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="lastName"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Last Name</FormLabel>
							<FormControl>
								<Input placeholder="Doe" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email address</FormLabel>
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
					name="country"
					render={({ field }) => (
						<FormItem>
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
												{country.name}
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
						<FormItem>
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
				<FormField
					control={form.control}
					name="city"
					render={({ field }) => (
						<FormItem>
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
						<FormItem>
							<FormLabel>Zip Code</FormLabel>
							<FormControl>
								<Input placeholder="Zip code" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="service"
					render={({ field }) => (
						<FormItem>
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
						<FormItem>
							<FormLabel>Message</FormLabel>
							<FormControl>
								<Textarea
									placeholder="Write your message"
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
