import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Send } from "lucide-react";

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
      className="w-full max-w-xl mx-auto bg-gradient-to-br from-white via-amber-50/50 to-amber-100/30 rounded-2xl shadow-xl p-8 md:p-10 border border-amber-200/50 flex flex-col gap-6 backdrop-blur-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center gap-3 mb-2">
        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg">
          <Mail className="w-6 h-6" />
        </span>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Let's Connect</h2>
          <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          name="first_name"
          placeholder="First Name"
          required
          className="w-full border-2 border-amber-100 focus:border-amber-400 bg-white/80 text-gray-900 placeholder:text-amber-400/70 rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-200 transition"
        />
        <Input
          name="last_name"
          placeholder="Last Name"
          required
          className="w-full border-2 border-amber-100 focus:border-amber-400 bg-white/80 text-gray-900 placeholder:text-amber-400/70 rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-200 transition"
        />
      </div>

      <Input
        type="email"
        name="email"
        placeholder="Email"
        required
        className="w-full border-2 border-amber-100 focus:border-amber-400 bg-white/80 text-gray-900 placeholder:text-amber-400/70 rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-200 transition"
      />

      <Input
        name="phone"
        placeholder="Phone Number"
        required
        className="w-full border-2 border-amber-100 focus:border-amber-400 bg-white/80 text-gray-900 placeholder:text-amber-400/70 rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-200 transition"
      />

      <Input
        name="social_media"
        placeholder="Instagram, YouTube, LinkedIn, etc."
        className="w-full border-2 border-amber-100 focus:border-amber-400 bg-white/80 text-gray-900 placeholder:text-amber-400/70 rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-200 transition"
      />

      <Input
        name="website"
        placeholder="Website (optional)"
        className="w-full border-2 border-amber-100 focus:border-amber-400 bg-white/80 text-gray-900 placeholder:text-amber-400/70 rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-200 transition"
      />

      <Textarea
        name="message"
        placeholder="Your question or comment"
        required
        rows={5}
        className="w-full border-2 border-amber-100 focus:border-amber-400 bg-white/80 text-gray-900 placeholder:text-amber-400/70 rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-200 transition"
      />

      <div className="w-full flex justify-center mt-2">
        <Button
          type="submit"
          className="w-full md:w-auto px-8 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-full shadow-lg hover:from-amber-600 hover:to-amber-700 transition-all py-3 text-lg flex items-center gap-2 group"
          disabled={loading}
        >
          {loading ? "Sending..." : (
            <>
              Send Message
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </Button>
      </div>

      {success && (
        <motion.p
          className="text-amber-600 font-medium text-center mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Message sent successfully! We'll get back to you soon.
        </motion.p>
      )}
    </motion.form>
  );
}
