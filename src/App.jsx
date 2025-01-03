//

function App() {
  return (
    <div className="lg:flex justify-center items-center">
      <div className="flex flex-col bg-blue-400 m-1 rounded-t-md hover:cursor-pointer hover:bg-fuchsia-500">
        <img
          src="../src/assets/images/sanjoy6.jpg"
          alt="sanjoy6"
          className="w-72 hover:opacity-80"
        />
        <p className="text-white font-semibold p-1 ">Sanjoy Gorai</p>
      </div>
      <div className="flex flex-col  bg-blue-400 m-1 hover:cursor-pointer hover:bg-fuchsia-500">
        <img
          src="../src/assets/images/grany1.jpg"
          alt="sanjoy6"
          className="w-72 hover:opacity-80"
        />
        <p className=" text-white font-semibold p-1">Sankari Gorai</p>
      </div>
      <div className="flex flex-col  bg-blue-400 m-1 hover:cursor-pointer hover:bg-fuchsia-500">
        <img
          src="../src/assets/images/dad.jpg"
          alt="sanjoy6"
          className="w-72 hover:opacity-80"
        />
        <p className=" text-white font-semibold p-1">Sunil Gorai</p>
      </div>
      <div className="flex flex-col  bg-blue-400 m-1 hover:cursor-pointer hover:bg-fuchsia-500">
        <img
          src="../src/assets/images/sanjoy1.jpg"
          alt="sanjoy6"
          className="w-72 hover:opacity-80"
        />
        <p className=" text-white font-semibold p-1">Mithu Gorai</p>
      </div>
    </div>
  );
}

export default App;
