import nullFavorite from "../../assets/favorite-null.png";

import vk from "../../assets/vk.png"
import facebook from "../../assets/facebook.png"
import twitter from "../../assets/twitter.png"


const AboutVacancy = () => {
    return (
        <div className="mt-5 bg-white p-4 flex flex-col gap-[10px] text-primary">
            <span className="my-2 text-[16px]  font-semibold">
                Описание вакансии
            </span>
            <hr />
            <span className="my-2 text-[16px] font-semibold">О компании и команде</span>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus sapiente aliquam, ea quaerat repudiandae amet, praesentium doloribus, porro velit nam cupiditate quam deserunt laborum ullam illo molestiae! Nostrum, iste omnis.
            Vero facilis nemo quae quisquam saepe reiciendis ipsum necessitatibus ducimus nobis sequi voluptatibus culpa asperiores ipsa, voluptates ad doloremque. Nostrum enim omnis sed ipsum esse dicta voluptatem vitae. Nihil, aliquam.</p>
            <span className="my-2 text-[16px] font-semibold">Обязанности:</span>
            <ul className="ml-2">
                <li> &mdash; Lorem ipsum dolor sit amet consectetur.</li>
                <li> &mdash; Lorem ipsum dolor sit amet consectetur.</li>
                <li> &mdash; Lorem ipsum dolor sit amet consectetur.</li>
                <li> &mdash; Lorem ipsum dolor sit amet consectetur.</li>
                <li> &mdash; Lorem ipsum dolor sit amet consectetur.</li>
                <li> &mdash; Lorem ipsum dolor sit amet consectetur.</li>
                <li> &mdash; Lorem ipsum dolor sit amet consectetur.</li>
            </ul>
            <span className="my-2 text-[16px] font-semibold">Ожидания от кандидата:</span>
            <ul className="ml-2">
                <li> &mdash; Lorem ipsum dolor sit amet consectetur.</li>
                <li> &mdash; Lorem ipsum dolor sit amet consectetur.</li>
                <li> &mdash; Lorem ipsum dolor sit amet consectetur.</li>
                <li> &mdash; Lorem ipsum dolor sit amet consectetur.</li>
                <li> &mdash; Lorem ipsum dolor sit amet consectetur.</li>
                <li> &mdash; Lorem ipsum dolor sit amet consectetur.</li>
                <li> &mdash; Lorem ipsum dolor sit amet consectetur.</li>
                <li> &mdash; Lorem ipsum dolor sit amet consectetur.</li>
                <li> &mdash; Lorem ipsum dolor sit amet consectetur.</li>
                <li> &mdash; Lorem ipsum dolor sit amet consectetur.</li>
            </ul>
            <span className="my-2 text-[16px] font-semibold">Условия работы:</span>
            <ul className="ml-2 mb-5">
                <li> &mdash; Lorem ipsum dolor sit amet consectetur.</li>
                <li> &mdash; Lorem ipsum dolor sit amet consectetur.</li>
                <li> &mdash; Lorem ipsum dolor sit amet consectetur.</li>
                <li> &mdash; Lorem ipsum dolor sit amet consectetur.</li>
                <li> &mdash; Lorem ipsum dolor sit amet consectetur.</li>
            </ul>
            <hr />
            <div className="mt-5 flex justify-between">
                <div className="flex gap-1">
                    <span className="">Поделиться: </span>
                    <a href="#"><img width={'27px'} src={twitter} alt="" /></a>
                    <a href="#"><img width={'27px'} src={vk} alt="" /></a>
                    <a href="#"><img width={'27px'} src={facebook} alt="" /></a>
                </div>
                <img width={'27px'} src={nullFavorite} alt="" />
            </div>
        </div>
    )
}

export default AboutVacancy