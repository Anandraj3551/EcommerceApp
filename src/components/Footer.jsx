import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-[#172337]">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-8 relative">
          {/* OUR COMPANY */}
          <div>
            <h3 className="font-semibold text-sm mt-6 text-gray-500 mb-2">
              OUR COMPANY
            </h3>
            <ul className="space-y-1 text-sm">
              <li>
                <a
                  href="#"
                  className="text-white relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-white after:transition-all hover:after:w-full"
                >
                  Contact uS
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-white after:transition-all hover:after:w-full"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-white after:transition-all hover:after:w-full"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-white after:transition-all hover:after:w-full"
                >
                  Affiliate Program
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-white after:transition-all hover:after:w-full"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* POLICY Service */}
          <div>
            <h3 className="font-semibold text-sm mt-6 text-gray-500 mb-2">
              POLICY INFO
            </h3>
            <ul className="space-y-1 text-sm">
              <li>
                <a
                  href="#"
                  className="text-white relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-white after:transition-all hover:after:w-full"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-white after:transition-all hover:after:w-full"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-white after:transition-all hover:after:w-full"
                >
                  Shipping Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-white after:transition-all hover:after:w-full"
                >
                  Return & Refund Policy
                </a>
              </li>
            </ul>
          </div>

          {/*QUICK LINKS */}
          <div>
            <h3 className="font-semibold text-sm mt-6 text-gray-500 mb-2">
              QUICK LINKS
            </h3>
            <ul className="space-y-1 text-sm">
              <li>
                <a
                  href="#"
                  className="text-white relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-white after:transition-all hover:after:w-full"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-white after:transition-all hover:after:w-full"
                >
                  Security
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-white after:transition-all hover:after:w-full"
                >
                  Sitemap
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-white after:transition-all hover:after:w-full"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/*SUPPORT */}
          <div>
            <h3 className="font-semibold text-sm mt-6 text-gray-500 mb-2">
              SUPPORT
            </h3>
            <ul className="space-y-1 text-sm">
              <li>
                <a
                  href="#"
                  className="text-white relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-white after:transition-all hover:after:w-full"
                >
                  Account Setting
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-white after:transition-all hover:after:w-full"
                >
                  My Orders
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-white after:transition-all hover:after:w-full"
                >
                  My Wallet
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-white after:transition-all hover:after:w-full"
                >
                  Track Orders
                </a>
              </li>
            </ul>
          </div>

          {/* Vertical Line */}
          <div className="hidden lg:block w-px bg-gray-600 h-full absolute left-1/2 transform -translate-x-1/2" />

          {/* Company Info */}
          <div className="space-y-1 lg:col-span-2 lg:pl-6">
            <h3 className="font-semibold text-gray-500 text-sm mt-6">
              REGISTERED ADDRESS:
            </h3>
            <p className="text-white text-sm leading-relaxed max-w-[300px]">
              XFashion International Pvt. Ltd.,
              <br />
              3398, Bagichi Acchi ji Bara Hindu Rao,
              <br />
              Near Filmistan Cinema, New Delhi 110006,
              <br />
              New Delhi, India
              <br />
              Customer Care: +91-9999999999
            </p>
            {/* Social Media Links */}
            <h3 className="font-semibold text-gray-500 text-sm">FOLLOW US:</h3>
            <div className="flex gap-2">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img src={assets.facebook} alt="Facebook" className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img src={assets.twitter} alt="Twitter" className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img
                  src={assets.instagram}
                  alt="Instagram"
                  className="w-6 h-6"
                />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img src={assets.linkedin} alt="Twitter" className="w-6 h-6" />
              </a>
              <a
                href="https://youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img src={assets.youtube} alt="Twitter" className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Subscribe Section */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-sm text-gray-500 mt-6 mb-2">
              SUBSCRIBE
            </h3>
            <form className="flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-64 px-4 py-2 border border-gray-300 r focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="border border-gray-300 px-6 py-2 bg-gray-400 text-white font-semibold hover:bg-gray-700 transition-colors"
              >
                Submit
              </button>
            </form>
            <p className="text-gray-600 text-white text-sm leading-relaxed">
              Get updates on new products and offers Coupons
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 px-2 bg-[#172337]">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Become a Seller */}
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-400"
              >
                <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
                <path d="M3 9V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3" />
                <path d="M12 11v8" />
                <path d="M8 11v8" />
                <path d="M16 11v8" />
              </svg>
              <span className="text-sm text-gray-400 hover:text-white cursor-pointer">
                Become a Seller
              </span>
            </div>

            {/* Advertising */}
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-400"
              >
                <path d="m3 11 18-5v12L3 14v-3z" />
                <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
              </svg>
              <span className="text-sm text-gray-400 hover:text-white cursor-pointer">
                Advertising
              </span>
            </div>

            {/* Xordox Coins */}
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-400"
              >
                <circle cx="8" cy="8" r="7" />
                <circle cx="16" cy="16" r="7" />
              </svg>
              <span className="text-sm text-gray-400 hover:text-white cursor-pointer">
                Xordox Coins
              </span>
            </div>

            {/* Help Center */}
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-400"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <path d="M12 17h.01" />
              </svg>
              <span className="text-sm text-gray-400 hover:text-white cursor-pointer">
                Help Center
              </span>
            </div>

            {/* Copyright */}
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} XFashion. All rights reserved.
            </div>

            {/* Payment Methods */}
            <div className="flex items-center gap-2">
              <img src={assets.visa} alt="Visa" className="h-5 w-auto" />
              <img src={assets.visa} alt="Mastercard" className="h-5 w-auto" />
              <img
                src={assets.visa}
                alt="American Express"
                className="h-5 w-auto"
              />
              <img src={assets.visa} alt="PayPal" className="h-5 w-auto" />
              <img src={assets.visa} alt="Google Pay" className="h-5 w-auto" />
              <img src={assets.visa} alt="Apple Pay" className="h-5 w-auto" />
              <img src={assets.visa} alt="Shop Pay" className="h-5 w-auto" />
              <img src={assets.visa} alt="Amazon Pay" className="h-5 w-auto" />
              <img src={assets.visa} alt="Stripe" className="h-5 w-auto" />
              <img src={assets.visa} alt="Klarna" className="h-5 w-auto" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
