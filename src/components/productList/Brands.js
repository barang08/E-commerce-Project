import { ImagesData } from "../../assets/ImagesData"

function Brands() {
    return (
        <div className="flex px-48 justify-center items-center bg-[#FAFAFA]">
            <div className="flex grow justify-between">
                {ImagesData.brands.map((value, i) => (
                    <div className=" flex items-center " key={i}>
                        <img src={value} />
                    </div>
                ))}
            </div>

        </div>

    )
}

export default Brands;

