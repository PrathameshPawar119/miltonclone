import React from 'react'
import { motion } from 'framer-motion'
import Tag from './Tag'
import {Link, Button} from "@nextui-org/react";


export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 140 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="h-screen flex flex-col space-y-0 items-center justify-center overflow-hidden text-center z-0"
    >
      <div className="text-center w-[400px] md:w-[600px] lg:w-[800px] z-20">
        <div className="flex flex-col items-center">
          <Tag tagline="An another way to manage time" color="#f1f2f4" />
        </div>
        <div className="text-4xl sm:text-7xl font-extrabold pb-6">
          Your new favorite calendar 🗓️ app
        </div>
        <h2
          className="text-sm sm:text-xl mt-3"
          style={{ color: "rgb(46, 46, 46)" }}
        >
          Here you should explain how cool your app is.
        </h2>
        <h2
          className="text-sm sm:text-xl mb-2"
          style={{ color: "rgb(46, 46, 46)" }}
        >
          Remember, focus on the benefits for your users, not on the features.
        </h2>
        <div>
          <Button
            as={Link}
            className="mt-4"
            style={{
              backgroundColor: "#2E2E2E",
              color: "#FFFFFF",
              fontSize: "18px",
            }}
            href="#"
            variant="flat"
          >
            <b>Get Started, It's free</b>
          </Button>
          <p className="text-sm text-stone-600">
            Free 14 days trials,no credit card needed
          </p>
        </div>
      </div>
    </motion.div>
  );
}
