export const filterData = [
  { name: "Deliever", image: require("../../assets/download.jpg"), id: "0" },
  { name: "Package", image: require("../../assets/package.png"), id: "1" },
];

export const rideData = [
  { street: "Wah Cantt", area: "Klipfontein 83-Ir,Boksburg", id: "0" },
  { street: "Hughes Industrial Park", area: "Hughes,Boksburg", id: "1" },
  { street: "Wah Cantt", area: " East Rand,Ekurhuleni,Gauteng,1459", id: "2" },
  { street: "Total Boksburg", area: "35 Atlas Rd,Anderbolt,Boksburg", id: "3" },
  { street: "179 8th Ave", area: "Bezuidenhout Valley,Johannesburg", id: "4" },
];

export const carTypeData = [
  {
    title: "Large",
    data: [
      {
        name: "Truck ",
        group: 2,
        weight: "Weight capacity : 5000kg",
        price: 5300,
        image: require("../../assets/large.jpeg"),
        note: "Affordable Rides",
        promotion: 5,
        time: "20:19",
        id: "0",
      },
      {
        name: "Dump Truck",
        group: 3,
        weight: "Weight capacity : 4000kg",
        price: 4200,
        image: require("../../assets/large3.jpeg"),
        note: "Affordable Trips",
        promotion: 0,
        time: "20:20",
        id: "1",
      },
    ],
  },

  {
    title: "Medium",
    data: [
      {
        name: "Mini Truck",
        group: 3,
        weight: "Weight capacity : 3000kg",
        price: 3500,
        image: require("../../assets/medium.jpeg"),
        note: "Premium Trips",
        promotion: 0,
        time: "20:31",
        id: "3",
      },
      {
        name: "Shehzor",
        group: 3,
        weight: "Weight capacity : 3200kg",
        price: 3800,
        image: require("../../assets/shehzor.jpeg"),
        note: "Premium Trips",
        promotion: 0,
        time: "20:31",
        id: "3",
      },
    ],
  },

  {
    title: "Small",
    data: [
      {
        name: "Suzuki carry",
        group: 3,
        weight: "Weight capacity : 2000kg",
        price: 2500,
        image: require("../../assets/small.jpeg"),
        note: "Special assistance ",
        promotion: 26,
        time: "20:25",
        id: "5",
      },
      {
        name: "Van",
        group: 6,
        weight: "Weight capacity : 2300kg",
        price: 2800,
        image: require("../../assets/small2.jpeg"),
        note: "Best Rides",
        promotion: 12,
        time: "20:31",
        id: "4",
      },
    ],
  },
];

export const requestData = [
  {
    name: "For Me",
    id: 0,
  },
  {
    name: "For Someone",
    id: 1,
  },
];

export const rideOptions = [
  { name: "Personal", icon: "account", id: "0" },
  { name: "Business", icon: "briefcase", id: "1" },
];

export const paymentOptions = [
  { image: require("../../assets/visaIcon.png"), text: "Visa ...0476" },
  { image: require("../../assets/cashIcon.png"), text: "Cash" },
];

export const availableServices = [
  "Uber Go",
  "UberX",
  "Uber connect",
  "Uber Black",
  "Uber Van",
  "Uber Assist",
];

export const trucksAround = [
  { latitude: 33.72, longitude: 73.06 },
  { latitude: 33.644639, longitude: 72.96381 },
  { latitude: 33.650638, longitude: 72.95527 },
];
