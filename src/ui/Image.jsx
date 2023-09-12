const Image = ({ src, alt, name, price }) => {
  return (
    <div className="mx-auto mb-4 max-w-xs">
      <img src={src} alt={alt} className="h-auto w-full" />
      <div className="mt-2">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-sm text-gray-600">{price}</p>
      </div>
    </div>
  );
};

export default Image;
