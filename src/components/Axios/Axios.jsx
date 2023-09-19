import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import ComposedChart from "../ComposedChart/ComposedChart";
import { ColorRing } from 'react-loader-spinner'

const Axios = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const allData = data.data.data;
                const phones = allData.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        brand: parseInt(phone.slug.split('-')[1])
                    }
                    return obj;
                })
                setData(phones);
                setLoading(false);
            })
    }, [])

    return (
        <div>
            <div className="flex justify-center">
                {
                    loading && <ColorRing
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
                    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                />
                }
            </div>
            <ComposedChart data={data}></ComposedChart>
        </div>
    );
};

export default Axios;