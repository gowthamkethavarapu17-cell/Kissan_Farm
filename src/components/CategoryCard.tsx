import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  name: string;
  icon: LucideIcon;
  image: string;
  count: number;
}

const CategoryCard = ({ name, icon: Icon, image, count }: CategoryCardProps) => {
  return (
    <Link to="/categories">
      <Card variant="category" className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-end p-6 text-primary-foreground">
          <div className="p-3 rounded-full bg-primary-foreground/20 backdrop-blur-sm mb-3 transition-transform group-hover:scale-110">
            <Icon className="h-8 w-8" />
          </div>
          <h3 className="font-bold text-xl font-display">{name}</h3>
          <p className="text-primary-foreground/80 text-sm">{count} products</p>
        </div>
      </Card>
    </Link>
  );
};

export default CategoryCard;
