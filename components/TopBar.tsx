// "use client";

// import { motion } from "framer-motion";
// import {
//   Mail,
//   Phone,
//   Instagram,
//   Facebook,
//   Linkedin,
//   MessageSquare,
// } from "lucide-react";

// const contacts = [
//   {
//     label: "+91 98765 43210",
//     href: "tel:+919876543210",
//     icon: Phone,
//   },
//   {
//     label: "hello@fasttrack.com",
//     href: "mailto:hello@fasttrack.com",
//     icon: Mail,
//   },
// ];

// const socials = [
//   {
//     label: "WhatsApp",
//     href: "https://wa.me/919876543210",
//     icon: MessageSquare,
//   },
//   {
//     label: "Instagram",
//     href: "https://instagram.com/fasttrack_logistics",
//     icon: Instagram,
//   },
//   {
//     label: "Facebook",
//     href: "https://facebook.com/fasttracklogistics",
//     icon: Facebook,
//   },
//   {
//     label: "LinkedIn",
//     href: "https://linkedin.com/company/fasttrack-logistics",
//     icon: Linkedin,
//   },
// ];

// export function TopBar() {
//   return (
//     <div className="w-full overflow-hidden bg-gradient-to-r from-[#4b240f] via-[#7a3e1d] to-[#35170e] text-[#f5eee8]">
      
//       {/* MAIN CONTAINER */}
//       <div className="mx-auto flex min-h-[52px] max-w-[1400px] flex-col justify-center px-4 py-2 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        
//         {/* LEFT SIDE */}
//         <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          
//           {contacts.map((item) => (
//             <a
//               key={item.label}
//               href={item.href}
//               className="flex items-center gap-2 text-[11px] font-medium tracking-wide text-[#f5eee8]/90 transition hover:text-white sm:text-[13px]"
//             >
//               <item.icon className="h-4 w-4 shrink-0" />
//               <span className="leading-none">{item.label}</span>
//             </a>
//           ))}
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="mt-3 flex items-center justify-between lg:mt-0 lg:gap-5">
          
//           {/* FOLLOW TEXT */}
//           <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#f5eee8]/90 sm:text-[11px]">
//             Follow Us
//           </span>

//           {/* SOCIAL ICONS */}
//           <div className="ml-4 flex items-center gap-2 sm:gap-3">
//             {socials.map((item) => (
//               <motion.a
//                 key={item.label}
//                 href={item.href}
//                 target="_blank"
//                 rel="noreferrer"
//                 whileHover={{
//                   scale: 1.12,
//                   y: -2,
//                 }}
//                 whileTap={{
//                   scale: 0.96,
//                 }}
//                 className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white shadow-md backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/20 sm:h-9 sm:w-9"
//                 aria-label={item.label}
//               >
//                 <item.icon className="h-4 w-4" />
//               </motion.a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }