type Props = {
  name: string;
  imgSrc: string;
};

export const Player = ({ name, imgSrc }: Props) => {
  return (
    <>
      <p>{name}</p>
      <img src={imgSrc} alt={name} />
    </>
  );
};
