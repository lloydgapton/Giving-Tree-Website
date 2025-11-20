const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-6">
          <div>
            <h3 className="text-xl font-bold mb-3">Digital Giving Tree</h3>
            <p className="text-green-100">
              Connecting donors with verified grassroots charities through 
              transparency and storytelling.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-green-100 hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/faq" className="text-green-100 hover:text-white transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3">Contact</h3>
            <p className="text-green-100 mb-2">
              Email: info@digitalgivingtree.org
            </p>
            <p className="text-green-100">
              Phone: (555) 123-4567
            </p>
          </div>
        </div>
        <div className="border-t border-green-700 pt-6 text-center text-green-100">
          <p>&copy; 2024 Digital Giving Tree. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
