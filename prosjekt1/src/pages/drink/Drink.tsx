import { useParams } from "react-router-dom";
import CarouselItem from "../../components/CarouselItem/CarouselItem";

export default function Drink() {
  const { drinkId } = useParams();
  return (
    <div>
      {drinkId === undefined ? (
        <> Id not valid</>
      ) : (
        <>
          <CarouselItem drinkId={drinkId} key={drinkId} />
        </>
      )}
    </div>
  );
}
