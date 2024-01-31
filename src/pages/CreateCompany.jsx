import CreateBase from "../components/create-company/CreateLogo"

const CreateCompany = () => {
    return (
        <div className="max-w-[1200px] mx-auto grid grid-cols-12 my-5">
            <div className="col-span-4"></div>
            <div className=" col-span-8">
                <CreateBase />
            </div>
        </div>
    )
}

export default CreateCompany