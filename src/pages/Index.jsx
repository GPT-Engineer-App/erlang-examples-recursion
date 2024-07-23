import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Erlang Examples</h1>
        <p className="text-xl mb-6">Discover the power of Erlang through practical examples</p>
        <Button asChild>
          <Link to="/examples">Explore Examples</Link>
        </Button>
      </div>
    </div>
  );
};

export default Index;