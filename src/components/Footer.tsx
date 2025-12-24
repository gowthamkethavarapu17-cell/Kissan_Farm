import { Link } from "react-router-dom";
import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-forest text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-foreground text-primary">
                <Leaf className="h-6 w-6" />
              </div>
              <span className="text-xl font-bold font-display">FarmDirect</span>
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Connecting farmers directly with consumers. Fresh produce, fair prices, happy communities.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-wheat transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-wheat transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-wheat transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 font-display">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { to: "/", label: "Home" },
                { to: "/categories", label: "Categories" },
                { to: "/farmers", label: "Our Farmers" },
                { to: "/login", label: "Login" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-primary-foreground/80 hover:text-wheat transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-bold text-lg mb-4 font-display">Categories</h3>
            <ul className="space-y-2">
              {["Vegetables", "Fruits", "Grains", "Organic Produce"].map((category) => (
                <li key={category}>
                  <Link
                    to="/categories"
                    className="text-primary-foreground/80 hover:text-wheat transition-colors text-sm"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4 font-display">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-primary-foreground/80 text-sm">
                <Mail className="h-4 w-4 text-wheat" />
                hello@farmdirect.com
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/80 text-sm">
                <Phone className="h-4 w-4 text-wheat" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/80 text-sm">
                <MapPin className="h-4 w-4 text-wheat mt-0.5" />
                123 Farm Lane, Green Valley, CA 94000
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60 text-sm">
          <p>&copy; {new Date().getFullYear()} FarmDirect. All rights reserved. Made with 🌱 for farmers.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
