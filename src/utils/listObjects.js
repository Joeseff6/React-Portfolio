import ProfilePic from "../assets/images/Profilepic.jpg";
import GradPic from "../assets/images/Gradpic.jpg";
import CityPic from "../assets/images/Citypic.jpg";
import PoolPic from "../assets/images/Poolpic.jpg";
import {
  Github,
  InboxFill,
  PhoneVibrateFill,
  Linkedin,
} from "react-bootstrap-icons";

const aboutMeImages = [
  {
    image: ProfilePic,
    alt: "A headshot of me with a blurred background",
  },
  {
    image: GradPic,
    alt: "Me posing at the Engineering school at the University of Houston",
  },
  {
    image: CityPic,
    alt: "Me standing oustide in the city with buildings in the background",
  },
  {
    image: PoolPic,
    alt: "A focused shot of me while I was shooting pool",
  },
];

const aboutMeListItems = [
  {
    itemText: "Email: ",
    link: "mailto: josephsoria6@gmail.com",
    linkText: "josephsoria6@gmail.com",
    icon: InboxFill,
  },
  {
    itemText: "Phone: ",
    link: null,
    linkText: "832-657-9060",
    icon: PhoneVibrateFill,
  },
  {
    itemText: "Github: ",
    link: "https://github.com/Joeseff6",
    linkText: "See my Repos!",
    icon: Github,
  },
  {
    itemText: "LinkedIn: ",
    link: "https://www.linkedin.com/in/joseph-soria-5a335845/",
    linkText: "Connect with me!",
    icon: Linkedin,
  },
];

export { aboutMeImages, aboutMeListItems };
