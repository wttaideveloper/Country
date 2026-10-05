'use client';
import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { Locale, copy, videos, VideoClip } from '../content';

const reducedMotion = () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Background video slider for the hero: crossfades between clips, poster image as fallback. */
export function HeroVideo({ locale, poster, alt }: { locale: Locale; poster: string; alt: string }) {
  const t = (es: string, en: string) => copy(locale, es, en);
  const clips = videos.hero;
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const refs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => { if (reducedMotion()) setPlaying(false); }, []);
  useEffect(() => {
    refs.current.forEach((v, n) => {
      if (!v) return;
      if (n === active && playing) { v.currentTime = 0; v.play().catch(() => {}); } else v.pause();
    });
    if (!playing) return;
    const timer = setTimeout(() => setActive(a => (a + 1) % clips.length), 8000);
    return () => clearTimeout(timer);
  }, [active, playing, clips.length]);

  return <>
    <img className="hero-img" src={poster} alt={alt} fetchPriority="high"/>
    {clips.map((clip, n) => <video key={clip.src} ref={el => { refs.current[n] = el; }} className={`hero-video ${n === active ? 'active' : ''}`} src={clip.src} poster={clip.poster} muted loop playsInline preload={n === 0 ? 'auto' : 'metadata'} aria-hidden="true"/>)}
    <div className="hero-video-controls">
      <button onClick={() => setPlaying(!playing)} aria-label={playing ? t('Pausar video', 'Pause video') : t('Reproducir video', 'Play video')}>{playing ? <Pause size={15}/> : <Play size={15}/>}</button>
      {clips.map((clip, n) => <button key={clip.src} className={`hero-dot ${n === active ? 'active' : ''}`} onClick={() => setActive(n)} aria-label={`${t('Video', 'Video')} ${n + 1}: ${clip.title[locale === 'es' ? 0 : 1]}`} aria-current={n === active}/>)}
    </div>
  </>;
}

/* Featured video carousel with captions, arrows, dots and a thumbnail rail. */
export function VideoSlider({ locale, clips, eyebrow, title, accent, description }: { locale: Locale; clips: VideoClip[]; eyebrow: string; title: string; accent: string; description: string }) {
  const t = (es: string, en: string) => copy(locale, es, en);
  const i = locale === 'es' ? 0 : 1;
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const section = useRef<HTMLElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const rail = useRef<HTMLDivElement>(null);
  const go = (n: number) => { setProgress(0); setActive((n + clips.length) % clips.length); };

  useEffect(() => { if (reducedMotion()) setPlaying(false); }, []);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: .35 });
    if (section.current) io.observe(section.current);
    return () => io.disconnect();
  }, []);
  useEffect(() => {
    const v = video.current;
    if (!v) return;
    if (playing && visible) v.play().catch(() => {}); else v.pause();
  }, [active, playing, visible]);
  useEffect(() => {
    const r = rail.current, item = r?.querySelector<HTMLElement>(`[data-n="${active}"]`);
    if (r && item) r.scrollTo({ left: item.offsetLeft - r.offsetLeft - (r.clientWidth - item.clientWidth) / 2, behavior: 'smooth' });
  }, [active]);

  const clip = clips[active];
  return <section className="video-section" ref={section} aria-roledescription="carousel" aria-label={title}>
    <div className="split-heading"><div><span className="eyebrow">{eyebrow}</span><h2>{title}<br/><em>{accent}</em></h2></div><p>{description}</p></div>
    <div className="video-stage" onKeyDown={e => { if (e.key === 'ArrowRight') go(active + 1); if (e.key === 'ArrowLeft') go(active - 1); }}>
      <video key={clip.src} ref={video} className="video-main" src={clip.src} poster={clip.poster} muted playsInline preload="metadata" onEnded={() => go(active + 1)} onTimeUpdate={e => { const v = e.currentTarget; if (v.duration) setProgress(v.currentTime / v.duration); }} aria-label={clip.title[i]}/>
      <div className="video-caption" aria-live="polite">
        <span className="video-count">{String(active + 1).padStart(2, '0')} / {String(clips.length).padStart(2, '0')}</span>
        <h3>{clip.title[i]}</h3>
        <p>{clip.text[i]}</p>
      </div>
      <div className="video-nav">
        <button onClick={() => go(active - 1)} aria-label={t('Video anterior', 'Previous video')}><ChevronLeft size={22}/></button>
        <button onClick={() => setPlaying(!playing)} aria-label={playing ? t('Pausar', 'Pause') : t('Reproducir', 'Play')}>{playing ? <Pause size={18}/> : <Play size={18}/>}</button>
        <button onClick={() => go(active + 1)} aria-label={t('Siguiente video', 'Next video')}><ChevronRight size={22}/></button>
      </div>
      <div className="video-progress"><span style={{ transform: `scaleX(${progress})` }}/></div>
    </div>
    <div className="video-rail" ref={rail} role="tablist" aria-label={t('Elegir video', 'Choose a video')}>
      {clips.map((c, n) => <button key={c.src} data-n={n} role="tab" aria-selected={n === active} className={n === active ? 'active' : ''} onClick={() => go(n)}>
        <img src={c.poster} alt="" loading="lazy"/>
        <span><small>{String(n + 1).padStart(2, '0')}</small>{c.title[i]}</span>
      </button>)}
    </div>
  </section>;
}
