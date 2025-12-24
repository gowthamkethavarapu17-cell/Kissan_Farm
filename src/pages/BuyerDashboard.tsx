import { useState } from "react";
import { ShoppingCart, Search, Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import ProductCard from "@/components/ProductCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const allProducts = [
  { id: 1, name: "Fresh Tomatoes", price: 3.99, unit: "kg", image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400", farmer: "Green Valley Farm", category: "Vegetables" },
  { id: 2, name: "Organic Carrots", price: 2.49, unit: "kg", image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400", farmer: "Sunrise Orchards", category: "Vegetables" },
  { id: 3, name: "Fresh Spinach", price: 4.99, unit: "bunch", image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400", farmer: "Mountain Greens", category: "Vegetables" },
  { id: 4, name: "Red Apples", price: 5.49, unit: "kg", image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400", farmer: "Hilltop Farm", category: "Fruits" },
  { id: 5, name: "Sweet Corn", price: 1.99, unit: "piece", image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=400", farmer: "Golden Fields", category: "Vegetables" },
  { id: 6, name: "Fresh Potatoes", price: 2.99, unit: "kg", image: "https://images.unsplash.com/photo-1518977676601-b53f82ber47d?w=400", farmer: "Valley Fresh", category: "Vegetables" },
  { id: 7, name: "Organic Bananas", price: 3.29, unit: "bunch", image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400", farmer: "Tropical Farms", category: "Fruits" },
  { id: 8, name: "Fresh Strawberries", price: 6.99, unit: "box", image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400", farmer: "Berry Fields", category: "Fruits" },
];

const categories = ["All", "Vegetables", "Fruits", "Grains", "Organic"];

const BuyerDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cartItems, setCartItems] = useState<number[]>([]);

  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.farmer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold font-display text-foreground">Welcome, Shopper!</h1>
            <p className="text-muted-foreground">Browse fresh produce from local farmers</p>
          </div>
          <Button variant="outline" className="self-start md:self-auto relative">
            <ShoppingCart className="h-5 w-5" />
            Cart
            {cartItems.length > 0 && (
              <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                {cartItems.length}
              </Badge>
            )}
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Filter className="h-5 w-5" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-9"
                  />
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>

                {/* Categories */}
                <div>
                  <h4 className="font-medium mb-3 text-sm">Categories</h4>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <Badge
                        key={category}
                        variant={selectedCategory === category ? "default" : "outline"}
                        className="cursor-pointer transition-all hover:bg-primary hover:text-primary-foreground"
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>

          {/* Products Grid */}
          <main className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <p className="text-muted-foreground">
                Showing <span className="font-medium text-foreground">{filteredProducts.length}</span> products
              </p>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <ProductCard {...product} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">No products found matching your criteria.</p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All");
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default BuyerDashboard;
