import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"

export const ContactInfo = () =>{
    return(<div className="order-2 sm:order-none">
          <h3 className="text-lg font-semibold mb-4 text-pink-900">Contact Us</h3>
          <p className="text-sm text-pink-700">📍 123 Pet Street, Cali colombia</p>
          <p className="text-sm text-pink-700">📧 support@petsupply.com</p>
          <p className="text-sm text-pink-700 mb-4">📞 +1 (123) 456-7890</p>
          <div className="flex gap-4 text-2xl text-pink-600">
            <a href="#" aria-label="Facebook" className="hover:text-pink-400 transition"><FaFacebook /></a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-400 transition"><FaInstagram /></a>
            <a href="#" aria-label="Twitter" className="hover:text-pink-400 transition"><FaTwitter /></a>
          </div>
        </div>)
}