
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TestimonialCarousel = () => {
const testimonials = [
  {
    _id: 1,
    name: "Aman Gupta",
    role: "Restaurant Owner",
    image: "https://imgs.search.brave.com/VJTkT9sa0bcDbGrYXBGcRt6kru_-syjzCjYlrATc_jI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvMTIx/ODE2MTkvcGV4ZWxz/LXBob3RvLTEyMTgx/NjE5LmpwZWc_Y3M9/dGlueXNyZ2ImZHBy/PTEmdz01MDA",
    text: "Fast delivery and dependable service are crucial for my business. GharTak consistently delivers fresh ingredients on time, helping us maintain quality and serve our customers without interruptions.",
    rating: 5,
    verified: true
  },
  {
    _id: 2,
    name: "Sneha Mishra",
    role: "Homemaker",
    image: "https://imgs.search.brave.com/q_LieVelg2qjqhXSuMJMdMZoIOt46QhPwv3iWuuWlNk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTU3/NTcxMDk0L3Bob3Rv/L29uZS1ydXJhbC1p/bmRpYW4td29tYW4t/Y29va2luZy1mb29k/LWluLXRoZS1raXRj/aGVuLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1NUjdBb2Jv/RlJPRXVqeWd6bDVw/T095d0lJQ0twTGw5/MHBLR2EyYklPNkp3/PQ",
    text: "I love how simple and convenient the platform is. From fresh fruits to household essentials, everything arrives quickly and exactly as ordered. It has made grocery shopping stress-free.",
    rating: 5,
    verified: true
  },
  {
    _id: 3,
    name: "Rohit Patel",
    role: "Bank Employee",
    image: "https://imgs.search.brave.com/S5zaVfeLFzB2imrYrT9EmsEjhswaVAQGyXWmd3KAd88/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzI1LzIvYm9pLWJh/bmstb2YtaW5kaWEt/bG9nby1wbmdfc2Vl/a2xvZ28tMjU5NjYy/LnBuZw",
    text: "GharTak combines the trust of local stores with the convenience of modern technology. The ordering process is smooth, deliveries are fast, and customer support is always responsive.",
    rating: 5,
    verified: true
  },
  {
    _id: 4,
    name: "Amit Chawla",
    role: "Cloud Kitchen Owner",
    image: "https://imgs.search.brave.com/-OiTeAQyZYp0Xlz1N6Rk6o3sesSvmJOfEzfggquIjOw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jaGVm/aWJwYS5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjUvMDQv/Q2hhdEdQVC1JbWFn/ZS1KYW4tMTYtMjAy/Ni0wNF81N181My1Q/TS53ZWJw",
    text: "GharTak has become an integral part of our supply chain. Fresh ingredients arrive on time every day, ensuring smooth kitchen operations and consistent food quality. Their dependable service and attention to detail make them one of the most reliable delivery platforms we have worked with.",
    rating: 5,
    verified: true
  }
];

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoPlay, testimonials.length]);

  const slideVariants = {
    enter: (direction) => ({ x: direction > 0 ? 1000 : -1000, opacity: 0 }),
    center: { zIndex: 1, x: 0, opacity: 1 },
    exit: (direction) => ({ zIndex: 0, x: direction < 0 ? 1000 : -1000, opacity: 0 })
  };

  return (
    <section className="mx-4 md:mx-16 lg:mx-32 my-24 relative font-outfit">
      {/* Header */}
      <div className="text-center mb-16">
        <motion.div 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-xs font-bold uppercase mb-4 tracking-widest"
        >
          <Star size={14} className="fill-current" /> Customer Reviews
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight"
        >
          Loved by Thousands
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 max-w-xl mx-auto font-medium"
        >
          Real stories from everyday customers who've transformed their daily shopping experience with Mandvi Cart.
        </motion.p>
      </div>

      {/* Carousel */}
      <div 
        className="relative h-[28rem] md:h-72 rounded-3xl overflow-hidden"
        onMouseEnter={() => setAutoPlay(false)}
        onMouseLeave={() => setAutoPlay(true)}
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.4 } }}
            className="absolute inset-0 w-full h-full"
          >
            <div className="h-full bg-gradient-to-br from-purple-50 to-pink-50/50 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-purple-100 shadow-sm">
              
              {/* Avatar & Info */}
              <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 md:gap-6 flex-shrink-0 w-full md:w-auto">
                <div className="relative">
                  <img 
                    src={testimonials[current].image} 
                    alt={testimonials[current].name}
                    className="w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-white shadow-md object-cover"
                  />
                  {testimonials[current].verified && (
                    <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm border-4 border-white shadow-sm" title="Verified Buyer">
                      ✓
                    </div>
                  )}
                </div>
                
                <div className="mt-2 md:mt-4">
                  <h3 className="font-black text-xl text-gray-900">{testimonials[current].name}</h3>
                  <p className="text-purple-600 font-bold text-xs uppercase tracking-widest mb-3 mt-1">{testimonials[current].role}</p>
                  <div className="flex gap-1 justify-center md:justify-start">
                    {[...Array(testimonials[current].rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Quote */}
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-slate-700 text-lg md:text-xl font-medium italic leading-relaxed md:flex-1 text-center md:text-left px-4 md:px-0"
              >
                "{testimonials[current].text}"
              </motion.p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button 
          onClick={() => {
            setDirection(-1);
            setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
          }}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur text-gray-800 p-2.5 md:p-3 rounded-full shadow-md border border-slate-100 hover:scale-110 hover:bg-white transition-all focus:outline-none"
        >
          <ChevronLeft size={20} />
        </button>
        <button 
          onClick={() => {
            setDirection(1);
            setCurrent((prev) => (prev + 1) % testimonials.length);
          }}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur text-gray-800 p-2.5 md:p-3 rounded-full shadow-md border border-slate-100 hover:scale-110 hover:bg-white transition-all focus:outline-none"
        >
          <ChevronRight size={20} />
        </button>

        {/* Dots Navigation */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setDirection(index > current ? 1 : -1);
                setCurrent(index);
              }}
              className={`rounded-full transition-all focus:outline-none ${index === current ? 'bg-purple-600 w-8' : 'bg-purple-200 w-2 hover:bg-purple-300'} h-2`}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;