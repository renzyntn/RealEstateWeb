import CountUp from "react-countup";

function ClientCount() {
  return (
    <span className="stat-value md:text-4xl">
      <CountUp end={89} duration={1.5} suffix="+" />
    </span>
  );
}

export default ClientCount;
