import { Fragment } from "react";

const columns = [
  "Start Time",
  "Finish Time",
  "Session Duration",
  "Session / Activity",
  "Description",
  "Speaker / Session leader",
  "Location",
];

type ScheduleVariant =
  | "registration"
  | "meal"
  | "plenary"
  | "workshop"
  | "meeting"
  | "field"
  | "free";

type ScheduleRow = {
  start?: string;
  finish?: string;
  duration?: string;
  activity: string;
  description?: string;
  speaker?: string;
  location?: string;
  variant?: ScheduleVariant;
};

type ScheduleDay = {
  title: string;
  rows: ScheduleRow[];
};

const scheduleDays: ScheduleDay[] = [
  {
    title: "Day 1: Monday 19 April 2027",
    rows: [
      {
        start: "8:00",
        finish: "17:00",
        activity: "Registration",
        description:
          "Registration will be open all day for participants arriving at different times of the day.",
        variant: "registration",
      },
      {
        start: "18:30",
        finish: "00:00",
        activity: "Moonlight Tour to Iguazu",
        variant: "field",
      },
    ],
  },
  {
    title: "Day 2: Tuesday 20 April 2027",
    rows: [
      {
        start: "8:00",
        finish: "8:15",
        duration: "15 mins",
        activity: "IRF International welcome",
        description: "International welcome",
        speaker: "Chris Galliers",
        location: "Main Plenary Hall",
        variant: "registration",
      },
      {
        start: "8:20",
        finish: "8:50",
        duration: "30 mins",
        activity: "Argentinian welcome",
        description: "Special Argentinian Opening",
        speaker: "SIGUNARA President and Argentinian Government Officials",
        location: "Main Plenary",
        variant: "registration",
      },
      {
        start: "8:55",
        finish: "9:10",
        duration: "15 mins",
        activity: "Orientation, safety and site rules",
        description: "Outline program / Safety procedures",
        speaker: "MC to facilitate",
        location: "Main Plenary",
        variant: "registration",
      },
      {
        start: "9:15",
        finish: "10:00",
        duration: "45 mins",
        activity: "WRC Opening and scene setting",
        description: "Introduction and scene setting",
        speaker: "TBC",
        location: "Main Plenary",
        variant: "registration",
      },
      {
        start: "10:00",
        finish: "10:15",
        duration: "15 mins",
        activity: "Coffee break",
        description: "TBC",
        variant: "meal",
      },
      {
        start: "10:20",
        finish: "10:50",
        duration: "30 mins",
        activity: "Plenary 1",
        description: "TBC",
        speaker: "TBC",
        location: "Main Plenary",
        variant: "plenary",
      },
      {
        start: "10:55",
        finish: "11:25",
        duration: "30 mins",
        activity: "Plenary 2",
        description: "TBC",
        speaker: "TBC",
        location: "Main Plenary",
        variant: "plenary",
      },
      {
        start: "11:40",
        finish: "12:30",
        duration: "45 mins",
        activity: "Formal Flag Ceremony",
        description: "Formal uniform required",
        speaker: "MC to facilitate",
        location: "Anfiteatro del hito 3 fronteras",
        variant: "registration",
      },
      {
        start: "12:45",
        finish: "13:45",
        duration: "60 mins",
        activity: "Lunch break",
        location: "Designated dining area",
        variant: "meal",
      },
      {
        start: "14:00",
        finish: "16:30",
        duration: "90 mins",
        activity: "Workshops",
        description: "Delegates to go to one of six workshop locations.",
        location:
          "Workshop 1: 200 PAX\nWorkshop 2: 90 PAX\nWorkshop 3: female ranger working group\nWorkshop 4: 30 PAX\nWorkshop 5: 200 PAX\nWorkshop 6: 40 PAX",
        variant: "workshop",
      },
      {
        start: "16:30",
        finish: "17:00",
        duration: "30 mins",
        activity: "Coffee break",
        description: "TBC",
        variant: "meal",
      },
      {
        start: "17:15",
        finish: "19:30",
        duration: "135 mins",
        activity: "6 x Regional Meetings",
        description:
          "Delegates to attend their relevant regional meeting to discuss regional matters.",
        speaker: "6 x Regional Representatives to chair their regional meetings.",
        location:
          "Regional Meeting 1: Oceania\nRegional Meeting 2: Europe\nRegional Meeting 3: USA (North America)\nRegional Meeting 4: Asia\nRegional Meeting 5: Africa\nRegional Meeting 6: Central and South America",
        variant: "meeting",
      },
      {
        activity: "Evening free",
        variant: "free",
      },
    ],
  },
  {
    title: "Day 3: Wednesday 21 April 2027",
    rows: [
      {
        start: "7:00",
        finish: "7:45",
        duration: "45 mins",
        activity: "Breakfast",
        location: "Designated dining area",
        variant: "meal",
      },
      {
        start: "8:00",
        finish: "10:00",
        duration: "120 mins",
        activity: "IRF Annual General Meeting",
        description:
          "IRF AGM addressing previous years activities / finances and discuss agenda items.",
        speaker: "IRF Board",
        location: "Main plenary hall",
        variant: "meeting",
      },
      {
        start: "10:15",
        finish: "10:45",
        duration: "30 mins",
        activity: "Coffee break",
        description: "TBC",
        variant: "meal",
      },
      {
        start: "11:00",
        finish: "11:30",
        duration: "30 mins",
        activity: "Plenary 3",
        description: "TBC",
        speaker: "TBC",
        location: "Main plenary hall",
        variant: "plenary",
      },
      {
        start: "11:45",
        finish: "12:15",
        duration: "30 mins",
        activity: "Plenary 4",
        description: "TBC",
        speaker: "TBC",
        location: "Main plenary hall",
        variant: "plenary",
      },
      {
        start: "12:30",
        finish: "13:00",
        duration: "30 mins",
        activity: "Plenary 5",
        description: "TBC",
        speaker: "TBC",
        location: "Main plenary hall",
        variant: "plenary",
      },
      {
        start: "13:00",
        finish: "14:00",
        duration: "60 mins",
        activity: "Lunch break",
        description: "TBC",
        variant: "meal",
      },
      {
        start: "14:30",
        finish: "16:00",
        duration: "90 mins",
        activity: "Workshops",
        description: "Delegates to go to one of six locations.",
        location:
          "Workshop 7: 200 PAX\nWorkshop 8: 200 PAX\nWorkshop 9: 200 PAX\nWorkshop 10: 90 PAX\nWorkshop 11: 40 PAX\nWorkshop 12: 30 PAX",
        variant: "workshop",
      },
      {
        start: "16:00",
        finish: "16:30",
        duration: "30 mins",
        activity: "Coffee break",
        description: "TBC",
        variant: "meal",
      },
      {
        start: "16:30",
        finish: "19:00",
        duration: "150 mins",
        activity: "Workshops",
        description: "Delegates to go to one of six locations.",
        location:
          "Workshop 13\nWorkshop 14\nWorkshop 15\nWorkshop 16\nWorkshop 17\nWorkshop 18",
        variant: "workshop",
      },
      {
        start: "20:00",
        finish: "21:30",
        duration: "90 mins",
        activity: "IRF Awards Ceremony",
        speaker: "Master of Ceremony",
        location: "Main plenary hall",
        variant: "meeting",
      },
    ],
  },
  {
    title: "Day 4: Thursday 22 April 2027",
    rows: [
      {
        start: "7:00",
        finish: "8:00",
        duration: "60 mins",
        activity: "Breakfast",
        location: "Designated dining area",
        variant: "meal",
      },
      {
        start: "8:30",
        finish: "9:00",
        duration: "30 mins",
        activity: "Overview and arrangements for field trips",
        location: "Main plenary hall",
        variant: "field",
      },
      {
        start: "9:00",
        finish: "9:30",
        duration: "30 mins",
        activity: "Buses in the parking bay for participants",
        location: "Parking lot in front of Convention Centre",
        variant: "field",
      },
      {
        start: "9:30",
        finish: "16:00",
        duration: "All day",
        activity: "Field trips (Iguazu Falls)",
        variant: "field",
      },
      {
        start: "18:30",
        finish: "20:00",
        duration: "90 mins",
        activity: "Auction / Badge swap",
        description: "TBC",
        variant: "meeting",
      },
      {
        start: "20:00",
        finish: "00:00",
        activity: "Cultural Night",
        description: "This is an evening to showcase the local culture.",
        location: "TBC",
        variant: "free",
      },
    ],
  },
  {
    title: "Day 5: Friday 23 April 2027",
    rows: [
      {
        start: "7:00",
        finish: "8:00",
        duration: "60 mins",
        activity: "Breakfast",
        location: "Designated dining area",
        variant: "meal",
      },
      {
        start: "8:00",
        finish: "8:15",
        duration: "15 mins",
        activity: "Update brief for the day by the MC",
        location: "Main plenary hall",
        variant: "registration",
      },
      {
        start: "8:20",
        finish: "9:20",
        duration: "60 mins",
        activity: "IRF Nominee presentations",
        description:
          "Any nominees from the floor are to address IRF members (5 mins max).",
        speaker: "IEC Chair and nominees",
        location: "Main plenary hall",
        variant: "meeting",
      },
      {
        start: "9:25",
        finish: "9:55",
        duration: "30 mins",
        activity: "Plenary 6",
        description: "TBC",
        speaker: "TBC",
        location: "Main plenary hall",
        variant: "plenary",
      },
      {
        start: "10:00",
        finish: "10:30",
        duration: "30 mins",
        activity: "Coffee break",
        description: "TBC",
        variant: "meal",
      },
      {
        start: "10:30",
        finish: "11:45",
        duration: "60 mins",
        activity: "IRF Board Elections",
        description: "Voting",
        speaker: "IEC Chair",
        location: "Main plenary hall",
        variant: "meeting",
      },
      {
        start: "12:30",
        finish: "14:00",
        duration: "90 mins",
        activity: "Lunch break",
        location: "Designated dining area",
        variant: "meal",
      },
      {
        start: "14:00",
        finish: "14:30",
        duration: "30 mins",
        activity: "12th WRC Location announcement",
        description:
          "12th WRC Host present a snapshot of the next congress location.",
        speaker: "IRF President and 12th WRC Hosts",
        location: "Main plenary hall",
        variant: "registration",
      },
      {
        start: "14:35",
        finish: "15:05",
        duration: "30 mins",
        activity: "IRF Election announcements",
        description: "IRF Board announcement and official photo.",
        speaker: "IEC Chair",
        location: "Main plenary hall",
        variant: "meeting",
      },
      {
        start: "15:10",
        finish: "16:10",
        duration: "60 mins",
        activity: "Puerto Iguazu Declaration",
        speaker: "Master of Ceremony",
        location: "Main Plenary Hall",
        variant: "registration",
      },
      {
        start: "16:15",
        finish: "16:45",
        duration: "30 mins",
        activity: "Coffee break",
        location: "Main Plenary Hall",
        variant: "meal",
      },
      {
        start: "17:00",
        finish: "17:30",
        duration: "30 mins",
        activity: "Closing ceremony",
        description: "Regroup / WRC Conclusions",
        speaker: "Master of Ceremony",
        location: "Main Plenary Hall",
        variant: "registration",
      },
      {
        activity: "Evening free",
        variant: "free",
      },
    ],
  },
  {
    title: "Day 6: Saturday 24 April 2027",
    rows: [
      {
        start: "7:00",
        finish: "10:00",
        duration: "180 mins",
        activity: "Breakfast",
        location: "Own accommodation venue",
        variant: "meal",
      },
      {
        start: "10:00",
        activity: "Check out for everyone",
        variant: "registration",
      },
    ],
  },
];

const PlannedScheduleTable = () => {
  const thClass =
    "border border-forest-deep/30 bg-forest-mist px-3 py-2 text-left text-xs font-bold text-forest-deep";
  const tdClass = "border border-forest-deep/20 px-3 py-2 text-xs text-forest-deep";
  const variantClasses: Record<ScheduleVariant, string> = {
    registration: "bg-earth-brown/10 font-semibold",
    meal: "bg-gold-warm/35 font-semibold",
    plenary: "bg-forest-mist/70 font-semibold",
    workshop: "bg-rose-100 font-semibold",
    meeting: "bg-purple-100 font-semibold",
    field: "bg-forest-primary/15 font-semibold",
    free: "bg-sky-light/45 font-semibold",
  };

  const ColumnHeader = () => (
    <tr>
      {columns.map((column) => (
        <th key={column} className={thClass}>
          {column}
        </th>
      ))}
    </tr>
  );

  const DayHeader = ({ children }: { children: string }) => (
    <tr>
      <td
        colSpan={7}
        className="border border-forest-deep/30 bg-sky-blue/40 px-3 py-2 text-center text-sm font-bold uppercase text-forest-deep"
      >
        {children}
      </td>
    </tr>
  );

  const cellContent = (value?: string) => (
    <span className="whitespace-pre-line">{value ?? ""}</span>
  );

  return (
    <table className="min-w-[1420px] w-full border-collapse bg-card text-left">
      <colgroup>
        <col className="w-[80px]" />
        <col className="w-[80px]" />
        <col className="w-[105px]" />
        <col className="w-[245px]" />
        <col className="w-[560px]" />
        <col className="w-[160px]" />
        <col className="w-[190px]" />
      </colgroup>
      <tbody>
        <tr>
          <td
            rowSpan={2}
            className="border border-forest-deep/30 bg-forest-primary/25 px-3 py-3 text-center text-sm font-bold text-forest-deep"
          >
            19-23 April 2027
          </td>
          <td
            colSpan={6}
            className="border border-forest-deep/30 bg-forest-primary/25 px-3 py-2 text-center text-sm font-bold uppercase text-forest-deep"
          >
            11th IRF World Ranger Congress - Program
          </td>
        </tr>
        <tr>
          <td
            colSpan={6}
            className="border border-forest-deep/30 bg-forest-primary/25 px-3 py-2 text-center text-sm font-semibold text-forest-deep"
          >
            "Recognising Rangers: Advancing the profession to safeguard our future"
          </td>
        </tr>

        {scheduleDays.map((day) => (
          <Fragment key={day.title}>
            <DayHeader>{day.title}</DayHeader>
            <ColumnHeader />
            {day.rows.map((row, index) => (
              <tr key={`${day.title}-${row.activity}-${index}`}>
                <td className={tdClass}>{cellContent(row.start)}</td>
                <td className={tdClass}>{cellContent(row.finish)}</td>
                <td className={tdClass}>{cellContent(row.duration)}</td>
                <td className={`${tdClass} ${row.variant ? variantClasses[row.variant] : ""}`}>
                  {cellContent(row.activity)}
                </td>
                <td className={tdClass}>{cellContent(row.description)}</td>
                <td className={tdClass}>{cellContent(row.speaker)}</td>
                <td className={tdClass}>{cellContent(row.location)}</td>
              </tr>
            ))}
          </Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default PlannedScheduleTable;
