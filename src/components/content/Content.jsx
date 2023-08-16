import achievementsIcon1 from "../../assets/images/about-us-icon-1.png";
import achievementsIcon2 from "../../assets/images/about-us-icon-2.png";
import achievementsIcon3 from "../../assets/images/about-us-icon-3.png";
import achievementsIcon4 from "../../assets/images/about-us-icon-4.png";
import img1 from "../../assets/images/serbvices-vector1.png";
import img2 from "../../assets/images/serbvices-vector2.png";
import img3 from "../../assets/images/serbvices-vector3.png";
import img4 from "../../assets/images/serbvices-vector4.png";
import logo1 from "../../assets/images/company-img-1.png";
import logo2 from "../../assets/images/company-img-2.png";
import logo3 from "../../assets/images/company-img-3.png";
import logo4 from "../../assets/images/company-img-4.png";
import logo5 from "../../assets/images/company-img-5.png";
import whyusIcon1 from "../../assets/images/why-us-icon1.png";
import whyusIcon2 from "../../assets/images/why-us-icon2.png";
import whyusIcon3 from "../../assets/images/why-us-icon3.png";

const MenuItems = [
  { name: "Home", link: "/", key: 1 },
  { name: "About", link: "/", key: 2 },
  { name: "Categories", link: "/", key: 3  },
  { name: "Features", link: "/", key: 4 },
  { name: "Contect", link: "/", key: 5 },
];

const achievementsData = [
  { img: achievementsIcon1, number: "1500+", title: "Successful Cases" },
  { img: achievementsIcon2, number: "93%", title: "Client Retention Rate" },
  { img: achievementsIcon3, number: "$567", title: "Millions Revenue" },
  { img: achievementsIcon4, number: "15+", title: "Professional Assistants" },
];

const servicesData = [
  {
    key: 1,
    img: img1,
    title: "Risk Management",
    pera: " We help you managing asset, provide financial advise. Leave money issue with us and focus on your core business. We help you managing asset, provide financial advise. ",
  },
  {
    key: 2,
    img: img2,
    title: "Tax Planning",
    pera: " We help you managing asset, provide financial advise. Leave money issue with us and focus on your core business. We help you managing asset, provide financial advise.  ",
  },
  {
    key: 3,
    img: img3,
    title: "Stock Management",
    pera: " We help you managing asset, provide financial advise. Leave money issue with us and focus on your core business. We help you managing asset, provide financial advise. ",
  },
  {
    key: 4,
    img: img4,
    title: "Investment Advisory",
    pera: " We help you managing asset, provide financial advise. Leave money issue with us and focus on your core business. We help you managing asset, provide financial advise. ",
  },
];

const trustedbyData = [
  { img: logo1 },
  { img: logo2 },
  { img: logo3 },
  { img: logo4 },
  { img: logo5 },
];

const whyusData = [
    {
      img: whyusIcon1,
      title: "Confidential",
      pera: " We help you managing asset, provide financial advise. Leave money issue. ",
    },
    {
      img: whyusIcon2,
      title: "Flexible",
      pera: " We help you managing asset, provide financial advise. Leave money issue. ",
    },
    {
      img: whyusIcon3,
      title: "Affordable",
      pera: " We help you managing asset, provide financial advise. Leave money issue. ",
    },
  ];

export {MenuItems, achievementsData, servicesData, trustedbyData , whyusData};
