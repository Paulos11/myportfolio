"use client";

import React, { useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import {
  Mail,
  Linkedin,
  Github,
  Send,
  Loader2,
  CheckCircle,
  LucideIcon,
} from "lucide-react";
import emailjs from "emailjs-com";

interface ContactCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
}

interface FormInputProps {
  label: string;
  type?: string;
  name: string;
  rows?: number;
  required?: boolean;
}

const ContactCard = ({ icon: Icon, label, value, href }: ContactCardProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 group"
  >
    <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 group-hover:scale-110 transition-all duration-300">
      <Icon className="w-4 h-4" />
    </div>
    <div className="flex flex-col">
      <span className="text-sm text-gray-500 dark:text-gray-400">{label}</span>
      <span className="text-sm font-medium text-gray-900 dark:text-white">
        {value}
      </span>
    </div>
  </a>
);

const FormInput = ({
  label,
  type = "text",
  name,
  rows,
  required = true,
}: FormInputProps) => (
  <div className="space-y-1">
    <label className="block text-sm text-gray-700 dark:text-gray-300">
      {label}
    </label>
    {rows ? (
      <textarea
        name={name}
        rows={rows}
        required={required}
        className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:border-gray-400 dark:focus:border-gray-500 focus:ring-1 focus:ring-gray-400 dark:focus:ring-gray-500 transition-colors duration-300"
      />
    ) : (
      <input
        type={type}
        name={name}
        required={required}
        className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:border-gray-400 dark:focus:border-gray-500 focus:ring-1 focus:ring-gray-400 dark:focus:ring-gray-500 transition-colors duration-300"
      />
    )}
  </div>
);

export const ContactSection = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    emailjs
      .sendForm(
        "service_ebu3n3n",
        "template_sg2v4gk",
        form.current!,
        "g0FaxBbhS0oqgItbN"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.status, result.text);
          setIsSent(true);
          setIsLoading(false);
          e.currentTarget.reset();
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
    <section className="py-8 inset-0 bg-[#fafafa] dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-left text-gray-900 dark:text-white">
              Get in Touch
              <div className="font-normal text-sm text-gray-500 mt-2">
                Let&apos;s work together on your project or explore any
                technology
              </div>
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              I&apos;m excited to bring your ideas to life! Feel free to reach
              out for collaborations or just a friendly hello.
            </p>

            <div className="space-y-3">
              {contactMethods.map((method, index) => (
                <ContactCard key={index} {...method} />
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <Card className="md:col-span-2 p-6 bg-white dark:bg-gray-800">
            {isSent ? (
              <div className="text-center py-8">
                <div className="inline-block p-3 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 mb-4">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl text-gray-900 dark:text-white mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Thank you for reaching out. I&apos;ll get back to you as soon
                  as possible.
                </p>
              </div>
            ) : (
              <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <FormInput label="Your Name" name="name" />
                  <FormInput label="Your Email" type="email" name="email" />
                </div>

                <FormInput label="Your Message" name="message" rows={4} />

                {error && (
                  <div className="text-red-600 dark:text-red-400 text-sm">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 px-4 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium hover:bg-gray-800 dark:hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
