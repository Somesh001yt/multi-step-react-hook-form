import Dashboard from '../../assests/menuIcons/dashboard.svg'
import Staff from '../../assests/menuIcons/staff.svg'
import Clients from '../../assests/menuIcons/clients.svg'
import Works from '../../assests/menuIcons/works.svg'
import Samples from '../../assests/menuIcons/samples.svg'
import Analytics from '../../assests/menuIcons/analytics.svg'
import Packages from '../../assests/menuIcons/package.svg'
import Chatbot from '../../assests/menuIcons/chatbot.svg'


export const listItem = [
  {
    id: 1,
    name: "Dashboard",
    link: "/",
    src: Dashboard,
  },
  {
    id: 2,
    name: "Staff",
    link: "/staff",
    src: Staff,
  },
  {
    id: 3,
    name: "Clients",
    link: "/clients",
    src: Clients,
  },
  {
    id: 4,
    src: Works,
    name: "Works",
    link: "/works",
  },
  {
    id: 5,
    name: "Samples",
    link: "/samples",
    src: Samples,
  },
  {
    id: 6,
    src: Analytics,
    name: "Analytics",
    link: "/analytics",
  },
  {
    id: 7,
    src: Packages,
    name: "Packages",
    link: "/packages",
  },
  {
    id: 8,
    src: Chatbot,
    name: "Chatbot",
    link: "/chatbot",
  },
  
];
