import { useTheme } from "react-jss";

const PieChart = ({
  percentage,
  growth,
  percentageColor1,
  percentageColor2,
}) => {
  const theme = useTheme();
  const radius = 50;
  const strokeWidth = 8;
  const circumference = 2 * Math.PI * radius;

  const offset = growth
    ? circumference - (percentage / 100) * circumference
    : (percentage / 100) * circumference;

  return (
    <svg
      height={radius * 1.6 + strokeWidth}
      viewBox={`0 0 ${radius * 2 + strokeWidth} ${radius * 2 + strokeWidth}`}
    >
      <circle
        cx={radius + strokeWidth / 2}
        cy={radius + strokeWidth / 2}
        r={radius}
        stroke={percentageColor1}
        strokeWidth={strokeWidth}
        fill="none"
      />
      <circle
        cx={radius + strokeWidth / 2}
        cy={radius + strokeWidth / 2}
        r={radius}
        stroke={percentageColor2}
        strokeWidth={strokeWidth}
        strokeDasharray={`${circumference} ${circumference}`}
        strokeDashoffset={offset}
        fill="none"
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        stroke={theme.primaryColor}
        strokeWidth="1px"
        dy=".3em"
        fontSize="20px"
        fontWeight={500}
      >
        {growth ? "+" : "-"}
        {percentage}%
      </text>
    </svg>
  );
};

export default PieChart;
