import { useRef } from 'react'
import Button from '../UI/Button'
import createImg from '../../assets/image-create.png'

const CreateBanner = () => {
    const BannerImg = false
    const bannerRef = useRef(null)
    return (
        <>
            {BannerImg ? (
                <img src="" alt="" />
            ) : (
                <div className="bg-white flex flex-col justify-center items-center gap-10 py-10 px-20">
                    <img src={createImg} alt="" />
                    <div className=" flex flex-col justify-center items-center">
                        <p className="text-secondary text-[16px]">
                            Здесь вы можете разместить баннер компании
                        </p>
                        <span className="text-secondary text-[16px]">
                            Рекомендуемый размер 762х200px
                        </span>
                    </div>
                    <input type="file" className="hidden" ref={bannerRef} />
                    <Button onClick={() => bannerRef.current.click()}>Загрузить</Button>
                </div>
            )}
        </>
    )
}

export default CreateBanner
