const Statistics = ({ data }) => {
  return (
    <section className="bg-[#373535] py-16">
      <div className="container grid w-11/12 grid-cols-2 justify-center gap-y-8 lg:grid-cols-4">
        {data.map((item) => (
          <div key={item.id} className="flex flex-col items-center">
            <h1 className="font-optima text-4xl text-white lg:text-5xl">
              {item.cnt}+
            </h1>
            <p className="para mt-3 text-center font-light text-white">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;
