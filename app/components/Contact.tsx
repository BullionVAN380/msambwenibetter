"use client";

import { useState, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaHandsHelping, FaDonate, FaHandshake } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

// Initialize EmailJS with type check
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

if (!EMAILJS_PUBLIC_KEY) {
  console.error('EmailJS public key is not defined in environment variables');
} else {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: ''
  });

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    // Check if all required environment variables are present
    if (!EMAILJS_PUBLIC_KEY || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
      setSubmitStatus({
        type: 'error',
        message: 'Email service is not properly configured. Please contact the administrator.'
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const formData = new FormData(formRef.current);
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.get('from_name'),
          from_email: formData.get('from_email'),
          message: formData.get('message')
        },
        EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus({
        type: 'success',
        message: 'Message sent successfully! We will get back to you soon.'
      });
      formRef.current.reset();
      setTimeout(() => setIsOpen(false), 3000);
    } catch (err) {
      console.error('Failed to send email:', err);
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const involvementOptions = [
    {
      icon: <FaHandsHelping className="w-8 h-8" />,
      title: "Volunteer",
      description: "Share your skills and time in our health camps, environmental clean-ups, or tutoring programs.",
      action: () => setIsOpen(true)
    },
    {
      icon: <FaDonate className="w-8 h-8" />,
      title: "Donate",
      description: "Contribute funds or resources to support our ongoing projects and expand our reach.",
      action: () => setIsOpen(true)
    },
    {
      icon: <FaHandshake className="w-8 h-8" />,
      title: "Partner",
      description: "Collaborate with us as a corporate or institutional partner to amplify our impact.",
      action: () => setIsOpen(true)
    }
  ];

  return (
    <>
      <section id="contact" className="relative py-24 bg-gray-50">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6TTI0IDQ4YzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnptMC0xMmMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6IiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48L3N2Zz4=')] bg-repeat"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get <span className="text-green-700">Involved</span>
            </h2>
            <div className="w-24 h-1 bg-green-700 mx-auto mb-8"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="grid md:grid-cols-1 gap-8">
                {involvementOptions.map((option, index) => (
                  <button
                    key={index}
                    onClick={option.action}
                    className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-left w-full"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="bg-green-100 p-3 rounded-lg text-green-700 group-hover:bg-green-700 group-hover:text-white transition-colors duration-300">
                        {option.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2">{option.title}</h4>
                        <p className="text-gray-600">{option.description}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-8 text-center">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 group">
                  <div className="bg-green-100 p-3 rounded-lg text-green-700 group-hover:bg-green-700 group-hover:text-white transition-colors duration-300">
                    <FaMapMarkerAlt className="w-6 h-6" />
                  </div>
                  <span className="text-gray-600">Msambweni Town, Kwale County, Kenya</span>
                </div>
                
                <div className="flex items-center space-x-4 group">
                  <div className="bg-green-100 p-3 rounded-lg text-green-700 group-hover:bg-green-700 group-hover:text-white transition-colors duration-300">
                    <FaEnvelope className="w-6 h-6" />
                  </div>
                  <a href="mailto:msambwenibetterheedu@gmail.com" className="text-gray-600 hover:text-green-700 transition-colors">
                    msambwenibetterheedu@gmail.com
                  </a>
                </div>
                
                <div className="flex items-center space-x-4 group">
                  <div className="bg-green-100 p-3 rounded-lg text-green-700 group-hover:bg-green-700 group-hover:text-white transition-colors duration-300">
                    <FaPhone className="w-6 h-6" />
                  </div>
                  <span className="text-gray-600">0707584412</span>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="text-xl font-semibold mb-6 text-center">Follow Us</h4>
                <div className="flex justify-center space-x-6">
                  <a href="#" className="bg-green-100 p-3 rounded-lg text-green-700 hover:bg-green-700 hover:text-white transition-colors duration-300">
                    <FaFacebook className="w-6 h-6" />
                  </a>
                  <a href="#" className="bg-green-100 p-3 rounded-lg text-green-700 hover:bg-green-700 hover:text-white transition-colors duration-300">
                    <FaTwitter className="w-6 h-6" />
                  </a>
                  <a href="#" className="bg-green-100 p-3 rounded-lg text-green-700 hover:bg-green-700 hover:text-white transition-colors duration-300">
                    <FaInstagram className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setIsOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-8 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-semibold text-gray-900 mb-6 text-center"
                  >
                    Get in Touch
                  </Dialog.Title>
                  
                  {submitStatus.type && (
                    <div
                      className={`mb-6 p-4 rounded-md ${
                        submitStatus.type === 'success'
                          ? 'bg-green-50 text-green-800'
                          : 'bg-red-50 text-red-800'
                      }`}
                    >
                      {submitStatus.message}
                    </div>
                  )}

                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="from_name" className="block text-sm font-medium text-gray-700 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="from_name"
                        name="from_name"
                        required
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 px-4 py-3"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="from_email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="from_email"
                        name="from_email"
                        required
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 px-4 py-3"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 px-4 py-3"
                        placeholder="How can we help you?"
                      />
                    </div>
                    <div className="mt-6 flex justify-end space-x-3">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-base font-medium text-green-900 hover:bg-green-200"
                        onClick={() => setIsOpen(false)}
                        disabled={isSubmitting}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex justify-center items-center rounded-md border border-transparent bg-green-600 px-6 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          'Send Message'
                        )}
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Contact;
