export const siteConfig = {
	name: "The Watertree Jones Road",
	description: "Jones Road Alkaline Water Tree Store",
	address: "12220 Jones Rd Suite D, Houston, TX 77070",
	contactNumber: "+1(281)790-4151",
	emailAddress: "watertreejonesrd@gmail.com",
	workingHours: [
		{
			day: "Mon",
			hours: "10:00 AM - 7:00 PM",
		},
		{
			day: "Tue",
			hours: "10:00 AM - 7:00 PM",
		},
		{
			day: "Wed",
			hours: "10:00 AM - 7:00 PM",
		},
		{
			day: "Thur",
			hours: "10:00 AM - 7:00 PM",
		},
		{
			day: "Fri",
			hours: "10:00 AM - 7:00 PM",
		},
		{
			day: "Sat",
			hours: "10:00 AM - 7:00 PM",
		},
		{
			day: "Sun",
			hours: "Closed",
		},
	],
	mainNav: [
		{
			href: "/",
			title: "Home",
			subMenu: false,
		},
		{
			href: "/why-alkaline-water",
			title: "Why Alkaline Water?",
			subMenu: false,
		},
		{
			href: "/products",
			title: "Products",
			subMenu: true,
			subMenuItems: [
				{
					title: "Alkaline Bottled Water",
					href: "/products",
				},
				{
					title: "Alkaline Water Products",
					href: "/products/water-products",
				},
				{
					title: "Water Filtration System",
					href: "/products/water-filtration",
				},
			],
		},
		{
			href: "/testimonials",
			title: "Testimonials",
			subMenu: false,
		},
		{
			href: "/faq",
			title: "FAQs",
			subMenu: false,
		},
	],
	links: {
		twitter: "https://twitter.com/shadcn",
		github: "https://github.com/shadcn/ui",
		docs: "https://ui.shadcn.com",
	},
	faqs: [
		{
			question: "Can I Heat or Boil the Alkaline Water?",
			answer: "Yes, the alkaline water can be heated and even boiled. The alkaline and antioxidant properties diminish slightly. The evaporation in the boiling process will naturally cause the loss of some minerals.",
		},
		{
			question: "Can I Microwave the Alkaline Water?",
			answer: "Yes, the alkaline water can be heated and even boiled. The alkaline and anti- oxidant properties diminish slightly. The evaporation in the boiling process will naturally cause the loss of some minerals.",
		},
		{
			question:
				"I have Health Issues, Should I have concerns about Drinking Alkaline Water?",
			answer: "If you have health issues we recommend you consult your physician before adding anything to your healing routine. If you are taking medication, do not take them with alkaline water and wait thirty (30) minutes before and after taking your medication to drink alkaline water. The properties of the alkaline water could increase the absorption rate of your prescribed medications.",
		},
		{
			question:
				"Does the Alkaline or Antioxidant properties of the water Diminish over time?",
			answer: "As long as the water remains in a sealed container, it will retain its alkaline properties for up to one year, and its antioxidant properties for up to one month. Water in an opened container will begin to slowly lose its alkaline and antioxidant properties; the pH after three days. Exposing the water to the sun (UV rays) will also reduce its properties.",
		},
		{
			question: "Does this Alkaline water have Medicinal properties?",
			answer: "This alkaline water is not curative and does not have medicinal properties. The water properties, such as the smaller clustering of the water molecules, allows for a faster and higher absorption rate in the cells. This can aid the body to function better and do what it was created to do more effectively.",
		},
		{
			question:
				"If I have health Issues, Do I need to have concerns about driking Alkaline water?",
			answer: "If you have health issues we recommend you consult your physician before adding anything to your healing routine. If you are taking medication, do not take them with alkaline water and wait thirty (30) minutes before and after taking your medication to drink alkaline water. The properties of the alkaline water could increase the absorption rate of your prescribed medications.",
		},
		{
			question:
				"Do the Alkaline/Antioxidant properties of the water Diminsh?",
			answer: "As long as the water remains in a sealed container, it will retain its alkaline properties for up to one year, and its antioxidant properties for up to one month. Water in an opened container will begin to slowly lose its alkaline and antioxidant properties; the pH after three days. Exposing the water to the sun (UV rays) will also reduce its properties.",
		},
	],
};
