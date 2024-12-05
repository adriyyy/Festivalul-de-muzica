import VerticalSlider from "../components/VerticalSlider";

const MainPage = () => {
  return (
    <div
      className="h-full flex bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: "url('/images/wallpaper.png')" }}
    >
      <VerticalSlider />
      <div className="flex">
        <div className="flex-1">
          <h1 className="text-9xl text-red-600">Hello</h1>
        </div>
        <div className="flex-1">
          <img src="/images/Guitar1.png" />
          <img src="/images/Guitar2.png" />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
