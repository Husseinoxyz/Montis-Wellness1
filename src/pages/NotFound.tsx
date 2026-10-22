import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Seo from '../components/Seo';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-24">
      <Seo
        title="Page Not Found"
        description="The page you are looking for could not be found."
        path="/404"
        noindex
      />
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#007A59]">404</p>
        <h1 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">Page not found</h1>
        <p className="mt-4 text-gray-600">The page you are looking for may have moved.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link to="/" className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium text-white" style={{ backgroundColor: '#007A59' }}>
            <ArrowLeft className="h-4 w-4" /> Back to home
          </Link>
          <Link to="/blog" className="inline-flex items-center rounded-full border-2 border-[#007A59] px-6 py-3 font-medium text-[#007A59]">
            Read our blog
          </Link>
        </div>
      </div>
    </div>
  );
}
