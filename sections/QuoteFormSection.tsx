"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRightCircle, Box, MapPin, Truck } from "lucide-react";
import { fadeIn } from "@/lib/animations";

export function QuoteFormSection() {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [cargo, setCargo] = useState("");
  const [truckType, setTruckType] = useState("");
  const [errors, setErrors] = useState<{
    pickup?: string;
    drop?: string;
    cargo?: string;
    truckType?: string;
  }>({});

  const validateFields = () => {
    const nextErrors: typeof errors = {};

    if (!pickup.trim()) nextErrors.pickup = "Pickup location is required.";
    if (!drop.trim()) nextErrors.drop = "Drop location is required.";
    if (!cargo.trim()) nextErrors.cargo = "Cargo type is required.";
    if (!truckType.trim()) nextErrors.truckType = "Truck type is required.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleWhatsApp = () => {
    if (!validateFields()) {
      return;
    }

    const phoneNumber = "9505984225";
    const message = `
🚚 DBMT LOGISTICS QUOTE REQUEST

📍 Pickup Location: ${pickup}
📍 Drop Location: ${drop}

📦 Cargo Type: ${cargo}

🚛 Truck Type: ${truckType}

Please share pricing details and availability.
    `;

    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeIn}
      className="container relative -mt-8 mb-6 rounded-[1.25rem] bg-white/95 px-4 py-4 shadow-luxury backdrop-blur-xl md:-mt-10 md:mb-8 md:px-6 md:py-5"
    >
      <div className="mb-4 rounded-[1.2rem] border border-[#ecd7c7] bg-[#fffaf4] p-4 shadow-sm sm:p-5">
        <p className="text-[10px] uppercase tracking-[0.32em] text-[#7a3e1d]/90">
          Premium estimate
        </p>
        <h2 className="mt-2 text-[26px] font-black uppercase tracking-[-0.04em] text-[#1f1f1f] sm:text-[32px]">
          Get Instant Transport Quote
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-[#6b6b6b] sm:text-base">
          Share your pickup, drop and cargo details, and receive a premium pricing estimate tailored to your shipment.
        </p>
      </div>

      <div className="grid gap-3 lg:grid-cols-[1.7fr_0.9fr]">
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="space-y-1 rounded-[1.1rem] border border-[#d5c4b6]/60 bg-[#f9f4ee] p-2.5">
            <span className="text-[10px] uppercase tracking-[0.22em] text-[#6b6b6b]">
              Pickup Location
            </span>
            <div className="flex items-center gap-2 rounded-[0.9rem] bg-white px-3 py-2 shadow-sm">
              <MapPin className="h-4 w-4 text-[#7a3e1d]" />
              <input
                type="text"
                placeholder="Mumbai"
                value={pickup}
                onChange={(e) => {
                  setPickup(e.target.value);
                  if (errors.pickup) setErrors((prev) => ({ ...prev, pickup: undefined }));
                }}
                aria-invalid={Boolean(errors.pickup)}
                className="w-full border-0 bg-transparent text-sm text-[#1f1f1f] outline-none"
              />
            </div>
            {errors.pickup ? <p className="mt-1 text-[10px] text-[#c12828]">{errors.pickup}</p> : null}
          </label>

          <label className="space-y-1 rounded-[1.1rem] border border-[#d5c4b6]/60 bg-[#f9f4ee] p-2.5">
            <span className="text-[10px] uppercase tracking-[0.22em] text-[#6b6b6b]">
              Drop Location
            </span>
            <div className="flex items-center gap-2 rounded-[0.9rem] bg-white px-3 py-2 shadow-sm">
              <MapPin className="h-4 w-4 text-[#7a3e1d]" />
              <input
                type="text"
                placeholder="New Delhi"
                value={drop}
                onChange={(e) => {
                  setDrop(e.target.value);
                  if (errors.drop) setErrors((prev) => ({ ...prev, drop: undefined }));
                }}
                aria-invalid={Boolean(errors.drop)}
                className="w-full border-0 bg-transparent text-sm text-[#1f1f1f] outline-none"
              />
            </div>
            {errors.drop ? <p className="mt-1 text-[10px] text-[#c12828]">{errors.drop}</p> : null}
          </label>

          <label className="space-y-1 rounded-[1.1rem] border border-[#d5c4b6]/60 bg-[#f9f4ee] p-2.5">
            <span className="text-[10px] uppercase tracking-[0.22em] text-[#6b6b6b]">
              Cargo Type
            </span>
            <div className="flex items-center gap-2 rounded-[0.9rem] bg-white px-3 py-2 shadow-sm">
              <Box className="h-4 w-4 text-[#7a3e1d]" />
              <input
                type="text"
                placeholder="Electronics"
                value={cargo}
                onChange={(e) => {
                  setCargo(e.target.value);
                  if (errors.cargo) setErrors((prev) => ({ ...prev, cargo: undefined }));
                }}
                aria-invalid={Boolean(errors.cargo)}
                className="w-full border-0 bg-transparent text-sm text-[#1f1f1f] outline-none"
              />
            </div>
            {errors.cargo ? <p className="mt-1 text-[10px] text-[#c12828]">{errors.cargo}</p> : null}
          </label>

          <label className="space-y-1 rounded-[1.1rem] border border-[#d5c4b6]/60 bg-[#f9f4ee] p-2.5">
            <span className="text-[10px] uppercase tracking-[0.22em] text-[#6b6b6b]">
              Truck Type
            </span>
            <div className="flex items-center gap-2 rounded-[0.9rem] bg-white px-3 py-2 shadow-sm">
              <Truck className="h-4 w-4 text-[#7a3e1d]" />
              <input
                type="text"
                placeholder="Tanker"
                value={truckType}
                onChange={(e) => {
                  setTruckType(e.target.value);
                  if (errors.truckType) setErrors((prev) => ({ ...prev, truckType: undefined }));
                }}
                aria-invalid={Boolean(errors.truckType)}
                className="w-full border-0 bg-transparent text-sm text-[#1f1f1f] outline-none"
              />
            </div>
            {errors.truckType ? <p className="mt-1 text-[10px] text-[#c12828]">{errors.truckType}</p> : null}
          </label>
        </div>

        <div className="flex flex-col justify-between rounded-[1.2rem] border border-[#ecd7c7] bg-[#fffaf4] p-4 shadow-soft">
          <div>
            <p className="text-[10px] uppercase tracking-[0.24em] text-[#7a3e1d]">
              Instant quote
            </p>
            <h3 className="mt-2 text-[22px] font-bold text-[#1f1f1f]">
              GET PRICE
            </h3>
            <p className="mt-2 text-sm leading-6 text-[#6b6b6b]">
              Submit your route details and our team will respond with a premium tailored estimate within minutes.
            </p>
          </div>

          <button
            onClick={handleWhatsApp}
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-[1rem] bg-gradient-to-r from-[#7A3E1D] via-[#9e532c] to-[#4B240F] px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white shadow-[0_12px_30px_rgba(122,62,29,0.22)] transition hover:scale-[1.01] sm:w-auto"
          >
            Get Price
            <ArrowRightCircle className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}