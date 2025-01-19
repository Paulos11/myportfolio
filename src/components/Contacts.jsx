import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  Github,
  Send,
  Loader2,
  CheckCircle,
} from "lucide-react";
import emailjs from "emailjs-com";

const ContactCard = ({ icon: Icon, label, value, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300"
  >
    <div className="p-2 rounded-lg bg-white/5 text-gray-400 group-hover:text-white group-hover:scale-110 transition-all duration-300">
      <Icon size={20} />
    </div>
    <div className="flex flex-col">
      <span className="text-sm text-gray-400">{label}</span>
      <span className="text-sm text-white">{value}</span>
    </div>
  </a>
);

const FormInput = ({ label, type = "text", name, rows, required = true }) => (
  <div className="space-y-1">
    <label className="block text-sm text-gray-400">{label}</label>
    {rows ? (
      <textarea
        name={name}
        rows={rows}
        required={required}
        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-white/20 focus:ring-1 focus:ring-white/20 transition-colors duration-300"
      />
    ) : (
      <input
        type={type}
        name={name}
        required={required}
        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-white/20 focus:ring-1 focus:ring-white/20 transition-colors duration-300"
      />
    )}
  </div>
);

const Contacts = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    emailjs
      .sendForm(
        "service_ebu3n3n",
        "template_sg2v4gk",
        form.current,
        "g0FaxBbhS0oqgItbN"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.status, result.text);
          setIsSent(true);
          setIsLoading(false);
          e.target.reset();
        },
        (error) => {
          console.error("FAILED...", error);
          setError("Failed to send message. Please try again later.");
          setIsLoading(false);
        }
      );
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "paul.lakandri50@gmail.com",
      href: "mailto:paul.lakandri50@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Sunil Lakandri",
      href: "https://www.linkedin.com/in/sunil-lakandri-1543a7193/",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@Paulos11",
      href: "https://github.com/Paulos11",
    },
  ];

  return (
    <div id="contact" className="relative bg-black py-16">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-2xl font-mono text-white text-center">
            Get In Touch
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Contact Info */}
            <div className="space-y-4">
              <p className="text-gray-400 text-sm">
                Let's work together on your project, collaborate within
                companies, or explore any technology. I'm excited to bring your
                ideas to life!
              </p>

              <div className="space-y-3">
                {contactMethods.map((method, index) => (
                  <ContactCard key={index} {...method} />
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
              >
                {isSent ? (
                  <div className="text-center py-8">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="inline-block p-3 rounded-full bg-green-500/10 text-green-400 mb-4"
                    >
                      <CheckCircle size={32} />
                    </motion.div>
                    <h3 className="text-xl text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-400">
                      Thank you for reaching out. I'll get back to you as soon
                      as possible.
                    </p>
                  </div>
                ) : (
                  <form
                    ref={form}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <div className="grid md:grid-cols-2 gap-4">
                      <FormInput label="Your Name" name="name" />
                      <FormInput label="Your Email" type="email" name="email" />
                    </div>

                    <FormInput label="Your Message" name="message" rows={4} />

                    {error && (
                      <div className="text-red-400 text-sm">{error}</div>
                    )}

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full py-3 px-4 rounded-lg bg-white text-black font-medium hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300 flex items-center justify-center gap-2"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 size={20} className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contacts;
