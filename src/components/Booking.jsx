import React, { useMemo, useState } from 'react';
import { Check, LoaderCircle, MessageCircle, CalendarDays } from 'lucide-react';
import { contact, services } from '../data/content';
import { SectionHeader, Reveal } from './UI';

const initial = { owner: '', pet: '', species: '', phone: '', service: '', date: '', note: '' };

function digits(value) { return value.replace(/\D/g, ''); }

export default function Booking() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const minDate = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  }, []);

  const update = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(er => ({ ...er, [name]: '' }));
  };

  const validate = () => {
    const next = {};
    if (form.owner.trim().length < 3) next.owner = 'Informe o nome do responsável.';
    if (form.pet.trim().length < 2) next.pet = 'Informe o nome do pet.';
    if (!form.species) next.species = 'Selecione a espécie.';
    if (digits(form.phone).length < 10) next.phone = 'Informe um telefone válido com DDD.';
    if (!form.service) next.service = 'Selecione o serviço.';
    if (!form.date) next.date = 'Escolha uma data preferencial.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('loading');
    await new Promise(r => setTimeout(r, 950));
    setStatus('success');
  };

  const message = encodeURIComponent(
    `Olá! Gostaria de solicitar um horário na VittaVet.\n\nResponsável: ${form.owner}\nPet: ${form.pet}\nEspécie: ${form.species}\nServiço: ${form.service}\nData preferencial: ${form.date}\nTelefone: ${form.phone}${form.note ? `\nObservação: ${form.note}` : ''}\n\nSe possível, gostaria de confirmar a disponibilidade.`
  );

  const reset = () => { setForm(initial); setErrors({}); setStatus('idle'); };

  return (
    <section className="section booking-section" id="agendamento">
      <div className="container booking-grid">
        <Reveal>
          <div className="booking-copy">
            <SectionHeader eyebrow="Agendamento" title="Organize a consulta em poucos passos." text="Preencha seus dados e escolha uma preferência. Este formulário é uma simulação de portfólio e não envia informações para uma clínica real." />
            <div className="booking-note">
              <CalendarDays size={20}/>
              <div><strong>Atendimento com horário marcado</strong><span>Após o pedido, uma clínica real confirmaria disponibilidade e horário.</span></div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="booking-card">
            {status === 'success' ? (
              <div className="success-state" role="status">
                <div className="success-icon"><Check size={30}/></div>
                <span className="eyebrow">Solicitação preparada</span>
                <h3>Perfeito, {form.owner.split(' ')[0]}.</h3>
                <p>O pedido para <strong>{form.pet}</strong> foi validado. Como este é um site demonstrativo, nada foi enviado automaticamente.</p>
                <div className="summary-box">
                  <div><span>Serviço</span><strong>{form.service}</strong></div>
                  <div><span>Data preferencial</span><strong>{new Date(`${form.date}T12:00:00`).toLocaleDateString('pt-BR')}</strong></div>
                  <div><span>Espécie</span><strong>{form.species}</strong></div>
                </div>
                <a className="btn btn-whatsapp btn-wide" href={`https://wa.me/${contact.whatsapp}?text=${message}`} target="_blank" rel="noreferrer"><MessageCircle size={18}/> Enviar pelo WhatsApp</a>
                <button className="text-button" onClick={reset}>Preencher outro agendamento</button>
              </div>
            ) : (
              <form onSubmit={submit} noValidate>
                <div className="form-grid">
                  <Field label="Nome do responsável" name="owner" value={form.owner} onChange={update} placeholder="Ex.: Ana Ribeiro" error={errors.owner} autoComplete="name" />
                  <Field label="Nome do pet" name="pet" value={form.pet} onChange={update} placeholder="Ex.: Bento" error={errors.pet} />
                  <SelectField label="Espécie" name="species" value={form.species} onChange={update} error={errors.species} options={['Cão', 'Gato']} />
                  <Field label="Telefone / WhatsApp" name="phone" value={form.phone} onChange={update} placeholder="(11) 99999-9999" error={errors.phone} inputMode="tel" autoComplete="tel" />
                  <SelectField label="Serviço desejado" name="service" value={form.service} onChange={update} error={errors.service} options={services.map(s => s.title)} wide />
                  <Field label="Data preferencial" name="date" type="date" min={minDate} value={form.date} onChange={update} error={errors.date} wide />
                  <div className="field field--wide">
                    <label htmlFor="note">Observação <span>(opcional)</span></label>
                    <textarea id="note" name="note" rows="4" value={form.note} onChange={update} placeholder="Conte algo que ajude a organizar o atendimento, sem usar este campo para emergências." />
                  </div>
                </div>
                <p className="form-disclaimer">Em caso de urgência, não aguarde resposta do formulário: entre em contato por telefone e procure atendimento veterinário profissional.</p>
                <button className="btn btn-primary btn-wide" disabled={status === 'loading'} type="submit">
                  {status === 'loading' ? <><LoaderCircle className="spin" size={18}/> Validando dados...</> : 'Solicitar horário'}
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, error, wide, ...props }) {
  return <div className={`field ${wide ? 'field--wide' : ''} ${error ? 'has-error' : ''}`}>
    <label htmlFor={props.name}>{label}</label>
    <input id={props.name} aria-invalid={!!error} aria-describedby={error ? `${props.name}-error` : undefined} {...props}/>
    {error && <span className="field-error" id={`${props.name}-error`}>{error}</span>}
  </div>;
}

function SelectField({ label, options, error, wide, ...props }) {
  return <div className={`field ${wide ? 'field--wide' : ''} ${error ? 'has-error' : ''}`}>
    <label htmlFor={props.name}>{label}</label>
    <select id={props.name} aria-invalid={!!error} aria-describedby={error ? `${props.name}-error` : undefined} {...props}>
      <option value="">Selecione</option>
      {options.map(o => <option key={o} value={o}>{o}</option>)}
    </select>
    {error && <span className="field-error" id={`${props.name}-error`}>{error}</span>}
  </div>;
}
