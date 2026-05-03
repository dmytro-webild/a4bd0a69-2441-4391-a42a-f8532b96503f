"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import { Heart, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="medium"
        sizing="largeSizeMediumTitles"
        background="noiseDiagonalGradient"
        cardStyle="glass-depth"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        { name: "Home", id: "hero" },
        { name: "Filosofie", id: "about" },
        { name: "Menu", id: "menu" },
        { name: "Reserveren", id: "contact" }
      ]}
      brandName="Puspita"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardTestimonial
      title="Culinaire verfijning in het hart van de stad"
      description="Laat u meevoeren door een symfonie van authentieke smaken en moderne gastronomie bij Puspita."
      background={{ variant: "sparkles-gradient" }}
      imageSrc="https://img.b2bpic.net/free-photo/gourmet-meal-restaurant-setting_23-2148766946.jpg"
      tag="Ervaar Luxe"
      tagIcon={Star}
      buttons={[{ text: "Ontdek het menu", href: "#menu" }, { text: "Reserveer tafel", href: "#contact" }]}
      avatars={[{ src: "https://img.b2bpic.net/free-photo/cheerful-woman-posing-restaurant_23-2148766952.jpg", alt: "Guest" }]}
      avatarText="1000+ Gelukkige gasten"
      testimonials={[]}
      useInvertedBackground={false}
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      tag="Onze Kernwaarden"
      tagIcon={Heart}
      title="Passie, Kwaliteit, Beleving"
      description="Bij Puspita geloven we dat een maaltijd meer is dan voeding. Het is een viering van ambacht en gastvrijheid."
      subdescription="Onze chefs werken uitsluitend met dagverse ingrediënten van de hoogste kwaliteit om elke gast een memorabel diner te bezorgen."
      icon={Heart}
      imageSrc="https://img.b2bpic.net/free-photo/chef-preparing-gourmet-dish_23-2148766960.jpg"
      useInvertedBackground={false}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardSix
      title="Signatuur Ervaringen"
      textboxLayout="split"
      description="Onze unieke service opties"
      useInvertedBackground={false}
      features={[
        { title: "Private Dining", description: "Intieme settings voor besloten groepen.", imageSrc: "https://img.b2bpic.net/free-photo/private-dining-setup_23-2148766970.jpg" },
        { title: "Chef's Table", description: "Kijk mee over de schouder van onze meesterchefs.", imageSrc: "https://img.b2bpic.net/free-photo/chef-table-interaction_23-2148766980.jpg" },
        { title: "Wine Pairing", description: "Exclusieve wijnen bij elk gerecht.", imageSrc: "https://img.b2bpic.net/free-photo/wine-tasting-experience_23-2148766990.jpg" }
      ]}
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardThree
      gridVariant="bento-grid"
      animationType="slide-up"
      textboxLayout="default"
      title="Onze Signatuur Gerechten"
      description="Een zorgvuldig samengestelde kaart van wereldklasse."
      useInvertedBackground={false}
      products={[
        { id: "1", name: "Truffel Risotto", price: "€28.00", imageSrc: "https://img.b2bpic.net/free-photo/truffle-risotto_23-2148767000.jpg" },
        { id: "2", name: "Dry Aged Entrecote", price: "€38.00", imageSrc: "https://img.b2bpic.net/free-photo/dry-aged-steak_23-2148767010.jpg" },
        { id: "3", name: "Verse Oesters", price: "€22.00", imageSrc: "https://img.b2bpic.net/free-photo/fresh-oysters_23-2148767020.jpg" }
      ]}
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      title="Wat onze gasten zeggen"
      description="Ervaringen van onze gasten"
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        { id: "t1", title: "Fenomenaal", quote: "De beste dinerervaring in jaren.", name: "Alexander B.", role: "Fijnproever" },
        { id: "t2", title: "Luxe sfeer", quote: "Een perfecte ambiance voor onze jubileumviering.", name: "Marieke P.", role: "Gast" }
      ]}
    />
  </div>

  <div id="socialproof" data-section="socialproof">
      <SocialProofOne
      title="Gerenommeerde partners"
      description="Erkende kwaliteit"
      textboxLayout="default"
      useInvertedBackground={false}
      names={["Michelin Guide", "Gault&Millau", "Fine Dining Club", "Luxury Living"]}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      text="Bent u klaar voor een onvergetelijke avond bij Puspita? Wees er snel bij, onze tafels voor het weekend zijn snel volgeboekt."
      background={{ variant: "rotated-rays-static" }}
      buttons={[{ text: "Reserveer nu", href: "#" }]}
      useInvertedBackground={false}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="Puspita"
      columns={[{ title: "Puspita", items: [{ label: "Over ons", href: "#about" }, { label: "Contact", href: "#contact" }] }, { title: "Praktisch", items: [{ label: "Reserveren", href: "#contact" }, { label: "Groepen", href: "#contact" }] }]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}