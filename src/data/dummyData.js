
import {
  FaBehance,
  FaDribbble,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPaintRoller,
  FaTwitter,
  FaVimeo,
  FaYoutube,
} from "react-icons/fa";
import { FiHeadphones } from "react-icons/fi";
import { FaHotel, FaUserAlt,FaRegNewspaper } from 'react-icons/fa';
import { FiMapPin } from "react-icons/fi";
import { BiHomeAlt, BiMoney, BiBuildings } from 'react-icons/bi';
import { GiCook , GiMountainCave} from 'react-icons/gi';


export const testimonials = [
  {
    id: 1,
    //indian names please
    name: " Narayan",
    role: "Adventure Explorer",
    image: "/images/avatar-3.png",
    reviewText:
      "Our South India journey with A2Z Tourism was beyond amazing. They crafted a unique experience, blending adventure and cultural exploration. The memories we created will last a lifetime. Highly recommended!",
  },
  {
    id: 2,
    name: "Karan Patel",
    role: "History Enthusiast",
    image: "/images/avatar-1.png",
    reviewText:
      "A2Z Tourism made our visit to Kerala and Tamil Nadu unforgettable. The tailor-made itinerary showcased the rich history and vibrant culture of the region. Exceptional service and attention to detail!",
  },
  {
    id: 3,
    name: "Aanya",
    role: "Nature Lover",
    image: "/images/avatar-2.png",
    reviewText:
      "For nature enthusiasts like us, the journey with A2Z Tourism was a dream come true. From the lush tea plantations of Munnar to the serene backwaters of Alleppey, every moment was a feast for the senses.",
  },
];

export const services = [
  {
    id: 1,
    name: "Accommodation",
    icon: <FaHotel />,
    text: "Discover a range of luxurious accommodations tailored to your preferences. From cozy boutique hotels to expansive resorts, we ensure a comfortable and memorable stay during your journey.",
  },
  {
    id: 2,
    name: "Local Guides",
    icon: <FaUserAlt />,
    text: "Our experienced local guides are passionate about showcasing the hidden gems and cultural wonders of each destination. Immerse yourself in the rich history and vibrant traditions with our knowledgeable guides.",
  },
  {
    id: 3,
    name: "Travel Assistance",
    icon: <FiMapPin />,
    text: "Enjoy seamless travel with our 24/7 support and travel assistance. From airport transfers to on-the-go recommendations, our team ensures that your journey is stress-free and filled with delightful experiences.",
  },
  {
    id: 4,
    name: "Culinary Experiences",
    icon: <GiCook />,
    text: "Savor the flavors of each region with our curated culinary experiences. Indulge in local cuisines, explore street food, and dine at top-rated restaurants, creating a gastronomic adventure throughout your trip.",
  },
  {
    id: 5,
    name: "Adventure Activities",
    icon: <GiMountainCave />,
    text: "For thrill-seekers, we offer a variety of adventure activities. Whether it's hiking in scenic landscapes, water sports in crystal-clear waters, or exploring wildlife, our adventures cater to every adrenaline enthusiast.",
  },
  {
    id: 6,
    name: "Cultural Events",
    icon: <FaRegNewspaper />,
    text: "Immerse yourself in the local culture with our curated cultural events. From traditional performances to festive celebrations, we provide an authentic and enriching cultural experience during your journey.",
  },
];

export const projects = [
  {
    id: 1,
    name: "Attukadu waterfalls",
    number: "Kerala",
    image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/Attukadu%20waterfalls.png?alt=media&token=b4c136cb-ce3a-4220-b02a-5415cdd0be1f",
  },
  {
    id: 2,
    name: "The Napier Museum",
    number: 'Kerala',
    image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/Napier_Museum.png?alt=media&token=190af796-e917-460d-b410-cdc23a0f5a12",
  },
  {
    id: 3,
    name: "Santa Clause Basilica",
    number: 'Kerala',
    image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/Santa%20Clause%20Basilica.png?alt=media&token=f60ca1b9-7a5e-4be2-8f23-ce8ca63cd851",
  },
  {
    id: 4,
    name: "Thanjavur Temple",
    number: 'Tamil Nadu',
    image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/TamilNadu%2Fthanjavur.png.jpg?alt=media&token=a48d0848-8763-43e2-b9d6-7d722cf34028",
  },
  {
    id: 5,
    name: "Krishna Rock",
    number: 'Tamil Nadu',
    image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/TamilNadu%2Frock-1061729_1280.jpg?alt=media&token=94cbd587-096c-4e5e-aa0d-467e5b1c38aa",
  },
  {
    id: 6,
    name: "Thiruvalluvar Statue",
    number: 'Tamil Nadu',
    image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/thiruvalluvar-statue-727594_1280.jpg?alt=media&token=9aedd8ba-99f6-47db-98c4-8c4413b1932c",
  },
];

export const categories = [
  {
    id: 1,
    name: "Cochin",
    number: "Kerala",
    image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/Cochin.png.jpg?alt=media&token=6e7c48c2-19b9-4c8a-b93b-5525d3d58724",
  },
  
  {
    id: 2,
    name: "Tea Museum",
    number: "Kerala",
    image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/Tea-Museum.png?alt=media&token=80be75d0-2774-46f9-8d95-74a11d822b42",
  },
  {
    id: 3,
    name: "Thekkady",
    number: "Kerala",
    image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/Thekkady.png?alt=media&token=73561443-2488-4314-9890-6265e57a8a11",
  },
  {
    id: 4,
    name: "Alleppey",
    number: "Kerala",
    image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/slider-5.jpg?alt=media&token=2ae9f00d-1ec8-44b1-b539-834047f9f4ad",
  },
  {
    id: 5,
    name: "St. Francis Church",
    number: "Kerala",
    image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/St.%20Francis%20Church.png?alt=media&token=08517a77-d05c-475f-ba84-5f1b049ef663",
  },
  {
    id: 6,
    name: "Trivandrum",
    number: "Kerala",
    image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/TRIVANDRUM.jpg?alt=media&token=dcf6f7e2-9f07-4d19-b5e5-ee3da690b258",
  },
  {
    id: 7,
    name: "Eravikulam National Park",
    number: "Kerala",
    image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/eravikulam.png?alt=media&token=5bbe1435-12b6-42df-bf5d-00e7de1fd2ff",
  },
  {
    id: 8,
    name: "Napier Museum",
    number: "Kerala",
    image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/Napier_Museum.png?alt=media&token=190af796-e917-460d-b410-cdc23a0f5a12",
  },
 
];

export const Tamilnaducategories = [
  {
    id: 0,
    name: "Chennai",
    number: "Tamil Nadu",
    image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/TamilNadu%2Fmgr-memorial.png?alt=media&token=6c5ec8bb-672c-4a0d-b296-a8292e4c0171",
  },
  {
    id: 1,
    name: "Madurai",
    number: "Tamil Nadu",
    image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/slider-1.jpg?alt=media&token=bf960764-f127-4b70-b044-f6f79dc3d401",
  },
  {
    id: 2,
    name: "Ramanathaswamy Temple",
    number: "Tamil Nadu",
    image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/TamilNadu%2Framanadhaswamytemple.png?alt=media&token=29c3fa66-d9d7-432c-a4ba-5e724ce99506",
  },
  {
    id: 3,
    name: "Mysore Palace",
    number: "Tamil Nadu",
    image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/TamilNadu%2Fmysorepalace.png?alt=media&token=b2101131-22df-474f-9305-df6f9561190f",
  },

  {
    id: 4,
    name: "Mahabalipuram",
    number: "Tamil Nadu",
    image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/elephants.png.jpg?alt=media&token=80edeef4-e1f0-4bd8-8c54-433e527e11a3",
  },
  {
    id: 5,
    name: "Pondicherry",
    number: "Tamil Nadu",
    image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/TamilNadu%2Fpndicherry.png?alt=media&token=58f4a545-4789-41e2-a116-8e47e987ec38",
  },
  {
    id: 6,
    name: "Tirupati",
    number: "Tamil Nadu",
    image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/TamilNadu%2Ftirupathi.png?alt=media&token=a6e9f572-ff15-478b-ae55-458dabc40872",
  },
  {
    id: 7,
    name:"Ooty",
    number: "Tamil Nadu",
    image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/TamilNadu%2Footy.png?alt=media&token=bbf3cb0e-82ba-4d7e-b306-d7a77b9ff890",
  },
  {
    id: 8,
    name: "Kanyakumari",
    number: "Tamil Nadu",
    image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/TamilNadu%2Fsunrise-kanniyakumari.png?alt=media&token=ecdee93f-9d3a-42ee-93b5-aa3ed509c05c",
  },
  
];

export const NortheastCategories = [
  {
    id: 0,
    name: "Gangtok",
    number: "Sikkim",
    image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/North%20East%20Tours%2Fgankot.png?alt=media&token=08b5846e-5646-4665-a2ca-f884d49a05c8",
  },
  {
    id: 1,
    name: "Darjeeling",
    number: "West Bengal",
    image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/North%20East%20Tours%2FDarjeeling.png?alt=media&token=91f862bd-15d5-4fcb-8014-11197112faed",
  },
  {
    id: 2,
    name: "Pelling",
    number: "Sikkim",
    image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/North%20East%20Tours%2FPelling.png?alt=media&token=63c70862-0f93-43e9-9bb9-e43ce22abc84",
  },
  {
    id: 3,
    name: "Kalimpong",
    number: "West Bengal",
    image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/North%20East%20Tours%2FKalimpong.png?alt=media&token=e383b985-88d9-4e10-af4b-cf3794813ab2",
  },
  {
    id: 4,
    name: "Shillong",
    number: "Meghalaya",
    image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/North%20East%20Tours%2FShillong.png?alt=media&token=5c42f9cf-ba3a-4584-b7ff-02a17ab592b4",
  },
  {
    id: 5,
    name: "Guwahati",
    number: "Assam",
    image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/North%20East%20Tours%2FGuwahati.png?alt=media&token=b009874c-a491-4e16-bfcc-9a7bb9a233f3",
  },
];

export const SrilankaCategories = [
  {
    id: 0,
    name: "Colombo",
    number: "Sri Lanka",
    image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/Sri%20Lanka%20Tours%2FColombo_City.png?alt=media&token=a3c8527b-835a-4156-ad20-7169f9a7d962",
  },
  {
    id: 1,
    name: "Kandy",
    number: "Sri Lanka",
    image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/Sri%20Lanka%20Tours%2FKandy_Town_and_Bazaar.png?alt=media&token=dcfdcb7e-6ded-4a48-a4f5-98e6a3987440",
  },
  {
    id: 2,
    name: "Nuwara Eliya",
    number: "Sri Lanka",
    image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/Sri%20Lanka%20Tours%2FNuwara_Eliya_Tea_Plantation.png?alt=media&token=36722792-ea75-4cc3-b61c-1a3b9308d6a0",
  },
  {
    id: 3,
    name: "Bentota",
    number: "Sri Lanka",
    image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/Sri%20Lanka%20Tours%2FBentota_River_Safari.png?alt=media&token=b01572be-8323-4bcf-bd0f-81468f01af64",
  },
  {
    id: 4,
    name: "Colombo Folk Art Center",
    number: "Sri Lanka",
    image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/Sri%20Lanka%20Tours%2FColombo_Folk_Art_Centre..png?alt=media&token=d47e59d1-fbf3-408d-8323-da5f1019dbcc",
  },
  {
    id: 5,
    name: "Pinnawela Elephant Orphanage",
    number: "Sri Lanka",
    image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/Sri%20Lanka%20Tours%2FPinnawela_Elephant_Orphanage.png?alt=media&token=4b7c1b41-ed47-483f-8fc5-1dd29f452a05",
  },
];






export const contentTamilnadu1 = [
  {
    title: "MADURAI / RAMESHWARAM / KANYAKUMARI (3 Nights / 4 Days)",
    subtitle: "Day 01 Arrive – Madurai",
    content: "Arrive Madurai and transfer to the hotel. Sightseeing tour of Madurai covering Meenakshi Amman Temple, Teppakulam, Alagarkoil, Thiruparankundram."
  },
  {
    subtitle: "Day 02 Madurai – Rameshwaram",
    content: "Arrive in Madurai, drive off to Rameshwaram. Upon arrival, check-in to your hotel. One of the 12 Jyotirlingas in India. Legend says that RamanathaSwamy Temple stands where Lord Rama performed worship of a Sand Lingam made by Sita. Agni Theertham Temple - The sacredness of the place makes it a popular bathing spot with the pilgrims. Ideally a bath at Agni Theertham precedes the visit to the Ramanatha Swamy Temple. Dhanushkodi Temple – It is believed that the bridge was built by the monkey forces of Lord Rama to access Sri Lanka. Gandamadanaparavtham - the highest point in the island. The devotees believe that lord Rama's feet were placed on the stone. An earmark of the footprint is there. Stay overnight at your hotel in Rameshwaram."
  },
  {
    subtitle: "Day 03 Rameshwaram – Kanyakumari",
    content: "Early Morning visit Dhanushkodi Temple – It is believed that the bridge was built by the monkey forces of Lord Rama to access Sri Lanka. After breakfast check out from the hotel and proceed to Kanyakumari. On arrival, check in to your hotel."
  },
  {
    subtitle: "Day 04 Kanyakumari - Trivandrum Departure",
    content: "Early morning go to the beach to visit the Sun Rise. Morning breakfast. Visit Vivekananda Rock that houses a memorial dedicated to Swami Vivekanan. The Memorial is built at the convergence of the Indian Ocean, the Arabian Sea, and the Bay of Bengal. Visit Kanyakumari temple. Later drive to Trivandrum and drop off at the railway station / airport for your return flight."
  }
];
export const contentTamilnadu2 = [
  {
    title: "BANGALORE / MYSORE / OOTY (4 Nights / 5 Days)",
    subtitle: "Day 1: Bangalore - Mysore",
    content: "On arrival at Bangalore airport/railway station, proceed for an orientation tour of Bangalore. Later drive to Mysore. On arrival in Mysore, transfer to the hotel and check-in. Overnight stay at the hotel."
  },
  {
    subtitle: "Day 2: Mysore Sightseeing",
    content: "After breakfast, proceed for Mysore sightseeing. Visit Mysore Palace, Art Gallery & Chamundi Hill. In the evening, visit Brindavan Gardens. Overnight stay at the hotel."
  },
  {
    subtitle: "Day 3: Mysore to Ooty",
    content: "After breakfast, check out from the hotel and proceed to Ooty. On arrival at Ooty, transfer to the hotel and check-in. In the afternoon, go boating in Ooty Lake. Overnight stay at the hotel."
  },
  {
    subtitle: "Day 4: Ooty",
    content: "After breakfast, visit Connor. In the afternoon, return back to Ooty. Overnight stay at the hotel."
  },
  {
    subtitle: "Day 5: Ooty – Coimbatore (Departure)",
    content: "After breakfast, check out from the hotel. Proceed to Coimbatore airport or railway station for your onward journey back home."
  },
];
export const contentTamilnadu3 = [
  {
    title: "CHENNAI / TIRUPATI / MAHABALIPURAM / PONDICHERRY (4 Nights / 5 Days)",
    subtitle: "Day 1: Arrival in Chennai",
    content: "On arrival at Chennai, transfer to the hotel and check-in. In the afternoon, proceed for a half-day sightseeing tour in Chennai covering Santhome Cathedral and Marina Beach followed by an orientation tour. Overnight stay at Chennai."
  },
  {
    subtitle: "Day 2: Chennai – Tirupati – Chennai",
    content: "Full day trip to Tirupati Balaji Temple. Overnight stay at Chennai."
  },
  {
    subtitle: "Day 3: Chennai - Mahabalipuram",
    content: "Drive to Mahabalipuram. On arrival in Mahabalipuram, check in to the resort. Visit Shore Temple, Five Rathas, Arjuna’s Penance, and Butter Ball. Relax on the beach. Overnight stay at Mahabalipuram."
  },
  {
    subtitle: "Day 4: Mahabalipuram to Pondicherry",
    content: "After breakfast, drive to Pondicherry. Enroute visit Auroville. On arrival at Tanjore, check-in at the hotel. Afternoon visit Manakula Vinayagar Temple. See Aurobindo Ashram. Overnight stay at Pondicherry."
  },
  {
    subtitle: "Day 5: Pondicherry – Chennai (Departure)",
    content: "After breakfast, drive to Chennai. Transfer to the airport/railway station for your onward journey back home."
  },
];

export const contentTamilnadu4 = [
  {
    title: "CHENNAI / PONDICHERRY / KUMBAKONAM (NAVAGRAHA TEMPLES) / THANJAVUR / RAMESHWARAM / KANYAKUMARI / MADURAI (6 Nights / 7 Days)",
    subtitle: "Day 1: Arrive in Chennai",
    content: "On arrival at Chennai, transfer to the hotel and check-in. In the afternoon, proceed for a half-day sightseeing tour in Chennai covering Santhome Cathedral and Marina Beach followed by an orientation tour. Overnight stay at Chennai."
  },
  {
    subtitle: "Day 2: Chennai – Pondicherry – Kumbakonam",
    content: "Drive to Pondicherry. Visit Ganesh Temple, Aurobindo Ashram, Museum, Beach, Auroville, Mudaliar Kuppam (Boating). Later proceed to Chidambaram. After darshan, proceed to Vaitheeswaram. Visit Vaitheeswaran Koil (Chevaai), Thiruvengadu, Keezha Perumpallam, Thirunallar (Saneeswaran). Late evening arrive Kumbakonam and check in to the hotel. Overnight stay at Kumbakonam."
  },
  {
    subtitle: "Day 3: Kumbakonam to Thanjavur",
    content: "After breakfast, visit Navagraha Temples, Thirunageswaram (Ragu), Uppliappan (Perumal) Alangangudi (Guru), Suriyanar Kovil (Sun), and Swamimali. Return to the hotel. After lunch, check out from the hotel in Kumbakonam. Transfer to Thanjavur. Visit Kanjanur (Sukran), and Thanjavur Big Temple (Brigadeeswar Temple). On arrival check in to the hotel in Thanjavur. Overnight stay at Thanjavur."
  },
  {
    subtitle: "Day 4: Thanjavur to Rameswaram",
    content: "In the early morning, check out from the hotel. Transfer to Rameswaram from Thanjavur. En-route visit Trichy. Visit Sri Ranganathar Temple, Rock Fort Temple. Proceed to Rameswaram. On arrival check in to the hotel. After freshening up, visit Pamban Bridge, Rama Theertham, Lakshman Theertham, Sita Theertham, Pamban Bridge, Kentha Patha Parvath, Panch Muki Hanuman Temple, Sri Ramachandra Temple (Floating Stone). Overnight stay at Rameswaram."
  },
  {
    subtitle: "Day 5: Rameswaram to Kanyakumari",
    content: "In the early morning, visit Mandir for Sphatik Shivaling Darshan and have a bath in the 22 teerthams (wells). Visit Ramanathaswamy temple (bath in 22 wells), Agni Theertham (sea bath). Check out from the hotel in Rameswaram. Proceed to Kanyakumari. On arrival in Kanyakumari, check in to the hotel. Overnight stay at Kanyakumari."
  },
  {
    subtitle: "Day 6: Kanyakumari to Madurai",
    content: "Enjoy sunrise at Kanyakumari. Take a ferry boat to Swami Vivekananda Rock memorial. Visit Kanyakumari Mandir, Gandhi Mandapam, Thiruparappu falls, Suchindram and Trisamudra Milan. Later, check out from the hotel. Transfer from Kanyakumari to Madurai. On arrival check in to the hotel. Overnight stay at Madurai."
  },
  {
    subtitle: "Day 7: Madurai – Departure",
    content: "Morning visit local temples like Meenakshi Sundareswarar Temple, Azhagar Kovil, Mariamman Tank, Thiruparankundram, Gandhi Museum Thirumalai Nayak Palace. Check out from the hotel and drop off at airport / railway station for onward journey."
  },
];
export const contentTamilnadu5 = [
  {
    title: "TAMIL NADU TEMPLES AND BEACHES (9 Nights / 10 Days)",
    subtitle: "Day 1: Arrival in Chennai",
    content: "On arrival at Chennai, transfer to the hotel and check-in. In the afternoon, proceed for a half-day sightseeing tour in Chennai. Visit National Art Gallery, Fort Museum, and San Thome Cathedral. Drive past Marina Beach. Overnight stay at Chennai."
  },
  {
    subtitle: "Day 2: Excursion to Tirupati",
    content: "Proceed for a day excursion to Tirupati. Visit Lord Venkateswara and Tiruchanoor temple. Return to the hotel. Overnight stay at Chennai."
  },
  {
    subtitle: "Day 3: Chennai to Mahabalipuram",
    content: "Drive to Mahabalipuram. On arrival in Mahabalipuram, check in to the resort. In the afternoon, proceed for sightseeing. Visit Shore Temple, Five Rathas, Arjuna’s Penance, and Tiger Cave. Spend the rest of the evening at leisure on the beach. Overnight stay at Mahabalipuram."
  },
  {
    subtitle: "Day 4: Mahabalipuram to Tiruvannamalai",
    content: "Drive to Kancheepuram. Visit the temples Ekambareeswara, Vaikunta Perumal, Kamatchiamman, and Kailasanathar temple. Later drive to Tiruvannamalai. On arrival in Tiruvannamalai, check in to the hotel. Later, visit the Arunachaleeswarar temple and the Ashram of Sri Ramana Maharshi. Overnight stay at Tiruvannamalai."
  },
  {
    subtitle: "Day 5: Tiruvannmalai to Pondicherry",
    content: "Drive to Pondicherry. On arrival in Pondicherry, check in to the hotel. Visit Aurbindo Ashram. After lunch, visit Auroville. Spend the evening at leisure on the beach. Overnight stay at the hotel."
  },
  {
    subtitle: "Day 6: Pondicherry to Tanjore",
    content: "Visit Chidambaram the Nataraja temple with golden gopuram and Gangaikondacholapuram. Later, drive to Tanjore. On arrival at Tanjore, check in to the hotel. Visit Darasuram, Big temple, Museum, and Bronze gallery. Return to the hotel. Overnight stay at Tanjore."
  },
  {
    subtitle: "Day 7: Tanjore to Madurai",
    content: "Drive to Madurai. En-route visit Trichy Rockfort and Srirangam temple. On arrival at Madurai, check in to the hotel. In the afternoon, visit Madurai Meenakshi Temple, and Koodal Azhagar Temple. In the evening, enjoy sound and light show at Nayak’s Palace. Overnight stay at Madurai."
  },
  {
    subtitle: "Day 8: Excursion to Rameswaram",
    content: "Drive to Rameshwaram. Visit Ramanatha Swamy Temple. Return to Madurai. Overnight stay at Madurai."
  },
  {
    subtitle: "Day 9: Madurai to Kanyakumari",
    content: "Proceed to Kanyakumari. On arrival at Kanyakumari, check in to the hotel. Visit Amman Temples Thiruvalluvar Statue, and Vivekananda Rock Memorial. Overnight stay at Kanyakumari."
  },
  {
    subtitle: "Day 10: Departure",
    content: "In the morning, witness the sunrise. Later proceed to Trivandrum. After brief sightseeing of Trivandrum, board the flight/train for your onward journey back home."
  },
];
export const contentTamilnadu6 = [
  {
    title: "TEMPLES / HILL STATION / BACK WATER HOUSE BOAT (9 Nights / 10 Days)",
    subtitle: "Day 1: Arrive - Trivandrum",
    content: "On arrival at Trivandrum airport or railway station, transfer to the hotel. Trivandrum sightseeing tour covers Sree Padmanabha Swami Temple, Kuthiramalika Palace Museum, Napier Museum, Sree Chithra art gallery, Zoological Park, Science & Technology Museum, Kanakakunnu Palace, and Planetarium. Time permitting visit to Kovalam beach. Overnight stay at Kovalam."
  },
  {
    subtitle: "Day 2: Trivandrum to Kanyakumari",
    content: "After breakfast, proceed to Kanyakumari. On arrival in Kanyakumari, check in to the hotel. Later, proceed for sightseeing. Visit Padmanabhapuram Palace, Thiruvalluvar Statue, Vivekananda Rock Memorial, Bhagavathy Amman Temple, Gandhi Memorial, Bharat Mata Temple, Kanyakumari Beach, and Sunset View Point. Overnight stay at Kanyakumari."
  },
  {
    subtitle: "Day 3: Kanyakumari to Rameswaram",
    content: "After breakfast, proceed to Rameswaram. On arrival at Rameswaram, check in to the hotel. Later, proceed for sightseeing. Visit Ramanathaswamy Temple, Agnitheertham, Dhanushkodi (jeep cost extra), Former President Shri. Dr. Abdul Kalam’s House, and Pamban Bridge. Overnight stay at Rameswaram."
  },
  {
    subtitle: "Day 4: Rameswaram to Madurai",
    content: "After breakfast, proceed to Madurai. On arrival at Madurai, check in to the hotel. Later, proceed for sightseeing. Visit Meenakshi Amman Temple, Thirumalai Nayak Palace, Thirupparankundram, and Gandhi Museum. Overnight stay at Madurai."
  },
  {
    subtitle: "Day 5: Madurai to Munnar",
    content: "After breakfast, proceed to Munnar. On arrival in Munnar, check in to the resort. Overnight stay at Munnar."
  },
  {
    subtitle: "Day 6: Munnar Sightseeing",
    content: "After breakfast, proceed for sightseeing in Munnar. Visit Mattupetty Dam, Echo Point, and Kundala Lake. Afterward, visit Tea Gardens & Rose Gardens. Overnight stay at Munnar."
  },
  {
    subtitle: "Day 7: Munnar to Thekkady",
    content: "After breakfast, proceed to Thekkady. On arrival at Thekkady, check in to the hotel. Later, visit Periyar Wildlife Sanctuary. Enjoy numerous adventure activities on direct payment. Overnight stay at Thekkady."
  },
  {
    subtitle: "Day 8: Thekkady to Alleppey (House Boat)",
    content: "After breakfast, proceed to Alleppey. On arrival at Alleppey, check in to the House Boat. Drift through the calm backwaters. Lunch and Dinner included. Overnight stay on the House Boat."
  },
  {
    subtitle: "Day 9: Alleppey – Cochin",
    content: "After breakfast, proceed to Cochin. On arrival in Kochi, check in to the hotel. In the afternoon, proceed for a half-day city tour of Kochi. Visit Chinese Fishing Nets, St. Francis Church, Santa Cruz Basilica, Jewish Synagogue, and Mattancherry Palace/Dutch Palace. Overnight stay at Cochin."
  },
  {
    subtitle: "Day 10: Departure",
    content: "After breakfast, check out from the hotel. Proceed to the railway station/airport for your onward journey back home."
  },
];

export const contentTamilnadu7 = [
  {
    title: "BANGALORE / COORG / WAYANAD (04 Nights / 05 Days)",
    subtitle: "Day 1: Bangalore to Coorg",
    content: "On arrival at Bangalore in the morning, you will be picked up from the railway station/airport. Immediately drive to Coorg. En-route visit Golden Temple at Bailkuppe. On arrival, transfer to the hotel and check-in. In the evening, visit Omkareshwara Temple, Raja's Seat, and enjoy the musical fountain. Overnight stay at Coorg."
  },
  {
    subtitle: "Day 2: Coorg Sightseeing",
    content: "After breakfast, proceed for local sightseeing in Coorg. Visit Abbey Falls, Bagmandala, Dubare Forest, and enjoy Elephant Safari. Overnight stay at Coorg."
  },
  {
    subtitle: "Day 3: Coorg to Wayanad",
    content: "After breakfast, check out from the hotel and depart for Wayanad. On arrival in Wayanad, transfer to the hotel and check-in. Spend the rest of the day at leisure. Overnight stay at Wayanad."
  },
  {
    subtitle: "Day 4: Wayanad Sightseeing",
    content: "After breakfast, proceed for a full day of local sightseeing in Wayanad. Visit Pookode Lake, Wayanad Wildlife Sanctuary, Meenmutty Waterfalls. Overnight stay at Wayanad."
  },
  {
    subtitle: "Day 5: Departure",
    content: "After breakfast, check out from the hotel. Transfer to Calicut Airport for your onward journey back home."
  }
];


export const contents1 = [
  {
    title: "COCHIN / MUNNAR / THEKKADY (3 Nights / 4 Days)",
    subtitle: "Day 01 Arrive Cochin to Munnar Local.",
    content: "On arrival at Cochin, you will be transferred to Munnar. Upon arrival, check in at the hotel. Munnar is located at the confluence of 03 rivers as the very name signifies. The sprawling tea plantations and picturesque towns make Munnar a popular hill resort town in South India. Evening at leisure. Overnight stay at the Hotel. Sightseeing:- Enroute visit Kodanadu elephant care centre, Cheyyara waterfalls, Valara waterfalls, Attukadu waterfalls, Spice plantations etc.",
  },
  {

    subtitle: "Day 02 Munnar Local sightseeing.",
    content: "In the morning start the sightseeing of Munnar visiting the tea plantations, Tea Museum, the Eravikulam National park home of the endangered Nilgiris Thar (Ibex), followed by a visit to the Mattupetty dam, the Kundala Lake, and other scenic spots. Overnight stay at the Hotel. Sightseeing:- Eravikulam National Park (Raja Malai), Mattupetty dam, tea estates, eco point, spice plantation, rose garden, photo point, honey bee tree, tea museum, blossom park, Kundala dam, and top station.",
  },
  {

    subtitle: "Day 03 Munnar - Thekkady.",
    content: "Morning transfer to Thekkady (Periyar) (4 hrs drive). Thekkady has one of the world's most fascinating natural wildlife reserves noted for its geography, diverse wildlife, and scenic beauty. Arrive at Thekkady and check-in at Hotel: Later afternoon boat ride on the Lake Periyar where one can have a unique experience of viewing wildlife at close quarters from the safety of a boat on the lake. The greatest attraction of Periyar, however, is the herds of wild elephants that come down to play in the lake (Wildlife viewing is always dependent on one's good fortune). Overnight stay at the Hotel. Sightseeing:- Visit Periyar wildlife sanctuary where you can see wild elephant, boar, deer, the great Indian tiger and more, Mulla Periyar dam and spice plantations tour where one can shop exotic spices.",
  },
  {

    subtitle: "Day 04 Thekkady - Cochin.",
    content: "After breakfast check out and transfer to Cochin for your onward journey.",
  },

];
export const contents2 = [
  {
    title: "COCHIN / MUNNAR / ALLEPPEY (3 Nights / 4 Days)",
    subtitle: "Day 01 Arrive Cochin to Munnar Local",
    content:
      "On arrival at Cochin, you will be transferred to Munnar. Upon arrival, check in at the hotel. Munnar is located at the confluence of 03 rivers as the very name signifies. The sprawling tea plantations and picturesque towns make Munnar a popular hill resort town in South India. Evening at leisure. Overnight stay at the Hotel. Sightseeing:- Enroute visit Kodanadu elephant care centre, Cheyyara waterfalls, Valara waterfalls, Attukadu waterfalls, Spice plantations etc.",
  },
  {
    subtitle: "Day 02 Munnar Local sightseeing",
    content:
      "In the morning start the sightseeing of Munnar visiting the tea plantations, Tea Museum, the Eravikulam National park home of the endangered Nilgiris Thar (Ibex), followed by visit to the Mattupetty dam, the Kundala Lake and other scenic spots. Overnight stay at the Hotel. Sightseeing:- Eravikulam National Park (Raja Malai), Mattupetty dam, tea estates, eco point, spice plantation, rose garden, photo point, honey bee tree, tea museum, blossom park, Kundala dam and top station",
  },
  {
    subtitle: "Day 03 Munnar / Alleppey House Boat",
    content:
      "Morning breakfast and check out from hotel. Drive to Alleppey and check in to House Boat. Lunch and Dinner included in House Boat and overnight stay. Houseboat check in at 12Noon and cruises till 6 PM, Boat will be anchored till 8AM and cruises till 9AM for checkout For A/C Houseboat, A/C will be operating from 9PM till 6AM only (All houseboat related inclusions are applicable only if the Itinerary is including Houseboat stay) Boarding @ : 12.00 pm Ac will be operational from 09.00 PM to 06.00 AM",
  },
  {
    subtitle: "Day 04 Alleppey / Cochin",
    content:
      "After breakfast, pick up from Alleppey jetty and transfer to airport for your return flight",
  },
];
export const contents3 = [
  {
    title: "TRIVANDRUM / KANYAKUMARI (3 Nights / 4 Days)",
    subtitle: "Day 01 Arrive Trivandrum to Kovalam",
    content:
      "Arrival in Trivandrum, pick up and transfer to Kovalam. Upon arrival check in at hotel. Rest of the day at leisure on the beach at Kovalam. It is considered as the Paradise of the South. It consists of three adjacent crescent beaches and also picture-perfect tropical beaches Overnight stay at Hotel, Kovalam. Sightseeing:- Light house beach, Ashoka beach",
  },
  {
    subtitle: "Day 02 Trivandrum Sightseeing",
    content:
      "Kovalam to Trivandrum day visit to Kovalam return After breakfast proceed for sightseeing experiencing a tour around Trivandrum: The Napier Museum, Kuthiramalika Museum, and Sri Padmanabha Temple. At afternoon you will be transferred to the famous Kovalam Beach and you can relax your mind and body there. Overnight stay at Hotel in Kovalam. Sightseeing:- Sree Padmanabha Swami Temple, Kuthiramalika Palace museum, The Napier museum, Sree Chithra art gallery, zoological park, science and technology museum, Kanakakunnu Palace, planetarium",
  },
  {
    subtitle: "Day 03 Trivandrum / Kanyakumari",
    content:
      "Enjoy the sunrise on the beach, after breakfast checkout from the hotel and transfer to Kanyakumari enroute visit majestic Padmanabhapuram Palace. The capital of the State of Travancore. built in the Travancore architectural style arrive Kanyakumari and check in at hotel afternoon go for Kanyakumari Sightseeing - Visit Vivekananda Rock that houses a memorial dedicated to Swami Vivekananda. The Memorial is built at the convergence of the Indian Ocean, the Arabian Sea and the Bay of Bengal. Kanyakumari is a place where you can enjoy Sun rise and Sunset from the same point, something special to remember. Enjoy Sunset of Kanyakumari from the tip of India, overnight at Hotel.",
  },
  {
    subtitle: "Day 04 Kanyakumari / Trivandrum / Departure",
    content:
      "Geet up early for a beautiful view of Sunrise. After breakfast check out and transfer to Trivandrum for your return journey",
  },
];
export const contents4 = [
  {
    title: "COCHIN / MUNNAR / ALLEPPEY (4 Nights / 5 Days)",
    subtitle: "Day 01: Arrive Cochin - Stay",
    content:
      "Arrival at Cochin Airport / Railway Station. Transfer to Hotel. Check in to the Hotel. Sightseeing tour of Cochin. Overnight Stay at the Hotel. Sightseeing:- Fort Cochin, Navy Museum, St. Francis Church, Chinese Fishing Net, Santa Claus Basilica, Mattanchery Palace, Jewish Synagogue, Marian Drive, Marine Walkway, Boating, Tripunitura Hill Palace. You can find some time for shopping at Cochin, Dutch Palace, Jewish Synagogue, Fort Kochi Beach, Chinese Fishing Net, etc.",
  },
  {
    subtitle: "Day 02: Cochin to Munnar",
    content:
      "Breakfast at the hotel. Check out from the hotel and leave for Munnar. Upon arrival, check in at the hotel. Munnar is located at the confluence of 03 rivers as the very name signifies. The sprawling tea plantations and picturesque towns make Munnar a popular hill resort town in South India. Evening at leisure. Overnight stay at the Hotel. Sightseeing:- Enroute visit Kodanadu elephant care centre, Cheyyara waterfalls, Valara waterfalls, Attukadu waterfalls, Spice plantations, etc.",
  },
  {
    subtitle: "Day 03: Munnar Local Sightseeing",
    content:
      "In the morning start the sightseeing of Munnar visiting the tea plantations, Tea Museum, the Eravikulam National park home of the endangered Nilgiris Thar (Ibex), followed by a visit to the Mattupetty dam, the Kundala Lake and other scenic spots. Overnight stay at the Hotel. Sightseeing - Eravikulam National Park (Raja Malai), Mattupetty dam, tea estates, eco point, spice plantation, rose garden, photo point, honey bee tree, tea museum, blossom park, Kundala dam, and top station",
  },
  {
    subtitle: "Day 04: Munnar / Alleppey House Boat",
    content:
      "Morning breakfast and check out from the hotel. Drive to Alleppey and check in to House Boat. Lunch and Dinner included in House Boat and overnight stay. Houseboat check in at 12 Noon and cruises till 6 PM, Boat will be anchored till 8 AM and cruises till 9 AM for checkout. For A/C Houseboat, A/C will be operating from 9 PM till 6 AM only (All houseboat related inclusions are applicable only if the Itinerary is including Houseboat stay). Boarding @: 12.00 pm. AC will be operational from 09.00 PM to 06.00 AM",
  },
  {
    subtitle: "Day 05: Alleppey - Cochin Drop",
    content:
      "After breakfast, pick up from Alleppey jetty. Check out from the houseboat and we drive to Kochi Airport/Railway Station for your return journey",
  },
];
export const contents5 = [
  {
    title: "COCHIN / MUNNAR / THEKKADY / ALLEPPEY / KOVALAM / TRIVANDRUM (7 Nights / 8 Days)",
    subtitle: "Day 01: Arrive Cochin - Stay",
    content:
      "Arrival at Cochin Airport / Railway Station. Transfer to Hotel. Check in to the Hotel. Sightseeing tour of Cochin. Overnight Stay at the Hotel. Sightseeing:- Fort Cochin, Navy Museum, St. Francis Church, Chinese Fishing Net, Santa Claus Basilica, Mattanchery Palace, Jewish Synagogue, Marian Drive, Marine Walkway, Boating, Tripunitura Hill Palace. You can find some time for shopping at Cochin, Dutch Palace, Jewish Synagogue, Fort Kochi Beach, Chinese Fishing Net, etc.",
  },
  {
    subtitle: "Day 02: Cochin - Munnar",
    content:
      "Check out from the hotel and leave for Munnar. Upon arrival, check in at the hotel. Munnar is located at the confluence of 03 rivers as the very name signifies. The sprawling tea plantations and picturesque towns make Munnar a popular hill resort town in South India. Evening at leisure. Overnight stay at the Hotel. Sightseeing:- Enroute visit Kodanadu elephant care centre, Cheyyara waterfalls, Valara waterfalls, Attukadu waterfalls, Spice plantations, etc.",
  },
  {
    subtitle: "Day 03: Munnar",
    content:
      "In the morning start the sightseeing of Munnar visiting the tea plantations, Tea Museum, the Eravikulam National park home of the endangered Nilgiris Thar (Ibex), followed by a visit to the Mattupetty dam, the Kundala Lake and other scenic spots. Overnight stay at the Hotel. Sightseeing:- Eravikulam National Park (Raja Malai), Mattupetty dam, tea estates, eco point, spice plantation, rose garden, photo point, honey bee tree, tea museum, blossom park, Kundala dam, and top station",
  },
  {
    subtitle: "Day 04: Munnar - Thekkady",
    content:
      "After breakfast, morning transfer to Thekkady (Periyar) (4 hrs drive). Thekkady has one of the world's most fascinating natural wildlife reserves noted for its geography, diverse wildlife, and scenic beauty. Arrive at Thekkady and check-in at Hotel: Later afternoon boat ride on the Lake Periyar where one can have a unique experience of viewing wildlife at close quarters from the safety of a boat on the lake. The greatest attraction of Periyar, however, are the herds of wild elephants that come down to play in the lake (Wildlife viewing is always dependent on one's good fortune). Overnight stay at the Hotel. Sightseeing:- Visit Periyar wildlife sanctuary where you can see wild elephant, boar, deer, the great Indian tiger and more, Mulla Periyar dam and spice plantations tour where one can shop exotic spices",
  },
  {
    subtitle: "Day 05: Thekkady / Alleppey (House Boat)",
    content:
      "Morning breakfast and check out from the hotel. Drive to Alleppey and check in to House Boat. Lunch and Dinner included in House Boat and overnight stay. Houseboat check in at 12 Noon and cruises till 6 PM, Boat will be anchored till 8 AM and cruises till 9 AM for checkout. For A/C Houseboat, A/C will be operating from 9 PM till 6 AM only (All houseboat related inclusions are applicable only if the Itinerary is including Houseboat stay). Boarding @: 12.00 pm. AC will be operational from 09.00 PM to 06.00 AM",
  },
  {
    subtitle: "Day 06: Alleppey - Kovalam",
    content:
      "After breakfast, pick up from Alleppey jetty. Check out from the houseboat and we drive to Trivandrum, Kovalam. The journey is through coastal areas of Kerala; you can see the view of lagoons rivers, evergreen coconut palms make this journey very enjoyable. Reach Kovalam and check in at your hotel. It is one of the best beaches of India with its lovely slice beach sand and perfectly positioned palms. Evening relax on the Kovalam beach. Overnight at Hotel. Sightseeing:- Light house beach, Ashoka beach",
  },
  {
    subtitle: "Day 07: Trivandrum Sightseeing",
    content:
      "After breakfast proceed for sightseeing experiencing a tour around Trivandrum: The Napier Museum, Kuthiramalika Museum, and Sri Padmanabha Temple. In the afternoon, you will be transferred to the famous Kovalam Beach and you can relax your mind and body there. Overnight stay at Hotel in Kovalam. Sightseeing - Sree Padmanabha Swami Temple, Kuthiramalika Palace museum, The Napier museum, Sree Chithra art gallery, zoological park, science and technology museum, Kanakakunnu Palace, planetarium",
  },
  {
    subtitle: "Day 08: Trivandrum - Departure",
    content:
      "After breakfast check out and transfer to Trivandrum for your return journey.",
  },
];

export const contents6 = [
  {
    title: "COCHIN / MUNNAR / THEKKADY / ALLEPPEY / KOVALAM / TRIVANDRUM / KANYAKUMARI (8 Nights / 9 Days)",
    subtitle: "Day 01: Arrive Cochin - Stay",
    content:
      "Arrival at Cochin Airport / Railway Station. Transfer to Hotel. Check in to the Hotel. Sightseeing tour of Cochin. Overnight Stay at the Hotel. Sightseeing:- Fort Cochin, Navy Museum, St. Francis Church, Chinese Fishing Net, Santa Claus Basilica, Mattanchery Palace, Jewish Synagogue, Marian Drive, Marine Walkway, Boating, Tripunitura Hill Palace. You can find some time for shopping at Cochin, Dutch Palace, Jewish Synagogue, Fort Kochi Beach, Chinese Fishing Net, etc.",
  },
  {
    subtitle: "Day 02: Cochin - Munnar",
    content:
      "Check out from the hotel and leave for Munnar. Upon arrival, check in at the hotel. Munnar is located at the confluence of 03 rivers as the very name signifies. The sprawling tea plantations and picturesque towns make Munnar a popular hill resort town in South India. Evening at leisure. Overnight stay at the Hotel. Sightseeing:- Enroute visit Kodanadu elephant care centre, Cheyyara waterfalls, Valara waterfalls, Attukadu waterfalls, Spice plantations, etc.",
  },
  {
    subtitle: "Day 03: Munnar",
    content:
      "In the morning start the sightseeing of Munnar visiting the tea plantations, Tea Museum, the Eravikulam National park home of the endangered Nilgiris Thar (Ibex), followed by a visit to the Mattupetty dam, the Kundala Lake and other scenic spots. Overnight stay at the Hotel. Sightseeing:- Eravikulam National Park (Raja Malai), Mattupetty dam, tea estates, eco point, spice plantation, rose garden, photo point, honey bee tree, tea museum, blossom park, Kundala dam, and top station",
  },
  {
    subtitle: "Day 04: Munnar - Thekkady",
    content:
      "After breakfast, morning transfer to Thekkady (Periyar) (4 hrs drive). Thekkady has one of the world's most fascinating natural wildlife reserves noted for its geography, diverse wildlife, and scenic beauty. Arrive at Thekkady and check-in at Hotel: Later afternoon boat ride on the Lake Periyar where one can have a unique experience of viewing wildlife at close quarters from the safety of a boat on the lake. The greatest attraction of Periyar, however, are the herds of wild elephants that come down to play in the lake (Wildlife viewing is always dependent on one's good fortune). Overnight stay at the Hotel. Sightseeing:- Visit Periyar wildlife sanctuary where you can see wild elephant, boar, deer, the great Indian tiger and more, Mulla Periyar dam and spice plantations tour where one can shop exotic spices",
  },
  {
    subtitle: "Day 05: Thekkady / Alleppey (House Boat)",
    content:
      "Morning breakfast and check out from the hotel. Drive to Alleppey and check in to House Boat. Lunch and Dinner included in House Boat and overnight stay. Houseboat check in at 12 Noon and cruises till 6 PM, Boat will be anchored till 8 AM and cruises till 9 AM for checkout. For A/C Houseboat, A/C will be operating from 9 PM till 6 AM only (All houseboat related inclusions are applicable only if the Itinerary is including Houseboat stay). Boarding @: 12.00 pm. AC will be operational from 09.00 PM to 06.00 AM",
  },
  {
    subtitle: "Day 06: Alleppey - Kovalam",
    content:
      "After breakfast, pick up from Alleppey jetty. Check out from the houseboat and we drive to Trivandrum, Kovalam. The journey is through coastal areas of Kerala; you can see the view of lagoons rivers, evergreen coconut palms make this journey very enjoyable. Reach Kovalam and check in at your hotel. It is one of the best beaches of India with its lovely slice beach sand and perfectly positioned palms. Evening relax on the Kovalam beach. Overnight at Hotel. Sightseeing:- Light house beach, Ashoka beach",
  },
  {
    subtitle: "Day 07: Trivandrum Sightseeing",
    content:
      "After breakfast proceed for sightseeing experiencing a tour around Trivandrum: The Napier Museum, Kuthiramalika Museum, and Sri Padmanabha Temple. In the afternoon, you will be transferred to the famous Kovalam Beach and you can relax your mind and body there. Overnight stay at Hotel in Kovalam. Sightseeing - Sree Padmanabha Swami Temple, Kuthiramalika Palace museum, The Napier museum, Sree Chithra art gallery, zoological park, science and technology museum, Kanakakunnu Palace, planetarium",
  },
  {
    subtitle: "Day 08: Trivandrum - Kanyakumari",
    content:
      "Enjoy the sunrise on the beach, after breakfast checkout from the hotel and transfer to Kanyakumari enroute visit majestic Padmanabhapuram Palace. The capital of the State of Travancore. built in the Travancore architectural style arrive Kanyakumari and check in at the hotel afternoon go for Kanyakumari Sightseeing: Visit Vivekananda Rock that houses a memorial dedicated to Swami Vivekananda. The Memorial is built at the convergence of the Indian Ocean, the Arabian Sea and the Bay of Bengal. Kanyakumari is a place where you can enjoy Sun rise and Sunset from the same point, something special to remember. Enjoy Sunset of Kanyakumari from the tip of India, overnight at Hotel.",
  },
  {
    subtitle: "Day 09: Kanyakumari / Trivandrum / Drop",
    content:
      "Get up early for a beautiful view of Sunrise. After breakfast check out and transfer to Trivandrum for your return journey.",
  },
];

export const contentNortheast1 = [
  {
    title: "DARJEELING / GANGTOK (05 Nights / 06 Days)",
    subtitle: "Day 01: New Jalpaiguri / Bagdogra – Gangtok",
    content: "Meet & greet with our representative at NJP Railway station / Bagdogra Airport & transfer to Gangtok. On arrival check-in to the hotel. In the evening, you can visit the local market or nearby area (at your own). Overnight at the hotel."
  },
  {
    subtitle: "Day 02: Full day Lake & Baba Mandir Excursion Trip",
    content: "After breakfast, drive to Tsomgo Lake (Alt 12000ft/3600M), a high altitude alpine lake close to the Indo-China Border. Enjoy playing in the snow and try Yak Ride and proceed further to Legendary Baba Harbhajan Singh Mandir. Back to Hotel. Night stay at Gangtok hotel."
  },
  {
    subtitle: "Day 03: Gangtok Local Sightseeing",
    content: "After Breakfast Proceed for Gangtok local Sightseeing. You will be visiting Do-Drul Chorten, Tibetology, Handicraft Centre, Bakthang Falls, Flower Show, Tashi View Point, Ganesh Tok and Lhasa waterfall. Overnight stay at Gangtok."
  },
  {
    subtitle: "Day 04: Gangtok - Darjeeling",
    content: "After breakfast transfer to Darjeeling 'The Queen of Hills', check-in the hotel. In the evening, you can visit the local market or nearby area on your own. Overnight stay will be at Darjeeling."
  },
  {
    subtitle: "Day 05: Darjeeling Sightseeing",
    content: "Early Morning (at 04.00 am) visit Tiger hill to watch the spectacular sunrise over Mt. Kangchenjunga (28,208 ft. world's 3rd highest peak), on your way back visit Ghoom Monastery, Batasia Loop. After breakfast visit Himalayan Mountaineering Institute, P. N. Zoological Park (Thursday closed), Tenzing Rock, Tibetan Refugee self-help Centre, Tea Garden, Peace Pagoda, Japanese Temple. Overnight stay at Darjeeling."
  },
  {
    subtitle: "Day 06: Departure from Darjeeling + Toy Train",
    content: "Transfer to Bagdogra airport / Njp Railway station & proceed journey with sweet memories."
  }
];
export const contentNortheast2 = [
  {
    title: "GANGTOK / KALIMPONG / DARJEELING (06 Nights / 07 Days)",
    subtitle: "Day 1: New Jalpaiguri Rly Station / IXB Airport – Gangtok",
    content: "After arrival meet & greet at NJP Railway Station / IXB Airport & transfer to Gangtok. On arrival check-in to the hotel. In the evening, you can visit the local market or nearby area on your own. Overnight stay at Gangtok."
  },
  {
    subtitle: "Day 2: Full day Lake & Baba Mandir Excursion Trip",
    content: "After breakfast drive to Tsomgo Lake (Alt 12000ft/3600M), a high altitude alpine lake close to Indo-China Border. Enjoy playing in snow and try Yak Ride and proceed further to Legendary Baba Harbhajan Singh Mandir. Back to Hotel. Night stay at Gangtok hotel. Optional Tour to Nathula Pass (14000 ft/4200 M) on China Border can be arranged (except Monday, Tuesday) for Indians only with 30 days advance request at an additional cost. Return to the hotel. Overnight stay at Gangtok."
  },
  {
    subtitle: "Day 3: Gangtok Local Sightseeing",
    content: "After Breakfast Proceed for Gangtok local Sightseeing. You will be visiting Do-Drul Chorten, Tibetology, Handicraft Centre, Bakthang Falls, Flower Show, Tashi View Point, Ganesh Tok and Lhasa waterfall. Overnight stay at Gangtok."
  },
  {
    subtitle: "Day 4: Gangtok – Kalimpong",
    content: "After breakfast check out from the hotel & proceed for Kalimpong. Check-in & rest. In the evening, you can visit the local market or nearby area on your own. Overnight at the hotel."
  },
  {
    subtitle: "Day 5: Kalimpong Local + Darjeeling",
    content: "After Breakfast enjoy a tour of Kalimpong Visiting Mangal Dham, Deolo Hill, Dr. Graham’s Home, Golf Garden, Durpin Dara Hills & Pine View Nursery etc. Then transfer to Darjeeling. Overnight Stay at Darjeeling."
  },
  {
    subtitle: "Day 6: Darjeeling Sightseeing",
    content: "Early Morning (at 04.00 am) visit Tiger hill to watch the spectacular sunrise over Mt. Kangchenjunga (28,208 ft. world's third-highest peak), on your way back visit Ghoom Monastery, Batasia Loop. After breakfast visit Himalayan Mountaineering Institute, P. N. Zoological Park (Thursday closed), Tenzing Rock, Tibetan Refugee self-help Centre, Tea Garden, Peace Pagoda, Japanese Temple. Overnight stay at Darjeeling."
  },
  {
    subtitle: "Day 7: Departure from Darjeeling + Toy Train",
    content: "After breakfast transfer to Bagdogra airport / NJP Railway station & proceed journey with sweet memories."
  }
];
export const contentNortheast3 = [
  {
    title: "GANGTOK / PELLING / KALIMPONG / DARJEELING (07 Nights / 08 Days)",
    subtitle: "Day 1: New Jalpaiguri Rly Station / IXB Airport – Gangtok",
    content: "After arrival, meet & greet at NJP Railway Station / IXB Airport & transfer to Gangtok. On arrival, check-in to the hotel. In the evening, you can visit the local market or nearby area on your own. Overnight stay at Gangtok."
  },
  {
    subtitle: "Day 2: Full day Lake and Baba Mandir Excursion Trip",
    content: "After breakfast drive to Tsomgo Lake (Alt 12000ft/3600M), a high altitude alpine lake close to Indo-China Border. Enjoy playing in the snow and try Yak Ride and proceed further to Legendary Baba Harbhajan Singh Mandir. Return to the Hotel. Night stay at Gangtok hotel. Tour to Nathula Pass (14000 ft / 4200 M) on China Border can be arranged (except Monday, Tuesday) for Indians only with 30 days advance request at an additional cost. Return to the hotel. Overnight stay at Gangtok."
  },
  {
    subtitle: "Day 3: Gangtok to Pelling Departure",
    content: "After breakfast transfer for Pelling. Pelling is famous for the magnificent view of the snow-capped mountains of Kanchenjunga. Placid Pelling pulls most of the visitors for its representative status in history, nature, and culture of the state. Situated at an altitude of 6,800 ft, including the Koktang, Kumbhakarna, Rathong, Kabru, Dom, Khangchendzonga, Pandim, Zopuno, Shimbho, Narsing, Siniyalchu and others. Pelling gives spectacular views of Mount Kanchenjunga. On arrival Check-in at the Hotel. Overnight Stay will be at Pelling."
  },
  {
    subtitle: "Day 4: Pelling Sightseeing",
    content: "After breakfast start for full day sightseeing and visit Kanchenjunga waterfalls, Sewaro Rock Garden, Rimbi water Falls & Khachoedpalri Lake, Rabdentse Ruins, Pemayangtse Monastery, Helipad Ground. Overnight stay will be at Pelling."
  },
  {
    subtitle: "Day 5: Pelling – Kalimpong",
    content: "After breakfast check out from the hotel & proceed to Kalimpong. Check-in & rest. In the evening, you can visit the local market or nearby area on your own. Overnight at the hotel."
  },
  {
    subtitle: "Day 6: Kalimpong Local + Darjeeling",
    content: "After Breakfast enjoy a tour of Kalimpong Visiting Mangal Dham, Deolo Hill, Dr. Graham’s Home, Golf Garden, Durpin Dara Hills & Pine View Nursery etc. Then transfer to Darjeeling 'The Queen of Hills'. Overnight Stay at Darjeeling."
  },
  {
    subtitle: "Day 7: Darjeeling Sightseeing",
    content: "Early Morning (at 04.00 am) visit Tiger hill to watch the spectacular sunrise over Mt. Kangchenjunga (28,208 ft. world's third highest peak), on your way back visit Ghoom Monastery, Batasia Loop. After breakfast visit Himalayan Mountaineering Institute, P. N. Zoological Park (Thursday closed), Tenzing Rock, Tibetan Refugee self-help Centre, Tea Garden, Peace Pagoda, Japanese Temple. Overnight stay at Darjeeling."
  },
  {
    subtitle: "Day 8: Departure from Darjeeling",
    content: "After Breakfast transfer to Bagdogra airport / NJP Railway station & proceed with sweet memories."
  }
];
export const contentNortheast4 = [
  {
    title: "SHILLONG (03 Nights / 04 Days)",
    subtitle: "Day 1: Arrive / Guwahati / Shillong",
    content: "Arrive at Guwahati airport and drive to Shillong (140 kms / 4 hrs drive approx). Check-in at the hotel. Overnight in Shillong."
  },
  {
    subtitle: "Day 2: Cherrpunjee Tour",
    content: "After breakfast, excursion to Cherrapunjee (60 kms / 2 hrs drive approx). Overnight in Shillong."
  },
  {
    subtitle: "Day 3: Shillong Sightseeing",
    content: "Enjoy local sightseeing in Shillong covering Ward’s Lake, Don Bosco Church, Shillong Peak, Elephant Falls, and the local market (closed on Sundays). Overnight in Shillong."
  },
  {
    subtitle: "Day 4: Shillong / Guwahati / Departure",
    content: "After breakfast, drive to Guwahati airport for the return journey with sweet memories."
  }
];
export const contentNortheast5 = [
  {
    title: "GUWAHATI / SHILLONG (04 Nights / 05 Days)",
    subtitle: "Day 1: Arrive / Guwahati",
    content: "Arrive at Guwahati airport and transfer to the hotel. Later, visit Kamakhya temple & Sankardev Kalakhetra. Overnight in Guwahati."
  },
  {
    subtitle: "Day 2: Guwahati / Shillong",
    content: "After breakfast, enjoy local sightseeing in Guwahati. In the afternoon, drive to Shillong (120 kms / 3 ½ hrs drive approx). Check-in at the hotel. Overnight in Shillong."
  },
  {
    subtitle: "Day 3: Visit Cherrapunjee",
    content: "After breakfast, excursion to Cherrapunjee (60 kms / 2 hrs drive approx). Overnight in Shillong."
  },
  {
    subtitle: "Day 4: Shillong Sightseeing",
    content: "Explore local sightseeing in Shillong covering Ward’s Lake, Don Bosco Church, Shillong Peak, Elephant Falls, and the local market (closed on Sundays). Overnight in Shillong."
  },
  {
    subtitle: "Day 5: Shillong / Guwahati / Departure",
    content: "After breakfast, drive to Guwahati airport for the return journey with sweet memories."
  }
];


export const contentSriLanka1 = [
  {
    title: "GLIMPSES OF SRI LANKA (03 Nights / 04 days)",
    subtitle: "Day 01: Arrive / Colombo / Kandy",
    content: "Upon arrival in Colombo, you will be met by our representative who will drive you to Kandy. En-route, visit Pinnawela Elephant Orphanage, established in 1975. The rest of the day is free at leisure. Overnight in Kandy."
  },
  {
    subtitle: "Day 02: Kandy Sightseeing",
    content: "After breakfast, enjoy a tour of Kandy including a visit to Peradeniya Botanical Garden, Kandy town and bazaar, the arts and crafts centre, a gem museum, and the Temple of the Tooth Relic. In the evening, witness a cultural show. Overnight in Kandy."
  },
  {
    subtitle: "Day 03: Kandy / Colombo – Sightseeing",
    content: "Proceed to Colombo and check in to your hotel. Enjoy a sightseeing tour of Colombo, visiting Buddhist and Hindu Temples, Pettah, Fort, Bandaranaike Memorial International Conference Hall, Colombo Museum, the parliament house, and the folk art centre. Later, enjoy shopping in Colombo. Overnight in Colombo."
  },
  {
    subtitle: "Day 04: Colombo / Departure",
    content: "Transfer to Colombo Airport for your flight back home with sweet memories."
  }
];

export const contentSriLanka2 = [
  {
    title: "HILLS AND BEACHES OF SRI LANKA (05 Nights / 06 Days)",
    subtitle: "Day 01: Arrive / Colombo",
    content: "Upon arrival in Colombo, you will be met by our representative who will drive you to Colombo. Enjoy a city tour of Colombo, visiting Buddhist and Hindu Temples, Pettah, Fort, Bandaranaike Memorial International Conference Hall, Colombo Museum, the parliament house, and the folk art center. Later, enjoy shopping in Colombo. Overnight in Colombo."
  },
  {
    subtitle: "Day 02: Colombo / Kandy",
    content: "Today morning, proceed to Kandy via Pinnawala. Visit Pinnawela Elephant Orphanage, established in 1975. Later, enjoy a sightseeing tour of Kandy, visiting Peradeniya Botanical Garden, Kandy town and bazaar, the arts and crafts centre, a gem museum, and the Temple of the Tooth Relic. In the evening, witness a cultural show. Overnight in Kandy."
  },
  {
    subtitle: "Day 03: Kandy / Nuwara Eliya",
    content: "Proceed to Nuwara Eliya. Take a tour to the cold and misty hills, and visit a tea factory to learn about the processing of Ceylon Tea. End your day with a cup of pure Ceylon Tea. Overnight in Nuwara Eliya."
  },
  {
    subtitle: "Day 04: Nuwara Eliya / Bentota",
    content: "Travel to Bentota via Kitulgala, known for the filming location of the Oscar-winning film 'Bridge on the River Kwai'. Enjoy leisure time upon arrival. Overnight in Bentota."
  },
  {
    subtitle: "Day 05: Bentota",
    content: "Enjoy a day at leisure in Bentota, or take an optional trip to Balapitiya for a River Safari. Experience day-to-day activities of villagers on the Madu river during a two-hour boat trip. Overnight in Bentota."
  },
  {
    subtitle: "Day 06: Bentota / Colombo / Departure",
    content: "Transfer to Colombo Airport for your flight back home with sweet memories."
  }
];

export const contentSriLanka3 = [
  {
    title: "HERITAGE TOUR OF SRI LANKA (06 Nights / 07 Days)",
    subtitle: "Day 01: Arrive / Colombo:",
    content: "Upon arrival in Colombo, you will be met by our representative or guide who will drive you to Colombo. Enjoy a city tour of Colombo, visiting Buddhist and Hindu Temples, Pettah, Fort, Bandaranaike Memorial International Conference Hall, Colombo Museum, the parliament house, and the folk art centre. Later, enjoy shopping in Colombo. Overnight in Colombo."
  },
  {
    subtitle: "Day 02: Colombo / Dambulla",
    content: "Today morning, proceed to Dambulla via Pinnawala. Visit Pinnawela Elephant Orphanage, established in 1975. Overnight in Dambulla."
  },
  {
    subtitle: "Day 03: Dambulla / Sigiriya / Habarana / Dambulla",
    content: "Visit Dambulla’s famous cave temples and Sigiriya, a World Heritage Site. Enjoy an elephant back safari in Habarana. Return to Hotel and overnight in Dambulla."
  },
  {
    subtitle: "Day 04: Dambulla / Kandy",
    content: "Proceed to Kandy. Enjoy a sightseeing tour of Kandy, visiting Peradeniya Botanical Garden, Kandy town and bazaar, the arts and crafts centre, a gem museum, and the Temple of the Tooth Relic. Witness a cultural show. Overnight in Kandy."
  },
  {
    subtitle: "DAY 05: Kandy / Bentota",
    content: "Travel to Bentota. Enjoy leisure time. Overnight in Bentota."
  },
  {
    subtitle: "DAY 06: Bentota",
    content: "Enjoy a day at leisure in Bentota, or take an optional trip to Balapitiya for a River Safari. Experience day-to-day activities of villagers on the Madu river during a two-hour boat trip. Overnight in Bentota."
  },
  {
    subtitle: "DAY 07: Bentota / Colombo / Departure",
    content: "Transfer to Colombo Airport for your flight back home with sweet memories."
  }
];

export const contentSriLanka4 = [
  {
    title: "RAMAYANA TOUR OF SRI LANKA (07 Nights / 08 Days)",
    subtitle: "DAY 01: Arrive / Colombo / Chilaw / Anuradhapura",
    content: "Upon arrival at Colombo airport, you will be picked up and transferred to Chilaw (1.5 Hrs). Visit Munneswaram Temple and Manavari Temple in Chilaw, significant sites in the Ramayana legend. Later, drive to Anuradhapura (3 Hrs). Overnight stay in Anuradhapura."
  },
  {
    subtitle: "DAY 02: Anuradhapura / Trincomalee",
    content: "After breakfast, explore the Anuradhapura Ancient City, a UNESCO World Heritage Site. Then, drive to Trincomalee. Visit Thirukoneswaram Temple and Lover’s Leap Trincomalee. Overnight stay in Trincomalee."
  },
  {
    subtitle: "DAY 03: Trincomalee / Kandy – Enroute Dambulla Cave Temple",
    content: "After breakfast, take an orientation tour of Trincomallee and drive to Kandy. Enroute, visit Dambulla Cave Temple. Check in to the hotel upon arrival in Kandy. Overnight stay in Kandy hotel."
  },
  {
    subtitle: "DAY 04: Kandy Tour",
    content: "Enjoy breakfast at the hotel and proceed for a tour of Kandy, including a visit to Tooth of Buddha Relic Temple and a Cultural dance performance. Overnight stay in Kandy."
  },
  {
    subtitle: "DAY 05: Kandy to Nuwara Eliya",
    content: "After breakfast, transfer to Nuwara Eliya. Enroute, visit Sri Bhaktha Hanuman Temple at Ramboda. Check in to the hotel upon arrival in Nuwara Eliya. Overnight stay in Nuwara Eliya."
  },
  {
    subtitle: "DAY 06: Sita Amman Temple / Divrumpola Temple / Kataragama",
    content: "After breakfast, visit Sita Amman Temple, Askoka Vatika, and Divurumpola Buddhist Temple in Nuwara Eliya. Then, drive to Kataragama, visiting Ravana Water Falls and Ravana Caves enroute. Overnight in Kataragama."
  },
  {
    subtitle: "DAY 07: Kataragama Temple – Ussangoda Ramayana Site – Rumassala – Colombo",
    content: "After breakfast, visit Kataragama Temple dedicated to the God Skanda. Drive for Colombo, visiting Ussangoda Ramayana Site and Rumassala. Explore Galle Dutch Fort enroute. Arrive in Colombo, check in to the hotel. Overnight stay in Colombo."
  },
  {
    subtitle: "DAY 08: Colombo Departure",
    content: "Enjoy breakfast at the hotel and proceed for a city tour of Colombo. Transfer to Colombo airport for your return flight with sweet memories."
  }
];


export const Tamilnaduslides1 = [
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/TamilNadu%2Fmeenakshitemple.png?alt=media&token=133df665-98d4-4970-ac9c-bb1359320188", title: "Meenakshi Amman Temple" },
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/TamilNadu%2Framanadhaswamytemple.png?alt=media&token=29c3fa66-d9d7-432c-a4ba-5e724ce99506", title: "Ramanadha Swamy Temple" },
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/TamilNadu%2Fteppakulam.png?alt=media&token=034ebf49-25e6-4ff8-a007-8a4c31a5f2e2", title: "Teppakulam" },
  {image :"https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/TamilNadu%2Fgandamana-parvatham.png?alt=media&token=6c4ca414-13ee-40c1-993c-be9151f0edf9 ", title: "Gandamana Parvatham" },

];
export const Tamilnaduslides2 = [
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/TamilNadu%2Fconoor.png?alt=media&token=8c1ca57a-c618-40c0-8a76-e4abee122b44", title: "Conoor" },
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/TamilNadu%2Fmysorepalace.png?alt=media&token=b2101131-22df-474f-9305-df6f9561190f", title: "Mysore Palace" },
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/TamilNadu%2Footy.png?alt=media&token=bbf3cb0e-82ba-4d7e-b306-d7a77b9ff890", title: "Ooty" },
  {image :"https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/TamilNadu%2Fart-gallery.png?alt=media&token=94b41b87-67b2-4b24-8750-61c780cac36c ", title: "Art Gallery" },

];
export const Tamilnaduslides3 = [
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/TamilNadu%2Fmarina-beach.png?alt=media&token=3ab5bc9e-88eb-4e7d-a04c-7c60ccfe2471", title: "Marina Beach" },
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/TamilNadu%2Fmgr-memorial.png?alt=media&token=6c5ec8bb-672c-4a0d-b296-a8292e4c0171", title: "MGR Memorial" },
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/TamilNadu%2Fpndicherry.png?alt=media&token=58f4a545-4789-41e2-a116-8e47e987ec38", title: "Pondicherry" },
  {image :"https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/TamilNadu%2Ftirupathi.png?alt=media&token=a6e9f572-ff15-478b-ae55-458dabc40872", title: "Tirupathi" },
  {image : "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/TamilNadu%2Farulmigu-manakula-vinayagar.png?alt=media&token=261201ed-5dc5-4de4-bee3-cf023b61ce0f", title: "Manakula Vinayagar Temple" },

];
export const Tamilnaduslides4 = [
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/TamilNadu%2Fchidambaram-temple.png?alt=media&token=7b67c25b-65ae-4616-8094-a6b1366569b5", title: "Chidambaram Temple" },
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/TamilNadu%2Fmarina-beach.png?alt=media&token=3ab5bc9e-88eb-4e7d-a04c-7c60ccfe2471", title: "Marina Beach" },
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/TamilNadu%2Fthanjavur-temple.png?alt=media&token=776644a1-0394-4b04-9c2c-c3ec877e24dc", title: "Thanjavur Temple" },
  {image :"https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/TamilNadu%2Fpamban-bridge.png?alt=media&token=4ef6c8e7-7d43-4846-a5f5-f235a03eff22", title: "Pamban Bridge" },
  {image : "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/slider-1.jpg?alt=media&token=bf960764-f127-4b70-b044-f6f79dc3d401", title: "Meenakshi Amman Temple" },

];

export const Tamilnaduslides5 = [
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/TamilNadu%2Fmarina-beach.png?alt=media&token=3ab5bc9e-88eb-4e7d-a04c-7c60ccfe2471", title: "Marina Beach" },
  {image :"https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/TamilNadu%2Ftirupathi.png?alt=media&token=a6e9f572-ff15-478b-ae55-458dabc40872", title: "Tirupathi" },
  {image :"https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/TamilNadu%2Ftemple-2.png.jpg?alt=media&token=d5556663-f786-4b3a-9d69-2d98e1844533", title:"Mahabalipuram" },
  {image : "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/TamilNadu%2FTiruvannamalai_Temple.png?alt=media&token=a9bee78f-2a85-424b-bc7e-ef0d431b7f76", title: "Tiruvannamalai Temple" },
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/TamilNadu%2Fthanjavur-temple.png?alt=media&token=776644a1-0394-4b04-9c2c-c3ec877e24dc", title: "Thanjavur Temple" },
  {image : "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/slider-1.jpg?alt=media&token=bf960764-f127-4b70-b044-f6f79dc3d401", title: "Meenakshi Amman Temple" },
  {image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/TamilNadu%2Fsunrise-kanniyakumari.png?alt=media&token=ecdee93f-9d3a-42ee-93b5-aa3ed509c05c", title: "Kanniyakumari" },

];
export const Tamilnaduslides6 = [
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/Napier_Museum.png?alt=media&token=190af796-e917-460d-b410-cdc23a0f5a12", title: "Napier Museum" },
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/thiruvalluvar-statue-727594_1280.jpg?alt=media&token=9aedd8ba-99f6-47db-98c4-8c4413b1932c", title: "Kanyakumari" },
  {image :"https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/TamilNadu%2Fpamban-bridge.png?alt=media&token=4ef6c8e7-7d43-4846-a5f5-f235a03eff22", title: "Pamban Bridge" },
  {image : "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/slider-1.jpg?alt=media&token=bf960764-f127-4b70-b044-f6f79dc3d401", title: "Meenakshi Amman Temple" },
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/hero-6.png?alt=media&token=5c9a042d-4db2-4b48-be08-c8407ff57e9e", title: "Munnar " },
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/Tea-Museum.png?alt=media&token=80be75d0-2774-46f9-8d95-74a11d822b42", title: "Tea Museum" },
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/Thekkady.png?alt=media&token=73561443-2488-4314-9890-6265e57a8a11", title: "Thekkady" },
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/St.%20Francis%20Church.png?alt=media&token=08517a77-d05c-475f-ba84-5f1b049ef663", title: "St. Francis Church" },

];
export const Tamilnaduslides7 = [
  {image : "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/Coorg.png?alt=media&token=4f524fbf-f353-4459-8add-dc31530267ab", title: "Coorg" },
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/wayanad.png?alt=media&token=419211bc-3f28-4b2e-b3db-d4d26ea4675d", title: "Wayanad" },
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/Meenmutty_falls.png?alt=media&token=9ef7fc16-f216-45be-80d9-9580b7898f08", title: "Meenmutty Falls" },
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/Omkareshwara_Temple.png?alt=media&token=8981b290-a848-47d5-b9c1-16978640e41f", title: "Omkareshwara Temple" },
  {image :"https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/wayanad-wildlife.png?alt=media&token=7d6a37d6-33a8-4403-9f7f-aac84671f566", title: "Wayanad Wildlife Sanctuary" },
 

];


export const slides1 = [
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/Thekkady.png?alt=media&token=73561443-2488-4314-9890-6265e57a8a11", title: "Thekkady" },
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/munnar-1639120_1280.jpg?alt=media&token=f88198bd-7a4f-4e7f-84fd-3384d2b2d94f", title: "Munnar" },
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/Cochin.png.jpg?alt=media&token=6e7c48c2-19b9-4c8a-b93b-5525d3d58724", title: "Cochin" },

];



export const slides2 = [
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/eravikulam.png?alt=media&token=5bbe1435-12b6-42df-bf5d-00e7de1fd2ff", title: "Eravikulam" },
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/munnar-1639120_1280.jpg?alt=media&token=f88198bd-7a4f-4e7f-84fd-3384d2b2d94f", title: "Munnar" },
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/Mattupetty%20dam.png?alt=media&token=123cd342-9298-40f8-a608-d265ea0e8c45", title: "Mattupetty Dam" },
];

export const slides3 = [
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/Kovalam_Lighthouse.png?alt=media&token=f28504e4-de88-4ac6-a936-3d7722c9ad91", title: "Kovalam" },
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/TRIVANDRUM.jpg?alt=media&token=dcf6f7e2-9f07-4d19-b5e5-ee3da690b258", title: "Trivandrum" },
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/thiruvalluvar-statue-727594_1280.jpg?alt=media&token=9aedd8ba-99f6-47db-98c4-8c4413b1932c", title: "Kanyakumari" },

];

export const slides4 = [
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/Attukadu%20waterfalls.png?alt=media&token=b4c136cb-ce3a-4220-b02a-5415cdd0be1f", title: "Attukadu Waterfalls" },
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/House%20Boat.png?alt=media&token=13293f3c-2277-4913-942c-6d2be8ff544d", title: "House Boat" },
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/Tea-Museum.png?alt=media&token=80be75d0-2774-46f9-8d95-74a11d822b42", title: "Tea Museum" },
];

export const slides5 = [
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/Kovalam_Lighthouse.png?alt=media&token=f28504e4-de88-4ac6-a936-3d7722c9ad91", title: "Kovalam" },
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/hero-6.png?alt=media&token=5c9a042d-4db2-4b48-be08-c8407ff57e9e", title: "Munnar " },
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/slider-4.jpg?alt=media&token=d94455d0-91e8-425c-90a2-4284ebc0fd30", title: "Kanyakumari" },
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/Santa%20Clause%20Basilica.png?alt=media&token=f60ca1b9-7a5e-4be2-8f23-ce8ca63cd851", title: "Santa Clause Basilica" },
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/Chinese%20Fishing%20Net.png?alt=media&token=4aa9319e-1971-46b0-80dc-cf05a09b3c28", title: "Chinese Fishing Net" },

  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/Napier_Museum.png?alt=media&token=190af796-e917-460d-b410-cdc23a0f5a12", title: "Napier Museum" },

];

export const slides6 = [
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/Cheeyappara%20Waterfalls%20(7).jpg?alt=media&token=905076c3-bc1c-4adc-ad21-667495f88f97", title: "Cheeyappara Waterfalls" },
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/munnar-1639120_1280.jpg?alt=media&token=f88198bd-7a4f-4e7f-84fd-3384d2b2d94f", title: "Munnar" },
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/Thekkady.png?alt=media&token=73561443-2488-4314-9890-6265e57a8a11", title: "Thekkady" },
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/slider-5.jpg?alt=media&token=2ae9f00d-1ec8-44b1-b539-834047f9f4ad", title: "Alleppey" },
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/Kovalam_beach.png?alt=media&token=c222bc66-b779-45f0-9c63-9dd44338ba43", title: "Kovalam" },
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/TRIVANDRUM.jpg?alt=media&token=dcf6f7e2-9f07-4d19-b5e5-ee3da690b258", title: "Trivandrum" },
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/thiruvalluvar-statue-727594_1280.jpg?alt=media&token=9aedd8ba-99f6-47db-98c4-8c4413b1932c", title: "Kanyakumari" },

];

export const norteastslides1 = [
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/North%20East%20Tours%2FDarjeeling.png?alt=media&token=91f862bd-15d5-4fcb-8014-11197112faed", title: "Darjeeling" },
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/North%20East%20Tours%2FBaba%20Mandir.png?alt=media&token=de838f21-166b-4342-96cd-67626db0f753", title: "Baba Mandir" },
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/North%20East%20Tours%2Fgankot.png?alt=media&token=08b5846e-5646-4665-a2ca-f884d49a05c8", title: "Gangtok" },
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/North%20East%20Tours%2FDarjeeling%20%2B%20Toy%20Train.png?alt=media&token=2b1176f9-bf5a-4bf7-a433-c8ab8d67c7e3", title: "Darjeeling Toy Train" },
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/North%20East%20Tours%2FDarjeeling%20sightseeing.png?alt=media&token=983e10e6-7968-4038-bd25-894ccde08b45", title: "Darjeeling Sightseeing" },
 

];

export const norteastslides2 = [
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/North%20East%20Tours%2Fgankot.png?alt=media&token=08b5846e-5646-4665-a2ca-f884d49a05c8", title: "Gangtok" },
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/North%20East%20Tours%2FBaba%20Mandir.png?alt=media&token=de838f21-166b-4342-96cd-67626db0f753", title: "Baba Mandir" },
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/North%20East%20Tours%2FKalimpong.png?alt=media&token=e383b985-88d9-4e10-af4b-cf3794813ab2", title: "Kalimpong" },
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/North%20East%20Tours%2FDarjeeling%20%2B%20Toy%20Train.png?alt=media&token=2b1176f9-bf5a-4bf7-a433-c8ab8d67c7e3", title: "Darjeeling Toy Train" },
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/North%20East%20Tours%2FDarjeeling%20sightseeing.png?alt=media&token=983e10e6-7968-4038-bd25-894ccde08b45", title: "Darjeeling Sightseeing" },
];

export const norteastslides3 = [
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/North%20East%20Tours%2Fgankot.png?alt=media&token=08b5846e-5646-4665-a2ca-f884d49a05c8", title: "Gangtok" },
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/North%20East%20Tours%2FTsomgo%20Lake.png?alt=media&token=2da6b302-ab04-4639-9fbb-068835997144", title: "Tsomgo Lake" },
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/North%20East%20Tours%2FBaba%20Mandir.png?alt=media&token=de838f21-166b-4342-96cd-67626db0f753", title: "Baba Mandir" },
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/North%20East%20Tours%2FPelling.png?alt=media&token=63c70862-0f93-43e9-9bb9-e43ce22abc84", title: "Pelling" },
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/North%20East%20Tours%2FKalimpong.png?alt=media&token=e383b985-88d9-4e10-af4b-cf3794813ab2", title: "Kalimpong" },
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/North%20East%20Tours%2FDarjeeling.png?alt=media&token=91f862bd-15d5-4fcb-8014-11197112faed", title: "Darjeeling" },

];

export const norteastslides4 = [
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/North%20East%20Tours%2FGuwahati.png?alt=media&token=b009874c-a491-4e16-bfcc-9a7bb9a233f3", title: "Guwahati" },
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/North%20East%20Tours%2FCherrapunjee.png?alt=media&token=da58f9da-4015-4723-bd96-450ddb2ff234", title: "Cherrapunjee" },
  {image:"https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/North%20East%20Tours%2FShillong_Wards.png?alt=media&token=a4a18cf0-c082-40c7-bf5e-92c62c9f680b", title: "Shillong Wards" },
  {image:"https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/North%20East%20Tours%2FDon_Bosco_Church_Shillong.png?alt=media&token=ce5a8427-f086-4ce0-bc0a-ae119f3b2de8", title: "Don Bosco Church" },
  {image:"https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/North%20East%20Tours%2FShillong_Peak_View.png?alt=media&token=68054338-faa3-4a5e-8a3d-f4449f32ff00", title: "Shillong Peak View" },
  {image:"https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/North%20East%20Tours%2FElephant_Falls_Shillong.png?alt=media&token=8e5ffa38-53c9-489a-a666-a5bf84112e09", title: "Elephant Falls" },
  {image:"https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/North%20East%20Tours%2FShillong_Local_Marke.png?alt=media&token=a6615783-84c5-4d72-bdc2-9d182cadbb8d", title: "Shillong Local Market" },
];

export const norteastslides5 = [
  {image:"https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/North%20East%20Tours%2FKamakhya_Temple_Guwahati.png?alt=media&token=c98963e5-1ef2-428d-8ecb-257c32715540", title: "Kamakhya Temple" },
  {image:"https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/North%20East%20Tours%2FShillong_Local_Marke.png?alt=media&token=a6615783-84c5-4d72-bdc2-9d182cadbb8d", title: "Shillong Local Market" },
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/North%20East%20Tours%2FGuwahati.png?alt=media&token=b009874c-a491-4e16-bfcc-9a7bb9a233f3", title: "Guwahati" },
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/North%20East%20Tours%2FCherrapunjee.png?alt=media&token=da58f9da-4015-4723-bd96-450ddb2ff234", title: "Cherrapunjee" },
  {image:"https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/North%20East%20Tours%2FShillong_Wards.png?alt=media&token=a4a18cf0-c082-40c7-bf5e-92c62c9f680b", title: "Shillong Wards" },
  {image:"https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/North%20East%20Tours%2FDon_Bosco_Church_Shillong.png?alt=media&token=ce5a8427-f086-4ce0-bc0a-ae119f3b2de8", title: "Don Bosco Church" },
  {image:"https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/North%20East%20Tours%2FShillong_Peak_View.png?alt=media&token=68054338-faa3-4a5e-8a3d-f4449f32ff00", title: "Shillong Peak View" },
  {image:"https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/North%20East%20Tours%2FElephant_Falls_Shillong.png?alt=media&token=8e5ffa38-53c9-489a-a666-a5bf84112e09", title: "Elephant Falls" },
  {image:"https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/North%20East%20Tours%2FShillong_Local_Marke.png?alt=media&token=a6615783-84c5-4d72-bdc2-9d182cadbb8d", title: "Shillong Local Market" },
];

export const srilankaslides1 = [
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/Sri%20Lanka%20Tours%2FKandy_Town_and_Bazaar.png?alt=media&token=dcfdcb7e-6ded-4a48-a4f5-98e6a3987440", title: "Kandy Town and Bazaar" },
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/Sri%20Lanka%20Tours%2FPinnawela_Elephant_Orphanage.png?alt=media&token=4b7c1b41-ed47-483f-8fc5-1dd29f452a05", title: "Pinnawela Elephant Orphanage" },
  {image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/Sri%20Lanka%20Tours%2FTemple_of_the_Tooth_Relic_Kandy.png?alt=media&token=7a2b8139-7883-4fb7-91e3-02aa7a12a207", title: "Temple of the Tooth Relic" },
  {image:"https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/Sri%20Lanka%20Tours%2FColombo_Museum.png?alt=media&token=c09a3dc7-94f6-48d8-a8be-beeab83631fc", title: "Colombo Museum" },
  {image:"https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/Sri%20Lanka%20Tours%2FColombo_Folk_Art_Centre..png?alt=media&token=d47e59d1-fbf3-408d-8323-da5f1019dbcc", title: "Colombo Folk Art Centre" },

];

export const srilankaslides2 = [
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/Sri%20Lanka%20Tours%2FColombo_City.png?alt=media&token=a3c8527b-835a-4156-ad20-7169f9a7d962", title: "Colombo City" },
  {image:"https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/Sri%20Lanka%20Tours%2FPeradeniya_Botanical_Garden_Kandy.png?alt=media&token=fd42709d-d3c3-4ddc-bd63-81ff779f2ab5", title: "Peradeniya Botanical Garden" },
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/Sri%20Lanka%20Tours%2FPinnawela_Elephant_Orphanage.png?alt=media&token=4b7c1b41-ed47-483f-8fc5-1dd29f452a05", title: "Pinnawela Elephant Orphanage" },
  {image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/Sri%20Lanka%20Tours%2FTemple_of_the_Tooth_Relic_Kandy.png?alt=media&token=7a2b8139-7883-4fb7-91e3-02aa7a12a207", title: "Temple of the Tooth Relic" },
  {image:"https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/Sri%20Lanka%20Tours%2FColombo_Museum.png?alt=media&token=c09a3dc7-94f6-48d8-a8be-beeab83631fc", title: "Colombo Museum" },
  {image:"https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/Sri%20Lanka%20Tours%2FColombo_Folk_Art_Centre..png?alt=media&token=d47e59d1-fbf3-408d-8323-da5f1019dbcc", title: "Colombo Folk Art Centre" },
  {image:"https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/Sri%20Lanka%20Tours%2FBentota_Beach.png?alt=media&token=3cd5bf5c-cc26-4d03-bf6b-1569e7d0aae5", title: "Bentota Beach" },
  {image:"https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/Sri%20Lanka%20Tours%2FBentota_River_Safari.png?alt=media&token=b01572be-8323-4bcf-bd0f-81468f01af64", title: "Bentota River Safari" },
];

export const srilankaslides3 = [
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/Sri%20Lanka%20Tours%2FColombo_City.png?alt=media&token=a3c8527b-835a-4156-ad20-7169f9a7d962", title: "Colombo City" },
  {image:"https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/Sri%20Lanka%20Tours%2FPeradeniya_Botanical_Garden_Kandy.png?alt=media&token=fd42709d-d3c3-4ddc-bd63-81ff779f2ab5", title: "Peradeniya Botanical Garden" },
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/Sri%20Lanka%20Tours%2FDambulla_Cave_Temples.png?alt=media&token=88280ee0-9a90-411a-92d9-3653bdd9557b", title: "Dambulla Cave Temples" },
  {image:"https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/Sri%20Lanka%20Tours%2FHabarana_Elephant_Safari.png?alt=media&token=934c19f9-5c8f-403f-8709-65ea9b93ee1f", title: "Habarana Elephant Safari" },
  {image:"https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/Sri%20Lanka%20Tours%2FSigiriya_Rock_Fortress..png?alt=media&token=7c936b3d-caa5-4f27-940e-755c99f332e4", title: "Sigiriya Rock Fortress" },
  {image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/Sri%20Lanka%20Tours%2FTemple_of_the_Tooth_Relic_Kandy.png?alt=media&token=7a2b8139-7883-4fb7-91e3-02aa7a12a207", title: "Temple of the Tooth Relic" },
  {image:"https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/Sri%20Lanka%20Tours%2FColombo_Museum.png?alt=media&token=c09a3dc7-94f6-48d8-a8be-beeab83631fc", title: "Colombo Museum" },
  {image:"https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/Sri%20Lanka%20Tours%2FColombo_Folk_Art_Centre..png?alt=media&token=d47e59d1-fbf3-408d-8323-da5f1019dbcc", title: "Colombo Folk Art Centre" },
  {image:"https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/Sri%20Lanka%20Tours%2FBentota_Beach.png?alt=media&token=3cd5bf5c-cc26-4d03-bf6b-1569e7d0aae5", title: "Bentota Beach" },
  {image:"https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/Sri%20Lanka%20Tours%2FBentota_River_Safari.png?alt=media&token=b01572be-8323-4bcf-bd0f-81468f01af64", title: "Bentota River Safari" },
];

export const srilankaslides4 = [
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/Sri%20Lanka%20Tours%2FMunneswaram_Temple_Chilaw.png?alt=media&token=768f30f8-dcec-46e5-90a8-17ecb3d471a7", title: "Munneswaram Temple" },
  {image:"https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/Sri%20Lanka%20Tours%2FLover's_Leap_Trincomalee.png?alt=media&token=e74b6f1a-c61c-4fdc-a42d-97b32e34df92", title: "Lover's Leap" },
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/Sri%20Lanka%20Tours%2FDambulla_Cave_Temples.png?alt=media&token=88280ee0-9a90-411a-92d9-3653bdd9557b", title: "Dambulla Cave Temples" },
  {image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/Sri%20Lanka%20Tours%2FTemple_of_the_Tooth_Relic_Kandy.png?alt=media&token=7a2b8139-7883-4fb7-91e3-02aa7a12a207", title: "Temple of the Tooth Relic" },
  {image:"https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/Sri%20Lanka%20Tours%2FKandy_Cultural_Dance_Performance.png?alt=media&token=ff3f4568-8040-45b1-915b-0ae2f16e7136", title: "Kandy Cultural Dance" },
  {image:"https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/Sri%20Lanka%20Tours%2FRavana_Water_Falls.png?alt=media&token=88ac0079-faad-4bb5-9d01-9c10c75596f7", title: "Ravana Water Falls" },
  {image:"https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/Sri%20Lanka%20Tours%2FKataragama%20Temple%20.png?alt=media&token=b752450f-4874-4232-bbc8-2c23b11c6fe1", title: "Kataragama Temple" },

  {image:"https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/Sri%20Lanka%20Tours%2FGalle_Dutch_Fort.png?alt=media&token=baeca214-1392-41aa-9c49-08d9d4e3a1ee", title: "Galle Dutch Fort" },
  {image:"https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/Sri%20Lanka%20Tours%2FThirukoneswaram_Temple_Trincomalee.png?alt=media&token=419ccbdb-3f10-40dd-b60b-08e49e8621ac", title: "Thirukoneswaram Temple" },
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/Sri%20Lanka%20Tours%2FColombo_City.png?alt=media&token=a3c8527b-835a-4156-ad20-7169f9a7d962", title: "Colombo City" },
];















export const Tamilnaducategory = [
  {
    title: "Temple Delights",
    subtitle: "Explore the Spiritual Heart of South India",
    content:
      "Embark on a journey through Tamil Nadu, renowned for its majestic temples and rich cultural heritage. Immerse yourself in the vibrant religious practices and ancient traditions at Madurai Meenakshi Amman Temple and more. Witness the intricate architecture, awe-inspiring sculptures, and captivating rituals that have captivated millions for centuries.",
  },
 
];

export const Keralacategory = [
  {
    title:"Popular Places",
    subtitle: "Explore The Best Destinations Around Kerala",
    
    content: "Embark on a journey through the enchanting landscapes of Kerala, where tradition meets tranquility. Explore the bustling streets of Cochin, wander amidst the lush tea plantations in Munnar, experience the wildlife wonders of Thekkady, cruise along the serene backwaters of Alleppey, unwind on the pristine beaches of Kovalam, immerse in the rich culture of Trivandrum and much more.",
  }
]

export const Northeastcategory = [
  {
    title: "Northeast Wonders",
    subtitle: "Discover The Hidden Gems of Northeast India",
    content:
      "Embark on a journey through the unexplored landscapes of Northeast India, where nature thrives in all its glory. Explore the picturesque hill stations of Gangtok, Darjeeling, and Pelling, experience the rich culture of Kalimpong, witness the cascading waterfalls of Shillong, explore the wildlife wonders of Guwahati, and much more.",
  },
];

export const Srilankacategory = [
  {
    title: "Sri Lanka",
    subtitle: "Discover The Pearl of the Indian Ocean",
    content:
      "Embark on a journey through the tropical paradise of Sri Lanka, where history, culture, and nature converge. Explore the ancient ruins of Anuradhapura, the sacred city of Kandy, the wildlife wonders of Yala National Park, the pristine beaches of Bentota, the colonial charm of Galle, and much more.",
  },
];

export const Filters = [
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/TamilNadu%2Fmarina-beach.png?alt=media&token=3ab5bc9e-88eb-4e7d-a04c-7c60ccfe2471", title: "Marina Beach" },
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/Attukadu%20waterfalls.png?alt=media&token=b4c136cb-ce3a-4220-b02a-5415cdd0be1f", title: "Attukadu Waterfalls" },
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/TamilNadu%2Fmgr-memorial.png?alt=media&token=6c5ec8bb-672c-4a0d-b296-a8292e4c0171", title: "MGR Memorial" },
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/House%20Boat.png?alt=media&token=13293f3c-2277-4913-942c-6d2be8ff544d", title: "House Boat" },
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/TamilNadu%2Fpndicherry.png?alt=media&token=58f4a545-4789-41e2-a116-8e47e987ec38", title: "Pondicherry" },
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/Tea-Museum.png?alt=media&token=80be75d0-2774-46f9-8d95-74a11d822b42", title: "Tea Museum" },
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/thiruvalluvar-statue-727594_1280.jpg?alt=media&token=9aedd8ba-99f6-47db-98c4-8c4413b1932c", title: "Kanyakumari" },
  { image: "https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/Thekkady.png?alt=media&token=73561443-2488-4314-9890-6265e57a8a11", title: "Thekkady" },
]


export const socials = [
  <FaFacebook />,
  <FaTwitter />,
  <FaInstagram />,
  <FaLinkedin />,
  <FaBehance />,
  <FaDribbble />,
  <FaYoutube />,
  <FaVimeo />,
];


export const faqs = [
  {
    id: 1,
    question: "What are the must-visit places in Cochin?",
    response:
      "Explore the vibrant city of Cochin by visiting Fort Cochin, Navy Museum, St. Francis Church, Chinese Fishing Net, Santa Claus Basilica, Mattanchery Palace, Jewish Synagogue, Marian Drive, Marine Walk Way, and more. Each destination offers a unique glimpse into the rich culture and history of Cochin.",
  },
  {
    id: 2,
    question: "What is the best time to visit Munnar?",
    response:
      "The ideal time to visit Munnar is during the months of September to November and from January to March. During these periods, the weather is pleasant, and you can enjoy the lush tea plantations, the Eravikulam National Park, Mattupetty Dam, and other scenic spots without extreme temperatures.",
  },
  {
    id: 3,
    question: "Which wildlife reserves can I explore in Thekkady?",
    response:
      "Thekkady is renowned for its Periyar Wildlife Sanctuary, offering a chance to witness diverse wildlife, including elephants, boars, deer, and tigers. Enjoy a boat ride on Lake Periyar for a unique wildlife viewing experience amidst the picturesque surroundings.",
  },
  {
    id: 4,
    question: "What is the highlight of Alleppey's Houseboat stay?",
    response:
      "The Houseboat stay in Alleppey offers a serene experience as you cruise along the backwaters. Enjoy the tranquil atmosphere, delicious meals on board, and witness the beauty of Kerala's unique landscapes. The houseboat check-in at noon and the cruise till sunrise provide a memorable stay.",
  },
  {
    id: 5,
    question: "Which are the must-visit beaches in Kovalam?",
    response:
      "Kovalam boasts beautiful beaches such as the Light House Beach and Ashoka Beach. Relax on the golden sands, enjoy water activities, and witness mesmerizing sunsets. These beaches make Kovalam a perfect destination for beach lovers.",
  },
  {
    id: 6,
    question: "What are the key attractions in Trivandrum?",
    response:
      "Trivandrum offers a rich cultural experience with attractions like the Napier Museum, Kuthiramalika Museum, Sri Padmanabha Temple, Sree Chithra Art Gallery, Zoological Park, Science and Technology Museum, Kanakakunnu Palace, and the planetarium. Explore the city's heritage and artistry.",
  },
  {
    id: 7,
    question: "How can I plan a trip from Trivandrum to Kanyakumari?",
    response:
      "To plan a trip from Trivandrum to Kanyakumari, you can enjoy a scenic drive, visit the majestic Padmanabhapuram Palace en route, and explore the unique attractions in Kanyakumari. Don't miss the beautiful sunrise and sunset views from this southernmost tip of India.",
  },
  {
    id: 8,
    question: "What is the best way to enjoy the beauty of sunrise in Kanyakumari?",
    response:
      "To experience the beauty of sunrise in Kanyakumari, wake up early and head to the beach. The Vivekananda Rock Memorial is a popular spot to witness the first rays of the sun. It's a magical moment where you can see the sun rising over the convergence of three seas.",
  },
];
