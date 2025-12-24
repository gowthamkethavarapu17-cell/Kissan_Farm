import { Carrot, Apple, Wheat, Leaf, Cherry, Milk, Egg, Fish } from "lucide-react";
import CategoryCard from "@/components/CategoryCard";

const categories = [
  { 
    name: "Vegetables", 
    icon: Carrot, 
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600",
    count: 156 
  },
  { 
    name: "Fruits", 
    icon: Apple, 
    image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=600",
    count: 89 
  },
  { 
    name: "Grains", 
    icon: Wheat, 
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600",
    count: 42 
  },
  { 
    name: "Organic Produce", 
    icon: Leaf, 
    image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=600",
    count: 78 
  },
  { 
    name: "Berries", 
    icon: Cherry, 
    image: "https://images.unsplash.com/photo-1563746098251-d35aef196e83?w=600",
    count: 34 
  },
  { 
    name: "Dairy", 
    icon: Milk, 
    image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=600",
    count: 28 
  },
  { 
    name: "Eggs & Poultry", 
    icon: Egg, 
    image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=600",
    count: 19 
  },
  { 
    name: "Fresh Fish", 
    icon: Fish, 
    image: "https://images.unsplash.com/photo-1510130387422-82bed34b37e9?w=600",
    count: 24 
  },
];

const Categories = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-4">
            Shop by Category
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Browse our wide selection of fresh produce from local farms. From vegetables to dairy, we've got everything you need.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={category.name}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CategoryCard {...category} />
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-16 p-8 rounded-2xl bg-leaf-light text-center">
          <h2 className="text-2xl font-bold font-display text-foreground mb-3">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-muted-foreground mb-6">
            Our farmers are constantly adding new products. Check back often or contact us for special requests.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
