import { createFileRoute, notFound, Link } from '@tanstack/react-router';
import { ArrowLeft } from 'lucide-react';
import { articles, pageHead } from '@/lib/portfolio-data';
import { PageIntro } from '@/components/portfolio/shared';
import { Button } from '@/components/ui/button';
export const Route=createFileRoute('/blog/$slug')({loader:({params})=>{const a=articles.find(a=>a.slug===params.slug);if(!a)throw notFound();return a;},head:({loaderData})=>pageHead(loaderData?.title||'Article indisponible',loaderData?.excerpt||'Notes techniques de Fourat Nefoussi.'),component:Article});
function Article(){const a=Route.useLoaderData();return <main><PageIntro eyebrow={a.category} title={a.title} description={a.excerpt}/><article className="article-content wrap"><div className="mb-7 flex flex-wrap items-center justify-between gap-4"><Button asChild variant="ghost"><Link to="/blog"><ArrowLeft/> Retour aux articles</Link></Button><span className="text-xs text-muted-foreground">{a.date} · {a.time} de lecture</span></div><p className="text-xs">Article pédagogique de démonstration · à personnaliser par Fourat Nefoussi.</p>{a.sections.map((s,i)=><section key={s.title}><h2>{s.title}</h2><p>{s.body}</p>{i===1&&<pre><code>{a.code}</code></pre>}</section>)}<p className="mt-8 border-t border-border pt-5">{a.note}</p></article></main>}
