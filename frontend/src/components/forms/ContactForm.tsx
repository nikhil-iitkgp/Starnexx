import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CheckCircle, Mail, Send } from "lucide-react";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const apiUrl = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const form = formRef.current;
    if (!form) return;

    const formData = {
      firstName: form.first_name.value,
      lastName: form.last_name.value,
      email: form.email.value,
      phone: form.phone.value,
      socialMedia: form.social_media.value,
      website: form.website.value,
      message: form.message.value,
    };

    try {
      const res = await fetch(`${apiUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setSuccess(true);
        form.reset();
      } else {
        alert("Error submitting form");
      }
    } catch (err) {
      console.error(err);
      alert("Error submitting form");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      ref={formRef}
      onSubmit={handleSubmit}
      className="w-full max-w-xl mx-auto bg-white/60 backdrop-blur-xl rounded-3xl shadow-2xl border border-amber-200/60 p-10 md:p-14 flex flex-col gap-8 relative overflow-hidden animate-fade-in-up"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      {/* Decorative Accent */}
      <div className="absolute -left-10 -top-10 w-40 h-40 bg-gradient-to-br from-amber-200/60 via-amber-100/40 to-white rounded-full blur-2xl z-0" />
      <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-gradient-to-tr from-amber-100/60 via-white/40 to-amber-200/40 rounded-full blur-2xl z-0" />
      <div className="relative z-10 flex items-center gap-4 mb-2">
        <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-xl">
          <Mail className="w-7 h-7" />
        </span>
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Let's Connect</h2>
          <p className="text-gray-600 text-base">Fill out the form below and we'll get back to you within 24 hours.</p>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
        <Input
          name="first_name"
          placeholder="First Name"
          required
          className="w-full border-2 border-amber-100 focus:border-amber-400 bg-white/80 text-gray-900 placeholder:text-amber-400/70 rounded-xl px-5 py-4 focus:ring-2 focus:ring-amber-200 transition-all text-lg shadow-sm"
        />
        <Input
          name="last_name"
          placeholder="Last Name"
          required
          className="w-full border-2 border-amber-100 focus:border-amber-400 bg-white/80 text-gray-900 placeholder:text-amber-400/70 rounded-xl px-5 py-4 focus:ring-2 focus:ring-amber-200 transition-all text-lg shadow-sm"
        />
      </div>
      <Input
        type="email"
        name="email"
        placeholder="Email"
        required
        className="w-full border-2 border-amber-100 focus:border-amber-400 bg-white/80 text-gray-900 placeholder:text-amber-400/70 rounded-xl px-5 py-4 focus:ring-2 focus:ring-amber-200 transition-all text-lg shadow-sm"
      />
      <Input
        name="phone"
        placeholder="Phone Number (optional)"
        className="w-full border-2 border-amber-100 focus:border-amber-400 bg-white/80 text-gray-900 placeholder:text-amber-400/70 rounded-xl px-5 py-4 focus:ring-2 focus:ring-amber-200 transition-all text-lg shadow-sm"
      />
      <Input
        name="social_media"
        placeholder="Instagram, YouTube, LinkedIn, etc. (optional)"
        className="w-full border-2 border-amber-100 focus:border-amber-400 bg-white/80 text-gray-900 placeholder:text-amber-400/70 rounded-xl px-5 py-4 focus:ring-2 focus:ring-amber-200 transition-all text-lg shadow-sm"
      />
      <Input
        name="website"
        placeholder="Website (optional)"
        className="w-full border-2 border-amber-100 focus:border-amber-400 bg-white/80 text-gray-900 placeholder:text-amber-400/70 rounded-xl px-5 py-4 focus:ring-2 focus:ring-amber-200 transition-all text-lg shadow-sm"
      />
      <Textarea
        name="message"
        placeholder="Your question or comment"
        required
        rows={5}
        className="w-full border-2 border-amber-100 focus:border-amber-400 bg-white/80 text-gray-900 placeholder:text-amber-400/70 rounded-xl px-5 py-4 focus:ring-2 focus:ring-amber-200 transition-all text-lg shadow-sm"
      />
      <div className="w-full flex justify-center mt-2 relative z-10">
        <Button
          type="submit"
          className="w-full md:w-auto px-12 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold rounded-full shadow-xl hover:from-amber-600 hover:to-amber-700 transition-all text-xl flex items-center gap-3 group scale-100 hover:scale-105 active:scale-95 duration-200 border-none"
          disabled={loading}
        >
          {loading ? (
            <>
              Sending...
              <Send className="w-5 h-5 animate-spin" />
            </>
          ) : (
            <>
              Send Message
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </Button>
      </div>
      {success && (
        <motion.div
          className="flex flex-col items-center justify-center gap-2 mt-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <CheckCircle className="w-10 h-10 text-amber-500 animate-bounce" />
          <p className="text-amber-600 font-semibold text-lg text-center">Message sent successfully! We'll get back to you soon.</p>
        </motion.div>
      )}
    </motion.form>
  );
}
