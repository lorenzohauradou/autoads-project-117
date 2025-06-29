'use client'

import React from "react"
import Image from "next/image"
import { Star, Shield, Truck, RotateCcw, Heart, Share2, Plus, Minus, Check, Sparkles, Volume2, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProductPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <Image
                                src="/placeholder-logo.png"
                                alt="Logo"
                                width={32}
                                height={32}
                                className="h-8 w-8"
                            />
                            <span className="font-semibold text-xl">MARMARA BARBER</span>
                        </div>
                        <nav className="hidden md:flex items-center space-x-8">
                            <span className="text-sm font-medium text-slate-600 hover:text-slate-900 cursor-pointer transition-colors">
                                Products
                            </span>
                            <span className="text-sm font-medium text-slate-600 hover:text-slate-900 cursor-pointer transition-colors">
                                Professional
                            </span>
                            <span className="text-sm font-medium text-slate-600 hover:text-slate-900 cursor-pointer transition-colors">
                                About
                            </span>
                        </nav>
                        <div className="flex items-center space-x-3">
                            <Button variant="ghost" size="sm" className="hidden sm:flex">
                                <Heart className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="hidden sm:flex">
                                <Share2 className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Product Section */}
            <section className="py-8 sm:py-12 lg:py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 max-w-7xl mx-auto">
                        {/* Product Images */}
                        <div className="space-y-4">
                            <div className="aspect-square bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl overflow-hidden shadow-sm">
                                <Image
                                    src="https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/45e117e1-f793-4dc6-9763-4545ccc059af.jpg?"
                                    alt="MARMARA BARBER Powder Wax - Professional Hair Styling Product"
                                    width={600}
                                    height={600}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="grid grid-cols-4 gap-3">
                                <div className="aspect-square bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl overflow-hidden cursor-pointer hover:ring-2 hover:ring-slate-300 hover:scale-105 transition-all duration-200">
                                    <Image
                                        src="https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/da4d3059-80b3-4735-b27b-cbe91a43f35c.jpg?"
                                        alt="MARMARA BARBER Powder Wax - Product Details"
                                        width={150}
                                        height={150}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="aspect-square bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl overflow-hidden cursor-pointer hover:ring-2 hover:ring-slate-300 hover:scale-105 transition-all duration-200">
                                    <Image
                                        src="https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/73e66132-e2c9-4658-8976-f2b7cb8f051f.jpg?"
                                        alt="MARMARA BARBER Powder Wax - Texture View"
                                        width={150}
                                        height={150}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="aspect-square bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl overflow-hidden cursor-pointer hover:ring-2 hover:ring-slate-300 hover:scale-105 transition-all duration-200">
                                    <Image
                                        src="https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/45e117e1-f793-4dc6-9763-4545ccc059af.jpg?"
                                        alt="MARMARA BARBER Powder Wax - Application"
                                        width={150}
                                        height={150}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="aspect-square bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl overflow-hidden cursor-pointer hover:ring-2 hover:ring-slate-300 hover:scale-105 transition-all duration-200">
                                    <Image
                                        src="https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/da4d3059-80b3-4735-b27b-cbe91a43f35c.jpg?"
                                        alt="MARMARA BARBER Powder Wax - Professional Use"
                                        width={150}
                                        height={150}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="space-y-6 lg:space-y-8">
                            <div className="space-y-4">
                                <Badge variant="secondary" className="text-xs font-medium">
                                    🔥 Professional Choice
                                </Badge>
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                                    MARMARA BARBER Powder Wax
                                </h1>
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                    <span className="text-sm text-slate-600 font-medium">(1,847 reviews)</span>
                                </div>
                                <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                                    Transform your styling game with our revolutionary powder-to-wax formula. Delivers instant volume and lasting hold with a natural matte finish - backed by 50+ years of barbering excellence.
                                </p>
                            </div>

                            {/* Price */}
                            <div className="space-y-3">
                                <div className="flex items-baseline gap-4">
                                    <span className="text-4xl font-bold text-slate-900">$19.99</span>
                                    <span className="text-xl text-slate-500 line-through">$24.99</span>
                                    <Badge variant="destructive" className="text-sm font-semibold">
                                        20% OFF
                                    </Badge>
                                </div>
                                <p className="text-sm font-medium text-green-600 flex items-center gap-2">
                                    <Check className="h-4 w-4" />
                                    In stock - Ships within 24 hours
                                </p>
                            </div>

                            {/* Key Features */}
                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    { icon: Sparkles, text: "Zero Residue" },
                                    { icon: Volume2, text: "Instant Volume" },
                                    { icon: RefreshCw, text: "Re-workable" },
                                    { icon: Shield, text: "Since 1970" },
                                ].map((feature, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors"
                                    >
                                        <feature.icon className="h-5 w-5 text-slate-700" />
                                        <span className="font-medium text-sm">{feature.text}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Quantity & Add to Cart */}
                            <div className="space-y-5">
                                <div className="flex items-center gap-4">
                                    <span className="font-medium text-slate-700">Quantity:</span>
                                    <div className="flex items-center border-2 border-slate-200 rounded-xl overflow-hidden">
                                        <Button variant="ghost" size="sm" className="h-12 w-12 p-0 hover:bg-slate-100">
                                            <Minus className="h-4 w-4" />
                                        </Button>
                                        <span className="px-6 py-3 min-w-[4rem] text-center font-medium">1</span>
                                        <Button variant="ghost" size="sm" className="h-12 w-12 p-0 hover:bg-slate-100">
                                            <Plus className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <Button
                                        size="lg"
                                        className="w-full h-14 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                                    >
                                        Elevate Your Style Game - $19.99
                                    </Button>
                                    <Button variant="outline" size="lg" className="w-full h-14 text-lg font-semibold rounded-xl border-2">
                                        Experience Salon-Grade Results
                                    </Button>
                                </div>
                            </div>

                            {/* Trust Signals */}
                            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200">
                                <div className="text-center space-y-2">
                                    <Truck className="h-7 w-7 mx-auto text-slate-600" />
                                    <div>
                                        <p className="text-sm font-semibold">Free Shipping</p>
                                        <p className="text-xs text-slate-500">Orders over $25</p>
                                    </div>
                                </div>
                                <div className="text-center space-y-2">
                                    <RotateCcw className="h-7 w-7 mx-auto text-slate-600" />
                                    <div>
                                        <p className="text-sm font-semibold">30-Day Returns</p>
                                        <p className="text-xs text-slate-500">Satisfaction guaranteed</p>
                                    </div>
                                </div>
                                <div className="text-center space-y-2">
                                    <Shield className="h-7 w-7 mx-auto text-slate-600" />
                                    <div>
                                        <p className="text-sm font-semibold">Professional Grade</p>
                                        <p className="text-xs text-slate-500">Barber approved</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Details Tabs */}
            <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <Tabs defaultValue="features" className="w-full">
                            <TabsList className="grid w-full grid-cols-4 h-12 p-1 bg-white rounded-xl shadow-sm">
                                <TabsTrigger value="features" className="rounded-lg font-medium">
                                    Features
                                </TabsTrigger>
                                <TabsTrigger value="specs" className="rounded-lg font-medium">
                                    How to Use
                                </TabsTrigger>
                                <TabsTrigger value="reviews" className="rounded-lg font-medium">
                                    Reviews
                                </TabsTrigger>
                                <TabsTrigger value="faq" className="rounded-lg font-medium">
                                    FAQ
                                </TabsTrigger>
                            </TabsList>

                            <TabsContent value="features" className="mt-8">
                                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                                    <div className="space-y-6">
                                        <h3 className="text-2xl font-bold text-slate-900">Professional Styling Revolution</h3>
                                        <div className="space-y-5">
                                            {[
                                                {
                                                    title: "Zero Residue Formula",
                                                    description: "No white marks or greasy aftermath - just clean, natural-looking style",
                                                },
                                                {
                                                    title: "Instant Volume & Texture",
                                                    description: "Creates exceptional lift and definition without weighing hair down",
                                                },
                                                {
                                                    title: "All-Day Performance",
                                                    description: "Re-workable formula maintains style without stiffness throughout the day",
                                                },
                                                {
                                                    title: "Professional Heritage",
                                                    description: "Developed with 50+ years of barbering expertise since 1970",
                                                },
                                            ].map((feature, i) => (
                                                <div key={i} className="flex gap-4">
                                                    <Check className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                                                    <div className="space-y-1">
                                                        <h4 className="font-semibold text-slate-900">{feature.title}</h4>
                                                        <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="aspect-video bg-white rounded-2xl shadow-sm overflow-hidden flex items-center justify-center">
                                        <Image
                                            src="https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/73e66132-e2c9-4658-8976-f2b7cb8f051f.jpg?"
                                            alt="MARMARA BARBER Powder Wax professional styling demonstration"
                                            width={480}
                                            height={360}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="specs" className="mt-8">
                                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                                    <Card className="shadow-sm border-0">
                                        <CardHeader className="pb-4">
                                            <CardTitle className="text-xl">Application Instructions</CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            {[
                                                { step: "1", instruction: "Apply a small amount to dry or slightly damp hair" },
                                                { step: "2", instruction: "Rub between palms to activate powder-to-wax transformation" },
                                                { step: "3", instruction: "Work through hair from roots to tips" },
                                                { step: "4", instruction: "Style as desired for instant volume and texture" },
                                                { step: "5", instruction: "Re-work throughout the day as needed" },
                                            ].map((item, i) => (
                                                <div
                                                    key={i}
                                                    className="flex items-start gap-4 py-3 border-b border-slate-100 last:border-0"
                                                >
                                                    <span className="text-slate-900 font-bold text-lg">Step {item.step}</span>
                                                    <span className="text-slate-700">{item.instruction}</span>
                                                </div>
                                            ))}
                                        </CardContent>
                                    </Card>
                                    <div className="space-y-6">
                                        <h3 className="text-xl font-bold text-slate-900">Product Details</h3>
                                        <div className="bg-white rounded-2xl p-6 shadow-sm space-y-4">
                                            {[
                                                "Professional-grade powder wax formula",
                                                "Suitable for all hair types",
                                                "Natural matte finish",
                                                "No white residue or greasiness",
                                                "Long-lasting hold with flexibility",
                                                "Developed by barber professionals",
                                            ].map((item, i) => (
                                                <div key={i} className="flex items-center gap-3">
                                                    <Check className="h-5 w-5 text-green-500" />
                                                    <span className="text-slate-700">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="reviews" className="mt-8">
                                <div className="space-y-8">
                                    <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                                        <Card className="shadow-sm border-0 bg-white">
                                            <CardContent className="pt-8 text-center">
                                                <div className="text-4xl font-bold mb-3 text-slate-900">4.9</div>
                                                <div className="flex justify-center mb-3">
                                                    {[1, 2, 3, 4, 5].map((star) => (
                                                        <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                                    ))}
                                                </div>
                                                <p className="text-sm text-slate-600 font-medium">Based on 1,847 reviews</p>
                                            </CardContent>
                                        </Card>
                                        <div className="md:col-span-2 space-y-4">
                                            {[5, 4, 3, 2, 1].map((stars) => (
                                                <div key={stars} className="flex items-center gap-4">
                                                    <span className="text-sm font-medium w-8">{stars}★</span>
                                                    <div className="flex-1 bg-slate-200 rounded-full h-3">
                                                        <div
                                                            className="bg-yellow-400 h-3 rounded-full transition-all duration-300"
                                                            style={{ width: stars === 5 ? "85%" : stars === 4 ? "12%" : "3%" }}
                                                        />
                                                    </div>
                                                    <span className="text-sm text-slate-600 font-medium w-16 text-right">
                                                        {stars === 5 ? "1,570" : stars === 4 ? "221" : "56"}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        {[
                                            {
                                                name: "Alex Thompson",
                                                avatar: "AT",
                                                rating: 5,
                                                date: "3 days ago",
                                                title: "Game changer for my styling routine",
                                                content:
                                                    "Finally found a product that gives volume without the greasy feel. The matte finish is exactly what I wanted!",
                                            },
                                            {
                                                name: "Marcus Rivera",
                                                avatar: "MR",
                                                rating: 5,
                                                date: "1 week ago",
                                                title: "Professional quality at home",
                                                content:
                                                    "My barber recommended this and I see why. Creates amazing texture and holds all day. Worth every penny.",
                                            },
                                            {
                                                name: "James Chen",
                                                avatar: "JC",
                                                rating: 5,
                                                date: "2 weeks ago",
                                                title: "Best powder wax I've tried",
                                                content:
                                                    "No white residue, easy to apply, and the hold is perfect. I can restyle throughout the day which is a huge plus.",
                                            },
                                        ].map((review, i) => (
                                            <Card key={i} className="shadow-sm border-0 bg-white">
                                                <CardContent className="pt-6">
                                                    <div className="flex items-start gap-4">
                                                        <Avatar className="h-12 w-12">
                                                            <AvatarFallback className="bg-slate-100 text-slate-700 font-semibold">
                                                                {review.avatar}
                                                            </AvatarFallback>
                                                        </Avatar>
                                                        <div className="flex-1 space-y-2">
                                                            <div className="flex items-center gap-3 flex-wrap">
                                                                <span className="font-semibold text-slate-900">{review.name}</span>
                                                                <div className="flex">
                                                                    {[1, 2, 3, 4, 5].map((star) => (
                                                                        <Star
                                                                            key={star}
                                                                            className={`h-4 w-4 ${star <= review.rating ? "fill-yellow-400 text-yellow-400" : "text-slate-300"}`}
                                                                        />
                                                                    ))}
                                                                </div>
                                                                <span className="text-sm text-slate-500">{review.date}</span>
                                                            </div>
                                                            <h4 className="font-semibold text-slate-900">{review.title}</h4>
                                                            <p className="text-slate-600 leading-relaxed">{review.content}</p>
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="faq" className="mt-8">
                                <div className="max-w-4xl mx-auto">
                                    <Accordion type="single" collapsible className="w-full space-y-4">
                                        {[
                                            {
                                                question: "What makes this different from regular hair wax?",
                                                answer:
                                                    "Our powder-to-wax formula provides instant volume and texture without the weight or greasiness of traditional waxes. It leaves zero white residue and maintains a natural matte finish.",
                                            },
                                            {
                                                question: "Can I use it on wet hair?",
                                                answer:
                                                    "Yes! It works on both damp and dry hair. For maximum volume, we recommend applying to dry hair. For a more controlled look, apply to slightly damp hair.",
                                            },
                                            {
                                                question: "How much should I use?",
                                                answer:
                                                    "A little goes a long way. Start with a small amount (about the size of a pea) and add more if needed. The powder transforms into wax when rubbed between your palms.",
                                            },
                                            {
                                                question: "Is it suitable for all hair types?",
                                                answer:
                                                    "Yes, it's perfect for fine to medium hair seeking added volume, but works great on all hair types. The re-workable formula allows you to adjust your style throughout the day.",
                                            },
                                            {
                                                question: "Will it leave white marks in my hair?",
                                                answer:
                                                    "No! Our unique formula is specifically designed to leave zero white residue or marks, giving you a clean, natural finish every time.",
                                            },
                                        ].map((faq, i) => (
                                            <AccordionItem
                                                key={i}
                                                value={`item-${i}`}
                                                className="bg-white rounded-xl px-6 shadow-sm border-0"
                                            >
                                                <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                                                    {faq.question}
                                                </AccordionTrigger>
                                                <AccordionContent className="text-slate-600 pb-6 leading-relaxed">
                                                    {faq.answer}
                                                </AccordionContent>
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </section>

            {/* Related Products */}
            <section className="py-12 sm:py-16 lg:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-8 lg:mb-12 text-center lg:text-left">
                            Complete Your Professional Kit
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
                            {[
                                { name: "Hair Pomade", price: "$16.99", image: "Professional pomade" },
                                { name: "Styling Cream", price: "$18.99", image: "Styling cream" },
                                { name: "Hair Spray", price: "$14.99", image: "Professional hair spray" },
                                { name: "Grooming Kit", price: "$39.99", image: "Complete grooming kit" },
                            ].map((product, i) => (
                                <Card
                                    key={i}
                                    className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-0 shadow-sm"
                                >
                                    <CardContent className="p-4">
                                        <div className="aspect-square bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl mb-4 overflow-hidden">
                                            <Image
                                                src="https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/45e117e1-f793-4dc6-9763-4545ccc059af.jpg?"
                                                alt={product.image}
                                                width={200}
                                                height={200}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                        <h3 className="font-semibold mb-2 text-slate-900 text-sm lg:text-base">{product.name}</h3>
                                        <p className="text-lg font-bold text-slate-900">{product.price}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Simplified Footer */}
            <footer className="border-t bg-slate-50 py-8">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex items-center space-x-3">
                            <Image
                                src="/placeholder-logo.png"
                                alt="Logo"
                                width={32}
                                height={32}
                                className="h-8 w-8"
                            />
                            <span className="font-semibold text-xl">MARMARA BARBER</span>
                        </div>
                        <p className="text-sm text-slate-600 text-center sm:text-right">© 2024 MARMARA BARBER. Professional Excellence Since 1970.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}