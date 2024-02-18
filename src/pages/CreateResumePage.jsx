import CreateRequiredData from '../components/resume/CreateRequiredData'
import ResumeBar from '../components/resume/ResumeBar'

const CreateResumePage = () => {
    return (
        <div className="max-w-[1200px] mx-auto grid grid-cols-12 gap-5">
            <div className=" col-span-3">
                <ResumeBar />
            </div>
            <div className=" col-span-9">
                <CreateRequiredData />
            </div>
        </div>
    )
}

export default CreateResumePage
