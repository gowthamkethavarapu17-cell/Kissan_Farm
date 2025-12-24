import { ShoppingCart, Star } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  unit: string;
  image: string;
  farmer: string;
  rating?: number;
}

const ProductCard = ({ name, price, unit, image, farmer, rating = 4.5 }: ProductCardProps) => {
  const handleAddToCart = () => {
    toast.success(`${name} added to cart!`, {
      description: `From ${farmer}`,
    });
  };

  return (
    <Card variant="product" className="bg-card">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 right-3 bg-card/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1 text-xs font-medium">
          <Star className="h-3 w-3 fill-wheat text-wheat" />
          {rating}
        </div>
      </div>
      <CardContent className="pt-4">
        <p className="text-xs text-muted-foreground mb-1">From {farmer}</p>
        <h3 className="font-bold text-lg text-foreground">{name}</h3>
        <p className="text-primary font-bold text-xl mt-2">
          ${price.toFixed(2)}
          <span className="text-muted-foreground font-normal text-sm">/{unit}</span>
        </p>
      </CardContent>
      <CardFooter>
        <Button variant="default" className="w-full" onClick={handleAddToCart}>
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
