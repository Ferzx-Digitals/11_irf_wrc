import {
  BookOpen,
  Building2,
  CalendarDays,
  Download,
  Flame,
  HeartPulse,
  Languages,
  MapPin,
  ShieldCheck,
  Sprout,
  TentTree,
  Users,
} from "lucide-react";
import PageHeroBanner from "@/components/common/PageHeroBanner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const CATALOGUE_PDF = "/downloads/wrc-2027-training-catalogue-en.pdf";
const PROGRAM_CONTACT = "snazar@apn.gob.ar";

const pillars = [
  {
    icon: Users,
    title: "Peer-to-peer learning",
    description:
      "Recognising the value of knowledge built in the field, rangers teach and learn from other rangers.",
  },
  {
    icon: ShieldCheck,
    title: "Strengthen the community",
    description:
      "Building capacities to face the profession's challenges together, through collaborative work and mutual support.",
  },
  {
    icon: BookOpen,
    title: "Exchange knowledge",
    description:
      "Fostering the exchange of experiences, approaches, and good practices across territories, cultures, and conservation contexts.",
  },
  {
    icon: Sprout,
    title: "Build a legacy",
    description:
      "Leaving a mark for future generations of rangers, helping build a stronger, recognised profession.",
  },
];

const courses = [
  {
    number: "Learning Experience I",
    title: "Safety and Enforcement in Rural and Natural Environments",
    subtitle: "Strengthening rangers' capacities to prevent and control environmental offenses",
    icon: ShieldCheck,
    program: "Pre-Congress",
    duration: "2 days · April 17–18, 2027",
    language: "Spanish",
    spots: "Limited",
    cost: "Free",
    contribution: "Lodging and meals",
    host: "Ranger instructor: Lucas Ángel Aros (Mendoza Protected Natural Areas System, Argentina)",
    overview:
      "Effective protection of protected areas requires rangers prepared to act safely, with sound judgment and knowledge of the legal framework. The training provides practical tools to strengthen enforcement, control, and intervention capacities in response to environmental offenses, drawing on real situations and case studies.",
    contents: [
      "The ranger's role as an enforcement authority and the legal tools available",
      "Planning and carrying out control operations in rural and natural environments",
      "Tactical safety criteria and risk management during interventions",
      "Reports, preservation of evidence, and principles of investigating environmental offenses",
      "Communication, conflict resolution, and interaction with protected-area users",
    ],
  },
  {
    number: "Learning Experience II",
    title: "Wildfire Prevention and Firefighting",
    subtitle: "National Parks Administration wildland firefighter course",
    icon: Flame,
    program: "Pre-Congress",
    duration: "5 days · April 14–18, 2027",
    language: "Spanish",
    spots: "Limited",
    cost: "Free",
    contribution: "Lodging and meals",
    host: "Instructor: Iván Fabricio Rodas (Iguazú National Park fire & communications brigade, Argentina)",
    overview:
      "Wildfires and rural fires cause serious environmental and economic damage, and usually occur in remote, hard-to-access areas. Fire management is hard, risky work that demands specific training to meet the demands of wildfire firefighting.",
    contents: [
      "Unit 1 — Fire: the fire triangle, combustion stages, how heat spreads, parts of a fire",
      "Unit 2 — Forest fuels: definition and classification by state, location, and size",
      "Unit 3 — Fire behaviour: fuels, topography, and weather",
      "Unit 4 — Firefighting principles and methods: direct, indirect, and parallel; defence and control lines",
      "Unit 5 — Firefighting tools: hand tools, pumps, engines, hose lines, aerial and heavy resources",
      "Unit 6 — Firefighting organisation by level of complexity (crew, brigade, large-scale fire)",
      "Unit 7 — Communications: systems, equipment, codes, and maintenance",
      "Unit 8 — Safety: PPE, precautions, hazardous situations, first aid, physical preparation",
    ],
  },
  {
    number: "Learning Experience III",
    title: "Comprehensive Management of Protected Areas",
    subtitle: "Integrating protection, operations, visitor management, and Integrated Fire Management",
    icon: Building2,
    program: "Post-Congress",
    duration: "4 days · April 24–27, 2027",
    language: "Spanish",
    spots: "Limited",
    cost: "Free",
    contribution: "Lodging and meals",
    host: "Ranger instructor: Marco Bustos Salazar (Costa Rica — protected wilderness area management)",
    overview:
      "Managing protected and conservation areas requires integrating technical knowledge, planning capacity, and management tools for increasingly complex challenges. This experience strengthens these competencies through real experiences carried out in protected areas of Costa Rica, with a practical, participatory approach.",
    contents: [
      "Day 1 — Protection and control: ranger duties, threat and risk management, surveillance and patrolling, case studies",
      "Day 2 — Operational management: planning, work organisation, resources, inter-institutional coordination, leadership",
      "Day 3 — Visitor management and sustainable tourism: public use, visitor services, conflict management, interpretation",
      "Day 4 — Integrated Fire Management: principles, prevention, preparedness, coordination, personnel safety, climate change adaptation",
    ],
  },
  {
    number: "Learning Experience IV",
    title: "Wilderness First Aid (WFA)",
    subtitle: "Remote first aid and patient care for rangers",
    icon: HeartPulse,
    program: "Post-Congress",
    duration: "5 days · April 24–28, 2027",
    language: "Spanish",
    spots: "Limited · 30 participants",
    cost: "Free",
    contribution: "Lodging and meals",
    host: "Ranger instructors: Santiago Nicolás Gorini and Emilio Daher (National Parks Administration, Argentina — WFR/WAFA/WFA instructors)",
    overview:
      "A five-day, hands-on wilderness first aid course covering patient assessment, trauma, environmental emergencies, and medical emergencies, with daily practice, video review, and a full-scale simulation drill.",
    contents: [
      "Day 1 — Remote first aid, ethics and legal aspects, anatomy and physiology, patient assessment chain, airway, CPR, AED, bleeding, cardiovascular emergencies (9 h)",
      "Day 2 — Secondary assessment, soft tissue, mechanism of injury, spinal and head injuries, bone/joint/muscle injuries, burns, thermoregulation, hyper/hypothermia (9 h)",
      "Day 3 — SOAP note, soft tissue infections, spine board, hypothermia wrap, altitude illness, bites, medical emergencies, first aid kit (8.5 h)",
      "Day 4 — Shock, facial/chest/abdominal/pelvic injuries, spinal clearance protocol, transport techniques and improvised stretchers, daytime simulation drill (9 h)",
      "Day 5 — Spinal case resolution, cold injuries, altitude illness, respiratory/abdominal/diabetic/neurological emergencies, anaphylaxis and EPIPEN (8 h)",
    ],
  },
];

const generalInfo = [
  {
    icon: Users,
    title: "How to participate",
    text: "The courses are designed for rangers attending the 11th World Ranger Congress in Iguazú, Argentina. Registrations are confirmed on an ongoing basis, prioritising applicants based on their responses.",
  },
  {
    icon: CalendarDays,
    title: "Registration",
    text: "Complete the Google® form for the relevant course; you will receive a confirmation by email. A quota of 30 rangers per course was set based on lodging availability at the Argentine Army facility, and may increase slightly if some participants do not need lodging.",
  },
  {
    icon: MapPin,
    title: "Logistics",
    text: "Courses are held in classrooms at Iguazú National Park (PNI), accessible by public transport. Congress attendees receive a bus pass; buses pass the lodging entrance every 20 minutes.",
  },
  {
    icon: TentTree,
    title: "Lodging",
    text: "Lodging for 70 people is offered at an Army base on the way to PNI, in shared rooms. A contribution of US$6.5 per night is suggested, used to buy mattresses, pillows, and cleaning supplies for the courses.",
  },
  {
    icon: Languages,
    title: "Meals",
    text: "Meals are each participant's responsibility. Some restaurants near PNI offer a reduced rate for Congress participants. Estimated cost: US$20/day for packed meals.",
  },
];

const Training = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-forest-mist/40 via-background to-background pb-24">
      <PageHeroBanner
        imageSrc="/images/images/home/banner-3.jpg"
        title="Training & Knowledge Exchange Program"
        subtitle="Official training courses for the 11th IRF World Ranger Congress — rangers learning from rangers"
        overlayClassName="bg-gradient-to-r from-black/75 via-black/55 to-black/25"
      />

      <div className="container mx-auto px-4">
        {/* Intro */}
        <section className="mx-auto mb-16 max-w-5xl rounded-3xl border border-forest-light/30 bg-card/95 p-8 shadow-forest md:p-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-earth-brown">
            Founding Edition · Iguazú 2027
          </p>
          <h2 className="text-3xl font-bold leading-tight text-forest-deep md:text-4xl">
            Rangers learning from Rangers
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-forest-primary md:text-base">
            <p>
              The Official Training and Knowledge Exchange Program is an initiative of the Latin
              American Ranger Federation (FLG) and the Union of National Rangers of the Argentine
              Republic (SIGUNARA), host organisation for the 11th World Ranger Congress. It also
              benefits from the collaboration of the International Ranger Federation (IRF) and the
              European Ranger Federation (ERF), with support from the National Parks Administration
              of Argentina.
            </p>
            <p>
              The response to the call for training proposals far exceeded expectations. For
              organisational and logistical reasons, this first edition brings together four
              training proposals — the beginning of a program conceived to become a permanent
              space for training and knowledge exchange. All trainings are free of charge and were
              built from the experience of rangers themselves, with a practical, collaborative,
              peer-to-peer approach.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="forest-gradient text-white">
              <a href={CATALOGUE_PDF} target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" />
                Download full catalogue (PDF)
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-forest-light/40 text-forest-deep hover:bg-forest-mist"
            >
              <a href={`mailto:${PROGRAM_CONTACT}`}>Contact the program team</a>
            </Button>
          </div>
        </section>

        {/* Pillars */}
        <section className="mb-16">
          <h2 className="mb-3 text-center text-3xl font-bold text-forest-deep">
            Why an official training program?
          </h2>
          <p className="mx-auto mb-10 max-w-3xl text-center text-forest-primary">
            The program is built on four fundamental pillars that guide every learning experience
            and the exchange among rangers.
          </p>
          <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="rounded-2xl border border-forest-light/30 bg-card/95 p-6 text-center shadow-forest"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full forest-gradient text-white">
                  <pillar.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-base font-bold text-forest-deep">{pillar.title}</h3>
                <p className="text-sm leading-relaxed text-forest-primary">{pillar.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Courses */}
        <section className="mb-16">
          <h2 className="mb-10 text-center text-3xl font-bold text-forest-deep">The four courses</h2>
          <div className="mx-auto max-w-5xl space-y-8">
            {courses.map((course) => (
              <article
                key={course.title}
                className="overflow-hidden rounded-3xl border border-forest-light/30 bg-card/95 shadow-forest"
              >
                <div className="border-b border-forest-light/20 bg-forest-mist/30 p-7 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl forest-gradient text-white">
                      <course.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-earth-brown">
                        {course.number}
                      </p>
                      <h3 className="mt-1 text-2xl font-bold text-forest-deep">{course.title}</h3>
                      <p className="mt-1 text-sm text-forest-primary">{course.subtitle}</p>
                    </div>
                  </div>

                  <dl className="mt-6 grid gap-x-6 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                      ["Program", course.program],
                      ["Duration", course.duration],
                      ["Language", course.language],
                      ["Spots", course.spots],
                      ["Cost", course.cost],
                      ["Participant contribution", course.contribution],
                    ].map(([label, value]) => (
                      <div key={label}>
                        <dt className="text-xs font-semibold uppercase tracking-wide text-forest-primary/70">
                          {label}
                        </dt>
                        <dd className="text-sm font-semibold text-forest-deep">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div className="p-7 md:p-8">
                  <p className="text-sm leading-relaxed text-forest-primary md:text-base">
                    {course.overview}
                  </p>
                  <Accordion type="single" collapsible className="mt-5">
                    <AccordionItem value="contents" className="border-forest-light/40">
                      <AccordionTrigger className="text-left font-semibold text-forest-deep hover:no-underline">
                        Course contents
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-forest-primary">
                          {course.contents.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <p className="mt-4 text-xs font-medium text-forest-primary/80">{course.host}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* General information */}
        <section className="mb-16 rounded-3xl bg-forest-deep px-6 py-12 text-white shadow-forest md:px-10">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">General information</h2>
            <p className="mx-auto mt-4 max-w-3xl text-white/85">
              How to take part in the training courses during the World Ranger Congress Iguazú 2027.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-2">
            {generalInfo.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/15 bg-white/10 p-6"
              >
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-white text-forest-deep">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-white/80">{item.text}</p>
              </article>
            ))}
          </div>
          <div className="mx-auto mt-8 max-w-5xl text-center">
            <p className="text-sm text-white/80">
              Contact: Ranger Sofía Nazar (Argentina) —{" "}
              <a
                href={`mailto:${PROGRAM_CONTACT}`}
                className="font-semibold underline underline-offset-4 hover:text-white"
              >
                {PROGRAM_CONTACT}
              </a>
            </p>
          </div>
        </section>

        {/* Full catalogue */}
        <section className="mx-auto max-w-5xl rounded-3xl border border-forest-light/30 bg-card/95 p-8 shadow-forest md:p-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-forest-deep">Full catalogue</h2>
              <p className="mt-1 text-sm text-forest-primary">
                Catalogue WRC — August 2026 (English). Images in the catalogue are for illustrative
                purposes only.
              </p>
            </div>
            <Button asChild className="forest-gradient text-white">
              <a href={CATALOGUE_PDF} target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </a>
            </Button>
          </div>
          <object
            data={CATALOGUE_PDF}
            type="application/pdf"
            className="mt-6 h-[720px] w-full rounded-2xl border border-forest-light/30"
            aria-label="WRC 2027 training catalogue"
          >
            <p className="p-4 text-sm text-forest-primary">
              Your browser cannot display the embedded PDF.{" "}
              <a
                href={CATALOGUE_PDF}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-forest-primary underline"
              >
                Open the catalogue in a new tab
              </a>
              .
            </p>
          </object>
        </section>
      </div>
    </section>
  );
};

export default Training;
