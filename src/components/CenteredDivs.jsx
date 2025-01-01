function CenteredDivs() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex flex-col items-center">
        <img
          src="image1.jpg"
          alt="Image 1"
          className="w-32 h-32 rounded-full"
        />
        <h1 className="mt-4 text-xl font-bold">Title 1</h1>
      </div>
      <div className="flex flex-col items-center">
        <img
          src="image2.jpg"
          alt="Image 2"
          className="w-32 h-32 rounded-full"
        />
        <h1 className="mt-4 text-xl font-bold">Title 2</h1>
      </div>{" "}
      <div className="flex flex-col items-center">
        <img
          src="image2.jpg"
          alt="Image 2"
          className="w-32 h-32 rounded-full"
        />
        <h1 className="mt-4 text-xl font-bold">Title 2</h1>
      </div>
    </div>
  );
}

export default CenteredDivs;
