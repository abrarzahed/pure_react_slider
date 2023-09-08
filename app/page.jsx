import Image from "next/image";
import image1 from "./assets/1.jpg";
import image2 from "./assets/2.jpg";
import image3 from "./assets/3.jpg";
import image4 from "./assets/4.jpg";
import Carousel from "./components/Carousel";

export default function Home() {
  const sliderData = [image1, image3, image4];
  return (
    <main className="App">
      <div className="max-w-lg mx-auto mt-8">
        <Carousel autoSlide={true}>
          {sliderData.map((item, i) => (
            <Image key={i} src={item} alt={item} />
          ))}
        </Carousel>
      </div>
    </main>
  );
}
