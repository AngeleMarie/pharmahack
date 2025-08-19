import Image from "next/image";
import {
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-[#313131]/80 my-12">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Logo & Company Info */}
        <div className="">
          <div className="flex items-center gap-2 mb-4">
            <Image src="/logo.svg" alt="PharmaHack Logo" width={30} height={30} />
            <span className="font-bold text-xl text-[#202224]"><span className="text-[#4880FF]">Pharma
              </span>Hack</span>
          </div>
          <p className="text-sm">
            PharmaHack Ltd - Est 2025 <br />
            Kigali, Rwanda
          </p>
        </div>

        {/* About Us */}
        <div>
          <h3 className="font-semibold mb-3">About Us</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Search</a></li>
            <li><a href="#">Privacy Statement</a></li>
            <li><a href="#">Join Our Affiliate</a></li>
            <li><a href="#">Tortium Blog</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Reach Out</a></li>
            <li><a href="#">Sitemap</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-semibold mb-3">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms And Conditions</a></li>
            <li><a href="#">Cookies</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-3">Contact Us</h3>
          <p className="text-sm mb-2">+250 798 978 831</p>
          <p className="text-sm mb-4">pharmahack@org.rw</p>
       <div className="flex gap-3">
  <a href="#" className="p-2 rounded-lg bg-[#2563EB] text-white">
    <FaInstagram size={20} />
  </a>
  <a href="#" className="p-2 rounded-lg bg-[#2563EB] text-white">
    <FaLinkedin size={20} />
  </a>
  <a href="#" className="p-2 rounded-lg bg-[#2563EB] text-white">
    <FaFacebook size={20} />
  </a>
  <a href="#" className="p-2 rounded-lg bg-[#2563EB] text-white">
    <FaTwitter size={20} />
  </a>
</div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t py-4 text-center text-sm flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-6">
        <p>
          © Copyright 2025 <span className="font-semibold text-blue-600">PharmaHack</span>. All rights reserved.
        </p>
        <div className="flex gap-6 mt-2 md:mt-0">
          <a href="#">Contact Us</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
