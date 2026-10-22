// type PlayerProps = {
//   name: string;
//   imgSrc: string;
// };
// function Player({ name, imgSrc }: PlayerProps) {
//   return { name: "riri", imgSrc: "./assets/quack.png" };
// }
// export default Player;

// export const player = () => {
//   const name: string = "riri";
//   return (
//     <div>{name}</div>
//   )
// }
// ça marche (normalement)

type Props = {
  name: string;
};

export const Player = ({ name }: Props) => {
  return <>{name}</>;
};
