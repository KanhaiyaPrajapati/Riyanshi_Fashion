"use client";

import Link from "next/link";
import { FiHome, FiShoppingBag, FiArrowLeft } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] pt-28 pb-16 flex items-center justify-center bg-neutral-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="section-subtitle">Page not found</p>
        <h1 className="section-title text-4xl md:text-5xl font-playfair mb-4">
          This drape doesn&apos;t exist
        </h1>
        <p className="mt-3 text-sm md:text-base text-neutral-600 max-w-xl mx-auto">
          The page you&apos;re looking for may have been moved, renamed, or is no longer available.
          Explore our premium collections or return to the Riyanshi home page.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="btn-primary w-full sm:w-auto">
            <FiHome className="mr-2 h-4 w-4" />
            <span>Back to Home</span>
          </Link>

          <Link
            href="/products"
            className="btn-outline w-full sm:w-auto"
          >
            <FiShoppingBag className="mr-2 h-4 w-4" />
            <span>Browse Collections</span>
          </Link>
        </div>

        <button
          type="button"
          onClick={() => window.history.back()}
          className="mt-8 inline-flex items-center text-xs md:text-sm font-medium text-neutral-500 hover:text-primary transition-colors"
        >
          <FiArrowLeft className="mr-1.5 h-4 w-4" />
          Go back to previous page
        </button>

        <div className="mt-10 text-[11px] uppercase tracking-[0.35em] text-neutral-400">
          Riyanshi Fashion • Premium Saree Boutique
        </div>
      </div>
    </div>
  );
}
