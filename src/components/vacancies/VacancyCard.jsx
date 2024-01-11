import companyImage from "../../company-images/company1.jpg";
import fillFavorite from "../../assets/favorite-fill.png";
import nullFavorite from "../../assets/favorite-null.png";
import checkMark from "../../assets/check.png";
import { useState } from "react";

const VacancyCard = () => {
  const tags = [
    "Git",
    "SQL",
    "PostgreSQL",
    "Python",
    "Linux",
    "Docker",
    "ООП",
    "Django",
    "FastAPI",
  ];

  const cities = ['Санкт-Петербург', 'Минск', 'Нижний Новгород']
  const [favorite, setFavorite] = useState(nullFavorite);
  return (
    <div className="flex gap-5 bg-white py-5 px-3 text-[#464646]">
      <div className="flex flex-col justify-between ">
        <img className=" max-w-none w-[50px]" src={companyImage} alt="" />
        <span></span>
      </div>
      <div className=" flex flex-col gap-1">
        <div className=" flex gap-1 items-center">
          <a className=" hover:underline text-[14px]" href="#">T-PASS</a>
          <span>
            <img width={"20px"} src={checkMark} alt="" />
          </span>
        </div>
        <a className=" hover:underline text-[20px] font-bold" href="#">Middle Python-разрабочик (Django/Backend)</a>
        <div>
          <span>{ cities.map(city => (
            <span key={city}><a  className="hover:underline" href="#">{city}</a>, </span>
          )) }</span>
          <span> • </span>

          <a className="hover:underline" href="#">Можно удалённо • </a>
          <a className="hover:underline" href="#">Полный рабочий день</a>
        </div>
        <div className="text-[#68c07b] font-semibold">от 100 000 до 150 000 ₽</div>
        <div className="mt-2">
          <span>
            <a className="hover:underline" href="#">Бэкенд разработчик</a>, <a className="hover:underline" href="#">Старший (Senior)</a> • </span>
          {tags.map((tag) => (
            <span key={tag}><a className="hover:underline" href="#">{tag}</a> • </span>
          ))}
          <span key={"Celery"}><a className="hover:underline" href="#">Celery</a></span>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <span className="text-[#999999] w-max">25 декабря 2023</span>
        <img
          onClick={() =>
            setFavorite((fav) =>
              fav === nullFavorite ? fillFavorite : nullFavorite
            )
          }
          className=" ml-auto cursor-pointer"
          width={"28px"}
          src={favorite}
          alt=""
        />
      </div>
    </div>
  );
};

export default VacancyCard;
