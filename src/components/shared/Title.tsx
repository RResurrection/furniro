const Title = ({ title, className }: TitleProps) => {
  return (
    <div>
      <h2 className={className}>{title}</h2>
    </div>
  );
};

export default Title;
