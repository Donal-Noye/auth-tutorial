export const Heading = ({ title }: { title: string }) => {
  return (
    <div className="w-full pb-5 mb-6 border-b dark:border-b-secondary">
      <h4 className="text-lg font-semibold">
        {title}
      </h4>
    </div>
  );
};