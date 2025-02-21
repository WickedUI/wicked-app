'use client';

import { ArrowRight, CheckCircle, ChevronRight, Code2, Github, Globe, Laptop, Layout, Linkedin, Mail, Menu, Moon, Sun, X } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function App() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [mounted, setMounted] = useState(false);

	// Handle initial dark mode setup after mount
	useEffect(() => {
		setMounted(true);
		const darkModeSetting = localStorage.getItem('darkMode');
		setIsDarkMode(darkModeSetting === 'true');
	}, []);

	// Handle dark mode changes
	useEffect(() => {
		if (mounted) {
			if (isDarkMode) {
				document.documentElement.classList.add('dark');
			} else {
				document.documentElement.classList.remove('dark');
			}
			localStorage.setItem('darkMode', isDarkMode.toString());
		}
	}, [isDarkMode, mounted]);

	const toggleDarkMode = () => {
		setIsDarkMode(!isDarkMode);
	};

	// Prevent flash of incorrect theme
	if (!mounted) {
		return null;
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const form = e.currentTarget;
		const formData = new FormData(form);
		const data = Object.fromEntries(formData.entries());

		// Create mailto link with form data
		const subject = encodeURIComponent('New Project Inquiry');
		const body = encodeURIComponent(`
Name: ${data.name}
Email: ${data.email}
Project Type: ${data.projectType}
Budget: ${data.budget}
Message: ${data.message}
		`);

		window.location.href = `mailto:contact@devcraft.com?subject=${subject}&body=${body}`;
	};

	return (
		<div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
			{/* Navigation */}
			<nav className={`fixed w-full backdrop-blur-sm z-50 border-b transition-colors duration-300 ${isDarkMode ? 'bg-gray-900/80 border-gray-700' : 'bg-white/80 border-gray-200'}`}>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between h-16 items-center">
						<div className="flex items-center">
							<Code2 className="h-8 w-8 text-indigo-600 animate-pulse" />
							<span className={`ml-2 text-xl font-bold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>DevCraft</span>
						</div>
						<div className="hidden md:flex items-center space-x-8">
							<a href="#services" className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300 hover:text-indigo-400' : 'text-gray-600 hover:text-indigo-600'}`}>Services</a>
							<a href="#process" className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300 hover:text-indigo-400' : 'text-gray-600 hover:text-indigo-600'}`}>Process</a>
							<a href="#work" className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300 hover:text-indigo-400' : 'text-gray-600 hover:text-indigo-600'}`}>Work</a>
							<a href="#testimonials" className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300 hover:text-indigo-400' : 'text-gray-600 hover:text-indigo-600'}`}>Testimonials</a>
							<a href="#contact" className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300 hover:text-indigo-400' : 'text-gray-600 hover:text-indigo-600'}`}>Contact</a>
							<button
								onClick={toggleDarkMode}
								className={`p-2 rounded-full transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}
							>
								{isDarkMode ? (
									<Sun className="h-5 w-5 text-yellow-500" />
								) : (
									<Moon className="h-5 w-5 text-gray-600" />
								)}
							</button>
						</div>
						<div className="md:hidden flex items-center space-x-4">
							<button
								onClick={toggleDarkMode}
								className={`p-2 rounded-full transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}
							>
								{isDarkMode ? (
									<Sun className="h-5 w-5 text-yellow-500" />
								) : (
									<Moon className="h-5 w-5 text-gray-600" />
								)}
							</button>
							<button onClick={() => setIsMenuOpen(!isMenuOpen)}>
								{isMenuOpen ? (
									<X className={`h-6 w-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} />
								) : (
									<Menu className={`h-6 w-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} />
								)}
							</button>
						</div>
					</div>
				</div>
				{/* Mobile menu */}
				{isMenuOpen && (
					<div className={`md:hidden transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'} border-b`}>
						<div className="px-4 py-2 space-y-1">
							<a href="#services" className={`block py-2 transition-colors duration-300 ${isDarkMode ? 'text-gray-300 hover:text-indigo-400' : 'text-gray-600 hover:text-indigo-600'}`} onClick={() => setIsMenuOpen(false)}>Services</a>
							<a href="#process" className={`block py-2 transition-colors duration-300 ${isDarkMode ? 'text-gray-300 hover:text-indigo-400' : 'text-gray-600 hover:text-indigo-600'}`} onClick={() => setIsMenuOpen(false)}>Process</a>
							<a href="#work" className={`block py-2 transition-colors duration-300 ${isDarkMode ? 'text-gray-300 hover:text-indigo-400' : 'text-gray-600 hover:text-indigo-600'}`} onClick={() => setIsMenuOpen(false)}>Work</a>
							<a href="#testimonials" className={`block py-2 transition-colors duration-300 ${isDarkMode ? 'text-gray-300 hover:text-indigo-400' : 'text-gray-600 hover:text-indigo-600'}`} onClick={() => setIsMenuOpen(false)}>Testimonials</a>
							<a href="#contact" className={`block py-2 transition-colors duration-300 ${isDarkMode ? 'text-gray-300 hover:text-indigo-400' : 'text-gray-600 hover:text-indigo-600'}`} onClick={() => setIsMenuOpen(false)}>Contact</a>
						</div>
					</div>
				)}
			</nav>

			{/* Hero Section */}
			<section className={`relative pt-32 pb-20 overflow-hidden transition-colors duration-300 ${isDarkMode ? 'bg-gradient-to-b from-gray-800 to-gray-900' : 'bg-gradient-to-b from-indigo-50 to-white'}`}>
				<div className={`absolute inset-0 transition-opacity duration-300 ${isDarkMode ? 'bg-[radial-gradient(circle_at_30%_50%,rgba(99,102,241,0.1),transparent)] opacity-30' : 'bg-[radial-gradient(circle_at_30%_50%,rgba(99,102,241,0.1),transparent)] opacity-100'}`}></div>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
					<div className="text-center">
						<div className={`inline-flex items-center space-x-2 backdrop-blur-sm px-4 py-2 rounded-full border transition-colors duration-300 ${isDarkMode ? 'bg-gray-800/80 border-gray-700' : 'bg-white/80 border-gray-200'}`}>
							<CheckCircle className="h-5 w-5 text-green-500 animate-bounce" />
							<span className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Available for new projects</span>
						</div>
						<h1 className={`text-4xl md:text-6xl font-bold mb-6 mt-8 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
							Building Digital <span className="text-indigo-600 animate-pulse">Excellence</span>
						</h1>
						<p className={`text-xl mb-8 max-w-2xl mx-auto transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
							We craft exceptional websites, powerful applications, and scalable platforms that drive business growth and transform ideas into reality.
						</p>
						<div className="flex flex-col sm:flex-row justify-center gap-4">
							<a
								href="#contact"
								className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105"
							>
								Start Your Project
								<ChevronRight className="ml-2 h-5 w-5" />
							</a>
							<a
								href="#work"
								className={`inline-flex items-center px-6 py-3 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 ${isDarkMode ? 'bg-gray-800 text-indigo-400 hover:bg-gray-700 border-gray-700' : 'bg-white text-indigo-600 hover:bg-indigo-50 border-indigo-200'} border`}
							>
								View Our Work
								<ArrowRight className="ml-2 h-5 w-5" />
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section id="services" className={`py-20 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className={`text-3xl font-bold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Our Services</h2>
						<p className={`max-w-2xl mx-auto transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
							We offer comprehensive digital solutions tailored to your business needs, from custom web development to enterprise-level platforms.
						</p>
					</div>
					<div className="grid md:grid-cols-3 gap-8">
						{[
							{
								icon: Globe,
								title: "Website Development",
								description: "Custom websites that are fast, responsive, and optimized for search engines.",
								features: ["Responsive Design", "SEO Optimization", "Performance Focused"]
							},
							{
								icon: Layout,
								title: "Web Applications",
								description: "Powerful web applications that solve complex business challenges.",
								features: ["Custom Solutions", "Scalable Architecture", "Secure Development"]
							},
							{
								icon: Laptop,
								title: "Business Platforms",
								description: "Scalable platforms that streamline operations and boost efficiency.",
								features: ["Enterprise Solutions", "Cloud Integration", "API Development"]
							}
						].map((service, index) => (
							<div
								key={index}
								className={`p-8 rounded-xl transition-all duration-300 transform hover:scale-105 ${isDarkMode
									? 'bg-gray-800 border-gray-700 hover:shadow-lg hover:shadow-indigo-500/20'
									: 'bg-white border-gray-200 hover:shadow-xl'
									} border`}
							>
								<service.icon className="h-12 w-12 text-indigo-600 mb-6 transform transition-transform duration-300 hover:scale-110" />
								<h3 className={`text-xl font-semibold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{service.title}</h3>
								<p className={`mb-6 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{service.description}</p>
								<ul className="space-y-2">
									{service.features.map((feature, featureIndex) => (
										<li key={featureIndex} className="flex items-center">
											<CheckCircle className="h-5 w-5 text-green-500 mr-2" />
											<span className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{feature}</span>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Process Section */}
			<section id="process" className={`py-20 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className={`text-3xl font-bold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Our Process</h2>
						<p className={`max-w-2xl mx-auto transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
							We follow a proven development process to ensure your project is delivered on time and exceeds expectations.
						</p>
					</div>
					<div className="grid md:grid-cols-4 gap-8">
						{[
							{
								number: '01',
								title: 'Discovery',
								description: 'We start by understanding your business goals and project requirements.'
							},
							{
								number: '02',
								title: 'Planning',
								description: 'Detailed project planning and architecture design for optimal results.'
							},
							{
								number: '03',
								title: 'Development',
								description: 'Agile development process with regular updates and feedback.'
							},
							{
								number: '04',
								title: 'Launch',
								description: 'Thorough testing and smooth deployment to production.'
							}
						].map((step, index) => (
							<div key={index} className="relative">
								<div className={`p-6 rounded-xl h-full transition-all duration-300 transform hover:scale-105 ${isDarkMode
									? 'bg-gray-900 border-gray-700'
									: 'bg-white border-gray-200'
									} border`}>
									<div className="text-4xl font-bold text-indigo-600/20 mb-4">{step.number}</div>
									<h3 className={`text-xl font-semibold mb-2 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{step.title}</h3>
									<p className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{step.description}</p>
								</div>
								{index < 3 && (
									<div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
										<ArrowRight className="h-6 w-6 text-indigo-600 animate-pulse" />
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Work Section */}
			<section id="work" className={`py-20 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className={`text-3xl font-bold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Featured Work</h2>
						<p className={`max-w-2xl mx-auto transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
							Explore our latest projects and see how we&#39;ve helped businesses achieve their digital goals.
						</p>
					</div>
					<div className="grid md:grid-cols-2 gap-8">
						<div className="group relative overflow-hidden rounded-xl transform transition-all duration-300 hover:scale-105">
							<Image
								src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800"
								alt="E-commerce Platform"
								width={800}
								height={600}
								className="w-full h-80 object-cover transform transition duration-500 group-hover:scale-110"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
								<div className="absolute bottom-0 left-0 right-0 p-8">
									<h3 className="text-2xl font-semibold text-white mb-2">E-commerce Platform</h3>
									<p className="text-gray-200 mb-4">Custom shopping experience with advanced features and seamless payment integration.</p>
									<a href="#contact" className="inline-flex items-center text-white hover:text-indigo-200 transition">
										View Case Study
										<ArrowRight className="ml-2 h-5 w-5" />
									</a>
								</div>
							</div>
						</div>
						<div className="group relative overflow-hidden rounded-xl transform transition-all duration-300 hover:scale-105">
							<Image
								src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800"
								alt="Business Dashboard"
								width={800}
								height={600}
								className="w-full h-80 object-cover transform transition duration-500 group-hover:scale-110"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
								<div className="absolute bottom-0 left-0 right-0 p-8">
									<h3 className="text-2xl font-semibold text-white mb-2">Business Dashboard</h3>
									<p className="text-gray-200 mb-4">Real-time analytics and reporting system with intuitive data visualization.</p>
									<a href="#contact" className="inline-flex items-center text-white hover:text-indigo-200 transition">
										View Case Study
										<ArrowRight className="ml-2 h-5 w-5" />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section id="testimonials" className={`py-20 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className={`text-3xl font-bold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Client Testimonials</h2>
						<p className={`max-w-2xl mx-auto transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
							Don&apos;t just take our word for it - hear what our clients have to say about working with us.
						</p>
					</div>
					<div className="grid md:grid-cols-3 gap-8">
						{[
							{
								quote: "Working with DevCraft was a game-changer for our business. They delivered a stunning website that exceeded our expectations.",
								author: "Sarah Johnson",
								role: "CEO, TechStart",
								image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200"
							},
							{
								quote: "The team's technical expertise and attention to detail made our project a huge success. Highly recommended!",
								author: "Michael Chen",
								role: "CTO, InnovateCo",
								image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200"
							},
							{
								quote: "Professional, responsive, and delivered exactly what we needed. Our new platform has transformed our operations.",
								author: "Emily Rodriguez",
								role: "Director, GlobalTech",
								image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200"
							}
						].map((testimonial, index) => (
							<div
								key={index}
								className={`p-8 rounded-xl transition-all duration-300 transform hover:scale-105 ${isDarkMode
									? 'bg-gray-900 border-gray-700'
									: 'bg-white border-gray-200'
									} border`}
							>
								<div className="flex items-center mb-6">
									<Image
										src={testimonial.image}
										alt={testimonial.author}
										width={200}
										height={200}
										className="w-12 h-12 rounded-full object-cover mr-4"
									/>
									<div>
										<h4 className={`font-semibold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{testimonial.author}</h4>
										<p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{testimonial.role}</p>
									</div>
								</div>
								<p className={`italic transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>&quot;{testimonial.quote}&quot;</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Contact Section with Form */}
			<section id="contact" className={`py-20 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="max-w-2xl mx-auto">
						<div className="text-center mb-16">
							<h2 className={`text-3xl font-bold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Let&apos;s Work Together</h2>
							<p className={`mb-8 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
								Ready to start your next project? Fill out the form below or get in touch with us directly.
							</p>
						</div>

						<form onSubmit={handleSubmit} className="space-y-6">
							<div className="grid grid-cols-1 gap-6">
								<div>
									<label htmlFor="name" className={`block text-sm font-medium mb-2 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
										Name
									</label>
									<input
										type="text"
										name="name"
										id="name"
										required
										className={`w-full px-4 py-2 rounded-lg border transition-colors duration-300 focus:ring-2 focus:ring-indigo-500 ${isDarkMode
											? 'bg-gray-800 border-gray-700 text-white'
											: 'bg-white border-gray-300 text-gray-900'
											}`}
									/>
								</div>
								<div>
									<label htmlFor="email" className={`block text-sm font-medium mb-2 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
										Email
									</label>
									<input
										type="email"
										name="email"
										id="email"
										required
										className={`w-full px-4 py-2 rounded-lg border transition-colors duration-300 focus:ring-2 focus:ring-indigo-500 ${isDarkMode
											? 'bg-gray-800 border-gray-700 text-white'
											: 'bg-white border-gray-300 text-gray-900'
											}`}
									/>
								</div>
								<div>
									<label htmlFor="projectType" className={`block text-sm font-medium mb-2 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
										Project Type
									</label>
									<select
										name="projectType"
										id="projectType"
										required
										className={`w-full px-4 py-2 rounded-lg border transition-colors duration-300 focus:ring-2 focus:ring-indigo-500 ${isDarkMode
											? 'bg-gray-800 border-gray-700 text-white'
											: 'bg-white border-gray-300 text-gray-900'
											}`}
									>
										<option value="">Select a project type</option>
										<option value="Website">Website</option>
										<option value="Web Application">Web Application</option>
										<option value="Business Platform">Business Platform</option>
										<option value="Other">Other</option>
									</select>
								</div>
								<div>
									<label htmlFor="budget" className={`block text-sm font-medium mb-2 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
										Budget Range
									</label>
									<select
										name="budget"
										id="budget"
										required
										className={`w-full px-4 py-2 rounded-lg border transition-colors duration-300 focus:ring-2 focus:ring-indigo-500 ${isDarkMode
											? 'bg-gray-800 border-gray-700 text-white'
											: 'bg-white border-gray-300 text-gray-900'
											}`}
									>
										<option value="">Select a budget range</option>
										<option value="$500 - $1,000">$500 - $1,000</option>
										<option value="$1,000 - $5,000">$1,000 - $5,000</option>
										<option value="$5,000 - $10,000">$5,000 - $10,000</option>
										<option value="$10,000 - $25,000">$10,000 - $25,000</option>
										<option value="$25,000 - $50,000">$25,000 - $50,000</option>
										<option value="$50,000+">$50,000+</option>
									</select>
								</div>
								<div>
									<label htmlFor="message" className={`block text-sm font-medium mb-2 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
										Project Details
									</label>
									<textarea
										name="message"
										id="message"
										rows={4}
										required
										className={`w-full px-4 py-2 rounded-lg border transition-colors duration-300 focus:ring-2 focus:ring-indigo-500 ${isDarkMode
											? 'bg-gray-800 border-gray-700 text-white'
											: 'bg-white border-gray-300 text-gray-900'
											}`}
									></textarea>
								</div>
							</div>
							<div className="flex justify-center">
								<button
									type="submit"
									className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105"
								>
									Send Message
									<ArrowRight className="ml-2 h-5 w-5" />
								</button>
							</div>
						</form>

						<div className="mt-12 flex justify-center space-x-6">
							<a
								href="mailto:contact@devcraft.com"
								className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
									} group`}
							>
								<Mail className={`h-6 w-6 ${isDarkMode ? 'text-gray-300 group-hover:text-indigo-400' : 'text-gray-700 group-hover:text- indigo-600'}`} />
							</a>
							<a
								href="https://github.com"
								className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
									} group`}
								target="_blank"
								rel="noopener noreferrer"
							>
								<Github className={`h-6 w-6 ${isDarkMode ? 'text-gray-300 group-hover:text-indigo-400' : 'text-gray-700 group-hover:text-indigo-600'}`} />
							</a>
							<a
								href="https://linkedin.com"
								className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
									} group`}
								target="_blank"
								rel="noopener noreferrer"
							>
								<Linkedin className={`h-6 w-6 ${isDarkMode ? 'text-gray-300 group-hover:text-indigo-400' : 'text-gray-700 group-hover:text-indigo-600'}`} />
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className={`py-12 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid md:grid-cols-4 gap-8 mb-8">
						<div>
							<div className="flex items-center mb-4">
								<Code2 className="h-6 w-6 text-indigo-600" />
								<span className={`ml-2 text-xl font-bold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>DevCraft</span>
							</div>
							<p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
								Crafting exceptional digital experiences for forward-thinking businesses.
							</p>
						</div>
						<div>
							<h4 className={`font-semibold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Services</h4>
							<ul className="space-y-2 text-sm">
								<li><a href="#services" className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300 hover:text-indigo-400' : 'text-gray-600 hover:text-indigo-600'}`}>Website Development</a></li>
								<li><a href="#services" className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300 hover:text-indigo-400' : 'text-gray-600 hover:text-indigo-600'}`}>Web Applications</a></li>
								<li><a href="#services" className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300 hover:text-indigo-400' : 'text-gray-600 hover:text-indigo-600'}`}>Business Platforms</a></li>
							</ul>
						</div>
						<div>
							<h4 className={`font-semibold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Company</h4>
							<ul className="space-y-2 text-sm">
								<li><a href="#process" className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300 hover:text-indigo-400' : 'text-gray-600 hover:text-indigo-600'}`}>Our Process</a></li>
								<li><a href="#work" className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300 hover:text-indigo-400' : 'text-gray-600 hover:text-indigo-600'}`}>Work</a></li>
								<li><a href="#testimonials" className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300 hover:text-indigo-400' : 'text-gray-600 hover:text-indigo-600'}`}>Testimonials</a></li>
							</ul>
						</div>
						<div>
							<h4 className={`font-semibold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Contact</h4>
							<ul className="space-y-2 text-sm">
								<li><a href="mailto:contact@devcraft.com" className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300 hover:text-indigo-400' : 'text-gray-600 hover:text-indigo-600'}`}>contact@devcraft.com</a></li>
								<li><a href="tel:+1234567890" className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300 hover:text-indigo-400' : 'text-gray-600 hover:text-indigo-600'}`}>+1 (234) 567-890</a></li>
							</ul>
						</div>
					</div>
					<div className={`border-t pt-8 transition-colors duration-300 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
						<p className={`text-sm text-center transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>© 2025 DevCraft. All rights reserved.</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
