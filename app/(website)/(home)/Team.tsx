import React from "react";
import { THome } from "../config";

// team: {
//   id: "team",
//   title: "Meet the Team",
//   members: [
//     {
//       profilePicture: { imageUrl: "/women.jpeg" },
//       name: "Jane Doe",
//       position: "CEO",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
//       socialLinks: [
//         {
//           title: "YouTube",
//           href: "#",
//           icon: {
//             imageUrl: "yt.png",
//           },
//         },
//       ],
//     },
//   ],
//   otherMembers: [
//     {
//       Title: "Volunteers",
//       value: "2000+",
//     },
//     {
//       Title: "Trees Planted",
//       value: "2000+",
//     },
//     {
//       Title: "Projects",
//       value: "2000+",
//     },
//     {
//       Title: "Partners",
//       value: "2000+",
//     },
//   ],
// }

const Team = ({ config }: { config: THome["team"] }) => {
  return <section>Team</section>;
};

export default Team;
