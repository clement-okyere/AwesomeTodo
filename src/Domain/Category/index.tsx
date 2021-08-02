import { useEffect } from "react";
import SectionTitle from "../../Components/SectionTitle"

const Category = () => {

    useEffect(() => {
        console.log("useEffect activated!");
    }, [])

    return (
        <SectionTitle title="Categories" />
    )
}

export default Category;