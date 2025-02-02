interface Props {
  date: Date;
}

export default function FormattedDateR({ date }: Props) {
  return (
    <time dateTime={date.toISOString()}>
      {date.toLocaleDateString("en-us", {
        year: "numeric",
        month: "short",
        day: "numeric",
        // timeZone: "UTC",
        // timeZoneName: "short",
        hour: "numeric",
        minute: "numeric",
      })}
    </time>
  );
}
