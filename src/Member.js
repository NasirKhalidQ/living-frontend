function Member({ name, designation, image }) {
  return (
    <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
      <div className="mb-8">
        <img
          className="object-center object-cover rounded-full h-36 w-36"
          src={image}
          alt={name}
        />
      </div>
      <div className="text-center">
        <p className="text-xl text-gray-700 font-bold mb-2">{name}</p>
        <p className="text-base text-gray-400 font-normal">{designation}</p>
      </div>
    </div>
  );
}

export default Member;
