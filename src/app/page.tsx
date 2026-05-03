"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import { Heart } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="medium"
        sizing="mediumLarge"
        background="blurBottom"
        cardStyle="glass-elevated"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="solid"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Waarom Tai Yu",
          id: "about",
        },
        {
          name: "Menu",
          id: "menu",
        },
        {
          name: "Reserveren",
          id: "contact",
        },
      ]}
      brandName="Tai Yu"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardTestimonial
      useInvertedBackground={false}
      background={{
        variant: "radial-gradient",
      }}
      title="Proef perfectie in elke hap"
      description="Van verfijnde sushi tot knapperige tempura en voortreffelijke Peking eend — bij Tai Yu draait alles om smaak, aandacht en beleving."
      testimonials={[
        {
          name: "Sarah J.",
          handle: "@sarahj",
          testimonial: "De Peking eend was werkelijk voortreffelijk.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-stylish-smiling-beautiful-woman-retro-vintage-50s-cafe-drinking-milk-shake-cocktail-pink-tshirt-silver-jacket-wearing-pink-sunglasses-having-fun-cheerful-mood_285396-10714.jpg",
        },
        {
          name: "Michael C.",
          handle: "@michaelc",
          testimonial: "De service is geweldig en persoonlijk.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-handsome-asian-man-friends-reunion_23-2149244687.jpg",
        },
        {
          name: "Emily R.",
          handle: "@emilyr",
          testimonial: "Ruime porties en geweldige sushi.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/group-beautiful-young-women-enjoying-dinner-together_23-2148454134.jpg",
        },
        {
          name: "David K.",
          handle: "@davidk",
          testimonial: "Beste Aziatische restaurant in de stad.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/vertical-photo-beautiful-lady-sitting-restaurant-smiling-camera_114579-92383.jpg",
        },
        {
          name: "Lara S.",
          handle: "@laras",
          testimonial: "Heerlijk eten met veel aandacht bereid.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-person-playing-poker-with-friends_23-2149276094.jpg",
        },
      ]}
      buttons={[
        {
          text: "Reserveer een tafel",
          href: "#contact",
        },
        {
          text: "Bekijk het menu",
          href: "#menu",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/top-view-sushi-rolls-with-salmon-pickled-ginger-slices-wasabi-plate-rustic_141793-11695.jpg"
      imageAlt="Authentic sushi and tempura presentation"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/woman-eating-restaurant_23-2148006700.jpg",
          alt: "Woman eating in restaurant",
        },
        {
          src: "http://img.b2bpic.net/free-photo/stylish-smiling-beautiful-woman-retro-vintage-50s-cafe-sitting-bar-drinking-milk-shake-cocktail-pink-tshirt-balcj-leather-jacket-jeans-having-fun-cheerful-mood_285396-10732.jpg",
          alt: "Stylish smiling woman in cafe",
        },
        {
          src: "http://img.b2bpic.net/free-photo/cheerful-pretty-stylish-smiling-woman-colorful-retro-vintage-american-50s-cafe-sitting-table-drinking-milk-shake-cocktail-wearing-pink-sunglasses-having-fun_285396-10740.jpg",
          alt: "Cheerful woman in retro cafe",
        },
        {
          src: "http://img.b2bpic.net/free-photo/close-up-image-happy-smiling-woman-enjoy-her-morning-french-breakfast-open-cafe-terrace-tasty-organic-food-holding-french-croissant-her-hand_291049-526.jpg",
          alt: "Woman on cafe terrace",
        },
        {
          src: "http://img.b2bpic.net/free-photo/close-up-smiley-people-with-food_23-2149152879.jpg",
          alt: "Happy people with food",
        },
      ]}
      avatarText="Sluit aan bij onze vaste gasten"
      marqueeItems={[
        {
          type: "text",
          text: "Authentieke Keuken",
        },
        {
          type: "text",
          text: "Verse Ingrediënten",
        },
        {
          type: "text",
          text: "Persoonlijke Service",
        },
        {
          type: "text",
          text: "Sfeervolle Ambience",
        },
        {
          type: "text",
          text: "Culinaire Beleving",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="Waarom Tai Yu"
      title="Een plek waar je je welkom voelt"
      description="Bij Tai Yu draait het niet alleen om eten. Het draait om persoonlijke aandacht, een warme sfeer en de tijd nemen voor elke gast."
      subdescription="Of je nu met vrienden komt, familie of als vaste gast — je wordt hier gezien."
      icon={Heart}
      imageSrc="http://img.b2bpic.net/free-photo/restaurant-table-12-persons-with-blue-chairs-fireplace-white-brick-walls-wide-window_140725-8456.jpg"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardSix
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Perfecte gerechten",
          description: "Tempura gamba’s en springrolls die eruit springen door versheid.",
          imageSrc: "http://img.b2bpic.net/free-photo/mixed-sushi-set_1339-5696.jpg",
        },
        {
          title: "Signature Peking eend",
          description: "Onze trots: rijk, mals en perfect gekruid volgens authentiek recept.",
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-sambal-dish-arrangement-with-copy-space_23-2149076076.jpg",
        },
        {
          title: "Topkwaliteit sushi",
          description: "Dagvers bereid met hoogwaardige ingrediënten en zorgvuldige presentatie.",
          imageSrc: "http://img.b2bpic.net/free-photo/selective-focus-point-sushi-roll_74190-4315.jpg",
        },
      ]}
      title="Waarom gasten blijven terugkomen"
      description="Ervaar de kwaliteit en service die Tai Yu uniek maken."
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="two-columns-alternating-heights"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          name: "Sushi Selectie",
          price: "€24.50",
          imageSrc: "http://img.b2bpic.net/free-photo/chalkboard-near-sushi-set_23-2147773703.jpg",
        },
        {
          id: "2",
          name: "Tempura Gamba's",
          price: "€14.50",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-delicious-corn-dog_23-2149388005.jpg",
        },
        {
          id: "3",
          name: "Signature Peking Eend",
          price: "€29.00",
          imageSrc: "http://img.b2bpic.net/free-photo/fried-chicken-sweet-sauce-with-slice-lemon_140725-9527.jpg",
        },
        {
          id: "4",
          name: "Vegetarische Dim Sum",
          price: "€12.00",
          imageSrc: "http://img.b2bpic.net/free-photo/caucasian-khinkali-dough-wooden-board-with-green-onions_114579-34813.jpg",
        },
        {
          id: "5",
          name: "Misosoep",
          price: "€6.50",
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-meal-table_23-2150857690.jpg",
        },
        {
          id: "6",
          name: "Krokante Springrolls",
          price: "€8.50",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-delicious-asian-food_23-2150535887.jpg",
        },
      ]}
      title="Onze Specialiteiten"
      description="Ontdek onze met zorg samengestelde selectie gerechten."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          title: "Uitstekend",
          quote: "Ver boven het gemiddelde. De tempura gamba’s en Peking eend waren voortreffelijk.",
          name: "Sarah J.",
          role: "Vaste gast",
          imageSrc: "http://img.b2bpic.net/free-photo/laughing-woman-with-dish-menu_23-2147681115.jpg",
        },
        {
          id: "2",
          title: "Geweldige service",
          quote: "Heerlijk eten en geweldige service. Als vaste klant word je meteen herkend.",
          name: "Michael C.",
          role: "Vaste gast",
          imageSrc: "http://img.b2bpic.net/free-photo/smiley-woman-doing-thumbs-up_23-2148628939.jpg",
        },
        {
          id: "3",
          title: "Heerlijk",
          quote: "Alles was even lekker. Ruime porties en vriendelijke bediening — we komen terug.",
          name: "Emily R.",
          role: "Culinair enthousiast",
          imageSrc: "http://img.b2bpic.net/free-photo/arrangement-delicious-prepared-meal_23-2149043026.jpg",
        },
        {
          id: "4",
          title: "Overheerlijk",
          quote: "Met aandacht bereid en dat proef je. Alles was vers en smaakvol.",
          name: "David K.",
          role: "Liefhebber",
          imageSrc: "http://img.b2bpic.net/free-photo/young-friends-enjoying-time-together_23-2148395394.jpg",
        },
        {
          id: "5",
          title: "Sushi topper",
          quote: "Sushi is echt héérlijk. En het personeel maakt de avond compleet.",
          name: "Lara S.",
          role: "Sushi fan",
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-drinking-iced-coffee_23-2149624087.jpg",
        },
      ]}
      title="Gasten over Tai Yu"
      description="Dit is wat onze vaste gasten zeggen over hun ervaring."
    />
  </div>

  <div id="drinks" data-section="drinks">
      <PricingCardOne
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "p1",
          badge: "Fris & Licht",
          price: "Vanaf €3.50",
          subtitle: "Perfecte begeleiders",
          features: [
            "Japanse sake",
            "Speciaalbier",
            "Premium frisdranken",
          ],
        },
        {
          id: "p2",
          badge: "Verfijnd",
          price: "Vanaf €6.00",
          subtitle: "Culinaire selectie",
          features: [
            "Huiswijn selectie",
            "Klassieke cocktails",
            "Japanse whisky",
          ],
        },
      ]}
      title="Drankenkaart"
      description="Zorgvuldig geselecteerde dranken voor de perfecte pairing."
    />
  </div>

  <div id="socialproof" data-section="socialproof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Lokaal Vers",
        "Japans Import",
        "Premium Sakes",
        "Culinair Gilde",
        "Gastvrij Nederland",
        "Kwaliteit Keur",
        "Vaste Gasten Club",
      ]}
      title="Onze partners & erkenningen"
      description="Wij werken samen met de beste leveranciers voor authentieke kwaliteit."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars",
      }}
      text="Ervaar Tai Yu zelf. Wacht niet te lang — onze tafels zijn erg geliefd bij onze vaste gasten."
      buttons={[
        {
          text: "Reserveer nu",
          href: "#",
        },
        {
          text: "Bel direct",
          href: "tel:+31123456789",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="Tai Yu"
      columns={[
        {
          title: "Restaurant",
          items: [
            {
              label: "Menu",
              href: "#menu",
            },
            {
              label: "Over ons",
              href: "#about",
            },
            {
              label: "Reserveringen",
              href: "#contact",
            },
          ],
        },
        {
          title: "Service",
          items: [
            {
              label: "Contact",
              href: "#contact",
            },
            {
              label: "FAQ",
              href: "#",
            },
            {
              label: "Privacybeleid",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2025 | Tai Yu Restaurant"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
