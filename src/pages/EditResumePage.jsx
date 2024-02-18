import ResumeBar from '../components/resume/ResumeBar'

const EditResume = () => {
    return (
        <div className="max-w-[1200px] mx-auto grid grid-cols-12 gap-5">
            <div className=" col-span-3">
                <ResumeBar />
            </div>
            <div className=" col-span-9"></div>
        </div>
    )
}

export default EditResume
