import { notFound } from 'next/navigation';
import Website from '../../components/Website';
import { routeKeys, resolvePage, pageMetadata, paths } from '../../content';
export const dynamicParams = false;
export function generateStaticParams() { return routeKeys.map(key => ({ slug: paths.es[key] ? paths.es[key].split('/') : [] })); }
export async function generateMetadata({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug = [] } = await params;
  return pageMetadata('es', resolvePage('es', slug.join('/')) ?? 'home');
}
export default async function Page({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug = [] } = await params;
  const page = resolvePage('es', slug.join('/'));
  if (!page) notFound();
  return <Website locale="es" page={page}/>;
}
