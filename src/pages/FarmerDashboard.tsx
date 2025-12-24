import { useState } from "react";
import { Plus, Package, Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";

interface Crop {
  id: number;
  name: string;
  quantity: number;
  unit: string;
  price: number;
  status: "available" | "low" | "sold";
}

const initialCrops: Crop[] = [
  { id: 1, name: "Fresh Tomatoes", quantity: 150, unit: "kg", price: 3.99, status: "available" },
  { id: 2, name: "Organic Carrots", quantity: 80, unit: "kg", price: 2.49, status: "available" },
  { id: 3, name: "Sweet Corn", quantity: 25, unit: "pieces", price: 1.99, status: "low" },
  { id: 4, name: "Fresh Spinach", quantity: 0, unit: "bunch", price: 4.99, status: "sold" },
];

const FarmerDashboard = () => {
  const [crops, setCrops] = useState<Crop[]>(initialCrops);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newCrop, setNewCrop] = useState({ name: "", quantity: "", unit: "kg", price: "" });

  const handleAddCrop = () => {
    if (!newCrop.name || !newCrop.quantity || !newCrop.price) {
      toast.error("Please fill in all fields");
      return;
    }

    const crop: Crop = {
      id: Date.now(),
      name: newCrop.name,
      quantity: Number(newCrop.quantity),
      unit: newCrop.unit,
      price: Number(newCrop.price),
      status: Number(newCrop.quantity) > 50 ? "available" : Number(newCrop.quantity) > 0 ? "low" : "sold",
    };

    setCrops([...crops, crop]);
    setNewCrop({ name: "", quantity: "", unit: "kg", price: "" });
    setIsAddModalOpen(false);
    toast.success("Crop added successfully!", {
      description: `${crop.name} has been listed.`,
    });
  };

  const handleDeleteCrop = (id: number) => {
    setCrops(crops.filter((crop) => crop.id !== id));
    toast.success("Crop removed from listing");
  };

  const getStatusColor = (status: Crop["status"]) => {
    switch (status) {
      case "available":
        return "bg-leaf-light text-primary";
      case "low":
        return "bg-wheat-light text-accent-foreground";
      case "sold":
        return "bg-destructive/10 text-destructive";
    }
  };

  const totalProducts = crops.length;
  const totalQuantity = crops.reduce((sum, crop) => sum + crop.quantity, 0);
  const totalValue = crops.reduce((sum, crop) => sum + crop.quantity * crop.price, 0);

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold font-display text-foreground">Farmer Dashboard</h1>
            <p className="text-muted-foreground">Manage your crops and inventory</p>
          </div>
          <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
            <DialogTrigger asChild>
              <Button variant="cta">
                <Plus className="h-5 w-5" />
                Add New Crop
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Crop</DialogTitle>
                <DialogDescription>
                  List a new crop to sell on FarmDirect
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 pt-4">
                <div className="space-y-2">
                  <Label htmlFor="crop-name">Crop Name</Label>
                  <Input
                    id="crop-name"
                    placeholder="e.g., Fresh Tomatoes"
                    value={newCrop.name}
                    onChange={(e) => setNewCrop({ ...newCrop, name: e.target.value })}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="quantity">Quantity</Label>
                    <Input
                      id="quantity"
                      type="number"
                      placeholder="100"
                      value={newCrop.quantity}
                      onChange={(e) => setNewCrop({ ...newCrop, quantity: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="unit">Unit</Label>
                    <Input
                      id="unit"
                      placeholder="kg"
                      value={newCrop.unit}
                      onChange={(e) => setNewCrop({ ...newCrop, unit: e.target.value })}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="price">Price per Unit ($)</Label>
                  <Input
                    id="price"
                    type="number"
                    step="0.01"
                    placeholder="3.99"
                    value={newCrop.price}
                    onChange={(e) => setNewCrop({ ...newCrop, price: e.target.value })}
                  />
                </div>
                <Button variant="cta" className="w-full" onClick={handleAddCrop}>
                  Add Crop
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Total Products</CardDescription>
              <CardTitle className="text-3xl font-display">{totalProducts}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">
                {crops.filter((c) => c.status === "available").length} available
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Total Quantity</CardDescription>
              <CardTitle className="text-3xl font-display">{totalQuantity}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">units in stock</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Total Value</CardDescription>
              <CardTitle className="text-3xl font-display">${totalValue.toFixed(2)}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">estimated inventory value</p>
            </CardContent>
          </Card>
        </div>

        {/* Inventory Table */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5" />
              Your Inventory
            </CardTitle>
            <CardDescription>Manage and track your listed crops</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Crop Name</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Total Value</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {crops.map((crop) => (
                    <TableRow key={crop.id}>
                      <TableCell className="font-medium">{crop.name}</TableCell>
                      <TableCell>
                        {crop.quantity} {crop.unit}
                      </TableCell>
                      <TableCell>${crop.price.toFixed(2)}/{crop.unit}</TableCell>
                      <TableCell>${(crop.quantity * crop.price).toFixed(2)}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor(crop.status)}`}>
                          {crop.status === "low" ? "Low Stock" : crop.status}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-destructive hover:text-destructive"
                            onClick={() => handleDeleteCrop(crop.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FarmerDashboard;
