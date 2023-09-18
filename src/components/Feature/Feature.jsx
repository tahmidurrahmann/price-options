import { AiFillCheckCircle } from 'react-icons/ai';
const Feature = ({ feature }) => {
    return (
        <div className="my-2">
            <p className="text-xl flex items-center gap-3"> <AiFillCheckCircle className='text-green-400'></AiFillCheckCircle>  {feature}</p>
        </div>
    );
};

export default Feature;