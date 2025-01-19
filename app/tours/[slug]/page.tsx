import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'

// Create a Map component to handle the Google Maps integration
function TourMap({ location, title }: { location: string; title: string }) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${location}&zoom=12&size=800x400&scale=2&maptype=roadmap&markers=color:red%7C${location}&key=${apiKey}`

  return (
    <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
      <Image
        src={mapUrl || "/placeholder.svg"}
        alt={`Map showing location of ${title}`}
        fill
        className="object-cover"
      />
    </div>
  )
}

const tourDetails = {
  "nairobi-national-park": {
    title: "Nairobi National Park Day Trip",
    image: "/images/tours/nairobi-national-park.jpeg",
    description: "Experience a safari in the heart of Kenya's capital city",
    fullDescription: `
      Nairobi National Park is a unique urban wildlife sanctuary located just 7 kilometers from the bustling city center of Nairobi. This day trip offers an incredible opportunity to witness diverse African wildlife against the backdrop of the city's skyline.

      During your visit, you'll have the chance to spot various animals including lions, zebras, giraffes, and rhinos. The park is also home to over 400 species of birds, making it a paradise for bird watchers.

      Your day trip includes:
      - Pickup and drop-off from your Nairobi hotel
      - Guided game drive in a 4x4 vehicle
      - Picnic lunch in the park
      - Visit to the Ivory Burning Site Monument
      - Optional visit to the Animal Orphanage (additional cost)

      Total spending: The tour price starts from $150 per person, which includes park fees, transportation, guide, and lunch. Additional costs may include souvenirs, optional activities, and gratuities.
    `,
    duration: "1 day",
    price: "From $150",
  },
  "mombasa-old-town": {
    title: "Mombasa Old Town & Fort Jesus Tour",
    image: "/images/tours/mombasa/Fort-Jesus-Tour.jpeg",
    description: "Explore the rich history and culture of coastal Kenya",
    fullDescription: `
      Step back in time as you explore the historic Old Town of Mombasa and the iconic Fort Jesus. This full-day tour offers a fascinating glimpse into the rich cultural heritage of Kenya's coastal region.

      Your journey begins in the narrow, winding streets of Old Town, where you'll discover a unique blend of African, Arab, and European influences. Admire the intricately carved wooden doors, visit local markets, and learn about the area's complex history.

      The tour includes:
      - Guided walking tour of Mombasa Old Town
      - Visit to Fort Jesus, a 16th-century Portuguese fort
      - Traditional Swahili lunch at a local restaurant
      - Shopping opportunity at local markets
      - Round-trip transportation from your Mombasa hotel

      Total spending: The tour price starts from $100 per person, covering guide fees, entrance to Fort Jesus, lunch, and transportation. Additional costs may include souvenirs and optional gratuities.
    `,
    duration: "1 day",
    price: "From $100",
  },
  "lake-nakuru-flamingo": {
    title: "Lake Nakuru Flamingo Excursion",
    image: "/images/tours/Lake_Nakuru_Kenya.jpeg",
    description: "Witness the stunning pink flamingos at Lake Nakuru",
    fullDescription: `
      Embark on a breathtaking journey to Lake Nakuru, famous for its vast flocks of flamingos that paint the landscape pink. This day trip offers a unique opportunity to witness one of nature's most spectacular sights and explore the diverse wildlife of Lake Nakuru National Park.

      Lake Nakuru is a shallow alkaline lake in Kenya's Rift Valley, known for attracting millions of flamingos to its algae-rich waters. Besides the flamingos, the park is home to a variety of wildlife including rhinos, lions, leopards, and over 450 species of birds.

      Your excursion includes:
      - Round-trip transportation from Nairobi
      - Entrance fees to Lake Nakuru National Park
      - Guided game drive in a 4x4 vehicle
      - Picnic lunch by the lake
      - Visit to Baboon Cliff for panoramic views

      Total spending: The tour price starts from $180 per person, which covers transportation, park fees, guide, and lunch. Additional costs may include optional activities, souvenirs, and gratuities.
    `,
    duration: "1 day",
    price: "From $180",
  },
  "kampala-city-tour": {
    title: "Kampala City Tour",
    image: "/images/destinations/uganda/Kampala_Uganda.jpeg",
    description: "Discover the vibrant capital of Uganda in a day",
    fullDescription: `
      Immerse yourself in the bustling energy of Kampala, Uganda's capital city, on this comprehensive day tour. Experience the perfect blend of modern urban life and rich cultural heritage as you explore the city's most iconic landmarks and hidden gems.

      Kampala, built on seven hills, offers a unique cityscape filled with historical sites, bustling markets, and important cultural institutions. This tour provides an excellent introduction to Uganda's heart and soul.

      Your Kampala city tour includes:
      - Visit to the Uganda Museum, showcasing the country's cultural heritage
      - Tour of the Kasubi Tombs, a UNESCO World Heritage site
      - Exploration of the vibrant Owino Market
      - Visit to the Gaddafi National Mosque for panoramic city views
      - Traditional lunch at a local restaurant

      Total spending: The tour price starts from $120 per person, covering transportation, guide fees, entrance fees, and lunch. Additional costs may include souvenirs, optional activities, and gratuities.
    `,
    duration: "1 day",
    price: "From $120",
  },
  "zanzibar-spice-tour": {
    title: "Zanzibar Spice Tour",
    image: "/images/tours/zanzibar/dune-zanzibar.jpeg",
    description: "Explore the aromatic spice plantations of Zanzibar",
    fullDescription: `
      Embark on a sensory journey through Zanzibar's famous spice plantations. This half-day tour offers a fascinating glimpse into the island's rich history and its role in the spice trade that has shaped cultures and cuisines around the world.

      Known as the "Spice Island," Zanzibar has been a prominent player in the spice trade for centuries. This tour allows you to see, smell, and taste a variety of spices and tropical fruits growing in their natural environment.

      Your spice tour includes:
      - Guided walk through lush spice plantations
      - Opportunity to see, smell, and taste various spices and fruits
      - Demonstrations of traditional uses of different spices
      - Visit to a local village to learn about rural life in Zanzibar
      - Tropical fruit tasting session

      Total spending: The tour price starts from $80 per person, which includes transportation, guide fees, and fruit tasting. Additional costs may include purchases of spices or handmade crafts, and optional gratuities.
    `,
    duration: "Half day",
    price: "From $80",
  },
  "dubai-desert-safari": {
    title: "Dubai Desert Safari",
    image: "/images/tours/Morocco_Tours_from_Marrakech.jpeg",
    description: "Experience the thrill of dune bashing and desert activities",
    fullDescription: `
      Embark on an exhilarating adventure into the Arabian Desert with our Dubai Desert Safari. This tour offers a perfect blend of adrenaline-pumping activities and traditional Bedouin experiences, allowing you to discover the magic of the desert landscape.

      Your desert adventure begins with an exciting dune bashing session in a 4x4 vehicle, followed by a series of traditional desert activities and culminating in a memorable evening under the stars.

      Your Dubai Desert Safari includes:
      - Pickup and drop-off from your Dubai hotel
      - Thrilling dune bashing experience
      - Camel riding
      - Sandboarding
      - Henna painting
      - Traditional Arabic costume photo opportunity
      - BBQ dinner with live entertainment (belly dancing and tanoura show)
      - Stargazing in the desert

      Total spending: The tour price starts from $200 per person, which covers transportation, activities, and dinner. Additional costs may include optional quad biking, souvenir purchases, and gratuities.
    `,
    duration: "1 day",
    price: "From $200",
  }
}

export default function TourPage({ params }: { params: { slug: string } }) {
  const tour = tourDetails[params.slug as keyof typeof tourDetails]

  if (!tour) {
    notFound()
  }

  const whatsappNumber = process.env.WHATSAPP_PHONE_NUMBER || "+254701506538"
  const flightInquiryMessage = encodeURIComponent(`Hello, I'm interested in booking a flight for the ${tour.title} tour. Can you provide more information?`)
  const hotelInquiryMessage = encodeURIComponent(`Hello, I'm looking for hotel recommendations for the ${tour.title} tour. Can you assist me?`)

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow container mx-auto px-4 py-8">
        <article className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 opacity-0 animate-[fade-up_1s_ease-out_forwards]">{tour.title}</h1>
          
          {/* Hero Image */}
          <div className="relative h-[60vh] mb-8 rounded-xl overflow-hidden opacity-0 animate-[fade-up_1s_ease-out_0.2s_forwards]">
            <Image
              src={tour.image || "/placeholder.svg"}
              alt={tour.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Video Section */}
          {tour && (
            <div className="mb-8 opacity-0 animate-[fade-up_1s_ease-out_0.4s_forwards]">
              <h2 className="text-2xl font-semibold mb-4">Experience the Journey</h2>
            </div>
          )}

          <p className="text-xl mb-6 opacity-0 animate-[fade-up_1s_ease-out_0.6s_forwards]">{tour.description}</p>
          <div className="prose max-w-none mb-8 opacity-0 animate-[fade-up_1s_ease-out_0.6s_forwards]">
            {tour.fullDescription.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4">{paragraph}</p>
            ))}
          </div>

          <div className="flex justify-between items-center mb-8">
            <div>
              <p className="text-lg font-semibold">{tour.duration}</p>
              <p className="text-xl text-primary font-bold">{tour.price}</p>
            </div>
            <Link href={`/book?package=${params.slug}`}>
              <Button size="lg">Book Now</Button>
            </Link>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4">Additional Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Flight Booking</h3>
                <p className="mb-2">Need help with your flight? We can assist you in finding the best deals and making your reservation.</p>
                <a href={`https://wa.me/${whatsappNumber}?text=${flightInquiryMessage}`} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline">Inquire via WhatsApp</Button>
                </a>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Hotel Reservation</h3>
                <p className="mb-2">Looking for accommodation? We can recommend and book hotels that suit your preferences and budget.</p>
                <a href={`https://wa.me/${whatsappNumber}?text=${hotelInquiryMessage}`} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline">Inquire via WhatsApp</Button>
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
      <Footer />
    </main>
  )
}



