type PlayerData = {
  name: string;
  img: string;
};

function player(): PlayerData {
  return (
    <>
      <img
        src="https://i.pinimg.com/736x/81/f7/14/81f7143cbd1a8869af38605fe597a114.jpg"
        alt="image riri"
      />
      <figcaption>"riri"</figcaption>
    </>
  );
}
console.log(player);
export default player;
