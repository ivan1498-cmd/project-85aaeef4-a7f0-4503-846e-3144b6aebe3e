import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone, MessageCircle, MapPin, Clock, ArrowRight, Check, ChevronDown,
  Wrench, Hammer, DoorOpen, Building2, Truck, Ruler, Clock3, BadgeCheck,
  ShieldCheck, Briefcase, Star, Send, Upload, Flame
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Reveal } from "@/components/site/Reveal";
import { motion } from "motion/react";

import heroImg from "@/assets/hero-welding.jpg";
import aboutImg from "@/assets/about-workshop.jpg";
import ctaImg from "@/assets/cta-sparks.jpg";
import work1 from "@/assets/work-1-frame.jpg";
import work2 from "@/assets/work-2-trailer.jpg";
import work3 from "@/assets/work-3-fence.jpg";
import work4 from "@/assets/work-4-gate.jpg";
import work5 from "@/assets/work-5-onsite.jpg";
import work6 from "@/assets/work-6-support.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const SERVICES = [
  { icon: Wrench, title: "Изготовление металлоконструкций", text: "Каркасы, опоры, рамы, навесы, лестничные элементы, усиления и другие изделия по вашим размерам и задачам." },
  { icon: Hammer, title: "Ремонт сваркой", text: "Восстанавливаем треснувшие, деформированные и изношенные металлические детали, конструкции, технику и оборудование." },
  { icon: DoorOpen, title: "Ворота, калитки, ограждения", text: "Изготавливаем и дорабатываем уличные конструкции, которые сочетают прочность, удобство и аккуратный внешний вид." },
  { icon: Building2, title: "Сварка для дома и бизнеса", text: "Работаем с частными клиентами, мастерскими, складами, производственными площадками, фермами и строительными объектами." },
  { icon: Truck, title: "Выездные работы", text: "Если конструкцию нельзя привезти в мастерскую, приедем на объект и выполним сварочные работы на месте." },
  { icon: Ruler, title: "Индивидуальные заказы", text: "Берём в работу нестандартные проекты по чертежам, эскизам, фотографиям или просто по вашей задаче." },
];

const REASONS = [
  { title: "Понимаем задачу с первого разговора", text: "Не усложняем. Сразу обсуждаем, что нужно сделать, как лучше реализовать и сколько это займёт по времени." },
  { title: "Делаем надёжно, а не «на время»", text: "Наша работа рассчитана на эксплуатацию, нагрузку и повседневное использование." },
  { title: "Работаем аккуратно", text: "Следим не только за прочностью, но и за внешним видом готового изделия." },
  { title: "Берёмся за нестандартные случаи", text: "Когда типовое решение не подходит, находим рабочий и разумный вариант." },
];

const WORKS = [
  { img: work1, caption: "Изготовление усиленного металлического каркаса для коммерческого помещения" },
  { img: work2, caption: "Ремонт прицепа с восстановлением несущих элементов" },
  { img: work3, caption: "Сварка и монтаж уличного ограждения для частного дома" },
  { img: work4, caption: "Изготовление ворот по индивидуальным размерам" },
  { img: work5, caption: "Ремонт промышленной металлической конструкции на объекте" },
  { img: work6, caption: "Сборка прочной опоры под оборудование" },
];

const STEPS = [
  { n: "01", title: "Заявка", text: "Вы отправляете описание задачи, размеры, фото или чертёж." },
  { n: "02", title: "Оценка и согласование", text: "Мы уточняем детали, предлагаем решение и называем стоимость и сроки." },
  { n: "03", title: "Изготовление или ремонт", text: "Выполняем работу в мастерской или выезжаем на объект, если это необходимо." },
  { n: "04", title: "Готовый результат", text: "Передаём готовое изделие или завершённую конструкцию, готовую к эксплуатации." },
];

const TESTIMONIALS = [
  { text: "Обращались по ремонту металлической рамы. Всё сделали быстро, аккуратно и действительно надёжно. Видно, что люди знают своё дело.", author: "Алексей", role: "Частный заказ" },
  { text: "Заказывали ворота и несколько дополнительных элементов по нашим размерам. Получилось крепко, ровно и без лишней суеты.", author: "Марина", role: "Загородный дом" },
  { text: "Нужен был срочный выезд на объект. Приехали, оценили ситуацию и решили проблему на месте. Очень достойный подход к работе.", author: "Сергей", role: "Производственный цех" },
];

const FAQ = [
  { q: "Вы работаете только по крупным заказам?", a: "Нет, мы берём как объёмные проекты, так и небольшие частные заказы." },
  { q: "Можно ли заказать выезд на объект?", a: "Да, если конструкцию неудобно перевозить или работы нужно выполнить на месте." },
  { q: "С какими задачами к вам чаще всего обращаются?", a: "Чаще всего это ремонт металлоконструкций, изготовление каркасов, ворот, ограждений, усилений и нестандартных изделий." },
  { q: "Можно ли рассчитать стоимость по фото?", a: "Во многих случаях да. Отправьте фотографии, размеры и краткое описание задачи." },
  { q: "Вы делаете изделия по индивидуальным размерам?", a: "Да, мы регулярно работаем по чертежам, эскизам и нестандартным запросам." },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
      <span className="h-px w-8 bg-primary" />
      {children}
    </div>
  );
}

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <WhyUs />
      <Works />
      <Process />
      <Testimonials />
      <Faq />
      <CtaBanner />
      <Contact />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-end overflow-hidden pt-20">
      <img
        src={heroImg}
        alt="Сварщик за работой"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />
      <div className="absolute inset-0 bg-grid opacity-[0.35]" />

      <div className="relative mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <SectionLabel>Местная сварочная мастерская</SectionLabel>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 font-display font-bold uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-balance"
          >
            Сварочные работы<br />
            и металлоконструкции <span className="text-primary">на заказ</span><br />
            в вашем городе
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed"
          >
            Изготавливаем, усиливаем и ремонтируем металлические конструкции для дома, бизнеса, производства и сельского хозяйства. Работаем точно, надёжно и по делу.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-md bg-primary px-6 py-4 text-sm md:text-base font-semibold text-primary-foreground hover:bg-primary/90 transition shadow-ember"
            >
              Оставить заявку
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#works"
              className="inline-flex items-center gap-2 rounded-md bg-steel/80 backdrop-blur px-6 py-4 text-sm md:text-base font-semibold text-foreground ring-1 ring-border hover:ring-primary/60 hover:bg-steel transition"
            >
              Смотреть работы
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground"
          >
            {["Выезд на объект", "Индивидуальные заказы", "Ремонт любой сложности"].map((t, i) => (
              <span key={t} className="flex items-center gap-2">
                {i > 0 && <span className="h-1 w-1 rounded-full bg-primary" />}
                <span>{t}</span>
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    { icon: Clock3, t: "Точные сроки" },
    { icon: BadgeCheck, t: "Честная стоимость" },
    { icon: ShieldCheck, t: "Прочные швы" },
    { icon: Briefcase, t: "Работаем с частными и корпоративными заказами" },
  ];
  return (
    <section className="relative border-y border-border bg-graphite/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, t }) => (
            <div key={t} className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 ring-1 ring-primary/30">
                <Icon className="h-5 w-5 text-primary" strokeWidth={2.2} />
              </span>
              <span className="text-sm md:text-[15px] font-medium text-foreground/90">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 blur-2xl rounded-2xl" />
              <img
                src={aboutImg}
                alt="Сварочная мастерская"
                width={1280}
                height={960}
                loading="lazy"
                className="relative rounded-lg w-full h-[420px] md:h-[520px] object-cover ring-1 ring-border shadow-deep"
              />
              <div className="absolute -bottom-6 -right-6 hidden md:flex flex-col items-start gap-1 rounded-md bg-primary px-5 py-4 text-primary-foreground shadow-ember">
                <span className="text-3xl font-display font-bold">100%</span>
                <span className="text-xs font-semibold uppercase tracking-wider">Своя работа</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <SectionLabel>О мастерской</SectionLabel>
            <h2 className="mt-4 font-display font-bold text-3xl md:text-5xl uppercase leading-[1.05] text-balance">
              Надёжная сварка <span className="text-primary">без лишних обещаний</span>
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed text-[15px] md:text-base">
              <p>
                Мы — местная сварочная мастерская, которая берётся как за стандартные задачи, так и за нестандартные проекты. Делаем то, что действительно должно служить долго: ворота, ограждения, каркасы, усиления, ремонт техники, восстановление металлоконструкций и индивидуальные изделия по размерам заказчика.
              </p>
              <p>
                Для нас важны не красивые слова, а результат: точные размеры, аккуратная геометрия, крепкие соединения и понятный подход к работе на каждом этапе.
              </p>
            </div>
            <ul className="mt-8 grid sm:grid-cols-2 gap-3">
              {["Стандартные и нестандартные проекты", "Точные размеры и аккуратная геометрия", "Крепкие соединения", "Понятный подход на каждом этапе"].map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-sm">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="relative py-20 md:py-32 bg-graphite/50 border-y border-border">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <SectionLabel>Услуги</SectionLabel>
          <h2 className="mt-4 font-display font-bold uppercase text-3xl md:text-5xl leading-[1.05] text-balance">
            Что мы <span className="text-primary">делаем</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="group relative h-full rounded-lg bg-steel-gradient ring-1 ring-border p-7 hover:ring-primary/50 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-md bg-primary/15 ring-1 ring-primary/30 group-hover:bg-primary group-hover:ring-primary transition">
                  <s.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition" strokeWidth={2.2} />
                </span>
                <h3 className="relative mt-5 font-display font-semibold text-xl uppercase leading-tight">{s.title}</h3>
                <p className="relative mt-3 text-[14.5px] text-muted-foreground leading-relaxed">{s.text}</p>
                <div className="relative mt-5 h-px w-12 bg-primary/40 group-hover:w-24 transition-all" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="relative py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <SectionLabel>Почему мы</SectionLabel>
          <h2 className="mt-4 font-display font-bold uppercase text-3xl md:text-5xl leading-[1.05] text-balance">
            Почему к нам обращаются <span className="text-primary">повторно</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {REASONS.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.06}>
              <div className="group relative flex gap-5 rounded-lg bg-card ring-1 ring-border p-7 hover:ring-primary/50 transition">
                <div className="shrink-0">
                  <div className="font-display font-bold text-4xl text-primary/40 group-hover:text-primary transition">
                    0{i + 1}
                  </div>
                </div>
                <div>
                  <h3 className="font-display font-semibold uppercase text-lg md:text-xl">{r.title}</h3>
                  <p className="mt-2 text-muted-foreground text-[15px] leading-relaxed">{r.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Works() {
  return (
    <section id="works" className="relative py-20 md:py-32 bg-graphite/50 border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <SectionLabel>Портфолио</SectionLabel>
          <h2 className="mt-4 font-display font-bold uppercase text-3xl md:text-5xl leading-[1.05] text-balance">
            Наши <span className="text-primary">работы</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-[15px] md:text-base leading-relaxed">
            Показываем реальные проекты: от точечного ремонта до полноценного изготовления конструкций под ключ.
          </p>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {WORKS.map((w, i) => (
            <Reveal key={i} delay={(i % 3) * 0.08}>
              <figure className="group relative overflow-hidden rounded-lg ring-1 ring-border hover:ring-primary/60 transition aspect-[4/5]">
                <img
                  src={w.img}
                  alt={w.caption}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                  <div className="h-px w-10 bg-primary mb-3 transition-all group-hover:w-20" />
                  <figcaption className="text-sm md:text-[15px] font-medium text-foreground leading-snug">
                    {w.caption}
                  </figcaption>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="relative py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <SectionLabel>Процесс</SectionLabel>
          <h2 className="mt-4 font-display font-bold uppercase text-3xl md:text-5xl leading-[1.05] text-balance">
            Как проходит <span className="text-primary">работа</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 relative">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <div className="relative h-full rounded-lg bg-steel-gradient ring-1 ring-border p-6 md:p-7">
                <div className="flex items-center justify-between">
                  <span className="font-display font-bold text-5xl md:text-6xl text-primary/30 leading-none">{s.n}</span>
                  <span className="h-9 w-9 rounded-full bg-primary/10 ring-1 ring-primary/30 inline-flex items-center justify-center">
                    <Flame className="h-4 w-4 text-primary" />
                  </span>
                </div>
                <h3 className="mt-6 font-display font-semibold uppercase text-xl">{s.title}</h3>
                <p className="mt-2 text-muted-foreground text-[14.5px] leading-relaxed">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20 md:py-32 bg-graphite/50 border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <SectionLabel>Отзывы</SectionLabel>
          <h2 className="mt-4 font-display font-bold uppercase text-3xl md:text-5xl leading-[1.05] text-balance">
            Что говорят <span className="text-primary">клиенты</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="h-full rounded-lg bg-card ring-1 ring-border p-7 flex flex-col">
                <div className="flex gap-0.5 text-primary">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-primary" />
                  ))}
                </div>
                <p className="mt-5 text-foreground/90 leading-relaxed text-[15px]">«{t.text}»</p>
                <div className="mt-6 pt-5 border-t border-border flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/15 ring-1 ring-primary/30 inline-flex items-center justify-center font-display font-bold text-primary">
                    {t.author[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{t.author}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative py-20 md:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionLabel>Вопросы и ответы</SectionLabel>
          <h2 className="mt-4 font-display font-bold uppercase text-3xl md:text-5xl leading-[1.05] text-balance">
            Частые <span className="text-primary">вопросы</span>
          </h2>
        </Reveal>

        <div className="mt-10 space-y-3">
          {FAQ.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={i * 0.04}>
                <div className={`rounded-lg ring-1 transition ${isOpen ? "bg-card ring-primary/40" : "bg-card/60 ring-border hover:ring-primary/30"}`}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 p-5 md:p-6 text-left"
                  >
                    <span className="font-display font-semibold text-lg md:text-xl uppercase">{f.q}</span>
                    <ChevronDown className={`h-5 w-5 text-primary shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 md:px-6 pb-6 text-muted-foreground leading-relaxed">{f.a}</p>
                  </motion.div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CtaBanner() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <img src={ctaImg} alt="" width={1920} height={800} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-r from-graphite via-graphite/85 to-graphite/40" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <Reveal>
            <h2 className="font-display font-bold uppercase text-3xl md:text-5xl lg:text-6xl leading-[1.02] text-balance">
              Нужна <span className="text-primary">надёжная сварка</span> без компромиссов?
            </h2>
            <p className="mt-5 text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
              Расскажите, что нужно изготовить или отремонтировать. Мы предложим понятное решение и сориентируем по срокам и стоимости.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-4 text-sm md:text-base font-semibold text-primary-foreground hover:bg-primary/90 transition shadow-ember"
              >
                Отправить заявку
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="tel:+70000000000"
                className="inline-flex items-center gap-2 rounded-md bg-steel/80 backdrop-blur px-6 py-4 text-sm md:text-base font-semibold text-foreground ring-1 ring-border hover:ring-primary/60 transition"
              >
                <Phone className="h-4 w-4" />
                Позвонить сейчас
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const contacts = [
    { icon: Phone, label: "Телефон", value: "+7 (000) 000-00-00", href: "tel:+70000000000" },
    { icon: MessageCircle, label: "WhatsApp / Telegram", value: "+7 (000) 000-00-00", href: "#" },
    { icon: MapPin, label: "Адрес мастерской", value: "г. Ваш город, ул. Промышленная, 1" },
    { icon: Clock, label: "Часы работы", value: "Пн–Сб: 09:00 – 19:00" },
  ];

  return (
    <section id="contact" className="relative py-20 md:py-32 bg-graphite/50 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <SectionLabel>Контакты</SectionLabel>
          <h2 className="mt-4 font-display font-bold uppercase text-3xl md:text-5xl leading-[1.05] text-balance">
            Связаться <span className="text-primary">с нами</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-[15px] md:text-base leading-relaxed">
            Позвоните, напишите или отправьте заявку через форму. Чем подробнее вы опишете задачу, тем быстрее мы сможем предложить решение.
          </p>
        </Reveal>

        <div className="mt-12 grid lg:grid-cols-5 gap-6 lg:gap-8">
          <Reveal className="lg:col-span-2">
            <div className="space-y-4">
              {contacts.map((c) => {
                const Inner = (
                  <div className="flex items-start gap-4 rounded-lg bg-card ring-1 ring-border p-5 hover:ring-primary/50 transition">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary/15 ring-1 ring-primary/30">
                      <c.icon className="h-5 w-5 text-primary" strokeWidth={2.2} />
                    </span>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">{c.label}</div>
                      <div className="mt-1 font-medium text-foreground">{c.value}</div>
                    </div>
                  </div>
                );
                return c.href ? (
                  <a key={c.label} href={c.href} className="block">{Inner}</a>
                ) : (
                  <div key={c.label}>{Inner}</div>
                );
              })}
            </div>
          </Reveal>

          <Reveal className="lg:col-span-3" delay={0.1}>
            <form
              onSubmit={onSubmit}
              className="rounded-lg bg-card ring-1 ring-border p-6 md:p-8 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Ваше имя">
                  <input required type="text" className="form-input" placeholder="Иван" />
                </Field>
                <Field label="Телефон">
                  <input required type="tel" className="form-input" placeholder="+7 (___) ___-__-__" />
                </Field>
              </div>
              <Field label="Что нужно сделать">
                <input required type="text" className="form-input" placeholder="Например: ворота 3×2 м" />
              </Field>
              <Field label="Комментарий">
                <textarea rows={4} className="form-input resize-none" placeholder="Опишите задачу: размеры, сроки, особенности" />
              </Field>
              <Field label="Прикрепить фото">
                <label className="flex items-center gap-3 cursor-pointer rounded-md bg-input ring-1 ring-border hover:ring-primary/50 transition px-4 py-3 text-sm text-muted-foreground">
                  <Upload className="h-4 w-4 text-primary" />
                  <span>Выберите файлы (фото, чертёж)</span>
                  <input type="file" multiple accept="image/*,.pdf" className="hidden" />
                </label>
              </Field>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-4 font-semibold text-primary-foreground hover:bg-primary/90 transition shadow-ember"
              >
                <Send className="h-4 w-4" />
                {submitted ? "Заявка отправлена" : "Отправить заявку"}
              </button>
              <p className="text-xs text-muted-foreground text-center">
                Отправляя заявку, вы соглашаетесь на обработку контактных данных.
              </p>
            </form>
          </Reveal>
        </div>
      </div>

      <style>{`
        .form-input {
          width: 100%;
          background: var(--color-input);
          border: 1px solid var(--color-border);
          border-radius: 0.5rem;
          padding: 0.85rem 1rem;
          color: var(--color-foreground);
          font-size: 0.95rem;
          transition: border-color .2s, box-shadow .2s;
          outline: none;
        }
        .form-input::placeholder { color: var(--color-muted-foreground); }
        .form-input:focus {
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px color-mix(in oklab, var(--color-primary) 25%, transparent);
        }
      `}</style>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-2">{label}</span>
      {children}
    </label>
  );
}

function Footer() {
  return (
    <footer className="relative bg-graphite border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary/15 ring-1 ring-primary/30">
                <Flame className="h-5 w-5 text-primary" />
              </span>
              <span className="font-display font-bold uppercase tracking-wider">
                Сварочная <span className="text-primary">мастерская</span>
              </span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
              Сварочные работы и металлоконструкции на заказ. Работаем для частных клиентов, бизнеса и производственных объектов.
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">Навигация</div>
            <ul className="mt-4 space-y-2.5">
              {[
                { href: "#services", t: "Услуги" },
                { href: "#works", t: "Наши работы" },
                { href: "#testimonials", t: "Отзывы" },
                { href: "#contact", t: "Контакты" },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-foreground/80 hover:text-primary transition">{l.t}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">Контакты</div>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /><a href="tel:+70000000000" className="hover:text-primary">+7 (000) 000-00-00</a></li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /><span>г. Ваш город, ул. Промышленная, 1</span></li>
              <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /><span>Пн–Сб: 09:00 – 19:00</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-xs text-muted-foreground">
          <span>© 2026 Сварочная мастерская. Все права защищены.</span>
          <span>Сварочные работы и металлоконструкции на заказ</span>
        </div>
      </div>
    </footer>
  );
}
