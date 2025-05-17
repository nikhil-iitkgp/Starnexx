import { motion } from "framer-motion";
import { Check } from "lucide-react";

type Props = {
  title: string;
  description: string;
  video: string;
  icon?: string;
  features?: string[];
}

export default function ServiceCard({ title, description, icon, features = [] }: Props) {
  return (
    <motion.div 
      className="bg-gradient-to-br from-white via-amber-50/60 to-amber-100/40 rounded-3xl overflow-hidden shadow-xl border border-amber-100 hover:shadow-2xl transition-all duration-300 p-1"
      whileHover={{ y: -8, scale: 1.03, boxShadow: '0 8px 32px 0 rgba(245, 158, 11, 0.10)', borderColor: '#F59E0B', transition: { duration: 0.3 } }}
    >
      <div className="p-8 space-y-5 flex flex-col h-full">
        {icon && (
          <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-r from-amber-100 to-amber-50 rounded-full mb-6 text-3xl shadow group-hover:scale-110 transition-transform duration-300 border border-amber-200 mx-auto">
            {icon}
          </div>
        )}
        <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">{title}</h3>
        <p className="text-gray-700 text-base text-center">{description}</p>
        {features && features.length > 0 && (
          <div className="pt-4">
            <ul className="space-y-2">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-sm text-gray-700">
                  <Check className="w-4 h-4 text-amber-500 mr-2 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );
}
