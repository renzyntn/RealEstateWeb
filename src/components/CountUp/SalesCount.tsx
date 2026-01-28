import CountUp from "react-countup";

function SalesCount() {
  return (
    <span className="stat-value md:text-4xl">
      <CountUp end={28.5} decimals={1} duration={1.5} prefix="$" suffix="M" />
    </span>
  );
}

export default SalesCount;
