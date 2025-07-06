import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-100 py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#001f3f] mb-10">Contact Information</h2>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          {/* Contact Info */}
          <div className="space-y-6 text-gray-700">
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-2xl text-[#001f3f]" />
              <div>
                <h4 className="font-semibold">Office Address</h4>
                <p>Tower -3 , North town estate , Stephenson road , Perambur , Chennai - 600012</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-2xl text-[#001f3f]" />
              <div>
                <h4 className="font-semibold">Phone Number</h4>
                <p>+91 8056034718</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaEnvelope className="text-2xl text-[#001f3f]" />
              <div>
                <h4 className="font-semibold">Email Address</h4>
                <p>rsdesigningstudio@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaClock className="text-2xl text-[#001f3f]" />
              <div>
                <h4 className="font-semibold">Working Hours</h4>
                <p>Mon - Sat: 9:00 AM – 6:00 PM</p>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="w-full h-64 md:h-full">
            <iframe
              className="w-full h-full rounded-md shadow"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609989534!2d72.74109975335404!3d19.08219783881319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63c776df6c7%3A0x6a94c3e3cc396a47!2sChennai%2C%20Tamilnadu!5e0!3m2!1sen!2sin!4v1617943723891!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="FurniCraft Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}