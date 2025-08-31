export default function showHeader() {
    return (
        `<div class="px-[25px] py-[30px]">
        <div>
            <div class="flex justify-between">
                <a href="/"><img class="w-[175px] h-[49px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRou1Y7DXkTURWrO-2ioBioMLw3WukijSZIzQ&s" alt="logo"></a>
                <div class="flex items-center gap-[20px]">
                    <button
                        class="bg-[#EF3340] text-white p-[10px_15px] font-bold rounded-[20px] cursor-pointer">Kataloq</button>
                    <div
                        class="flex items-center border-[1px] border-gray-300 bg-[#f8fafc] hover:bg-white hover:shadow w-[410px] justify-between p-[10px_15px] rounded-[20px] ">
                        <input type="text" id="searchInput" placeholder="Növbəti kitabınızı axtarın"
                            class="outline-none w-[355px] placeholder-black ">
                        <i class="fa-solid fa-magnifying-glass hover:text-[#EF3340] cursor-pointer"></i>
                    </div>

                </div>
                <div class="flex items-center gap-[20px]">
                    <span id="languagesSpan" class="flex items-center gap-[3px] relative cursor-pointer">
                        AZ
                        <i id="langIcon" class="fa-solid fa-angle-down" onclick="toggleArrow()"></i>
                    </span>

                  
                    <div id="languageDropdown"
                        style="display: none; background: white;  padding: 10px; position: absolute; margin-top: 100px;"
                        class="flex flex-col border-[0px] shadow-xl  rounded-[10px]">
                        <div
                            class="cursor-pointer text-[#EF3340] hover:text-black hover:bg-gray-100 rounded-[15px]  w-[30px] flex  justify-center mb-[5px]">
                            RU</div>
                        <div
                            class="cursor-pointer text-[#EF3340] hover:text-black hover:bg-gray-100 rounded-[15px]  w-[30px] flex  justify-center">
                            EN</div>
                    </div>

                    <span id="accountButton" onclick="toggleAccount()"
                        class="bg-[#f4f6fc] rounded-[20px] p-[10px_12px] flex items-center gap-[5px] cursor-pointer relative">
                        <i class="fa-solid fa-circle-user text-[20px]"></i>
                        Hesabım
                        <i id="accountArrow" class="fa-solid fa-angle-down text-[20px]"></i>
                    </span>

                    <div id="accountDropdown"
                        class="absolute mt-[300px] right-[100px] bg-white shadow-md rounded-md   hidden">
                        <div class="flex flex-col gap-[10px] p-2">
                            <span class="cursor-pointer">Sifarişlər</span>
                            <span class="cursor-pointer">Qaytarma sorğuları</span>
                            <span class="cursor-pointer">Seçilmişlər</span>
                        </div>
                        <div class="flex flex-col gap-[5px] bg-[#f5f5f7] px-3 py-3  ">
                            <span class="text-[#767676]">Sifarişi izləmək</span>
                            <span class="w-[310px] bg-white p-2 flex justify-between items-center rounded-[10px]">
                                <input type="text" placeholder="Sifarisi izlemek/E-poct " class="outline-none">
                                <i class="fa-solid fa-play "></i>
                            </span>
                            <span class="flex justify-between items-center my-[10px]">
                                <button
                                    class="bg-black text-white font-bold p-[5px_10px] rounded-[20px] cursor-pointer">Daxil
                                    ol</button>
                                <button
                                    class="bg-[#EF3340] text-white font-bold p-[5px_10px] rounded-[20px] cursor-pointer ">Qeydiyyat</button>
                            </span>
                        </div>
                    </div>
                    <span>
                        <i class="fa-regular fa-heart text-[30px] cursor-pointer hover:-translate-y-1 transition"></i>
                    </span>
                    <span>
                        <i class="fa-solid fa-bag-shopping text-[30px] cursor-pointer hover:-translate-y-1 transition"></i>
                    </span>
                </div>
            </div>
        </div>
        <div class="flex items-center justify-between my-[50px]">
            <ul class="flex items-center gap-[10px]">
                <li class="cursor-pointer font-bold text-[#334155]">Bestseller-Iyul</li>
                <li class="cursor-pointer font-bold text-[#334155]">Endirimlər</li>
                <li class="cursor-pointer font-bold text-[#334155]">Müəlliflər</li>
                <li class="cursor-pointer font-bold text-[#334155]">Klassiklər</li>
            </ul>
            <ul class="flex items-center gap-[10px]">
                <li class="cursor-pointer text-[#334155]">Ödəniş və çatdırılma</li>
                <li class="cursor-pointer text-[#334155]">Loyallıq kartı</li>
                <li class="cursor-pointer text-[#334155]">FAQ</li>
                <li class="cursor-pointer text-[#334155]">Əlaqə</li>
            </ul>
        </div>
        </div>
    </div>`
    )
}