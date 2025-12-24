import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Leaf, User, Tractor, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const Login = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const isSignup = searchParams.get("mode") === "signup";
  const defaultRole = searchParams.get("role") as "buyer" | "farmer" | null;

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: defaultRole || ("buyer" as "buyer" | "farmer"),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate authentication
    toast.success(isSignup ? "Account created successfully!" : "Welcome back!", {
      description: `Redirecting to your ${formData.role} dashboard...`,
    });

    setTimeout(() => {
      navigate(formData.role === "farmer" ? "/farmer-dashboard" : "/buyer-dashboard");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 bg-gradient-to-br from-leaf-light via-background to-wheat-light">
      <Card className="w-full max-w-md shadow-card animate-scale-in">
        <CardHeader className="text-center">
          <Link to="/" className="flex items-center justify-center gap-2 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Leaf className="h-7 w-7" />
            </div>
          </Link>
          <CardTitle className="text-2xl font-display">
            {isSignup ? "Join FarmDirect" : "Welcome Back"}
          </CardTitle>
          <CardDescription>
            {isSignup
              ? "Create your account to start buying or selling"
              : "Sign in to your account"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Role Selector */}
            <div className="space-y-2">
              <Label>I am a</Label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, role: "buyer" })}
                  className={`flex items-center justify-center gap-2 p-4 rounded-xl border-2 transition-all ${
                    formData.role === "buyer"
                      ? "border-primary bg-leaf-light text-primary"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <User className="h-5 w-5" />
                  <span className="font-medium">Buyer</span>
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, role: "farmer" })}
                  className={`flex items-center justify-center gap-2 p-4 rounded-xl border-2 transition-all ${
                    formData.role === "farmer"
                      ? "border-primary bg-leaf-light text-primary"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <Tractor className="h-5 w-5" />
                  <span className="font-medium">Farmer</span>
                </button>
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="h-12"
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="h-12 pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <Button type="submit" variant="cta" size="lg" className="w-full">
              {isSignup ? "Create Account" : "Sign In"}
            </Button>
          </form>

          {/* Toggle */}
          <div className="mt-6 text-center text-sm text-muted-foreground">
            {isSignup ? (
              <>
                Already have an account?{" "}
                <Link to="/login" className="text-primary font-medium hover:underline">
                  Sign in
                </Link>
              </>
            ) : (
              <>
                Don't have an account?{" "}
                <Link to="/login?mode=signup" className="text-primary font-medium hover:underline">
                  Sign up
                </Link>
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
