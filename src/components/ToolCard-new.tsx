'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ToolCardProps {
  name: string;
  slug: string;
  category: string;
  tagline: string;
  description: string;
  pricingModel: 'FREE' | 'FREEMIUM' | 'PAID' | 'ENTERPRISE';
  websiteUrl: string;
  index?: number; // For staggered animation
}

const pricingColors = {
  FREE: 'pricing-badge--free',
  FREEMIUM: 'pricing-badge--freemium',
  PAID: 'pricing-badge--paid',
  ENTERPRISE: 'pricing-badge--enterprise',
};

const pricingLabels = {
  FREE: 'Free',
  FREEMIUM: 'Freemium',
  PAID: 'Paid',
  ENTERPRISE: 'Enterprise',
};

export function ToolCard({
  name,
  slug,
  category,
  tagline,
  description,
  pricingModel,
  websiteUrl,
  index = 0,
}: ToolCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        ease: [0.4, 0, 0.2, 1],
      }}
      whileHover={{ y: -4 }}
      className="group relative"
    >
      <Link href={`/directory/${slug}`}>
        <div className="tool-card h-full flex flex-col relative overflow-hidden">
          {/* Category Tag */}
          <div className="flex items-start justify-between mb-4">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              {category}
            </span>
            <Badge
              variant="secondary"
              className={cn(
                'pricing-badge',
                pricingColors[pricingModel]
              )}
            >
              {pricingLabels[pricingModel]}
            </Badge>
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold leading-tight mb-2 group-hover:text-primary transition-colors">
            {name}
          </h3>

          {/* Tagline */}
          <p className="text-sm text-muted-foreground font-medium mb-2">
            {tagline}
          </p>

          {/* Description */}
          <p className="text-sm text-muted-foreground/80 line-clamp-2 flex-grow">
            {description}
          </p>

          {/* Website Link */}
          <div className="mt-4 pt-4 border-t border-border/50 flex items-center justify-between">
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <ExternalLink className="w-3 h-3" />
              {new URL(websiteUrl).hostname.replace(/^www\./, '')}
            </span>
            <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </div>

          {/* Hover Overlay Effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </div>
      </Link>
    </motion.div>
  );
}

// Loading skeleton for ToolCard
export function ToolCardSkeleton({ index = 0 }: { index?: number }) {
  return (
    <div
      className="tool-card h-full flex flex-col"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="shimmer w-20 h-4 rounded" />
        <div className="shimmer w-16 h-5 rounded-full" />
      </div>
      <div className="shimmer w-3/4 h-5 rounded mb-2" />
      <div className="shimmer w-full h-4 rounded mb-1" />
      <div className="shimmer w-2/3 h-4 rounded mb-4" />
      <div className="mt-auto pt-4 border-t border-border/50">
        <div className="shimmer w-1/2 h-3 rounded" />
      </div>
    </div>
  );
}
