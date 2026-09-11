import React, { useEffect, useState } from 'react';
import {
  ArrowRight, CalendarDays, CheckCircle2, ChevronDown, Clock3, Dog, HeartPulse, MapPin,
  MessageCircle, Phone, Scissors, ShieldCheck, Sparkles, Star, Stethoscope, Syringe,
  TestTube2, Wifi, CarFront, Coffee, X, ZoomIn
} from 'lucide-react';
import Header from './components/Header';
import Booking from './components/Booking';
import { Reveal, SectionHeader, SmartImage } from './components/UI';
import { contact, faqs, reviews, services, structure, team } from './data/content';

const iconMap = { Stethoscope, Syringe, TestTube2, HeartPulse, Sparkles, ShieldCheck, Dog, Scissors };

export default function App() {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org', '@type': 'VeterinaryCare', name: 'VittaVet Clínica Veterinária',
      description: 'Clínica veterinária fictícia criada como projeto demonstrativo de portfólio.',
      telephone: contact.phoneDisplay,
      address: { '@type': 'PostalAddress', streetAddress: 'Endereço fictício para demonstração', addressLocality: 'São Paulo', addressRegion: 'SP', addressCountry: 'BR' },
      openingHours: ['Mo-Fr 08:00-20:00', 'Sa 08:00-16:00'], priceRange: '$$'
    };
    const node = document.createElement('script');
    node.type = 'application/ld+json';
    node.textContent = JSON.stringify(schema);
    document.head.appendChild(node);
    return () => node.remove();
  }, []);

  return <>
    <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <Header />
    <main id="conteudo">
      <Hero />
      <TrustStrip />
      <Services />
      <Emergency />
      <About />
      <Team />
      <Structure />
      <Booking />
      <Reviews />
      <Faq />
      <Location />
      <FinalCta />
    </main>
    <Footer />
    <a className="floating-whatsapp" href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent('Olá! Vim pelo site da VittaVet e gostaria de informações sobre atendimento.')}`} target="_blank" rel="noreferrer" aria-label="Falar com a VittaVet pelo WhatsApp"><MessageCircle size={24}/><span>WhatsApp</span></a>
  </>;
}

function scrollTo(id) { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }

function Hero() {
  return <section className="hero" id="inicio">
    <div className="hero-orb hero-orb--1"/><div className="hero-orb hero-orb--2"/>
    <div className="container hero-grid">
      <Reveal className="hero-copy-wrap">
        <div className="hero-copy">
          <span className="eyebrow"><span className="status-dot"/> Clínica veterinária · projeto demonstrativo</span>
          <h1>Cuidado veterinário para quem faz parte da <em>família.</em></h1>
          <p>Consultas, prevenção e acompanhamento em um espaço pensado para acolher tutores, cães e gatos com atenção, organização e clareza.</p>
          <div className="hero-actions">
            <button className="btn btn-primary" onClick={() => scrollTo('agendamento')}><CalendarDays size={18}/> Agendar consulta</button>
            <button className="btn btn-secondary" onClick={() => scrollTo('servicos')}>Conhecer serviços <ArrowRight size={17}/></button>
          </div>
          <div className="hero-meta">
            <div><CheckCircle2 size={18}/><span><strong>Horário marcado</strong><small>Menos espera, mais conforto</small></span></div>
            <div><Star size={18} fill="currentColor"/><span><strong>4,9 de 5</strong><small>Avaliação fictícia</small></span></div>
          </div>
        </div>
      </Reveal>
      <Reveal className="hero-visual-wrap" delay={100}>
        <div className="hero-visual">
          <SmartImage eager src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=1400&q=86" alt="Profissional veterinário atendendo um cão em ambiente clínico" />
          <div className="floating-card floating-card--top"><span className="mini-icon"><HeartPulse size={18}/></span><div><strong>Prevenção primeiro</strong><small>Acompanhamento em cada fase</small></div></div>
          <div className="floating-card floating-card--bottom"><div className="avatar-stack"><span>MV</span><span>RN</span><span>LM</span></div><div><strong>Equipe próxima</strong><small>Perfis fictícios para demonstração</small></div></div>
        </div>
      </Reveal>
    </div>
  </section>;
}

function TrustStrip() {
  return <div className="trust-strip"><div className="container trust-grid">
    <div><Clock3/><span><strong>Atendimento organizado</strong><small>Agendamento simples e confirmação</small></span></div>
    <div><ShieldCheck/><span><strong>Foco preventivo</strong><small>Rotina de cuidado ao longo do ano</small></span></div>
    <div><Stethoscope/><span><strong>Estrutura completa</strong><small>Consulta, exames e procedimentos</small></span></div>
    <div><MessageCircle/><span><strong>Comunicação fácil</strong><small>Contato direto pelo WhatsApp</small></span></div>
  </div></div>;
}

function Services() {
  return <section className="section" id="servicos"><div className="container">
    <div className="section-topline"><SectionHeader eyebrow="Serviços" title="Cuidado completo, sem complicar." text="Uma apresentação clara dos principais serviços que uma clínica veterinária moderna pode oferecer — sempre com avaliação profissional quando necessária."/><button className="text-link" onClick={() => scrollTo('agendamento')}>Agendar atendimento <ArrowRight size={16}/></button></div>
    <div className="services-grid">{services.map((s, i) => { const Icon = iconMap[s.icon]; return <Reveal key={s.title} delay={i*45}><article className="service-card"><div className="service-icon"><Icon size={24}/></div><h3>{s.title}</h3><p>{s.text}</p><button onClick={() => scrollTo('agendamento')}>Saiba mais <ArrowRight size={15}/></button></article></Reveal>; })}</div>
  </div></section>;
}

function Emergency() {
  return <section className="emergency-section"><div className="container"><Reveal><div className="emergency-card">
    <div className="emergency-badge">URGÊNCIA</div>
    <div className="emergency-copy"><span className="eyebrow">Precisa de atendimento rápido?</span><h2>Em situações urgentes, procure orientação veterinária profissional.</h2><p>Não use o site para tentar identificar ou diagnosticar uma emergência. Ligue para confirmar disponibilidade e dirija-se à unidade ou a um serviço veterinário de urgência apropriado.</p></div>
    <div className="emergency-actions"><a className="btn btn-light" href={`tel:+${contact.phone}`}><Phone size={18}/> Ligar {contact.phoneDisplay}</a><a className="btn btn-outline-light" href={contact.mapsUrl} target="_blank" rel="noreferrer"><MapPin size={18}/> Ver localização</a><small>Disponibilidade fictícia: seg–sex até 20h · sáb até 16h</small></div>
  </div></Reveal></div></section>;
}

function About() {
  return <section className="section about-section" id="sobre"><div className="container about-grid">
    <Reveal><div className="about-images"><SmartImage className="about-main" src="https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=1100&q=82" alt="Gato em retrato próximo, representando paciente felino"/><div className="about-small-wrap"><SmartImage src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=700&q=82" alt="Cão em retrato, representando paciente canino"/></div></div></Reveal>
    <Reveal delay={90}><div className="about-copy"><SectionHeader eyebrow="Sobre a VittaVet" title="Medicina próxima, estrutura atual e uma rotina mais tranquila." text="A VittaVet nasceu, nesta história fictícia, da vontade de criar uma clínica onde o tutor entende o que está acontecendo e o animal é tratado com respeito ao seu tempo."/><p>O foco está na medicina preventiva, no acompanhamento ao longo da vida e em uma experiência organizada do agendamento ao pós-atendimento. A estrutura foi pensada para separar etapas, reduzir ruído e facilitar o trabalho da equipe.</p><div className="stats"><div><strong>+5</strong><span>anos de atuação*</span></div><div><strong>+3 mil</strong><span>animais atendidos*</span></div><div><strong>4,9</strong><span>avaliação média*</span></div></div><small className="fiction-note">*Números fictícios usados somente para apresentação deste projeto de portfólio.</small></div></Reveal>
  </div></section>;
}

function Team() {
  return <section className="section team-section" id="equipe"><div className="container"><SectionHeader eyebrow="Equipe" title="Profissionais que explicam, acompanham e cuidam." text="Todos os nomes, cargos, fotos de composição e credenciais desta seção são demonstrativos. Em um projeto real, seriam substituídos pelos dados oficiais da clínica." align="center"/><div className="team-grid">{team.map((p,i)=><Reveal key={p.name} delay={i*60}><article className="team-card"><SmartImage src={p.image} alt={`Foto ilustrativa para o perfil de ${p.name}`}/><div className="team-card-copy"><span>{p.specialty}</span><h3>{p.name}</h3><small>{p.role}</small><p>{p.text}</p></div></article></Reveal>)}</div></div></section>;
}

function Structure() {
  const [active, setActive] = useState(null);
  useEffect(() => {
    if (!active) return;
    const onKey = e => e.key === 'Escape' && setActive(null);
    window.addEventListener('keydown', onKey); return () => window.removeEventListener('keydown', onKey);
  }, [active]);
  return <section className="section structure-section" id="estrutura"><div className="container"><div className="section-topline"><SectionHeader eyebrow="Estrutura" title="Um espaço organizado em cada detalhe." text="Galeria demonstrativa para apresentar recepção, consultórios, diagnóstico, cirurgia e recuperação com uma leitura visual mais premium."/><div className="facility-pills"><span><Wifi size={15}/> Wi-Fi</span><span><CarFront size={15}/> 2 vagas</span><span><Coffee size={15}/> Água e café</span></div></div><div className="structure-grid">{structure.map((item,i)=><Reveal key={item.label} className={`structure-item structure-item--${i+1}`} delay={i*50}><button onClick={() => setActive(item)} aria-label={`Ampliar imagem: ${item.label}`}><SmartImage src={item.image} alt={`Imagem demonstrativa de ${item.label.toLowerCase()} da clínica`}/><span>{item.label}</span><i><ZoomIn size={18}/></i></button></Reveal>)}</div></div>
  {active && <div className="lightbox" role="dialog" aria-modal="true" aria-label={`Imagem ampliada: ${active.label}`} onClick={() => setActive(null)}><button className="lightbox-close" onClick={() => setActive(null)} aria-label="Fechar imagem"><X/></button><div onClick={e=>e.stopPropagation()}><SmartImage src={active.image} alt={`Imagem ampliada de ${active.label.toLowerCase()}`}/><span>{active.label}</span></div></div>}
  </section>;
}

function Reviews() {
  return <section className="section reviews-section" id="avaliacoes"><div className="container"><SectionHeader eyebrow="Avaliações" title="Confiança também se constrói na experiência." text="Depoimentos fictícios escritos para demonstrar como avaliações reais poderiam ser apresentadas no site." align="center"/><div className="reviews-grid">{reviews.map((r,i)=><Reveal key={r.name} delay={i*50}><article className="review-card"><div className="stars" aria-label="5 estrelas">{[1,2,3,4,5].map(n=><Star key={n} size={16} fill="currentColor"/>)}</div><blockquote>“{r.text}”</blockquote><div><span className="review-avatar">{r.name[0]}</span><p><strong>{r.name}</strong><small>{r.service}</small></p></div></article></Reveal>)}</div></div></section>;
}

function Faq() {
  const [open, setOpen] = useState(0);
  return <section className="section faq-section" id="faq"><div className="container faq-grid"><div><SectionHeader eyebrow="Perguntas frequentes" title="Informação clara antes mesmo da consulta." text="Respostas objetivas para as dúvidas mais comuns. Em um projeto real, este conteúdo seria revisado com a clínica."/><div className="faq-support"><MessageCircle size={21}/><div><strong>Ainda ficou com dúvida?</strong><span>Use o WhatsApp para falar com a recepção.</span></div></div></div><div className="accordion">{faqs.map(([q,a],i)=><div className={`accordion-item ${open===i?'is-open':''}`} key={q}><button aria-expanded={open===i} onClick={()=>setOpen(open===i?-1:i)}><span>{q}</span><ChevronDown size={20}/></button><div className="accordion-panel"><div><p>{a}</p></div></div></div>)}</div></div></section>;
}

function Location() {
  return <section className="section location-section" id="contato"><div className="container location-card"><div className="location-copy"><SectionHeader eyebrow="Onde estamos" title="Fácil de chegar. Fácil de falar com a gente." text="Endereço e contatos abaixo são fictícios e existem apenas para compor este case de portfólio."/><div className="contact-list"><div><MapPin/><span><small>Endereço</small><strong>{contact.address}</strong></span></div><div><Phone/><span><small>Telefone</small><strong>{contact.phoneDisplay}</strong></span></div><div><MessageCircle/><span><small>WhatsApp</small><strong>{contact.whatsappDisplay}</strong></span></div><div><Clock3/><span><small>Horário</small><strong>{contact.hours}</strong></span></div></div><a className="btn btn-primary" href={contact.mapsUrl} target="_blank" rel="noreferrer"><MapPin size={18}/> Ver mapa demonstrativo</a><small className="fiction-note">Localização ilustrativa: não existe uma unidade VittaVet neste endereço.</small></div><div className="map-wrap"><iframe title="Mapa demonstrativo da localização da VittaVet" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=Sao%20Paulo%20SP&output=embed"/></div></div></section>;
}

function FinalCta() {
  return <section className="final-cta"><div className="container"><Reveal><div><span className="eyebrow">Cuidado que começa com organização</span><h2>Seu pet merece atenção. Você merece clareza.</h2><p>Escolha uma preferência de atendimento e veja como o fluxo de agendamento funciona neste projeto demonstrativo.</p><button className="btn btn-light" onClick={()=>scrollTo('agendamento')}><CalendarDays size={18}/> Agendar atendimento</button></div></Reveal></div></section>;
}

function Footer() {
  return <footer className="footer"><div className="container footer-grid"><div className="footer-brand"><div className="brand brand--footer"><span className="brand-mark">V</span><span className="brand-name">Vitta<span>Vet</span></span></div><p>Clínica veterinária fictícia criada como projeto demonstrativo de portfólio. Nenhum contato, profissional ou atendimento desta página é real.</p><div className="socials"><a href="#inicio" aria-label="Instagram demonstrativo"><Sparkles/></a><a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer" aria-label="WhatsApp demonstrativo"><MessageCircle/></a></div></div><div><h3>Navegação</h3><a href="#servicos">Serviços</a><a href="#equipe">Equipe</a><a href="#estrutura">Estrutura</a><a href="#faq">FAQ</a></div><div><h3>Contato</h3><span>{contact.phoneDisplay}</span><span>{contact.whatsappDisplay}</span><span>{contact.address}</span></div><div><h3>Horários</h3><span>Seg–Sex · 8h–20h</span><span>Sábado · 8h–16h</span><span>Domingo · fechado</span></div></div><div className="container footer-bottom"><span>© 2026 VittaVet — projeto fictício.</span><span>Design responsivo · React + Vite</span></div></footer>;
}
