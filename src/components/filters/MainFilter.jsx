import { useState } from "react";
import searchIcon from "../../assets/search.png";
import closeIcon from "../../assets/close.png";
import MainFilterLink from "../UI/MainFilterLink";

const MainFilter = () => {
  const tags = [
    "ООП",
    "Django",
    "Python",
    "SQL",
    "Git",
    "PostgreSQL",
    "Redis",
    "Celery",
    "Бухара",
  ];
  const format = "Можно удалённо";

  const activeStyles = "border-b-4 border-[#5677fc] pb-2 text-black";

  const [mainFilter, setMainFilter] = useState(1);

  const [iconInput, setIconInput] = useState(searchIcon)

  const [searchValue, setSearchValue] = useState("")

  const handleInput = (event) => {
    setSearchValue(event.target.value)
    const len = event.target.value.length
    if (len > 0) {
        setIconInput(closeIcon)
    } else if (len === 0 ) {
        setIconInput(searchIcon)
    }
  }

  const clearInput = () => {
    if (searchValue.length > 0) {
        setSearchValue("")
        setIconInput(searchIcon)
    }
  }

  return (
    <div className="px-5 py-8 flex flex-col gap-8 bg-white mb-5">
      <span className=" font-semibold text-[24px]">Работа и вакансии</span>
      <div className="flex gap-5 border-b border-[#ededed]">
        <MainFilterLink
          linkId={0}
          setMainFilter={setMainFilter}
          mainFilter={mainFilter}
          activeStyles={activeStyles}
        >
          ВСЕ ВАКАНСИИ
        </MainFilterLink>
        <MainFilterLink
          linkId={1}
          mainFilter={mainFilter}
          activeStyles={activeStyles}
          setMainFilter={setMainFilter}
        >
          ПОДХОДЯЩИЕ
        </MainFilterLink>
      </div>
      <div className="flex justify-between gap-3">
        <span className="bg-[#ededed] w-[100%] p-2 rounded-[5px] flex">
          <input
            onInput={handleInput}
            placeholder="Поиск"
            className="bg-[#ededed] outline-none w-[100%]"
            type="text"
            value={searchValue}
          />
          <span onClick={clearInput}>
            <img className=" cursor-pointer" width={"24px"} src={iconInput} alt="" />
          </span>
        </span>

        <select
          className="rounded-[5px] outline-none p-2 end"
          name="filterByMoney"
          id=""
        >
          <option value="relevance">По соответствию</option>
          <option value="date">По дате размещения</option>
          <option value="salary_desc">По убыванию зарплаты</option>
          <option value="salary_asc">По возрастанию зарплаты</option>
        </select>
      </div>
      <div>
        <span className="font-semibold">
          Фильтры на основе вашего профиля:{" "}
        </span>
        {tags.map((tag) => (
          <a key={tag}>{tag} • </a>
        ))}
        <a>{format}</a>
      </div>
      <span>Найдено 962 вакансии</span>
    </div>
  );
};

export default MainFilter;
