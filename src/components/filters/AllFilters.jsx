const AllFilters = () => {
    
    return (
        <div className="p-4 bg-white flex flex-col gap-[20px]">
            <div>
                <span className="text-[17px] text-[#464646] font-bold">Специализация</span>
                <div className="py-2 px-3 bg-[#ededed] text-[#919191] rounded-[5px] my-3">Выберите специализацию</div>
            </div>
            <div className="w-full">
                <div className="text-[17px] text-[#464646] font-bold">Квалификация</div>
                <select className=" w-full my-3 px-3 py-2" name="" id="">
                    <option value="">Любая</option>
                    <option value="1">Стажёр (Intern)</option>
                    <option value="3">Младший (Junior)</option>
                    <option value="4">Средний (Middle)</option>
                    <option value="5">Старший (Senior)</option>
                    <option value="6">Ведущий (Lead)</option>
                </select>
            </div>
             <div>
                <div className="text-[17px] text-[#464646] font-bold">Профессиональные навыки </div>
                <input className="bg-[#ececec] outline-none p-2 w-full my-3" type="text"  placeholder="Выберите навык"/>
             </div>
             <div>
                <div className="text-[17px] text-[#464646] font-bold">Зарплата </div>
                <div className="flex items-center gap-5">
                    <input className="bg-[#ececec] outline-none p-2 my-3 w-full" type="text"  placeholder="От"/>
                    <select className="p-2 ml-auto">
                        <option value="RUR">₽</option>
                        <option value="EUR">€</option>
                        <option value="USD">$</option>
                        <option value="UAH">₴</option>
                        <option value="KZT">₸</option>
                    </select>
                </div>
                <div className="mt-3">
                    <input type="checkbox" name="" id="" />
                    <label className='ml-2' htmlFor="showed">Указана</label>
                </div>
             </div>
             <div>
                <div className="text-[17px] text-[#464646] font-bold">Местоположение  </div>
                <input className="bg-[#ececec] outline-none p-2 my-3 w-full" type="text"  placeholder="Введите город, область или страну"/>
            </div>

            <div>
                <div className="text-[17px] text-[#464646] font-bold">Тип занятости</div>
                <div className="flex items-center gap-5">
                    <select className="p-2 w-full mt-3">
                        <option value="">Любой</option>
                        <option value="full_time">Полный рабочий день</option>
                        <option value="part_time">Неполный рабочий день</option>
                    </select>
                </div>
                <div className="mt-3">
                    <input type="checkbox" name="" id="" />
                    <label className='ml-2' htmlFor="showed">Можно удалённо </label>
                </div>
             </div>

             <div>
                <div className="text-[17px] text-[#464646] font-bold">Компания </div>
                <div>
                    <input className="mt-3" type="checkbox" name="" id="" />
                    <label className='ml-2' htmlFor="showed">Аккредитованные ИТ-компании </label>
                </div>
                <input className="bg-[#ececec] outline-none p-2 my-3 w-full" type="text"  placeholder="Выберите компанию"/>
                <div className="mt-3">
                    <input type="checkbox" name="" id="" />
                    <label className='ml-2' htmlFor="showed"> Исключить из поиска </label>
                </div>
             </div>
        </div>
    )
}


export default AllFilters