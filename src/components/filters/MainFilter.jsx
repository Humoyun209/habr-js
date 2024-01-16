import { useReducer, useState } from "react";
import searchIcon from "../../assets/search.png";
import closeIcon from "../../assets/close.png";
import MainFilterLink from "../UI/MainFilterLink";
import Tags from "../UI/Tags";

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
    "Можно удалённо",
  ];

  const initialState = {
    searchValue: "",
    iconInput: searchIcon,
    mainFilter: 1,
    salaryFilter: 'relevance',
  }

  const reducer = (state, action) => {
    switch(action.type) {
      case 'CHANGE_SEARCH':
        return {
          ...state,
          iconInput: closeIcon,
          searchValue: action.payload
        }
      case 'CLEAR_SEARCH':
        return {
          ...state,
           iconInput: searchIcon,
           searchValue: "" 
        }
      case 'FILTER_MAIN':
        return {
          ...state,
          mainFilter: action.payload
        }
      case 'SALARY_FILTER': 
        return {
          ...state,
          salaryFilter: action.payload
        }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const activeStyles = "border-b-4 border-[#5677fc] pb-2 text-black";

  return (
    <div className="px-5 py-8 flex flex-col gap-8 bg-white mb-5">
      <span className=" font-semibold text-[24px]">Работа и вакансии</span>
      <div className="flex gap-5 border-b border-[#ededed]">
        <MainFilterLink
          linkId={0}
          setMainFilter={() => dispatch({type: 'FILTER_MAIN', payload: 0})}
          mainFilter={state.mainFilter}
          activeStyles={activeStyles}
        >
          ВСЕ ВАКАНСИИ
        </MainFilterLink>
        <MainFilterLink
          linkId={1}
          mainFilter={state.mainFilter}
          activeStyles={activeStyles}
          setMainFilter={() => dispatch({type: 'FILTER_MAIN', payload: 1})}
        >
          ПОДХОДЯЩИЕ
        </MainFilterLink>
      </div>
      <div className="flex justify-between gap-3">
        <span className="bg-[#ededed] w-[100%] p-2 rounded-[5px] flex">
          <input
            onInput={(event) => {dispatch({type: 'CHANGE_SEARCH', payload: event.target.value})}}
            placeholder="Поиск"
            className="bg-[#ededed] outline-none w-[100%]"
            type="text"
            value={state.searchValue}
          />
          <span onClick={() => {

            dispatch({type: 'CLEAR_SEARCH'})}
          }>
            <img className=" cursor-pointer" width={"24px"} src={state.iconInput} alt="" />
          </span>
        </span>

        <select
          className="rounded-[5px] outline-none p-2 end"
          name="filterByMoney"
          onChange={(event) => {
            dispatch({type: 'SALARY_FILTER', payload: event.target.value})
          }}
        >
          <option value="relevance">По соответствию</option>
          <option value="date">По дате размещения</option>
          <option value="salary_desc">По убыванию зарплаты</option>
          <option value="salary_asc">По возрастанию зарплаты</option>
        </select>
      </div>
      <div style={{display: state.mainFilter === 0 ? 'none' : 'block'}}>
        <span className="font-semibold">
          Фильтры на основе вашего профиля:{" "}
        </span>
        <Tags tags={tags} sep=" • "/>
      </div>
      <span>Найдено 962 вакансии</span>
    </div>
  );
};

export default MainFilter;
