import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { services, Service } from '@/lib/services';

interface Params {
  slug: string;
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default function ServicePage({ params }: { params: Params }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) {
    return notFound();
  }

  return (
    <main className="pt-24">
      {/* hero image */}
      <div className="relative h-64 sm:h-96 w-full">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <h1 className="absolute inset-0 flex items-center justify-center text-3xl sm:text-5xl font-bold text-white">
          {service.title}
        </h1>
      </div>

      <section className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <p className="text-lg text-gray-700 mb-8">{service.description}</p>
        <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {service.features.map((feat) => (
            <li key={feat}>{feat}</li>
          ))}
        </ul>
        <div className="mt-12">
          <Link href="/#services" className="text-amber-600 hover:underline">
            &larr; Back to services
          </Link>
        </div>
      </section>
    </main>
  );
}
