type StatsInfoProps = {
  label: string;
  value: string | number;
};

export const StatsInfoDisplay = ({ label, value }: StatsInfoProps) => {
  return (
    <p className="text-gray-600">
      <span>{label}:</span> <span className="font-bold">{value}</span>
    </p>
  );
};
