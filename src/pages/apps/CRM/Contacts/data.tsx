import avatar1 from "../../../../assets/images/users/user-1.jpg";
import avatar3 from "../../../../assets/images/users/user-3.jpg";
import avatar4 from "../../../../assets/images/users/user-4.jpg";
import avatar5 from "../../../../assets/images/users/user-5.jpg";
import avatar6 from "../../../../assets/images/users/user-6.jpg";
import avatar7 from "../../../../assets/images/users/user-7.jpg";
import avatar8 from "../../../../assets/images/users/user-8.jpg";
import avatar9 from "../../../../assets/images/users/user-9.jpg";
import avatar10 from "../../../../assets/images/users/user-10.jpg";

interface ContactsItems {
  id: number;
  avatar: string;
  name: string;
  phone: string;
  email: string;
  company: string;
  created_date: string;
}

const contacts: ContactsItems[] = [
  {
    id: 1,
    avatar: avatar4,
    name: "Paul J. Friend",
    phone: "937-330-1634",
    email: "pauljfrnd@jourrapide.com",
    company: "Vine Corporation",
    created_date: "07/07/2018",
  },
  {
    id: 2,
    avatar: avatar3,
    name: "Bryan J. Luellen",
    phone: "215-302-3376",
    email: "bryuellen@dayrep.com",
    company: "Blue Motors",
    created_date: "09/12/2018",
  },
  {
    id: 3,
    avatar: avatar3,
    name: "Kathryn S. Collier",
    phone: "828-216-2190",
    email: "collier@jourrapide.com",
    company: "Arcanetworks",
    created_date: "06/30/2018",
  },
  {
    id: 4,
    avatar: avatar1,
    name: "Timothy Kauper",
    phone: "(216) 75 612 706",
    email: "thykauper@rhyta.com",
    company: "Boar Records",
    created_date: "09/08/2018",
  },
  {
    id: 5,
    avatar: avatar5,
    name: "Zara Raws",
    phone: "(02) 75 150 655	",
    email: "austin@dayrep.com",
    company: "Bearings",
    created_date: "07/15/2018",
  },
  {
    id: 6,
    avatar: avatar6,
    name: "Annette P. Kelsch",
    phone: "(+15) 73 483 758",
    email: "annette@email.net	",
    company: "Shadowshine",
    created_date: "09/05/2018",
  },
  {
    id: 7,
    avatar: avatar7,
    name: "Jenny C. Gero",
    phone: "078 7173 9261",
    email: "jennygero@teleworm.us",
    company: "Crowares",
    created_date: "08/02/2018",
  },
  {
    id: 8,
    avatar: avatar8,
    name: "Edward Roseby",
    phone: "078 6013 3854",
    email: "edwardR@armyspy.com",
    company: "Orangations",
    created_date: "08/23/2018",
  },
  {
    id: 9,
    avatar: avatar9,
    name: "Anna Ciantar",
    phone: "(216) 76 298 896",
    email: "edwardR@armyspy.com",
    company: "Surprise Brews",
    created_date: "05/06/2018",
  },
  {
    id: 10,
    avatar: avatar10,
    name: "Dean Smithies",
    phone: "077 6157 4248",
    email: "deanes@dayrep.com",
    company: "Apexlife",
    created_date: "04/09/2018",
  },
  {
    id: 11,
    avatar: avatar7,
    name: "Jenny C. Gero",
    phone: "078 7173 9261",
    email: "jennygero@teleworm.us",
    company: "Crowares",
    created_date: "08/02/2018",
  },
  {
    id: 12,
    avatar: avatar8,
    name: "Edward Roseby",
    phone: "078 6013 3854",
    email: "edwardR@armyspy.com",
    company: "Orangations",
    created_date: "08/23/2018",
  },
  {
    id: 13,
    avatar: avatar9,
    name: "Anna Ciantar",
    phone: "(216) 76 298 896",
    email: "edwardR@armyspy.com",
    company: "Surprise Brews",
    created_date: "05/06/2018",
  },
  {
    id: 14,
    avatar: avatar3,
    name: "Bryan J. Luellen",
    phone: "215-302-3376",
    email: "bryuellen@dayrep.com",
    company: "Blue Motors",
    created_date: "09/12/2018",
  },
  {
    id: 15,
    avatar: avatar3,
    name: "Kathryn S. Collier",
    phone: "828-216-2190",
    email: "collier@jourrapide.com",
    company: "Arcanetworks",
    created_date: "06/30/2018",
  },
  {
    id: 16,
    avatar: avatar1,
    name: "Timothy Kauper",
    phone: "(216) 75 612 706",
    email: "thykauper@rhyta.com",
    company: "Boar Records",
    created_date: "09/08/2018",
  },
  {
    id: 17,
    avatar: avatar5,
    name: "Zara Raws",
    phone: "(02) 75 150 655	",
    email: "austin@dayrep.com",
    company: "Bearings",
    created_date: "07/15/2018",
  },
  {
    id: 18,
    avatar: avatar6,
    name: "Annette P. Kelsch",
    phone: "(+15) 73 483 758",
    email: "annette@email.net	",
    company: "Shadowshine",
    created_date: "09/05/2018",
  },
  {
    id: 19,
    avatar: avatar7,
    name: "Jenny C. Gero",
    phone: "078 7173 9261",
    email: "jennygero@teleworm.us",
    company: "Crowares",
    created_date: "08/02/2018",
  },
  {
    id: 20,
    avatar: avatar8,
    name: "Edward Roseby",
    phone: "078 6013 3854",
    email: "edwardR@armyspy.com",
    company: "Orangations",
    created_date: "08/23/2018",
  },
  {
    id: 21,
    avatar: avatar9,
    name: "Anna Ciantar",
    phone: "(216) 76 298 896",
    email: "edwardR@armyspy.com",
    company: "Surprise Brews",
    created_date: "05/06/2018",
  },
  {
    id: 22,
    avatar: avatar3,
    name: "Kathryn S. Collier",
    phone: "828-216-2190",
    email: "collier@jourrapide.com",
    company: "Arcanetworks",
    created_date: "06/30/2018",
  },
  {
    id: 23,
    avatar: avatar1,
    name: "Timothy Kauper",
    phone: "(216) 75 612 706",
    email: "thykauper@rhyta.com",
    company: "Boar Records",
    created_date: "09/08/2018",
  },
  {
    id: 24,
    avatar: avatar5,
    name: "Zara Raws",
    phone: "(02) 75 150 655	",
    email: "austin@dayrep.com",
    company: "Bearings",
    created_date: "07/15/2018",
  },
  {
    id: 25,
    avatar: avatar6,
    name: "Annette P. Kelsch",
    phone: "(+15) 73 483 758",
    email: "annette@email.net	",
    company: "Shadowshine",
    created_date: "09/05/2018",
  },
  {
    id: 26,
    avatar: avatar10,
    name: "Dean Smithies",
    phone: "077 6157 4248",
    email: "deanes@dayrep.com",
    company: "Apexlife",
    created_date: "04/09/2018",
  },
  {
    id: 27,
    avatar: avatar7,
    name: "Jenny C. Gero",
    phone: "078 7173 9261",
    email: "jennygero@teleworm.us",
    company: "Crowares",
    created_date: "08/02/2018",
  },
  {
    id: 28,
    avatar: avatar8,
    name: "Edward Roseby",
    phone: "078 6013 3854",
    email: "edwardR@armyspy.com",
    company: "Orangations",
    created_date: "08/23/2018",
  },
];

export { contacts };
