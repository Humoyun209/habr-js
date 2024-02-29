import EditDataResume from '../components/resume/EditDataResume'
import ResumeBar from '../components/resume/ResumeBar'
import { useGetTagsQuery } from '../feautures/company/actions'
import useAuth from '../hooks/use-auth'

const EditResumePage = () => {
    const { resume } = useAuth()
    const { data = [], isLoading, isError } = useGetTagsQuery()
    return (
        <div className="max-w-[1200px] mx-auto grid grid-cols-12 gap-5">
            <div className=" col-span-3">
                <ResumeBar />
            </div>
            <div className=" col-span-9">
                <EditDataResume tags={!isLoading ? !isError && data : []} resume={resume} />
            </div>
        </div>
    )
}

export default EditResumePage
