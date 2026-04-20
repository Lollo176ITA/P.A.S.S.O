import type { MetadataRoute } from 'next';
import { NAV_SECTIONS } from '@/lib/navigation';
import { SITE_URL } from '@/lib/contact';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const baseEntries: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    ...NAV_SECTIONS.map((section) => ({
      url: `${SITE_URL}${section.href}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];

  return baseEntries;
}
