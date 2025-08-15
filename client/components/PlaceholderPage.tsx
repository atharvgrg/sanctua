import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Construction, ArrowLeft, MessageCircle } from "lucide-react";

interface PlaceholderPageProps {
  title: string;
  description?: string;
}

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="w-16 h-16 bg-sanctua-turquoise/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Construction className="w-8 h-8 text-sanctua-turquoise" />
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-4">{title}</h1>

        <p className="text-gray-600 mb-8">
          {description ||
            `This ${title.toLowerCase()} page is currently being developed. Please check back soon for more content and features.`}
        </p>

        <div className="space-y-4">
          <Link to="/">
            <Button className="bg-sanctua-turquoise hover:bg-sanctua-primary text-white w-full">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Homepage
            </Button>
          </Link>

          <p className="text-sm text-gray-500">
            Have specific needs for this page?{" "}
            <button className="text-sanctua-turquoise hover:underline inline-flex items-center">
              <MessageCircle className="w-4 h-4 mr-1" />
              Let us know
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
