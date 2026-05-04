const ITEMS = [
  "Eesti Kardiliit",
  "·",
  "Talendid Rajale 2026",
  "·",
  "Kardiakadeemia",
  "·",
  "Võistlussarjad",
  "·",
  "Est. 2009",
];

const repeated = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];

export default function Marquee() {
  return (
    <div
      className="overflow-hidden border-y py-3.5"
      style={{
        background: "#00e040",
        borderColor: "rgba(0,0,0,0.08)",
      }}
    >
      <div
        className="flex gap-10 whitespace-nowrap w-max"
        style={{ animation: "marquee 22s linear infinite" }}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            className="text-black/70"
            style={{
              fontSize: "11px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              fontWeight: item === "·" ? 400 : 500,
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
