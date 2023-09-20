import { useNavigate, useParams } from "react-router-dom";


import "./Category.scss";
import useFetch from "../../../hooks/useFetch";
import Products from "../../Products/Products";

const Category = ({categories}) => {
    const {id} = useParams();

    const {data} = useFetch(
        `/api/products?populate=*&[filters][categories][id] = ${id}`
    );

    const navigate = useNavigate();
    return (
       <div className="category-main-content">
        <div className="layout">
            <div className="category-title">{data?.data?.[0]?.attributes?.categories?.data?.[0]?.attributes?.title}</div>
            <Products innerPage={true} products = {data} />
            </div>
       </div>
    );
};
export default Category;
