import Feature from "../Feature/Feature";

const PriceOption = ({ priceOption }) => {

    const {name, features, price} = priceOption;

    return (
        <div className="bg-blue-500 text-white rounded-xl p-6 flex flex-col">
            <h2 className="my-5 font-semibold">
                <span className="text-6xl">{price}</span>
                <span className="text-2xl">/mon</span>
            </h2>
            <h3 className="text-3xl my-5 font-bold">{name}</h3>
            <div className="flex-1">
                {
                    features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
                }
            </div>
            <button className="bg-green-400 py-3 font-semibold my-4 w-full rounded-xl hover:bg-green-800">ADD</button>
            </div>
    );
};

export default PriceOption;