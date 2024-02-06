import CreateDataCompany from "../components/create-company/CreateDataCompany";
import CreateLogo from "../components/create-company/CreateLogo";
import VacanciesCompany from "../components/layout/VacanciesCompany";
import { useState } from "react";
import { useCreateCompanyMutation } from "../feautures/create-company/actions";
import { toast } from "react-toastify";
import useAuth from '../hooks/use-auth'
import { useForm } from "react-hook-form";

const CreateCompanyPage = () => {
  const [about, setAbout] = useState("");
  const [logoUrl, setLogoUrl] = useState("");

  const {access_token} = useAuth()

  const [createCompany] = useCreateCompanyMutation();

  const handleAboutChange = (event, editorData) => {
    const data = editorData.getData();
    setAbout(data);
  };

  const {handleSubmit, control} = useForm({mode: "onBlur"})

  const handleChangeImage = (event) => {
    const photo = event.target.files[0];
    setLogoUrl(URL.createObjectURL(photo));
  };

  const handleCreateCompany = async (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const url = event.target.url.value;
    const phone = event.target.phone.value;
    const email = event.target.email.value;
    const logo = event.target.logo.files[0];
    if (
      title &&
      email &&
      (url.startsWith("http://") || url.startsWith("https://")) &&
      city &&
      phone &&
      logo
    ) {
      const data = new FormData();
      data.append("name", title);
      data.append("url", url);
      data.append("city_id", city.value);
      data.append("phone", phone);
      data.append("email", email);
      data.append("about_company", about);
      data.append("logo", logo);
      const result = await createCompany({data, access_token}).unwrap();
      console.log(result)
    } else {
      toast.error("Ошибка при введении данных!");
    }
  };
  return (
    <div className="max-w-[1200px] mx-auto grid grid-cols-12 my-5 gap-5">
      <form
        className=" col-span-8"
        method="post"
        name="createCompany"
        onSubmit={handleSubmit((data) => console.log(data))}
      >
        <CreateLogo 
          handleChangeImage={handleChangeImage} 
          logoUrl={logoUrl} 
        />
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
  );
};

export default CreateCompanyPage;
