import CreateDataCompany from '../components/create-company/CreateDataCompany'
import CreateLogo from '../components/create-company/CreateLogo'
import VacanciesCompany from '../components/layout/VacanciesCompany'
import { useState } from 'react'
import { useCreateCompanyMutation } from '../feautures/create-company/actions'
import useAuth from '../hooks/use-auth'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const CreateCompanyPage = () => {
    const navigate = useNavigate()

    const [about, setAbout] = useState('')
    const handleAboutChange = (event, editorData) => {
        const data = editorData.getData()
        setAbout(data)
    }

    const [logo, setLogo] = useState(null)

    const { access_token } = useAuth()
    const [createCompany] = useCreateCompanyMutation()

    const { handleSubmit, control } = useForm({ mode: 'onBlur' })

    const handleSendForm = async data => {
        const company = new FormData()

        for (let attr in data) {
            if (attr == 'city') {
                company.append('city_id', data.city.value)
                continue
            }
            company.append(attr, data[attr])
        }
        logo ? company.append('logo', logo) : ''
        about ? company.append('about_company', about) : ''
        const result = await createCompany({ company, access_token })
        navigate(`/company/${result.data.id}`)
    }

    return (
        <div className="max-w-[1200px] mx-auto grid grid-cols-12 my-5 gap-5">
            <form
                className=" col-span-8"
                method="post"
                name="createCompany"
                onSubmit={handleSubmit(data => handleSendForm(data))}
            >
                <CreateLogo logo={logo} setLogo={setLogo} />
                <CreateDataCompany
                    handleAboutChange={handleAboutChange}
                    about={about}
                    control={control}
                />
            </form>
            <div className="col-span-4">
                <VacanciesCompany />
            </div>
        </div>
    )
}

export default CreateCompanyPage
