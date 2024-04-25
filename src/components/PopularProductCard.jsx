const PopularProductCard = ({ imgURL, name }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt={name} className="w-[416px] h-[300px]" />
      <div className="mt-1 lg:mt-8 flex justify-start gap-2.5"></div>
      <h3 className="mt-8 text-2xl lg:text-3xl xl:text-4xl leading-normal font-semibold font-grotesk text-content-color">
        {name}
      </h3>
    </div>
  );
};

export default PopularProductCard;
