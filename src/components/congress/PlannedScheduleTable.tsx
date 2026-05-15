const columns = ["Start Time", "Finish Time", "Session Duration", "Session / Activity", "Description"];

const PlannedScheduleTable = () => {
  const thClass = "border border-forest-deep/30 bg-forest-mist px-3 py-2 text-left text-xs font-bold text-forest-deep";
  const tdClass = "border border-forest-deep/20 px-3 py-2 text-xs text-forest-deep";
  const mealClass = "bg-gold-warm/35 font-semibold";
  const plenaryClass = "bg-forest-mist/70 font-semibold";
  const workshopClass = "bg-rose-100 font-semibold";
  const meetingClass = "bg-purple-100 font-semibold";
  const fieldClass = "bg-forest-primary/15 font-semibold";
  const freeClass = "bg-sky-light/45 font-semibold";
  const registrationClass = "bg-earth-brown/10 font-semibold";

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
      <td colSpan={5} className="border border-forest-deep/30 bg-sky-blue/40 px-3 py-2 text-center text-sm font-bold uppercase text-forest-deep">
        {children}
      </td>
    </tr>
  );

  const EmptyTimeCells = () => (
    <>
      <td className={`${tdClass} text-forest-primary/55`}>TBC</td>
      <td className={`${tdClass} text-forest-primary/55`}>TBC</td>
      <td className={`${tdClass} text-forest-primary/55`}>TBC</td>
    </>
  );

  const SpanActivityRow = ({ label, className }: { label: string; className: string }) => (
    <tr>
      <EmptyTimeCells />
      <td colSpan={2} className={`${tdClass} ${className} text-center`}>
        {label}
      </td>
    </tr>
  );

  const NestedActivityRow = ({ label, cells, className }: { label: string; cells: string[]; className: string }) => (
    <tr>
      <EmptyTimeCells />
      <td colSpan={2} className={`${tdClass} ${className} p-0`}>
        <div className="border-b border-forest-deep/20 px-3 py-2 text-center font-semibold">{label}</div>
        <div className="grid" style={{ gridTemplateColumns: `repeat(${cells.length}, minmax(0, 1fr))` }}>
          {cells.map((cell) => (
            <div key={cell} className="border-r border-forest-deep/20 px-2 py-2 text-center text-[11px] last:border-r-0">
              {cell}
            </div>
          ))}
        </div>
      </td>
    </tr>
  );

  return (
    <table className="min-w-[980px] w-full border-collapse bg-card text-left">
      <colgroup>
        <col className="w-[110px]" />
        <col className="w-[110px]" />
        <col className="w-[150px]" />
        <col className="w-[220px]" />
        <col className="w-[520px]" />
      </colgroup>
      <tbody>
        <tr>
          <td rowSpan={2} className="border border-forest-deep/30 bg-forest-primary/25 px-3 py-3 text-center text-sm font-bold text-forest-deep">
            19-23 April 2027
          </td>
          <td colSpan={4} className="border border-forest-deep/30 bg-forest-primary/25 px-3 py-2 text-center text-sm font-bold uppercase text-forest-deep">
            11th IRF World Ranger Congress - Program
          </td>
        </tr>
        <tr>
          <td colSpan={4} className="border border-forest-deep/30 bg-forest-primary/25 px-3 py-2 text-center text-sm font-semibold text-forest-deep">
            "Recognizing Rangers: Advancing the profession to safeguard our future"
          </td>
        </tr>

        <DayHeader>Day 1: Monday 19 April 2027</DayHeader>
        <ColumnHeader />
        <tr>
          <EmptyTimeCells />
          <td className={`${tdClass} ${registrationClass}`}>Registration</td>
          <td className={`${tdClass} ${registrationClass}`}>Registration will be open all day for participants arriving at different times of the day.</td>
        </tr>
        <tr>
          <EmptyTimeCells />
          <td colSpan={2} className={`${tdClass} ${fieldClass} text-center`}>Moonlight Tour to Iguazu</td>
        </tr>

        <DayHeader>Day 2: Tuesday 20 April 2027</DayHeader>
        <ColumnHeader />
        <SpanActivityRow label="Coffee break" className={mealClass} />
        <SpanActivityRow label="Plenary 1" className={plenaryClass} />
        <SpanActivityRow label="Plenary 2" className={plenaryClass} />
        <SpanActivityRow label="Lunch break" className={mealClass} />
        <NestedActivityRow
          label="Workshops"
          cells={["Workshop 1", "Workshop 2", "Workshop 3", "Workshop 4", "Workshop 5", "Workshop 6"]}
          className={workshopClass}
        />
        <SpanActivityRow label="Coffee break" className={mealClass} />
        <NestedActivityRow
          label="6 x Regional Meetings"
          cells={[
            "Regional Meeting 1\nOceania",
            "Regional Meeting 2\nEurope",
            "Regional Meeting 3\nNorth America",
            "Regional Meeting 4\nAsia",
            "Regional Meeting 5\nAfrica",
            "Regional Meeting 6\nCentral and South America",
          ]}
          className={`${meetingClass} whitespace-pre-line`}
        />
        <tr><td colSpan={5} className={`${tdClass} ${freeClass} text-center`}>Evening free</td></tr>

        <DayHeader>Day 3: Wednesday 21 April 2027</DayHeader>
        <ColumnHeader />
        <SpanActivityRow label="Breakfast" className={mealClass} />
        <SpanActivityRow label="Coffee break" className={mealClass} />
        <SpanActivityRow label="Plenary 3" className={plenaryClass} />
        <SpanActivityRow label="Plenary 4" className={plenaryClass} />
        <SpanActivityRow label="Plenary 5" className={plenaryClass} />
        <SpanActivityRow label="Lunch break" className={mealClass} />
        <NestedActivityRow
          label="Workshops"
          cells={["Workshop 7", "Workshop 8", "Workshop 9", "Workshop 10", "Workshop 11", "Workshop 12"]}
          className={workshopClass}
        />
        <SpanActivityRow label="Coffee break" className={mealClass} />

        <DayHeader>Day 4: Thursday 22 April 2027</DayHeader>
        <ColumnHeader />
        <SpanActivityRow label="Breakfast" className={mealClass} />
        <SpanActivityRow label="Field trips (Iguazu Falls)" className={fieldClass} />
        <tr><td colSpan={5} className={`${tdClass} ${freeClass} text-center`}>Evening free</td></tr>

        <DayHeader>Day 5: Friday 23 April 2027</DayHeader>
        <ColumnHeader />
        <tr><td className={tdClass}>07:00</td><td className={tdClass}>08:00</td><td className={tdClass}>60 mins</td><td className={tdClass} /><td className={`${tdClass} ${mealClass} text-center`}>Breakfast</td></tr>
        <tr><td className={tdClass}>08:00</td><td className={tdClass}>08:15</td><td className={tdClass}>15 min</td><td className={tdClass} /><td className={tdClass} /></tr>
        <SpanActivityRow label="Plenary 6" className={plenaryClass} />
        <SpanActivityRow label="Coffee break" className={mealClass} />
        <SpanActivityRow label="Lunch break" className={mealClass} />
      </tbody>
    </table>
  );
};

export default PlannedScheduleTable;
