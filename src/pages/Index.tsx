import { Link } from "react-router-dom";
import { ArrowRight, Truck, Shield, Heart, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import heroImage from "@/assets/hero-farm.jpg";

const featuredProducts = [
  { id: 1, name: "Fresh Tomatoes", price: 3.99, unit: "kg", image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400", farmer: "Green Valley Farm" },
  { id: 2, name: "Organic Carrots", price: 2.49, unit: "kg", image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400", farmer: "Sunrise Orchards" },
  { id: 3, name: "Fresh Spinach", price: 4.99, unit: "bunch", image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400", farmer: "Mountain Greens" },
  { id: 4, name: "Red Apples", price: 5.49, unit: "kg", image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400", farmer: "Hilltop Farm" },
  { id: 5, name: "Sweet Corn", price: 1.99, unit: "piece", image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=400", farmer: "Golden Fields" },
  { id: 6, name: "Fresh Potatoes", price: 2.99, unit: "kg", image: "https://images.unsplash.com/photo-1518977676601-b53f82ber47d?w=400", farmer: "Valley Fresh" },
];

const benefits = [
  { icon: Truck, title: "Farm Fresh Delivery", description: "Direct from farm to your doorstep within 24 hours" },
  { icon: Shield, title: "Quality Guaranteed", description: "100% organic and pesticide-free produce" },
  { icon: Heart, title: "Support Local Farmers", description: "Fair prices that help farmers thrive" },
  { icon: Leaf, title: "Eco-Friendly", description: "Sustainable farming practices for a better planet" },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Fresh farm produce"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-primary-foreground">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight mb-6 animate-slide-up">
              Fresh From Farm, Direct to Your Home
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Skip middlemen. Fair prices. Happy farmers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Button variant="accent" size="xl" asChild>
                <Link to="/buyer-dashboard">
                  Start Shopping
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/farmer-dashboard">
                  Sell as Farmer
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative element */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="flex items-start gap-4 p-6 rounded-2xl bg-card shadow-soft hover:shadow-card transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 p-3 rounded-xl bg-leaf-light">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
              Fresh From Our Farms
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hand-picked selection of the freshest produce from local farmers. Quality guaranteed, delivered with care.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/categories">
                View All Products
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-primary-foreground" />
          <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-primary-foreground" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-primary-foreground" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              Ready to Grow Your Farm Business?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Join thousands of farmers already selling directly to customers. No middlemen, no hassle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="xl" asChild>
                <Link to="/login?mode=signup&role=farmer">
                  Start Selling Today
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/farmers">
                  Meet Our Farmers
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
