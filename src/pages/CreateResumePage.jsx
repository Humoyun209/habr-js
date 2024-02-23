import { useForm } from 'react-hook-form'
import CreateRequiredData from '../components/resume/CreateRequiredData'
import ResumeBar from '../components/resume/ResumeBar'
import useAuth from '../hooks/use-auth'
import { useState } from 'react'
import { useCreateResumeMutation } from '../feautures/resumes/resume-actions'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const CreateResumePage = () => {
    const { control, reset, handleSubmit } = useForm({ mode: 'onBlur' })
    const { access_token } = useAuth()
    const [addResume] = useCreateResumeMutation()
    const navigate = useNavigate()

    const [about, setAbout] = useState('')
    const [experience, setExperience] = useState('')
    const [sex, setSex] = useState(0)

    const baseCKEChange = (editorData, setState) => {
        const data = editorData.getData()
        setState(data)
    }

    const createResume = async data => {
        if (!about) {
            toast.error('Запольните пожалуйста поля "О себе"', { delay: 1 })
            return
        }
        data.experience = experience
        data.sex = sex
        data.about = about
        const res = await addResume({ data, access_token })
        if (res.id) {
            navigate('/profile/personal/edit')
        }
    }

    return (
        <div className="max-w-[1200px] mx-auto grid grid-cols-12 gap-5">
            <div className=" col-span-3">
                <ResumeBar />
            </div>
            <div className=" col-span-9">
                <form onSubmit={handleSubmit(createResume)}>
                    <CreateRequiredData
                        control={control}
                        reset={reset}
                        setSex={setSex}
                        sex={sex}
                        setExperience={setExperience}
                        experience={experience}
                        setAbout={setAbout}
                        about={about}
                        baseCKEChange={baseCKEChange}
                    />
                </form>
            </div>
        </div>
    )
}

export default CreateResumePage
