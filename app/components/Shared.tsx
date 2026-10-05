'use client';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowUpRight, BookOpen, Check, Leaf, Sun, Sprout, Users } from 'lucide-react';
import { Locale, PageKey, copy, href, pillars, programs, disclaimer } from '../content';

export function Intro({ eyebrow, title, description, locale }: { eyebrow: string; title: string; description: string; locale: Locale }) {
  return <section className="page-intro"><div className="breadcrumb"><Link href={href(locale, 'home')}>{copy(locale, 'Inicio', 'Home')}</Link><span>/</span><span>{eyebrow}</span></div><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{description}</p><Sprout className="intro-sprout" strokeWidth={.6}/></section>;
}
export function Action({ locale, page = 'inquiry', children, orange = false, query = '' }: { locale: Locale; page?: PageKey; children?: React.ReactNode; orange?: boolean; query?: string }) {
  return <Link className={`button ${orange ? 'button-orange' : ''}`} href={`${href(locale,page)}${query}`}>{children ?? copy(locale, 'Comience su camino', 'Begin your journey')}<ArrowUpRight size={17}/></Link>;
}
export function Disclaimer({ locale }: { locale: Locale }) {
  return <div className="educational-notice"><BookOpen size={19}/><div><strong>{copy(locale, 'Educación para una vida integral', 'Education for whole-person living')}</strong><p>{disclaimer[locale]}</p></div></div>;
}
export function Closing({ locale }: { locale: Locale }) {
  return <section className="closing"><span className="eyebrow">{copy(locale, 'UN NUEVO CAPÍTULO EMPIEZA CON UN PASO', 'A NEW CHAPTER STARTS WITH ONE STEP')}</span><h2>{copy(locale, 'Haga espacio para', 'Make room for')}<br/><em>{copy(locale, 'una vida más plena.', 'a fuller way of living.')}</em></h2><p>{copy(locale, 'Venga como es. Descubra lo que puede cultivar.', 'Come as you are. Discover what you can grow.')}</p><Action locale={locale} orange/><Leaf className="closing-leaf leaf-one" strokeWidth={.5}/><Sprout className="closing-leaf leaf-two" strokeWidth={.5}/></section>;
}
export function ProgramCards({ locale }: { locale: Locale }) {
  const i = locale === 'es' ? 0 : 1;
  return <><div className="program-grid">{programs.map((p,n)=><article className={`program-card ${n===2?'featured':''}`} key={p.days}>{n===2&&<span className="flagship"><Sprout size={13}/>{copy(locale,'PROGRAMA INSIGNIA','FLAGSHIP PROGRAM')}</span>}<span className="micro">{p.label[i]}</span><div className="duration">{p.days}<span>{copy(locale,'días','days')}<br/><small>{copy(locale,'de inmersión residencial','of residential immersion')}</small></span></div><h3>{p.name[i]}</h3><p>{p.text[i]}</p><div className="tuition">${p.price.toLocaleString('en-US')} <small>USD / {copy(locale,'persona','person')}</small></div><ul>{[copy(locale,'Alojamiento en habitación doble','Double-occupancy accommodation'),copy(locale,'Comidas 100% a base de plantas','100% plant-based meals'),copy(locale,'Talleres, coaching y materiales','Workshops, coaching & materials')].map(item=><li key={item}><Check size={15}/>{item}</li>)}</ul><Link className="button program-button" href={`${href(locale,'inquiry')}?program=${p.days}`}>{copy(locale,'Consultar este programa','Enquire about this program')}<ArrowUpRight size={16}/></Link></article>)}</div><p className="program-note"><Users size={16}/>{copy(locale,'Grupos de hasta 14 huéspedes · $60 USD por día · Todas las estadías son residenciales','Up to 14 guests per cohort · $60 USD per day · All stays are residential')}</p></>;
}
export function Sphere({ locale, detailed = false }: { locale: Locale; detailed?: boolean }) {
  const [active,setActive] = useState(0);
  const i = locale === 'es' ? 0 : 1;
  const icons = [BookOpen, Leaf, Sun];
  return <div className={`sphere-layout ${detailed?'sphere-detailed':''}`}><div className="sphere-visual" aria-label={copy(locale,'Tres pilares conectados alrededor de su bienestar personal','Three connected pillars around your personal wellbeing')}><div className="sphere-ring"/><div className="sphere-ring inner"/><div className="sphere-center"><Sprout size={32} strokeWidth={1.2}/><span>{copy(locale,'Su esfera','Your personal')}<br/><em>{copy(locale,'de bienestar','wellness sphere')}</em></span><small>3 × 3</small></div>{pillars.map((p,n)=>{const Icon=icons[n];return <button key={p.name[0]} className={`sphere-node node-${n} ${active===n?'selected':''}`} aria-pressed={active===n} onClick={()=>setActive(n)}><Icon size={23} strokeWidth={1.4}/><span>{p.name[i]}</span></button>;})}</div><div className="sphere-detail"><span className="eyebrow">0{active+1} / {pillars[active].subtitle[i]}</span><h3>{pillars[active].name[i]}</h3><p>{pillars[active].description[i]}</p><div className="law-list">{pillars[active].laws.map((law,n)=><div key={law.name[0]}><span>0{n+1}</span><div><h4>{law.name[i]}</h4>{detailed&&<p>{law.text[i]}</p>}</div></div>)}</div>{!detailed&&<Link className="text-link" href={href(locale,'approach')}>{copy(locale,'Explore las nueve leyes','Explore all nine principles')}<ArrowUpRight size={17}/></Link>}</div></div>;
}
