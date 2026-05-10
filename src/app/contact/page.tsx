"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Form, Input, Button, Avatar, message } from "antd";
import { MdEmail, MdLocationOn, MdSend } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [form] = Form.useForm<ContactFormData>();
  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = async (values: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate API delay
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "8efc15f5-1cbf-4440-a713-cdf5896f6f38", // <-- PASTE YOUR KEY HERE
          name: values.name,
          email: values.email,
          subject: values.subject,
          message: values.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        messageApi.success(
          `Thanks ${values.name}, your message has been sent successfully!`,
        );
        form.resetFields();
      } else {
        messageApi.error("Something went wrong. Please try again later.");
      }
    } catch (error) {
      messageApi.error("Failed to send message. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }

    await new Promise((resolve) => setTimeout(resolve, 1500));
    message.success(
      `Thanks ${values.name}, your message has been sent successfully!`,
    );
    form.resetFields();
    setIsSubmitting(false);
  };

  return (
    <>
      {contextHolder}
      <section className="min-h-screen pt-16 pb-14 px-4 md:px-8 flex flex-col items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-6xl glass-panel rounded-3xl p-8 md:p-12"
        >
          {/* Top Headings */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-blue-600 dark:text-blue-400 font-semibold tracking-widest uppercase text-sm"
            >
              Get in touch
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2 mb-4"
            >
              Contact Me
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto"
            >
              Have a project in mind or just want to say hi? — I&#39;d love to
              hear from you.
              {/* <br className="hidden md:block" /> */}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            {/* LEFT SIDE: Profile & Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 flex flex-col gap-8"
            >
              {/* Profile Section */}
              <div className="flex flex-col items-center hover:shadow-emerald-900/50 hover:dark:shadow-emerald-300/30 hover:shadow-7xl transition-colors gap-6 glass-panel glass-panel-dark p-6 rounded-3xl">
                <div className="flex items-center gap-4 ">
                  <Avatar
                    size={80}
                    className="bg-blue-600 text-2xl font-bold flex items-center justify-center"
                  >
                    AW
                  </Avatar>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Asif Wani
                    </h2>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      Frontend Developer and Engineer
                    </p>
                  </div>
                </div>
                <p>
                  Based in <b>Islamabad, Pakistan</b>, I specialize in building
                  fast, accessible web experiences with React and Next.js.
                </p>
              </div>

              {/* Contact Cards in a Row (Wraps on small screens) */}
              <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
                {/* Email Card */}
                <div className="flex-1 glass-panel glass-panel-dark p-5 rounded-2xl flex items-center gap-4 group hover:border-blue-500/50 hover:border-2 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 text-xl group-hover:scale-110 transition-transform">
                    <MdEmail />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                      Email
                    </h4>
                    <a
                      href="mailto:khawaja.asif.wani@gmail.com"
                      className="hover:text-blue-500 transition-colors"
                    >
                      khawaja.asif.wani@gmail.com
                    </a>
                  </div>
                </div>

                {/* WhatsApp Card */}
                <div className="flex-1 hover:border-2 glass-panel glass-panel-dark p-5 rounded-2xl flex items-center gap-4 group hover:border-green-500/50 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 text-xl group-hover:scale-110 transition-transform">
                    <FaWhatsapp />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                      WhatsApp
                    </h4>
                    <a
                      href="https://wa.me/923365370284"
                      target="_blank"
                      rel="noreferrer"
                      className="  items-center justify-center hover:text-blue-500 hover:-translate-y-1 transition-all"
                    >
                      +92 336 5370284
                    </a>
                  </div>
                </div>

                {/* Location Card */}
                <div className="flex-1 hover:border-2 glass-panel glass-panel-dark p-5 rounded-2xl flex items-center gap-4 group hover:border-purple-500/50 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 text-xl group-hover:scale-110 transition-transform">
                    <MdLocationOn />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                      Location
                    </h4>
                    <p className="text-gray-900 dark:text-white font-semibold">
                      Islamabad, Pakistan
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT SIDE: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 glass-panel glass-panel-dark p-8 md:p-10 rounded-3xl"
            >
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Send a Message
              </h3>

              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                requiredMark={false}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Form.Item
                    name="name"
                    label={
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        Full Name
                      </span>
                    }
                    rules={[
                      { required: true, message: "Please enter your name" },
                    ]}
                    className="mb-0"
                  >
                    <Input
                      size="large"
                      placeholder="John Doe"
                      className="bg-white/50 dark:bg-black/20 border-gray-200 dark:border-white/10 hover:border-blue-500 text-gray-900 dark:text-white"
                    />
                  </Form.Item>

                  <Form.Item
                    name="email"
                    label={
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        Email
                      </span>
                    }
                    rules={[
                      { required: true, message: "Please enter your email" },
                    ]}
                    className="mb-0"
                  >
                    <Input
                      size="large"
                      placeholder="john.doe@example.com"
                      className="bg-white/50 dark:bg-black/20 border-gray-200 dark:border-white/10 hover:border-blue-500 text-gray-900 dark:text-white"
                    />
                  </Form.Item>
                </div>

                <Form.Item
                  name="subject"
                  label={
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      Subject
                    </span>
                  }
                  rules={[
                    { required: true, message: "Please enter a subject" },
                  ]}
                >
                  <Input
                    size="large"
                    placeholder="Project Inquiry"
                    className="bg-white/50 dark:bg-black/20 border-gray-200 dark:border-white/10 hover:border-blue-500 text-gray-900 dark:text-white"
                  />
                </Form.Item>

                <Form.Item
                  name="message"
                  label={
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      Message
                    </span>
                  }
                  rules={[
                    { required: true, message: "Please enter your message" },
                  ]}
                >
                  <Input.TextArea
                    rows={6}
                    placeholder="Tell me about your project..."
                    className="bg-white/50 dark:bg-black/20 border-gray-200 dark:border-white/10 hover:border-blue-500 text-gray-900 dark:text-white resize-none"
                  />
                </Form.Item>

                <Form.Item className="mb-0 pt-4">
                  <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    icon={<MdSend />}
                    loading={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-500 border-none h-14 text-lg font-semibold rounded-xl shadow-lg shadow-blue-500/30"
                  >
                    Submit Message
                  </Button>
                </Form.Item>
              </Form>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
