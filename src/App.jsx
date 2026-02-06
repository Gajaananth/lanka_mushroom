import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Facebook, ArrowRight } from 'lucide-react';

// Product Data - Exact descriptions (Content-Specific Imagery Re-activated)
const products = [
    {
        name: 'Fresh Mushrooms',
        desc: 'Hand-harvested, 100% natural fresh mushrooms grown using hygienic and sustainable farming methods.',
        img: '/products/fresh.jpg'
    },
    {
        name: 'Dried Mushrooms',
        desc: 'Premium quality dried mushrooms, processed under strict hygienic conditions to retain maximum flavor and nutrients.',
        img: '/products/dry.jpg'
    },
    {
        name: 'Mushroom Chips',
        desc: 'Crispy, healthy, and delicious mushroom chips. A perfect organic snack for every occasion.',
        img: '/products/chips.jpg'
    },
    {
        name: 'Mushroom Chutney',
        desc: 'A unique blend of spices and organic mushrooms, creating a rich and flavorful traditional Sri Lankan accompaniment.',
        img: '/products/chutney.jpg'
    },
    {
        name: 'Mushroom Curry Mix',
        desc: 'Traditional Sri Lankan style mushroom curry mix, prepared using authentic spices for a rich, aromatic experience.',
        img: '/products/curry.jpg'
    },
    {
        name: 'Mushroom Sausage',
        desc: 'A healthy, protein-rich vegetarian alternative, crafted from premium organic mushrooms and natural spices.',
        img: '/products/sausage.jpg'
    },
    {
        name: 'Mushroom Soup Mix',
        desc: 'Instant, creamy mushroom soup mix. Rich in nutrients and perfect for a quick, healthy meal.',
        img: '/products/soup.jpg'
    },
    {
        name: 'Mushroom Pappadam',
        desc: 'Crunchy and flavorful mushroom-infused pappadam. A unique twist on a classic Sri Lankan favorite.',
        img: '/products/pappadam.jpg'
    },
    {
        name: 'Mushroom Seasoning',
        desc: '100% natural mushroom-based seasoning, adding a rich umami depth to any dish without artificial additives.',
        img: '/products/seasoning.jpg'
    },
];

const App = () => {
    return (
        <div className="min-h-screen bg-white font-sans text-[#1f3a1f] selection:bg-[#f2c94c]/20">
            {/* Navigation - Premium Forest Green Glass Card */}
            <div className="fixed top-4 md:top-8 left-0 right-0 z-[1000] px-4 md:px-6 flex justify-center pointer-events-none">
                <nav className="bg-[#1f3a1f]/65 backdrop-blur-[40px] border border-white/20 px-4 md:px-8 py-2.5 md:py-3.5 rounded-full flex items-center justify-between gap-4 md:gap-12 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_25px_50px_-12px_rgba(0,0,0,0.5)] pointer-events-auto max-w-full md:max-w-fit mx-auto transition-all duration-700 hover:scale-[1.02] hover:bg-[#1f3a1f]/75 hover:border-white/30">
                    <a href="#" className="flex items-center gap-2 md:gap-4 group/brand">
                        <div className="w-8 h-8 md:w-11 md:h-11 rounded-full bg-white flex items-center justify-center p-0.5 shadow-lg border border-white/10 group-hover/brand:scale-110 group-hover/brand:rotate-12 transition-all duration-700">
                            <img src="/logo.jpg" alt="Lanka Mushroom" className="w-full h-full rounded-full object-cover" />
                        </div>
                        <div className="flex flex-col text-white group-hover/brand:translate-x-1 transition-transform duration-700">
                            <span className="font-serif text-base md:text-xl tracking-tight leading-none">Lanka Mushroom<span className="text-[#f2c94c]">.</span></span>
                            <span className="text-[5px] md:text-[7px] font-bold uppercase tracking-[0.3em] md:tracking-[0.5em] text-[#f2c94c] mt-0.5 md:mt-1">Export Quality</span>
                        </div>
                    </a>
                    <div className="hidden lg:flex items-center gap-10 text-[9px] font-bold uppercase tracking-[0.4em] text-white/80">
                        <a href="#products" className="hover:text-white transition-all duration-300">Products</a>
                        <a href="#about" className="hover:text-white transition-all duration-300">Heritage</a>
                        <a href="#contact" className="hover:text-white transition-all duration-300">Connect</a>
                    </div>
                    <a
                        href="https://wa.me/94741234981"
                        className="bg-[#f2c94c] text-[#1f3a1f] px-4 md:px-6 py-1.5 md:py-2.5 rounded-full text-[8px] md:text-[9px] font-bold uppercase tracking-widest hover:bg-white hover:text-[#1f3a1f] transition-all duration-300 shadow-xl shadow-black/10"
                    >
                        Message
                    </a>
                </nav>
            </div>

            {/* Hero Section - Precision Layout (Adjusted for mobile) */}
            <section className="relative min-h-[90vh] md:min-h-screen flex flex-col justify-start items-center px-4 md:px-6 overflow-hidden bg-[#1f3a1f] pt-[120px] md:pt-[160px] pb-16 md:pb-24">
                <div className="absolute inset-0 z-0">
                    <motion.img
                        initial={{ scale: 1.1, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
                        src="/hero-mushroom.jpg"
                        alt="Real Mushroom Cultivation"
                        className="w-full h-full object-cover"
                    />
                    {/* Depth shading */}
                    <div className="absolute inset-0 bg-black/40" />
                </div>

                {/* Text Container - Exact 75% Transparent Glass */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="relative z-10 p-8 md:p-20 bg-white/25 backdrop-blur-3xl rounded-[2.5rem] md:rounded-[4rem] border border-white/20 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] text-center max-w-5xl mx-auto"
                >
                    <h1 className="font-serif text-4xl md:text-9xl mb-6 md:mb-8 leading-[0.9] md:leading-[0.8] tracking-tighter text-[#1f3a1f] drop-shadow-sm">
                        Pure <br /> <span className="italic font-light text-[#3f5f2a]">Honesty.</span>
                    </h1>

                    <div className="flex flex-col items-center gap-4 md:gap-6 mb-8 md:mb-10">
                        <div className="h-[1px] md:h-[2px] w-8 md:w-10 bg-[#3f5f2a]/20" />
                        <p className="text-xl md:text-4xl font-serif italic text-[#1f3a1f] leading-tight tracking-tight px-4 opacity-90">
                            "From home land to your hand"
                        </p>
                        <div className="h-[1px] md:h-[2px] w-8 md:w-10 bg-[#3f5f2a]/20" />
                    </div>

                    <p className="text-sm md:text-xl font-light text-[#1f3a1f]/80 max-w-xl mx-auto leading-relaxed mb-10 md:mb-16 px-2">
                        Grown naturally on local organic substrates. Discover the real taste of freshness from our hygienic farm beds in Batticaloa.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center">
                        <a href="https://wa.me/94741234981" className="w-full md:min-w-[220px] px-8 md:px-10 py-4 md:py-5 bg-[#1f3a1f] text-white rounded-full font-bold uppercase tracking-widest text-[10px] md:text-[11px] hover:scale-105 transition-transform shadow-2xl">
                            Connect With Us
                        </a>
                        <a href="#products" className="text-[#1f3a1f] font-bold uppercase tracking-widest text-[10px] md:text-[11px] hover:text-[#3f5f2a] transition-colors flex items-center gap-2 font-sans border-b border-[#1f3a1f]/10 pb-1">
                            Explore Products <ArrowRight size={14} />
                        </a>
                    </div>
                </motion.div>
            </section>

            {/* Products Section - Isolated Imagery */}
            <section id="products" className="pt-16 md:pt-24 pb-12 px-6 md:px-16 container mx-auto">
                <div className="max-w-2xl mb-16 md:mb-24">
                    <span className="text-[#3f5f2a] font-bold uppercase tracking-[0.4em] text-[8px] md:text-[10px] mb-3 md:mb-4 block">The Collection</span>
                    <h2 className="font-serif text-4xl md:text-8xl tracking-tighter leading-none mb-6 md:mb-8">
                        Crafted by <br /> <span className="italic font-light">Nature.</span>
                    </h2>
                    <div className="w-12 md:w-16 h-[1px] bg-[#1f3a1f]/20" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 md:gap-x-12 gap-y-16 md:gap-y-32">
                    {products.map((product, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 1, delay: idx * 0.1 }}
                            className="group h-full"
                        >
                            {/* High-Contrast Glass Card - Uniform Height */}
                            <div className="bg-white/75 backdrop-blur-xl border border-[#1f3a1f]/10 p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] transition-all duration-700 hover:shadow-[0_32px_64px_-16px_rgba(31,58,31,0.15)] hover:bg-white/95 group flex flex-col h-full">
                                <div className="aspect-square mb-6 md:mb-10 bg-white/50 rounded-xl md:rounded-2xl overflow-hidden flex items-center justify-center border border-[#1f3a1f]/5 shadow-inner shrink-0">
                                    <img
                                        src={product.img}
                                        alt={product.name}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                    />
                                </div>
                                <h3 className="font-serif text-2xl md:text-3xl mb-3 md:mb-4 tracking-tight text-[#1f3a1f]">{product.name}</h3>
                                <p className="text-[12px] md:text-[13px] leading-relaxed text-[#1f3a1f]/80 font-sans flex-grow">
                                    {product.desc}
                                </p>
                                <div className="mt-8 md:mt-12 pt-6 md:pt-10 border-t border-[#1f3a1f]/5 flex items-center justify-between shrink-0">
                                    <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-[0.3em] text-[#3f5f2a]">Premium Export</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* About Section - Realistic Storytelling */}
            <section id="about" className="py-16 md:py-24 bg-white">
                <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
                    <span className="text-[#3f5f2a] font-bold uppercase tracking-[0.5em] text-[8px] md:text-[10px] mb-8 md:mb-10 block">Our Roots</span>
                    <h2 className="font-serif text-4xl md:text-8xl tracking-tighter leading-tight mb-8 md:mb-12">
                        Sustainable Heart. <br /> <span className="italic opacity-30 font-light text-4xl md:text-7xl">Hygienic Process.</span>
                    </h2>
                    <p className="text-lg md:text-2xl font-light leading-relaxed text-[#1f3a1f]/70 mb-12 md:mb-20 max-w-2xl mx-auto italic">
                        "We believe in honest farming. No shortcuts, no chemicals, just the pure bounty of our homeland."
                    </p>
                    <div className="relative inline-block group w-full">
                        <div className="absolute inset-0 bg-[#3f5f2a]/5 rounded-[2rem] md:rounded-[4rem] scale-105 opacity-0 group-hover:opacity-100 transition-all duration-1000" />
                        <img
                            src="/about-story.jpg"
                            alt="Farming Dedication"
                            className="relative z-10 rounded-[2rem] md:rounded-[3rem] shadow-2xl grayscale-[0.2] hover:grayscale-0 transition-all duration-1000 w-full"
                        />
                    </div>
                </div>
            </section>

            {/* Final Floating Dark Card (Contact + Footer) - Perfect Balance */}
            <div className="mx-4 md:mx-6 mb-4 md:mb-6">
                <div className="bg-[#1f3a1f] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)]">
                    {/* Simple Connection Wrapper - Tightened */}
                    <div id="contact" className="py-8 md:py-12 flex flex-col items-center gap-6 md:gap-8">
                        <div className="flex gap-8 md:gap-12 text-white/90">
                            <a href="https://facebook.com/share/1BPLT7SzGu/" className="hover:text-[#f2c94c] transition-all hover:scale-110 active:scale-95"><Facebook size={22} md:size={24} /></a>
                            <a href="https://www.tiktok.com/@lankamushroomfarm" className="hover:text-[#f2c94c] transition-all hover:scale-110 active:scale-95 pt-0.5">
                                <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47-.28-.2-.54-.42-.79-.65V15.5c0 1.25-.33 2.51-1.03 3.52-.77 1.14-1.93 1.95-3.26 2.37-1.33.43-2.81.39-4.11-.12-1.3-.51-2.45-1.47-3.21-2.68-.78-1.21-1.12-2.68-1-4.11.13-1.46.75-2.87 1.75-3.95 1.01-1.09 2.4-1.8 3.88-2.02V12.5c-.83.13-1.61.56-2.18 1.17-.57.61-.88 1.41-.88 2.23 0 1 .4 1.97 1.1 2.67.7.7 1.67 1.1 2.67 1.1 1 0 1.97-.4 2.67-1.1s1.1-1.67 1.1-2.67V.02z"></path></svg>
                            </a>
                        </div>
                        <a href="mailto:lankamushroomfarm@gmail.com" className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-white/80 hover:text-[#f2c94c] transition-all font-sans px-4 text-center">
                            lankamushroomfarm@gmail.com
                        </a>
                    </div>

                    {/* Ultra-Minimal Footer - Tightened */}
                    <footer className="py-10 md:py-12 border-t border-white/5 text-center px-4 md:px-8 flex flex-col items-center">
                        <div className="font-serif text-lg md:text-xl font-bold mb-3 md:mb-4 text-white">Lanka Mushroom Farm</div>
                        <div className="text-[8px] md:text-[9px] font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-[#f2c94c] mb-8 md:mb-10">Batticaloa, Sri Lanka</div>

                        <div className="flex flex-col gap-3 md:gap-4 text-[9px] md:text-[10px] text-white/30 uppercase tracking-[0.1em] md:tracking-[0.2em] leading-loose font-sans">
                            <p>© 2026 Lanka Mushroom Farm. All rights reserved.</p>
                            <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-white/40">
                                <span>Website designed & developed by</span>
                                <div className="flex items-center gap-1.5 hover:text-white transition-colors cursor-default">
                                    <img src="/tzt-logo.jpg" alt="TZT" className="w-3 md:w-3.5 h-3 md:h-3.5 rounded-sm object-cover grayscale brightness-125" />
                                    <span className="font-bold tracking-widest">Tradiq Zium Techs</span>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>

            {/* Floating WhatsApp (Image-Free Version) */}
            <motion.a
                href="https://wa.me/94741234981"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] w-14 h-14 md:w-16 md:h-16 bg-[#1f3a1f] text-white rounded-xl md:rounded-2xl flex items-center justify-center shadow-2xl group overflow-hidden"
            >
                <MessageCircle size={24} className="md:size-[28px]" />
                <div className="absolute inset-0 bg-[#25D366] animate-pulse opacity-20 pointer-events-none" />
            </motion.a>
        </div>
    );
};

export default App;
