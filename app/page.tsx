"use client";

import Image from "next/image";
import { AuroraButton } from "@/components/ui/aurora-button";
import {
  Heart,
  Users,
  BookOpen,
  Briefcase,
  Star,
  ChevronDown,
  Phone,
  Mail,
  Link2,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

const services = [
  {
    id: "individual",
    icon: Heart,
    title: "Individual Therapy",
    tagline: "A space that's fully yours",
    description:
      "One-on-one sessions tailored to your unique needs and goals. Using evidence-based approaches including somatic therapy, EMDR, and CBT to support healing, growth, and lasting change.",
    bgClass: "bg-[#FBF3EE]",
    borderClass: "border-[#C4704A]",
    iconBg: "bg-[#B85C38]",
    href: "#contact",
  },
  {
    id: "couples",
    icon: Users,
    title: "Couples Therapy",
    tagline: "Grow together, not apart",
    description:
      "Rebuild connection, improve communication, and navigate conflict with compassion. Whether you're working through a difficult season or deepening an already strong relationship.",
    bgClass: "bg-[#EEF2EA]",
    borderClass: "border-[#7A8C6E]",
    iconBg: "bg-[#7A8C6E]",
    href: "#contact",
  },
  {
    id: "supervision",
    icon: BookOpen,
    title: "Clinical Supervision",
    tagline: "Support for the helpers",
    description:
      "Individual and group supervision for pre-licensed and licensed clinicians. Gain confidence, refine your skills, and receive the reflective guidance every therapist deserves.",
    bgClass: "bg-[#FBF6ED]",
    borderClass: "border-[#C49A5A]",
    iconBg: "bg-[#C49A5A]",
    href: "#contact",
  },
  {
    id: "business",
    icon: Briefcase,
    title: "Business Consultation",
    tagline: "Build the practice you envision",
    description:
      "Practical guidance for therapists launching or growing a private practice. From branding and systems to marketing and pricing — build sustainably and with intention.",
    bgClass: "bg-[#F9EFEE]",
    borderClass: "border-[#D4A49A]",
    iconBg: "bg-[#D4A49A]",
    href: "#contact",
  },
];

const steps = [
  {
    num: "01",
    title: "Reach Out",
    description:
      "Send a quick message or fill out the contact form. No pressure — just a first hello.",
  },
  {
    num: "02",
    title: "Free Consultation",
    description:
      "We'll schedule a complimentary 15-minute call to see if we're a good fit for each other.",
  },
  {
    num: "03",
    title: "Begin Your Journey",
    description:
      "Together, we'll set intentions and start working toward the life and relationships you want.",
  },
];

const testimonials = [
  {
    quote:
      "Working with Jamie changed my relationship with myself. I finally feel like I have tools to move through hard emotions instead of being swallowed by them.",
    name: "Client",
    detail: "Individual Therapy",
  },
  {
    quote:
      "Jamie's clinical supervision has been invaluable. She creates a safe space for me to grow and make mistakes — which is exactly what I needed as a new therapist.",
    name: "Clinician",
    detail: "Clinical Supervision",
  },
  {
    quote:
      "My partner and I were speaking different languages. After working with Jamie, we finally understand each other. Our relationship is in the best place it's ever been.",
    name: "Clients",
    detail: "Couples Therapy",
  },
];

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */

export default function Page() {
  return (
    <div className="bg-[#F7F0E6] text-[#2C1810]">
      {/* ── NAV ─────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F7F0E6]/90 backdrop-blur-sm border-b border-[#D4C4B0]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span
            className="text-xl font-semibold tracking-wide text-[#B85C38]"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Jamie Molnar
          </span>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#6B5B4E]">
            <a href="#about" className="hover:text-[#B85C38] transition-colors">About</a>
            <a href="#services" className="hover:text-[#B85C38] transition-colors">Services</a>
            <a href="#process" className="hover:text-[#B85C38] transition-colors">Process</a>
            <a href="#testimonials" className="hover:text-[#B85C38] transition-colors">Testimonials</a>
          </div>
          <a
            href="#contact"
            className="bg-[#B85C38] text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-[#8B3F22] transition-colors"
          >
            Book a Call
          </a>
        </div>
      </nav>

      {/* ── HERO ─────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1616587226157-48e49175ee20?w=1600&q=80"
            alt="Warm cozy therapy office interior"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#F7F0E6] via-[#EDE0CC]/90 to-[#F7F0E6]/80" />
        </div>

        {/* Decorative blobs */}
        <div className="absolute top-20 right-[-100px] w-[500px] h-[500px] rounded-full bg-[#B85C38]/8 blur-3xl" />
        <div className="absolute bottom-20 left-[-80px] w-[400px] h-[400px] rounded-full bg-[#7A8C6E]/10 blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center py-20">
          {/* Left: Text */}
          <div>
            <p
              className="text-[#B85C38] font-medium tracking-widest text-sm uppercase mb-4"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              Licensed Therapist · Clinical Supervisor
            </p>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-[#2C1810]"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Healing starts
              <span className="block text-[#B85C38]">with one</span>
              <span className="block italic">brave step.</span>
            </h1>
            <p className="text-lg text-[#6B5B4E] mb-10 max-w-md leading-relaxed">
              I&apos;m Jamie Molnar — a therapist and clinical supervisor
              dedicated to helping individuals, couples, and clinicians build
              the lives and practices they truly want.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact">
                <AuroraButton
                  className="px-8 py-3 text-base font-semibold"
                  glowClassName="from-[#B85C38] via-[#C49A5A] to-[#7A8C6E]"
                >
                  Book a Free Consultation
                </AuroraButton>
              </a>
              <a
                href="#services"
                className="flex items-center gap-2 px-6 py-3 border border-[#B85C38] text-[#B85C38] rounded-lg font-medium hover:bg-[#B85C38]/5 transition-colors"
              >
                Explore Services <ArrowRight size={16} />
              </a>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-[#D4C4B0]">
              {["Licensed LCSW", "10+ Years Experience", "Telehealth & In-Person"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-[#6B5B4E]">
                    <CheckCircle size={16} className="text-[#7A8C6E]" />
                    {item}
                  </div>
                )
              )}
            </div>
          </div>

          {/* Right: Photo */}
          <div className="relative flex justify-center md:justify-end">
            <div className="relative w-[340px] h-[420px] md:w-[400px] md:h-[500px]">
              <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-2 border-[#C49A5A]/60" />
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl bg-[#7A8C6E]/15" />
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
                alt="Jamie Molnar, therapist"
                fill
                className="object-cover rounded-2xl shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-6 left-6 z-20 bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-3 border border-[#EDE0CC]">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={14} className="text-[#C49A5A] fill-[#C49A5A]" />
                  ))}
                </div>
                <span className="text-sm font-medium text-[#2C1810]">Trusted by 200+ clients</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#B85C38]/60 animate-bounce">
          <ChevronDown size={28} />
        </div>
      </section>

      {/* ── ABOUT ─────────────────────────────── */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Image collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 rounded-2xl overflow-hidden col-span-1">
                <Image
                  src="https://images.unsplash.com/photo-1560439514-4e9645039924?w=600&q=80"
                  alt="Therapy session"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-4">
                <div className="relative h-[120px] rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&q=80"
                    alt="Journaling and mindfulness"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-[120px] rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80"
                    alt="Nature and calm"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#B85C38] text-white rounded-2xl p-5 shadow-xl">
              <p
                className="text-3xl font-bold"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                10+
              </p>
              <p className="text-sm opacity-90">Years of Experience</p>
            </div>
          </div>

          {/* Right: Text */}
          <div>
            <p className="text-[#B85C38] font-medium tracking-widest text-sm uppercase mb-3">
              About Jamie
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold mb-6 text-[#2C1810] leading-tight"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Therapy rooted in warmth &amp; real life
            </h2>
            <p className="text-[#6B5B4E] mb-5 leading-relaxed">
              I believe therapy should feel like a conversation with someone who
              truly sees you — not a sterile clinical encounter. My approach
              blends evidence-based modalities with genuine human connection,
              meeting you exactly where you are.
            </p>
            <p className="text-[#6B5B4E] mb-5 leading-relaxed">
              With over a decade of experience, I specialize in anxiety,
              relationship dynamics, life transitions, and supporting therapists
              through clinical supervision. I work with individuals and couples
              both in-person and via telehealth.
            </p>
            <p className="text-[#6B5B4E] mb-8 leading-relaxed">
              Outside the therapy room, you&apos;ll find me hiking, exploring
              farmers markets, or deep in a good novel — which is to say, I
              believe deeply in rest, beauty, and the nourishment of everyday life.
            </p>
            <div className="flex flex-wrap gap-3">
              {["EMDR Certified", "Somatic Therapy", "Gottman Method", "CBT / ACT"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-[#EEF2EA] text-[#5C6E52] text-sm font-medium rounded-full border border-[#9CAF88]"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────── */}
      <section id="services" className="py-24 bg-[#F7F0E6]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#B85C38] font-medium tracking-widest text-sm uppercase mb-3">
              What I Offer
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#2C1810] mb-4"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Services designed around you
            </h2>
            <p className="text-[#6B5B4E] max-w-xl mx-auto leading-relaxed">
              Whether you&apos;re seeking personal healing, relationship support, professional
              guidance, or business growth — I have a path for you.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.id}
                  className={`group relative flex flex-col rounded-2xl p-6 border-t-4 ${svc.bgClass} ${svc.borderClass} shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                >
                  <div className={`${svc.iconBg} w-12 h-12 rounded-xl flex items-center justify-center mb-5 shadow-sm`}>
                    <Icon size={22} className="text-white" />
                  </div>
                  <h3
                    className="text-xl font-bold text-[#2C1810] mb-1"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    {svc.title}
                  </h3>
                  <p className="text-xs font-semibold tracking-wide text-[#6B5B4E] uppercase mb-3">
                    {svc.tagline}
                  </p>
                  <p className="text-sm text-[#6B5B4E] leading-relaxed flex-1">
                    {svc.description}
                  </p>
                  <a
                    href={svc.href}
                    className="mt-5 flex items-center gap-1 text-sm font-semibold text-[#B85C38] group-hover:gap-2 transition-all"
                  >
                    Learn more <ArrowRight size={14} />
                  </a>
                </div>
              );
            })}
          </div>

          {/* Featured supervision highlight */}
          <div className="mt-12 bg-[#2C1810] rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-2 items-center">
              <div className="p-10 md:p-14">
                <p className="text-[#C49A5A] font-medium tracking-widest text-sm uppercase mb-3">
                  Featured
                </p>
                <h3
                  className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  Clinical Supervision for Growing Therapists
                </h3>
                <p className="text-white/70 mb-8 leading-relaxed">
                  Personalized one-on-one and group supervision for pre-licensed and
                  licensed clinicians. Build your competence, confidence, and clinical
                  identity in a supportive, reflective environment.
                </p>
                <a href="#contact">
                  <AuroraButton
                    className="px-7 py-3 font-semibold"
                    glowClassName="from-[#C49A5A] via-[#B85C38] to-[#7A8C6E]"
                  >
                    Apply for Supervision
                  </AuroraButton>
                </a>
              </div>
              <div className="relative h-64 md:h-full min-h-[280px]">
                <Image
                  src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=800&q=80"
                  alt="Clinical supervision session"
                  fill
                  className="object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#2C1810] to-transparent md:from-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ─────────────────────────────── */}
      <section id="process" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#B85C38] font-medium tracking-widest text-sm uppercase mb-3">
              How It Works
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#2C1810] mb-4"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Starting is simpler than you think
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-10 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-0.5 bg-gradient-to-r from-[#B85C38] via-[#C49A5A] to-[#7A8C6E]" />

            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center relative">
                <div className="w-20 h-20 rounded-full bg-[#F7F0E6] border-2 border-[#B85C38] flex items-center justify-center mb-6 shadow-md relative z-10">
                  <span
                    className="text-2xl font-bold text-[#B85C38]"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    {step.num}
                  </span>
                </div>
                <h3
                  className="text-xl font-bold text-[#2C1810] mb-3"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  {step.title}
                </h3>
                <p className="text-[#6B5B4E] leading-relaxed text-sm">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <a href="#contact">
              <AuroraButton
                className="px-10 py-4 text-base font-semibold"
                glowClassName="from-[#B85C38] via-[#C49A5A] to-[#7A8C6E]"
              >
                Start with a Free 15-Min Call
              </AuroraButton>
            </a>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────── */}
      <section id="testimonials" className="py-24 bg-[#EDE0CC]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#B85C38] font-medium tracking-widest text-sm uppercase mb-3">
              Kind Words
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#2C1810]"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Stories of growth &amp; healing
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-sm border border-[#D4C4B0] flex flex-col"
              >
                <div className="flex gap-1 mb-5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={14} className="text-[#C49A5A] fill-[#C49A5A]" />
                  ))}
                </div>
                <p className="text-[#2C1810] leading-relaxed flex-1 mb-6 text-[0.95rem]">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="border-t border-[#EDE0CC] pt-4">
                  <p className="font-semibold text-[#2C1810] text-sm">{t.name}</p>
                  <p className="text-xs text-[#B85C38] font-medium mt-0.5">{t.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ─────────────────────────────── */}
      <section
        id="contact"
        className="py-24 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #2C1810 0%, #4A2C1A 50%, #2C1810 100%)",
        }}
      >
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#B85C38]/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#7A8C6E]/10 blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#C49A5A] font-medium tracking-widest text-sm uppercase mb-3">
                Get in Touch
              </p>
              <h2
                className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Ready to take the first step?
              </h2>
              <p className="text-white/70 mb-10 leading-relaxed">
                I&apos;d love to connect. Reach out to schedule your free
                consultation call and we&apos;ll explore whether working
                together is the right fit.
              </p>

              <div className="space-y-5">
                <a
                  href="mailto:jamie@jamiemolnar.com"
                  className="flex items-center gap-4 text-white/80 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#B85C38]/30 flex items-center justify-center group-hover:bg-[#B85C38]/50 transition-colors">
                    <Mail size={18} />
                  </div>
                  <span>jamie@jamiemolnar.com</span>
                </a>
                <a
                  href="tel:+15555550100"
                  className="flex items-center gap-4 text-white/80 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#B85C38]/30 flex items-center justify-center group-hover:bg-[#B85C38]/50 transition-colors">
                    <Phone size={18} />
                  </div>
                  <span>(555) 555-0100</span>
                </a>
                <a
                  href="https://instagram.com"
                  className="flex items-center gap-4 text-white/80 hover:text-white transition-colors group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-10 h-10 rounded-full bg-[#B85C38]/30 flex items-center justify-center group-hover:bg-[#B85C38]/50 transition-colors">
                    <Link2 size={18} />
                  </div>
                  <span>@jamiemolnar</span>
                </a>
              </div>
            </div>

            {/* Contact form */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <h3
                className="text-2xl font-bold text-white mb-6"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Send a message
              </h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-white/70 mb-1.5">First Name</label>
                    <input
                      type="text"
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#C49A5A] transition-colors text-sm"
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-white/70 mb-1.5">Last Name</label>
                    <input
                      type="text"
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#C49A5A] transition-colors text-sm"
                      placeholder="Smith"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-white/70 mb-1.5">Email</label>
                  <input
                    type="email"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#C49A5A] transition-colors text-sm"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/70 mb-1.5">I&apos;m interested in...</label>
                  <select
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#C49A5A] transition-colors text-sm appearance-none"
                    defaultValue=""
                  >
                    <option value="" disabled className="text-gray-800">Select a service</option>
                    <option value="individual" className="text-gray-800">Individual Therapy</option>
                    <option value="couples" className="text-gray-800">Couples Therapy</option>
                    <option value="supervision" className="text-gray-800">Clinical Supervision</option>
                    <option value="business" className="text-gray-800">Business Consultation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-white/70 mb-1.5">Message</label>
                  <textarea
                    rows={4}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#C49A5A] transition-colors text-sm resize-none"
                    placeholder="Tell me a little about what brings you here..."
                  />
                </div>
                <AuroraButton
                  type="submit"
                  className="w-full py-3 text-sm font-semibold text-center"
                  glowClassName="from-[#B85C38] via-[#C49A5A] to-[#7A8C6E]"
                >
                  Send Message
                </AuroraButton>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────── */}
      <footer className="bg-[#1A0F09] text-white/60 py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <div>
            <span
              className="text-white font-semibold text-lg"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Jamie Molnar
            </span>
            <span className="ml-2 text-white/40">· Licensed Therapist &amp; Clinical Supervisor</span>
          </div>
          <div className="flex gap-6">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Jamie Molnar. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
