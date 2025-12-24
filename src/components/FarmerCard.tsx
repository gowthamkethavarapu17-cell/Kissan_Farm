import { Link } from "react-router-dom";
import { MapPin, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface FarmerCardProps {
  id: number;
  name: string;
  location: string;
  avatar: string;
  crops: string[];
  rating?: number;
}

const FarmerCard = ({ id, name, location, avatar, crops, rating = 4.8 }: FarmerCardProps) => {
  return (
    <Card variant="farmer" className="bg-card">
      <div className="relative">
        <div className="h-24 bg-gradient-to-r from-primary to-leaf" />
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
          <img
            src={avatar}
            alt={name}
            className="w-24 h-24 rounded-full border-4 border-card object-cover shadow-card"
          />
        </div>
      </div>
      <CardContent className="pt-14 text-center">
        <h3 className="font-bold text-xl font-display text-foreground">{name}</h3>
        <div className="flex items-center justify-center gap-1 text-muted-foreground text-sm mt-1">
          <MapPin className="h-4 w-4" />
          {location}
        </div>
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {crops.slice(0, 3).map((crop) => (
            <Badge key={crop} variant="secondary" className="text-xs">
              {crop}
            </Badge>
          ))}
          {crops.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{crops.length - 3} more
            </Badge>
          )}
        </div>
        <div className="mt-6">
          <Button variant="outline" className="w-full" asChild>
            <Link to={`/buyer-dashboard`}>
              <Eye className="h-4 w-4" />
              View Products
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default FarmerCard;
