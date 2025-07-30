"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";

// Contact information
const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+20 100 000 0000",
    link: "tel:+201000000000",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "ahmedesamnew2002@gmail.com",
    link: "mailto:ahmedesamnew2002@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Cairo, Egypt",
    link: "#",
  },
];

// Social links
const socials = [
  {
    icon: <FaLinkedin />,
    name: "LinkedIn",
    url: "https://linkedin.com/in/ahmed-esam",
  },
  {
    icon: <FaGithub />,
    name: "GitHub",
    url: "https://github.com/AhmedEsam2002",
  },
  {
    icon: <FaTwitter />,
    name: "Twitter",
    url: "https://twitter.com/ahmed_esam",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.4, duration: 0.4, ease: "easeIn" }}
      className="h-screen flex flex-col justify-center  overflow-hidden"
    >
      <div className="container mx-auto px-10 xl:px-0 h-full flex items-center">
        <div className="flex flex-col xl:flex-row gap-[30px] w-full">
          {/* Contact Form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <motion.form
              initial={{ opacity: 0, x: -100, rotateY: -15 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ delay: 2.8, duration: 0.8, ease: "easeOut" }}
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 p-8 bg-[#27272c] rounded-xl shadow-2xl hover:shadow-accent/20 transition-all duration-500"
            >
              <motion.h3
                initial={{ opacity: 0, y: -30, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 3.0, duration: 0.6, ease: "easeOut" }}
                className="text-3xl xl:text-4xl text-accent font-bold mb-2"
              >
                Let's work together
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.2, duration: 0.5, ease: "easeOut" }}
                className="text-white/60 leading-relaxed mb-4 text-sm xl:text-base"
              >
                Have a project in mind? Let's discuss how we can bring your
                ideas to life. I'm always excited to work on new challenges and
                create amazing digital experiences.
              </motion.p>

              {/* Input Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, x: -50, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileFocus={{ scale: 1.02, y: -2 }}
                  transition={{ delay: 3.4, duration: 0.4 }}
                >
                  <Input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="h-[44px] bg-primary border-white/10 focus:border-accent focus:ring-2 focus:ring-accent/20 text-white placeholder:text-white/60 transition-all duration-300 hover:border-accent/50"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileFocus={{ scale: 1.02, y: -2 }}
                  transition={{ delay: 3.5, duration: 0.4 }}
                >
                  <Input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="h-[44px] bg-primary border-white/10 focus:border-accent focus:ring-2 focus:ring-accent/20 text-white placeholder:text-white/60 transition-all duration-300 hover:border-accent/50"
                    required
                  />
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, x: -50, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileFocus={{ scale: 1.02, y: -2 }}
                  transition={{ delay: 3.6, duration: 0.4 }}
                >
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="h-[44px] bg-primary border-white/10 focus:border-accent focus:ring-2 focus:ring-accent/20 text-white placeholder:text-white/60 transition-all duration-300 hover:border-accent/50"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileFocus={{ scale: 1.02, y: -2 }}
                  transition={{ delay: 3.7, duration: 0.4 }}
                >
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="h-[44px] bg-primary border-white/10 focus:border-accent focus:ring-2 focus:ring-accent/20 text-white placeholder:text-white/60 transition-all duration-300 hover:border-accent/50"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileFocus={{ scale: 1.02, y: -2 }}
                transition={{ delay: 3.8, duration: 0.4 }}
              >
                <Input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="h-[44px] bg-primary border-white/10 focus:border-accent focus:ring-2 focus:ring-accent/20 text-white placeholder:text-white/60 transition-all duration-300 hover:border-accent/50"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileFocus={{ scale: 1.02, y: -2 }}
                transition={{ delay: 3.9, duration: 0.4 }}
              >
                <Textarea
                  name="message"
                  placeholder="Type your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  className="min-h-[100px] bg-primary border-white/10 focus:border-accent focus:ring-2 focus:ring-accent/20 text-white placeholder:text-white/60 resize-none transition-all duration-300 hover:border-accent/50"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ delay: 4.0, duration: 0.4 }}
              >
                <Button
                  type="submit"
                  size="lg"
                  className="max-w-40 bg-accent hover:bg-accent-hover text-primary font-semibold hover:shadow-lg hover:shadow-accent/30 transform transition-all duration-300"
                >
                  Send Message
                </Button>
              </motion.div>
            </motion.form>
          </div>

          {/* Contact Info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-6 xl:mb-0">
            <motion.div
              initial={{ opacity: 0, x: 100, rotateY: 15 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ delay: 3.2, duration: 0.8, ease: "easeOut" }}
              className="flex flex-col gap-6"
            >
              {/* Contact Information */}
              <div className="flex flex-col gap-4">
                {info.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50, scale: 0.8 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    whileHover={{
                      scale: 1.05,
                      x: -5,
                      transition: { duration: 0.2 },
                    }}
                    transition={{
                      delay: 3.4 + index * 0.15,
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                    className="flex items-center gap-4 cursor-pointer"
                  >
                    <motion.div
                      className="w-[50px] h-[50px] xl:w-[60px] xl:h-[60px] bg-[#27272c] text-accent rounded-md flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-500 shadow-lg"
                      whileHover={{
                        rotateY: 360,
                        boxShadow: "0 10px 25px rgba(0, 255, 153, 0.3)",
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="text-[22px] xl:text-[26px]">
                        {item.icon}
                      </div>
                    </motion.div>
                    <div className="flex-1">
                      <motion.p
                        className="text-white/60 text-sm"
                        whileHover={{ color: "rgba(255, 255, 255, 0.8)" }}
                      >
                        {item.title}
                      </motion.p>
                      <motion.h3
                        className="text-lg xl:text-xl text-white hover:text-accent transition-colors duration-300"
                        whileHover={{ x: 5 }}
                      >
                        {item.link !== "#" ? (
                          <a href={item.link} className="hover:underline">
                            {item.description}
                          </a>
                        ) : (
                          item.description
                        )}
                      </motion.h3>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.8, duration: 0.5 }}
                className="flex flex-col gap-3"
              >
                <motion.h4
                  className="text-white text-lg font-semibold"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 4.0, duration: 0.4 }}
                >
                  Follow Me
                </motion.h4>
                <div className="flex gap-3">
                  {socials.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{
                        opacity: 0,
                        scale: 0.3,
                        rotate: -180,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        rotate: 0,
                      }}
                      whileHover={{
                        scale: 1.2,
                        rotate: 360,
                        boxShadow: "0 5px 15px rgba(0, 255, 153, 0.4)",
                      }}
                      whileTap={{ scale: 0.9 }}
                      transition={{
                        delay: 4.2 + index * 0.1,
                        duration: 0.6,
                        type: "spring",
                        stiffness: 200,
                      }}
                      className="w-11 h-11 border border-accent rounded-full flex items-center justify-center text-accent hover:bg-accent hover:text-primary transition-all duration-500"
                    >
                      <div className="text-lg">{social.icon}</div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Floating Elements Animation */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-accent/10 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-accent/5 rounded-full blur-lg"
                animate={{
                  scale: [1, 1.5, 1],
                  rotate: [360, 180, 0],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
