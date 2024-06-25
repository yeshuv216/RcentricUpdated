
const Statistics = ({data}) => {
  return (
    <section className="bg-[#373535] py-16">
      <div className="container grid grid-cols-2 lg:grid-cols-4 justify-center w-11/12">
        {data.map((item) => (
          <div key={item.id} className="flex flex-col items-center">
            <h1 className="font-optima text-5xl text-white">{item.cnt}+</h1>
            <p className="para text-center text-white mt-3">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;
