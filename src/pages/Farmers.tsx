import FarmerCard from "@/components/FarmerCard";

const farmers = [
  {
    id: 1,
    name: "John Peterson",
    location: "Green Valley, CA",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
    crops: ["Tomatoes", "Carrots", "Lettuce", "Spinach"],
    rating: 4.9,
  },
  {
    id: 2,
    name: "Maria Garcia",
    location: "Sunrise Hills, TX",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200",
    crops: ["Apples", "Oranges", "Berries"],
    rating: 4.8,
  },
  {
    id: 3,
    name: "Robert Chen",
    location: "Mountain View, WA",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200",
    crops: ["Rice", "Wheat", "Corn", "Soybeans", "Barley"],
    rating: 4.7,
  },
  {
    id: 4,
    name: "Emily Davis",
    location: "Golden Fields, OR",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200",
    crops: ["Organic Vegetables", "Herbs"],
    rating: 5.0,
  },
  {
    id: 5,
    name: "Michael Thompson",
    location: "Valley Fresh, AZ",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
    crops: ["Potatoes", "Onions", "Garlic"],
    rating: 4.6,
  },
  {
    id: 6,
    name: "Sarah Williams",
    location: "Hilltop Farm, CO",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200",
    crops: ["Dairy", "Eggs", "Cheese", "Butter"],
    rating: 4.9,
  },
];

const Farmers = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-4">
            Meet Our Farmers
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Get to know the hardworking farmers who grow your food. Each one is committed to sustainable practices and quality produce.
          </p>
        </div>

        {/* Farmers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {farmers.map((farmer, index) => (
            <div
              key={farmer.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <FarmerCard {...farmer} />
            </div>
          ))}
        </div>

        {/* Join Section */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary to-leaf text-primary-foreground text-center">
          <h2 className="text-2xl font-bold font-display mb-3">
            Are You a Farmer?
          </h2>
          <p className="text-primary-foreground/90 mb-6 max-w-xl mx-auto">
            Join our growing community of farmers and start selling your produce directly to customers today.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Farmers;
