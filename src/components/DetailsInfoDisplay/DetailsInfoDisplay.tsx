type DetailsInfoProps = {
  label: string;
  value: string | number;
};

export const DetailsInfoDisplay = ({ label, value }: DetailsInfoProps) => {
  return (
    <p>
      {label}: <b>{value}</b>
    </p>
  );
};
