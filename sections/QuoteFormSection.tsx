"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  ArrowRightCircle,
  Box,
  Truck,
} from "lucide-react";

import { fadeIn } from "@/lib/animations";
import { useState } from "react";

export function QuoteFormSection() {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [cargo, setCargo] = useState("");
  const [truckType, setTruckType] = useState("");

  const handleWhatsApp = () => {
    const phoneNumber = "919876543210";

    const message = `
🚚 FASTTRACK LOGISTICS QUOTE REQUEST

📍 Pickup Location: ${pickup}
📍 Drop Location: ${drop}

📦 Cargo Type: ${cargo}

🚛 Truck Type: ${truckType}

Please share the pricing details.
    `;

    const encodedMessage = encodeURIComponent(message);

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeIn}
      className="container relative -mt-10 mb-10 rounded-[1.5rem] bg-white/95 px-4 py-5 shadow-luxury backdrop-blur-xl md:px-6 md:py-6"
    >
      <div className="grid gap-4 lg:grid-cols-[1.7fr_0.9fr]">

        {/* LEFT SIDE */}
        <div className="grid gap-3 sm:grid-cols-2">

          {/* PICKUP */}
          <label className="space-y-1 rounded-[1.2rem] border border-[#d5c4b6]/60 bg-[#f9f4ee] p-3">
            <span className="text-[11px] uppercase tracking-[0.22em] text-[#6b6b6b]">
              Pickup Location
            </span>

            <div className="flex items-center gap-2 rounded-[1rem] bg-white px-3 py-2 shadow-sm">
              <MapPin className="h-4 w-4 text-[#7a3e1d]" />

              <input
                type="text"
                placeholder="Mumbai"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                className="w-full border-0 bg-transparent text-sm text-[#1f1f1f] outline-none"
              />
            </div>
          </label>

          {/* DROP */}
          <label className="space-y-1 rounded-[1.2rem] border border-[#d5c4b6]/60 bg-[#f9f4ee] p-3">
            <span className="text-[11px] uppercase tracking-[0.22em] text-[#6b6b6b]">
              Drop Location
            </span>

            <div className="flex items-center gap-2 rounded-[1rem] bg-white px-3 py-2 shadow-sm">
              <MapPin className="h-4 w-4 text-[#7a3e1d]" />

              <input
                type="text"
                placeholder="New Delhi"
                value={drop}
                onChange={(e) => setDrop(e.target.value)}
                className="w-full border-0 bg-transparent text-sm text-[#1f1f1f] outline-none"
              />
            </div>
          </label>

          {/* CARGO */}
          <label className="space-y-1 rounded-[1.2rem] border border-[#d5c4b6]/60 bg-[#f9f4ee] p-3">
            <span className="text-[11px] uppercase tracking-[0.22em] text-[#6b6b6b]">
              Cargo Type
            </span>

            <div className="flex items-center gap-2 rounded-[1rem] bg-white px-3 py-2 shadow-sm">
              <Box className="h-4 w-4 text-[#7a3e1d]" />

              <input
                type="text"
                placeholder="Electronics"
                value={cargo}
                onChange={(e) => setCargo(e.target.value)}
                className="w-full border-0 bg-transparent text-sm text-[#1f1f1f] outline-none"
              />
            </div>
          </label>

          {/* TRUCK */}
          <label className="space-y-1 rounded-[1.2rem] border border-[#d5c4b6]/60 bg-[#f9f4ee] p-3">
            <span className="text-[11px] uppercase tracking-[0.22em] text-[#6b6b6b]">
              Truck Type
            </span>

            <div className="flex items-center gap-2 rounded-[1rem] bg-white px-3 py-2 shadow-sm">
              <Truck className="h-4 w-4 text-[#7a3e1d]" />

              <input
                type="text"
                placeholder="Tanker"
                value={truckType}
                onChange={(e) => setTruckType(e.target.value)}
                className="w-full border-0 bg-transparent text-sm text-[#1f1f1f] outline-none"
              />
            </div>
          </label>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col justify-between rounded-[1.5rem] border border-[#ecd7c7] bg-[#fffaf4] p-5 shadow-soft">

          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[#7a3e1d]">
              Instant quote
            </p>

            <h3 className="mt-2 text-2xl font-bold text-[#1f1f1f]">
              GET PRICE
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#6b6b6b]">
              Submit your route details and our team will respond
              with a premium tailored estimate within minutes.
            </p>
          </div>

          <button
            onClick={handleWhatsApp}
            className="mt-5 inline-flex items-center justify-center gap-2 rounded-[1rem] bg-gradient-to-r from-[#7A3E1D] via-[#9e532c] to-[#4B240F] px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-[0_12px_30px_rgba(122,62,29,0.22)] transition hover:scale-[1.02]"
          >
            Get Price
            <ArrowRightCircle className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}