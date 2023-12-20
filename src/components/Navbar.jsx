import React from "react";
import Link from "next/link";
import Container from "./Container";
import { siteConfig } from "@/config/site";
import { Button } from "./ui/button";
import { Menu, Phone } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Image from "next/image";

function Navbar({}) {
	return (
		<header className="sm:flex sm:justify-between py-3 px-4">
			<Container>
				<div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
					<div className="flex items-center">
						<Sheet>
							<SheetTrigger>
								<Menu className="h-6 w-6 md:hidden text-primary" />
							</SheetTrigger>
							<SheetContent
								side="left"
								className="w-[300px] sm:w-[400px]"
							>
								<nav className="flex flex-col gap-4 mt-14">
									{siteConfig.mainNav.map((route) => (
										<Button
											key={route.title}
											asChild
											variant="ghost"
										>
											<Link
												href={route.href}
												className="text-sm font-medium transition-colors"
											>
												{route.title}
											</Link>
										</Button>
									))}
								</nav>
							</SheetContent>
						</Sheet>
						<Link href={"/"} className="ml-4 lg:ml-0">
							<Image
								src="/logo-1.png"
								width={48}
								height={48}
								alt="Logo Image"
							/>
						</Link>
					</div>
					<nav className="mx-6 items-center space-x-4 lg:space-x-6 hidden md:block text-blue-900">
						{siteConfig.mainNav.map((route) => (
							<Button key={route.title} asChild variant="ghost">
								<Link
									href={route.href}
									className="text-lg font-semibold transition-colors hover:bg-blue-100"
								>
									{route.title}
								</Link>
							</Button>
						))}
					</nav>
					<div className="flex items-center space-x-3">
						<Button
							variant={"ghost"}
							size={"icon"}
							aria-label="Contact Us"
						>
							<Link href="/contact">
								<Phone className="h-6 w-6" />
								<span className="sr-only">contact</span>
							</Link>
						</Button>
					</div>
				</div>
			</Container>
		</header>
	);
}

export default Navbar;
