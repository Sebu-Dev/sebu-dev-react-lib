import { motion } from "framer-motion";
interface ContactProps {
  translations?: {
    GET_IN_TOUCH_HEADLINE?: string;
    CONTACT?: {
      address?: string;
      phoneNo?: string;
      emailPrivate?: string;
      emailWorking?: string;
    };
  };
}

export const Contact = ({ translations }: ContactProps) => {
  return (
    <div id="contact" className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        {translations?.GET_IN_TOUCH_HEADLINE || "Get in Touch"}
      </motion.h2>
      <div className="text-center tracking-tighter flex flex-col">
        {translations?.CONTACT?.address && (
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="my-2"
          >
            {translations.CONTACT.address}
          </motion.p>
        )}
        {translations?.CONTACT?.phoneNo && (
          <motion.a
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.2, color: "#9A5BE1" }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="my-2"
            href={`tel:${translations.CONTACT.phoneNo}`}
          >
            {translations.CONTACT.phoneNo}
          </motion.a>
        )}
        {translations?.CONTACT?.emailPrivate && (
          <motion.a
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.2, color: "#9A5BE1" }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="my-2"
            href={`mailto:${translations.CONTACT.emailPrivate}`}
          >
            {translations.CONTACT.emailPrivate}
          </motion.a>
        )}
        {translations?.CONTACT?.emailWorking && (
          <motion.a
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.2, color: "#9A5BE1" }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="my-2"
            href={`mailto:${translations.CONTACT.emailWorking}`}
          >
            {translations.CONTACT.emailWorking}
          </motion.a>
        )}
      </div>
    </div>
  );
};
